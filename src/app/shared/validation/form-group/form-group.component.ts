import {
  Component, OnInit, Input,
  HostBinding, Host, SkipSelf, Optional, OnDestroy
} from '@angular/core';
import { FormGroup, ControlContainer, FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import { StringObject } from 'typed-object-interfaces';

// i don't remove next import lines because i want to create standalone angular package and this
// imports should be added to rxjs in that package
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/combineLatest';

import { CustomMessagesService } from '../custom-messages.service';

@Component({
  selector: 'ifs-form-group',
  template: require('./form-group.component.pug'),
  styles:   [ require('./form-group.component.scss') ],
})
export class FormGroupComponent implements OnInit, OnDestroy {

  @HostBinding('class.form-group')
  @Input()
  public defaultClass: boolean = true;

  @HostBinding('class.has-feedback')
  @Input()
  public hasFeedback: boolean = true;

  @HostBinding('class.has-error')
  public get hasError() { return this.statusClass.hasError; };

  @HostBinding('class.has-success')
  public get hasSuccess() { return this.statusClass.hasSuccess; };

  public messages: StringObject;

  @Input()
  private controlName: string;

  @Input('messages')
  private set _messages(messages: StringObject) {
    if (typeof messages === 'object') {
      this.messages$.next(messages || {});
    }
  }

  /**
   * Stream contains messages for validation errors.
   */
  private messages$: BehaviorSubject<StringObject> = new BehaviorSubject<StringObject>({});
  /**
   * Stream contains custom messages. Values are from {@link CustomMessagesService}.
   */
  private customMessages$: Observable<StringObject>;
  /**
   * Stream contains validation errors
   * Emits new value after every input value changing.
   */
  private errors$: Observable<{[name: string]: any}>;

  /**
   * The form control
   */
  private control: FormControl;

  /**
   * Subscriptions container for do 'unsubscribe'.
   */
  private _subscriptions: Subscription[] = [];
  private set subscriptions(value: Subscription) {
    this._subscriptions.push(value);
  }

  public constructor(
    @Host() @SkipSelf() private parent: ControlContainer,
    @Optional() @Host() private customMessagesService: CustomMessagesService,
  ) {
  }

  public ngOnInit() {
    this.retrieveFormControl();
    this.initStreams();

    this.subscriptions =
      this.customMessages$
          .combineLatest(
            this.messages$,
            (customMessages, messages) => ({...customMessages, ...messages})
          )
          .subscribe((messages: StringObject) => this.messages = messages);
    this.subscriptions =
      this
        .customMessages$
        .subscribe(
          (messages) =>
            Object.keys(messages).length ? this.addCustomError() : this.clearCustomError()
        );
  } // end ngOnInit()

  public ngOnDestroy(): void {
    this._subscriptions.forEach((subscr) => subscr.unsubscribe());
  } // end ngOnDestroy()

  public get isDirty(): boolean {
    return this.control.dirty && this.control.touched;
  } // end isDirty()

  public get statusClass() {
    return {
      hasError:   this.isDirty && !this.control.valid,
      hasSuccess: this.isDirty && this.control.valid
    };
  } // end statusClass()

  public get iconClass() {
    return {
      'glyphicon-remove': this.isDirty && !this.control.valid,
      'glyphicon-ok':     this.isDirty && this.control.valid,
    };
  } // end iconClasses()

  public initStreams(): void {
    this.errors$ = this.control.valueChanges.map(() => this.control.errors || {});

    if (this.customMessagesService) {
      this.customMessages$ =
        this.customMessagesService
            .map(
              (messages): StringObject =>
                messages[ this.controlName ] ? { custom: messages[ this.controlName ] } : {}
            );
    } else {
      this.customMessages$ = Observable.of({});
    }
  } // end initStreams()

  private retrieveFormControl(): void {
    let formGroup: FormGroup = <FormGroup> this.parent.control;

    if (formGroup instanceof FormGroup === false) {
      throw new Error('Parent ControlContainer is not FormGroup instance');
    }

    this.control = <FormControl> formGroup.controls[this.controlName];
    if (!this.control) {
      throw new Error(`Can not find ${this.controlName} in parent FormControl`);
    }
  } // end retrieveFormControl()

  private addCustomError(): void {
    this.control.setErrors(
      { ...this.control.errors, custom: true }
      // Object.assign(this.control.errors || {}, { custom: true })
    );
  } // end addCustomError()

  private clearCustomError(): void {
    let errors = this.control.errors;

    if (errors && errors['custom']) {
      delete errors['custom'];
    }

    this.control.setErrors(errors);
  } // end clearCustomError()

}

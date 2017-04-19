/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { DebugElement, Component, Output, EventEmitter, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Validators, FormGroup, FormControl, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ControlMessagesComponent } from './control-messages.component';
import { FormGroupComponent } from './form-group.component';

@Component({
  selector: `se-host`,
  template: `
    <form [formGroup]="form">
        <se-form-group class="fg-name" controlName="name" [messages]="messagesObj">
          <input class="name-input" type="text" formControlName="name">
        </se-form-group>
        <se-form-group class="fg-surname" controlName="surname" [hasFeedback]="false">
          <input class="surname-input" type="text" formControlName="surname">
        </se-form-group>
    </form>
  `,
})
class TestHostComponent {
  public form: FormGroup;
  public messagesObj = {required: 'New required message'};

  public constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
    });
  } // end constructor()

}

@Component({
  selector: 'se-control-messages',
  template: `
    This is control messages
    <span class="passed-control-el">{{ control }}</span>
    <span class="passed-control-name">{{ controlName }}</span>
    {{ messages | json }}
  `
})
class TestControlMessagesComponent {
  @Input() control: FormControl;
  @Input() controlName: string;
  @Input() messages: {[name: string]: string};
}

describe('Component: shared/FormGroup', () => {
  let fixture: ComponentFixture<TestHostComponent>,
      comp: TestHostComponent,
      el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [
        TestHostComponent,
        FormGroupComponent,
        TestControlMessagesComponent,
      ],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    comp    = fixture.componentInstance;
    el      = fixture.debugElement;

    fixture.detectChanges();
  });

  it('Component element created successful and input transcluded', () => {
    let compEl = el.query(By.css('se-form-group')),
        input  = el.query(By.css('.name-input'));

    expect(compEl).toBeTruthy();
    expect(input).toBeTruthy();
  });
  //
  it('Showing message and icon after touch and dirty', fakeAsync(() => {

    comp.form.controls['name'].markAsTouched();
    comp.form.controls['name'].markAsDirty();
    fixture.detectChanges();

    let message           = el.query(By.css('.fg-name se-control-messages')),
        $formControl      = el.query(By.css('.fg-name')).nativeElement,
        feedbackIcon      = el.query(By.css('.fg-name .form-control-feedback')),
        passedControl     = el.query(By.css('.fg-name .passed-control-el')),
        passedControlName = el.query(By.css('.fg-name .passed-control-name'));

    expect(message !== null).toBeTruthy('Validation message not rendered');
    expect(feedbackIcon !== null).toBeTruthy('Validation icon is not rendered');
    expect(message.nativeElement.textContent).toContain('New required message', 'Incorrect validation message');

    expect($formControl.classList.contains('form-group'))
      .toBeTruthy('form-control component have not class .form-control');
    expect($formControl.classList.contains('has-feedback'))
      .toBeTruthy('form-control component have not class .has-feedback');
    expect($formControl.classList.contains('has-error'))
      .toBeTruthy('form-control component have not class .has-error');

    expect(passedControl.nativeElement.textContent)
      .toContain('[object Object]', 'FormControl is not passed to control-message component');
    expect(passedControlName.nativeElement.textContent)
      .toContain('name', 'Control Name is not passed to control-message component');
  }));

  it('Icon should be not show if hasFeedback=false', () => {
    let message,
        feedbackIcon;

    comp.form.controls['surname'].markAsTouched();
    comp.form.controls['surname'].markAsDirty();
    fixture.detectChanges();

    message      = el.query(By.css('.fg-surname se-control-messages'));
    feedbackIcon = el.query(By.css('.fg-surname .form-control-feedback'));
    expect(message !== null).toBeTruthy('Validation message not rendered');
    expect(feedbackIcon === null).toBeTruthy('Validation icon is rendered with hasFeedback=false');
  });

});

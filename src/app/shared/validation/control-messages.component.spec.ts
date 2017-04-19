/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Validators, FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StringObject } from 'typed-object-interfaces';
import { ControlMessagesComponent } from './control-messages.component';
import { CustomMessagesDirective } from './custom-messages.directive';

@Component({
  selector: `se-host`,
  template: `
    <form [formGroup]="form" [seCustomMessages]="custom">
        <input type="text" formControlName="name">
        <se-control-messages
          [messages]="{required: 'New required message'}"
          [control]="form.controls['name']"
          controlName="name"
        ></se-control-messages>
    </form>
  `,
})
class TestHostComponent {
  public form: FormGroup;
  public custom: StringObject;

  public constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
    });
  } // end constructor()

}

describe('Component: shared/ControlMessages', () => {
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
        ControlMessagesComponent,
        CustomMessagesDirective,
      ],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    comp    = fixture.componentInstance;
    el      = fixture.debugElement;

    fixture.detectChanges();
  });

  it('Component element created successful', () => {
    let compEl = el.query(By.css('se-control-messages'));

    expect(compEl).toBeTruthy();
  });

  it('Showing message', () => {

    let message,
        inputMain   = el.query(By.css('input')).nativeElement;

    comp.form.controls['name'].markAsTouched();
    fixture.detectChanges();

    message = el.query(By.css('.help-block'));
    expect(message !== null).toBeTruthy('Validation Message is not rendered');
    expect(message.nativeElement.textContent).toContain('New required message', 'Incorrect validation message');

    inputMain.value = 'some value';
    inputMain.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    message = el.query(By.css('.help-block'));
    expect(message === null).toBeTruthy('Validation message block found even after error fixed');
  });

  it('Custom message should be displayed', () => {
    comp.custom = {name: 'Big Fail'};
    fixture.detectChanges();

    expect(el.nativeElement.innerHTML).toContain('Big Fail');
  });

});

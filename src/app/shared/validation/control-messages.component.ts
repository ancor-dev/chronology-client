import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Validation } from 'app/helpers/validation';

@Component({
  selector: 'app-control-messages',
  template: `
    <div class="help-block validation-error" *ngIf="errorMessage !== null">
        {{ errorMessage | translate: firstError }}
    </div>
  `,
})
export class ControlMessagesComponent implements OnInit {
  @Input() public control: FormControl;
  @Input() public messages: {[key: string]: string};

  constructor() {
  }

  public ngOnInit(): void {
  } // end ngOnInit()

  public get errorMessage(): string {
    if (!this.control) {
      return null;
    }

    if (this.firstErrorName && (this.control.touched || this.control.dirty)) {
      return Validation.getValidatorErrorMessage(this.firstErrorName, this.messages);
    }

    return null;
  }

  public get firstErrorName(): string {
    if (!this.control || !this.control.errors) {
      return null;
    }

    return Object.keys(this.control.errors)[0] || null;
  } // end get firstErrorName()

  public get firstError(): string {
    const firstErrorName = this.firstErrorName;

    if (!firstErrorName) {
      return null;
    }

    return this.control.errors[firstErrorName];
  } // end get firstError()
}

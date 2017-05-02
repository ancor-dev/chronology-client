/* tslint:disable:max-line-length */

/**
 * Created by Korniychuk Anton <ancor.dev@gmail.com>.
 */
import { FormControl, FormGroup, AbstractControl } from '@angular/forms';
import { Validator } from 'class-validator';
import { StringObject } from 'typed-object-interfaces';

/**
 * Custom validators and validation error messages
 */
export class Validation {
  public static getValidatorErrorMessage(
    validatorName: string,
    messages: StringObject = {}
  ): string {
    const config = {
      required:   'validation-error.required',
      creditCard: 'validation-error.credit-card',
      email:      'validation-error.email',
      password:   'validation-error.password',
      minlength:  'validation-error.min-length',
      mxalength:  'validation-error.mxa-length',
      match:      'validation-error.match',
      dataType:   'validation-error.data-type',
      url:        'validation-error.url',

      ...messages
    };

    return config[validatorName];
  }

  public static creditCard(control: FormControl) {
    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
    const pattern = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    if (control.value.match(pattern)) {
      return null;
    } else {
      return { creditCard: true };
    }
  }

  public static email(control: FormControl) {
    // RFC 2822 compliant regex
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (control.value && control.value.match(pattern)) {
      return null;
    } else {
      return { email: true };
    }
  }

  /**
   * Validate password characters and length
   *
   * Example:
   *
   *     this.fb.group({
   *       password: ['', [Validator.required, Validation.password(8)]],
   *     });
   *
   */
  public static password(min = 6, max = 100) {
    return (control: FormControl) => {
      // {6,100}           - Assert password is between 6 and 100 characters
      // (?=.*[0-9])       - Assert a string has at least one number
      const regEx = new RegExp(`^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{${min},${max}}$`);
      if (control.value.match(regEx)) {
        return null;
      } else {
        return { password: { min, max }, };
      }
    };
  }

  /**
   * Check value type.
   *
   * Example:
   *
   *     this.fb.group({
   *       aliases: [[], [Validation.dataType('array')]],
   *     })
   *
   */
  public static dataType(type: string = 'object') {
    return (control: FormControl) => {
      switch (type) {

        case 'array':
          return control.value instanceof Array ? null : { dataType: true };

        case 'null':
          return control.value === null ? null : { dataType: true };

        case 'NaN':
          return isNaN(control.value) ? null : { dataType: true };

        default:
          return typeof control.value === type ? null : { dataType: true };
      }
    };
  }

  /**
   * Match other field validator. Uses for confirm password field.
   *
   * Example:
   *
   *     this.form = this.fb.group({
   *       password: ['', [Validator.required, Validator.minLength(6)]],
   *       passwordConfirm: ['', [Validator.required, Validation.match(() => this.form, 'password')],
   *     })
   *
   */
  public static match(fgGetter: () => FormGroup, field: string ) {
    return (control: FormControl) => {
      const group                     = fgGetter();
      const control2: AbstractControl = group && group.controls[ field ];

      const condition = control2 && control.value === control2.value;

      return condition ? null : { match: true };
    };
  }

  /**
   * Check if the string is a URL
   */
  public static url(control: FormControl) {
    const validator = new Validator();

    return validator.isURL(control.value) ? null : { url: true };
  } // end url()

}

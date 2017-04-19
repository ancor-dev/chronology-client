import { Directive, Input } from '@angular/core';
import { StringObject } from 'typed-object-interfaces';
import { CustomMessagesService } from './custom-messages.service';

/**
 * The directive description ...
 *
 * Usage:
 *    @Component({
 *      template: `
 *        <form [formGroup]="form"
 *              [ifsCustomMessages]="validationErrors"
 *              (submit)="onSubmit(form.value)"
 *        >
 *          ..
 *        </form>
 *      `
 *    })
 *    class MyComponent {
 *      form: FormGroup;
 *      validationErrors: {[name: string]: string};
 *
 *      onSubmit(data) {
 *        http.post('...', data)
 *          .catch ((res) => {
 *            if (res.status === 422) { // validation errors
 *              this.validationErrors = res.json() || {};
 *            }
 *          })
 *      }
 *    }
 */
@Directive(
  {
    selector:  '[ifsCustomMessages]',
    providers: [
      CustomMessagesService,
    ],
  }
)
export class CustomMessagesDirective {
  @Input('ifsCustomMessages')
  public set messages(data: StringObject) {
    this.customMessagesService.update(data || {});
  }

  constructor(
    private customMessagesService: CustomMessagesService,
  ) {
  }
}

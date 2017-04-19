export * from './form-group';
export * from './custom-messages.directive';
export * from './control-messages.component';

import { ControlMessagesComponent } from './control-messages.component';
import { FormGroupComponent } from './form-group';
import { CustomMessagesDirective } from './custom-messages.directive';

export let VALIDATION_DECLARATIONS = [
  ControlMessagesComponent,
  FormGroupComponent,
  CustomMessagesDirective,
];

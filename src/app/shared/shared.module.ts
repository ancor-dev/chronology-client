import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Components / Directives/ Pipes

import { VALIDATION_DECLARATIONS } from './validation';
import { DIRECTIVES } from './directives';
import { COMPONENTS } from './components';
import { PIPES } from './pipes';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes

    ...VALIDATION_DECLARATIONS,
    ...DIRECTIVES,
    ...COMPONENTS,
    ...PIPES,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,

    ...VALIDATION_DECLARATIONS,
    ...DIRECTIVES,
    ...COMPONENTS,
    ...PIPES,
  ],
})
export class SharedModule {
}

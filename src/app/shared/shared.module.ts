import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    TranslateModule,
    FlexLayoutModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    FlexLayoutModule,

    ...VALIDATION_DECLARATIONS,
    ...DIRECTIVES,
    ...COMPONENTS,
    ...PIPES,
  ],
})
export class SharedModule {
}

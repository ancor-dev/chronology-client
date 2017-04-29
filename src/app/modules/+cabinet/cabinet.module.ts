import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared';

import { ROUTES } from './cabinet.routes';

@NgModule({
  imports:      [
    SharedModule,
    RouterModule.forChild(ROUTES),
  ],
  exports:      [],
  declarations: [],
  providers:    [],
})
export class CabinetModule {
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared';

import { ROUTES } from './cabinet.routes';
import { CabinetComponent } from './cabinet.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    CabinetComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports:      [
    SharedModule,
    RouterModule.forChild(ROUTES),
  ],
  exports:      [],
  providers:    [],
})
export class CabinetModule {
}

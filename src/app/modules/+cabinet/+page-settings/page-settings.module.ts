import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared';

import { PageSettingsComponent } from './page-settings.component';

@NgModule({
  declarations: [],
  imports:      [
    SharedModule,
    RouterModule.forChild([ { path: '', component: PageSettingsComponent } ]),
  ],
})
export class PageSettingsModule {
}

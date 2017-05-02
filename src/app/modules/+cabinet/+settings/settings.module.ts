import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared';

import { SettingsComponent } from './settings.component';

@NgModule({
  declarations: [],
  imports:      [
    SharedModule,
    RouterModule.forChild([ { path: '', component: SettingsComponent } ]),
  ],
})
export class SettingsModule {
}

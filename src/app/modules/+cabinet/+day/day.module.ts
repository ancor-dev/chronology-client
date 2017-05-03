import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DayComponent } from './day.component';
import { SharedModule } from 'app/shared';

@NgModule({
  declarations: [
    DayComponent,
  ],

  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path:      '',
        component: DayComponent,
      },
    ]),
  ],

  providers: [],
})
export class DayModule {
}

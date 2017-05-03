import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PageDayComponent } from './page-day.component';
import { SharedModule } from 'app/shared';

@NgModule({
  declarations: [
    PageDayComponent,
  ],

  imports: [
    SharedModule,
    RouterModule.forChild([ { path: '', component: PageDayComponent } ]),
  ],

  providers: [],
})
export class PageDayModule {
}

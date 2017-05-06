import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared';
import { PageReportComponent } from './page-report.component';

@NgModule({
  declarations: [
    PageReportComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([ { path: '', component: PageReportComponent } ]),
  ],
})
export class PageReportModule {
}

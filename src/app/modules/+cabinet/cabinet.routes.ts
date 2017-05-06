import { Routes } from '@angular/router';
import { CabinetComponent } from './cabinet.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: CabinetComponent,
    children: [
      {
        path: 'settings',
        loadChildren: './+page-settings#PageSettingsModule'
      },
      {
        path: 'report',
        loadChildren: './+page-report#PageReportModule'
      },
      {
        path: 'day/:date',
        loadChildren: './+page-day#PageDayModule'
      },
    ],
  },
];

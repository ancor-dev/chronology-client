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
        path: 'day/:date',
        loadChildren: './+page-day#PageDayModule'
      },
    ],
  },
];

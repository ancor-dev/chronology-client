import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'settings',
        loadChildren: './+page-settings#PageSettingsModule'
      },
      {
        path: 'day',
        loadChildren: './+day#PageDayModule'
      },
    ],
  },
];

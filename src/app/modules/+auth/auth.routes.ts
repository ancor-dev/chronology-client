import { Routes } from '@angular/router';

import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

export const ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'password-recovery/:key',
    component: PasswordRecoveryComponent
  },
];

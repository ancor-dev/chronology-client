import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MdCardModule } from '@angular/material';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';

import { ROUTES } from './auth.routes';
import { SharedModule } from 'app/shared';

console.log('`Auth` bundle loaded asynchronously');

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),

    MdCardModule,
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    PasswordRecoveryComponent,
  ],
})
export class AuthModule {

}

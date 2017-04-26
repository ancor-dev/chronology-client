import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';

import { ROUTES } from './auth.routes';

console.log('`Auth` bundle loaded asynchronously');

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
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

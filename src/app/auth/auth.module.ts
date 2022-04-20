import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SendEmailComponent } from './send-email/send-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
=======
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
>>>>>>> 66a5c2a3eec430193dfd04dc24d553df249108c3



@NgModule({
<<<<<<< HEAD
  declarations: [LoginComponent, RegisterComponent, SendEmailComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
=======
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule
>>>>>>> 66a5c2a3eec430193dfd04dc24d553df249108c3
  ],
  exports: [LoginComponent, RegisterComponent],
})
export class AuthModule { }

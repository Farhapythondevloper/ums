import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginComponent } from './login/login.component';
import { UnlockAccountComponent } from './unlock-account/unlock-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  
  {path:'register', component:RegisterFormComponent},
  {path: 'login', component:LoginComponent},
  {path: 'unlockAcc', component:UnlockAccountComponent},
  {path: 'forgotpass' , component: ForgotPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

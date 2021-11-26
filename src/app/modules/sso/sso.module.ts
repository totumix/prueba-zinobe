import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SsoComponent } from './sso.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { BaseFormUserService } from './utils/base-form-user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes = [
  {
    path: "", component: SsoComponent, children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "register",
        component: RegisterComponent,
      }
    ]
  },
];


@NgModule({
  declarations: [
    SsoComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    BaseFormUserService
  ]
})
export class SsoModule { }

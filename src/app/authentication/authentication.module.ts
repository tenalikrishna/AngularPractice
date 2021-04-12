import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { ToasterModule } from 'angular2-toaster';


@NgModule({
  declarations: [AuthenticationComponent, LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToasterModule.forRoot()
  ],
  providers: [AuthService]
})
export class AuthenticationModule { }

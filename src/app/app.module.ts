import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/app/authentication/angular-material.module';
import { AuthenticationModule } from 'src/app/authentication/authentication.module';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';
import { BrowserXhr } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpInterceptProviders } from './shared/index';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { ToasterService, ToasterModule } from 'angular2-toaster';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AuthenticationModule,
    NgHttpLoaderModule.forRoot(),
    HttpClientModule,
    NgProgressModule,
    ReactiveFormsModule,
    FormsModule,
    ToasterModule.forRoot()

  ],
  providers: [UserService, HttpInterceptProviders, ToasterService,

    // tslint:disable-next-line: deprecation
    {provide: BrowserXhr, useClass: NgProgressBrowserXhr}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

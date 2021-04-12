import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './auth-header';
import { HttpErrorInterceptor } from './http-ErrorInterceptor';


export const HttpInterceptProviders = [
  {
    provide : HTTP_INTERCEPTORS,
     useClass: HeaderInterceptor,
     multi: true
  },
  {
    provide : HTTP_INTERCEPTORS,
     useClass: HttpErrorInterceptor,
     multi: true
  }
];

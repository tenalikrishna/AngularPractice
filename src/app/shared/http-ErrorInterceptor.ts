import { Injectable, ErrorHandler } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandelerService } from './http-error-handeler.service';
import 'rxjs/add/operator/do';
import { _throw } from 'rxjs/observable/throw';
@Injectable({providedIn: 'root'})

export class HttpErrorInterceptor implements HttpInterceptor {
  constructor( private  httpErrorService: HttpErrorHandelerService) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).do(() => { }, (response) => {
      // console.log(response , 'Hai this siva1');
      console.log(response.message , 'Hai this siva');
      if (response instanceof HttpErrorResponse && (response.status) && (response.error)) {
              this.httpErrorService.addErrors(Array.isArray(response.error) ? response.error : [response]);
              return _throw(response);
      }

      return _throw(response);
  });
}
}

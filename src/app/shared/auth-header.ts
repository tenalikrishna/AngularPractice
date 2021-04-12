
  import { Injectable } from '@angular/core';
  import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import 'rxjs/add/operator/catch';
  import { _throw } from 'rxjs/observable/throw';
  @Injectable({providedIn: 'root'})
  export class HeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // console.log('Auth header interceptors');
      // console.log(req.url);
      const authReq = req.clone({
        headers: req.headers
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .set('Cache-Control', 'no-cache')
          .set('Pragma', 'no-cache')
          .set('Audit-Application-Name', 'Angular8 UI')
      });
      return next
      .handle(authReq)
      .do((event: HttpEvent<any>) => { })

      .catch((response: any) => {
        return _throw(response);
      });
    }
  }


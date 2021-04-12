import { Injectable } from '@angular/core';
import { Subject, observable } from 'rxjs';
import { ToasterService } from 'angular2-toaster';


@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandelerService {
   errors = new Subject<string[]>();

  constructor(private readonly toasterService: ToasterService ) { }

  public addErrors = (errors: any): void => {
    // this.errors.next(errors);
    if (errors.length > 0) {
      console.log(({type: 'error', title: `${errors[0].error}`, body: `${errors[0].message}`,
      showCloseButton: true,
}), 'this is the cs log');
      this.toasterService.pop ({type: 'error', title: `Error Message`, body: `${errors[0].message}`,
      showCloseButton: true,
});
    }
  }

  public getErrors = () =>
    this.errors.asObservable()
}

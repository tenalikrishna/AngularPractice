import { Component, OnInit,  } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import { Spinkit } from 'ng-http-loader';
import { ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular8PracticeProj';
  config1: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-right',
    animation: 'fade'
   });
  constructor(public ngProgress: NgProgress) {}
  ngOnInit(): void {
    // this.ngProgress.start();
    // this.ngProgress.done();
  }

}

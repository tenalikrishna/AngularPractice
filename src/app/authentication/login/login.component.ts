import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, MaxLengthValidator } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Toast, ToasterConfig, ToasterService } from 'angular2-toaster';
import { ProjectUtilitys } from 'src/app/shared/Utilities/projectUtilites';
import { Messages } from 'src/app/shared/Utilities/messages.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  errorState = false;
  @ViewChild('form', {static: true}) form;
  isText: boolean;
  hide: boolean;
  regularExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  restErrorMsg: Toast [] = [];
  registerComponentError: ProjectUtilitys = new ProjectUtilitys();
  loginFailue = Messages.getMessage().authentication;
  loginSuccess = Messages.getMessage().authentication;
  defaultMsg = Messages.getMessage().default;
  config1: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-right',
    animation: 'fade'
   });
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private toasterService: ToasterService) {}
  ngOnInit() {
    this.loginform = this.fb.group({
      userName: ['', Validators.minLength(6)],
      password: ['', [Validators.pattern(this.regularExpression), Validators.minLength(8)]],
    });
  }
  testMethod() {
    alert('testing the test method');
  }

  showHidePassword() {
    this.isText = !this.isText;
  }

  login() {
    this.authService.user_login(this.loginform.value)
    .subscribe(res => {
      console.log(res, 'login success....!');
      this.registerComponentError.showMessage(
        this.defaultMsg.successtype,
        this.defaultMsg.successtitle,
        this.loginSuccess.loginSuccess,
        this.toasterService
      );
      this.router.navigate(['/home']);

    },
    () => {
      this.registerComponentError.showMessage(
        this.defaultMsg.defulttype,
        this.defaultMsg.defulttitle,
        this.loginFailue.loginFailue,
        this.toasterService
    );
  });
  }
  // tslint:disable-next-line: no-unnecessary-initializer
  resetForm(value: any = undefined): void {
    this.loginform.reset(value);
    (this as unknown as {submitted: boolean}).submitted = false;
  }
}

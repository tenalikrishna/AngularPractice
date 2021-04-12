import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Toast, ToasterService, ToasterConfig } from 'angular2-toaster';
import { ProjectUtilitys } from 'src/app/shared/Utilities/projectUtilites';
import { Messages } from 'src/app/shared/Utilities/messages.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  hide: boolean;
  registerform: FormGroup;
  restErrorMsg: Toast [] = [];
  regularExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  regularExpressionEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  regularExpressionPhoneNo = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  @ViewChild('form', {static: true}) form;
  @ViewChild(FormGroupDirective, {static: true}) formGroupDirective: FormGroupDirective;
  registerComponentError: ProjectUtilitys = new ProjectUtilitys();
  regFailue = Messages.getMessage().authentication;
  regSuccess = Messages.getMessage().authentication;
  defaultMsg = Messages.getMessage().default;
  config1: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-right',
    animation: 'fade'
   });
  constructor(private fb: FormBuilder, private authServices: AuthService, private toasterService: ToasterService, private router: Router) {}

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.registerform = this.fb.group({
      userName: ['', Validators.minLength(6)],
      password: ['', [Validators.pattern(this.regularExpression), Validators.minLength(8)]],
      cpassword: ['', Validators.required],
      mailid: ['', [Validators.pattern(this.regularExpressionEmail), Validators.required]],
      phoneno: ['', [Validators.pattern(this.regularExpressionPhoneNo), Validators.required]],
    });
  }
   errorHandling = (control: string, error: string) => {
    return this.registerform.controls[control].hasError(error);
  }
  registration() {
    console.log(this.registerform.value);
    this.authServices.user_registration(this.registerform.value)
    .subscribe(res => {
      console.log(res, 'User registration successfully completed..!');

      this.registerComponentError.showMessage(
          this.defaultMsg.successtype,
          this.defaultMsg.successtitle,
          this.regSuccess.regSuccess,
          this.toasterService
        );
      this.formGroupDirective.resetForm();
      // this.router.navigate(['/login']);
    },
    () => {
      this.registerComponentError.showMessage(
        this.defaultMsg.defulttype,
        this.defaultMsg.defulttitle,
        this.regFailue.regFailue,
        this.toasterService
      );
    });
  }
  onSubmit() {
    if (this.registerform.valid) {
      console.log('Form Submitted!');
      this.registerform.clearValidators();
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Toast, ToasterConfig, ToasterService } from 'angular2-toaster';
import { ProjectUtilitys } from 'src/app/shared/Utilities/projectUtilites';
import { Messages } from 'src/app/shared/Utilities/messages.config';
import { sample } from 'rxjs/operators';

@Component({
  selector: 'app-mat-dailog',
  templateUrl: './mat-dailog.component.html',
  styleUrls: ['./mat-dailog.component.scss']
})
export class MatDailogComponent implements OnInit {
  description = 'Profile';
  restErrorMsg: Toast [] = [];
  registerComponentError: ProjectUtilitys = new ProjectUtilitys();
  profMsg1 = Messages.getMessage().profile;
  profMsg2 = Messages.getMessage().profile;
  defaultMsg = Messages.getMessage().default;
  config1: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-right',
    animation: 'fade'
   });
  constructor(private dialogRef: MatDialogRef<MatDailogComponent>, private toasterService: ToasterService) { }
  displayType: boolean;
  ngOnInit() {
  }
  editProfile() {
    this.displayType = true;
  }
  updateProfile() {
    this.registerComponentError.showMessage(
      this.defaultMsg.successtype,
      this.defaultMsg.successtitle,
      this.profMsg2.profSuccess,
      this.toasterService
    );
    this.displayType = false;
  }
  close() {
    // tslint:disable-next-line: prefer-const
    if (this.displayType) {
      this.registerComponentError.showMessage(
        this.defaultMsg.defulttype,
        this.defaultMsg.defulttitle,
        this.profMsg1.profFailue,
        this.toasterService
    ),
      this.displayType = false;
    } else {
      this.dialogRef.close();
    }
}

}

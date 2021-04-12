import { Component, OnInit, Input} from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgProgress } from 'ngx-progressbar';
import { Messages } from 'src/app/shared/Utilities/messages.config';
import { ToasterConfig, Toast, ToasterService } from 'angular2-toaster';
import { ProjectUtilitys } from 'src/app/shared/Utilities/projectUtilites';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() openNavBar: boolean;
  visible: boolean;
  displayText: string;
  restErrorMsg: Toast [] = [];
  sideBarComponentError: ProjectUtilitys = new ProjectUtilitys();
  dataFetchErrors = Messages.getMessage().global;
  defaultMsg = Messages.getMessage().default;
 config1: ToasterConfig = new ToasterConfig({
   positionClass: 'toast-top-right',
   animation: 'fade'
  });
  userData: any;
  userData2: any;
  constructor(
    private userser: UserService,
    public ngProgress: NgProgress,
    private toasterService: ToasterService) {
    }
  ngOnInit(): void {
    this.getData();
    // this.getphotos();
  }
  getData() {
    this.ngProgress.start();
    this.userser.userData()
    .subscribe(data => {
      this.userData = data;
      this.ngProgress.done();
    },
    () => {
      this.sideBarComponentError.showMessage(
        this.defaultMsg.defulttype,
        this.defaultMsg.defulttitle,
        this.dataFetchErrors.dataFetchError,
        this.toasterService
      );
    });
}


}

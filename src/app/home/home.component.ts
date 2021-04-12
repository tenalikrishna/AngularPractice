import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDailogComponent } from './mat-dailog/mat-dailog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  isMenuOpen = true;
  contentMargin = 240;
  badgeNo = '68';

  ngOnInit() {}
  constructor(private dialog: MatDialog) {}
  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if (!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      top: '50px',
      right: '15px'
  };
    this.dialog.open(MatDailogComponent, {
       disableClose: true,
      height: '455px',
      width: '435px',
    });
}
}

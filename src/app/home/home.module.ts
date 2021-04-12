import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AngularMaterialModule } from './angular-material.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToasterModule } from 'angular2-toaster';
import { MatDailogComponent } from './mat-dailog/mat-dailog.component';


@NgModule({
  declarations: [HomeComponent, SidebarComponent,MatDailogComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMaterialModule,
    ToasterModule.forRoot()
  ],
  providers: [],
  entryComponents: [MatDailogComponent]

})
export class HomeModule {}

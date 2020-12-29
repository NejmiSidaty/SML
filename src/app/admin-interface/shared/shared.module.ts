import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AngularMatModule } from 'src/app/angular-mat/angular-mat.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent,  SidebarComponent],
  imports: [
    CommonModule,
    AngularMatModule,
    RouterModule
  ],
  exports:[
    HeaderComponent, 
    SidebarComponent,
  ]
})
export class SharedModule { }

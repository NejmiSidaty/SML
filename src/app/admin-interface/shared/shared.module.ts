import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AngularMatModule } from 'src/app/angular-mat/angular-mat.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    AngularMatModule,
    RouterModule
  ],
  exports:[
    HeaderComponent, 
    FooterComponent,
    SidebarComponent,
    
  ]
})
export class SharedModule { }

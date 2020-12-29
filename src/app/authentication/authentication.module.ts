import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { AngularMatModule } from '../angular-mat/angular-mat.module';
import {  RouterModule } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    CommonModule,
    AngularMatModule,
    FormsModule,
    RouterModule.forRoot([{path: 'login' , component: AuthenticationComponent }])
  ],
  providers: [AuthenticationService],
})
export class AuthenticationModule { }

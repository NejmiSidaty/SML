import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminInterfaceComponent } from './admin-interface.component'
import {  RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { StatsInterfaceComponent } from './stats-interface/stats-interface.component';
import { UsersDashComponent } from './users-dash/users-dash.component';
import { AngularMatModule } from '../angular-mat/angular-mat.module';
import { UsersnavComponent } from './users-dash/usersnav/usersnav.component';
import { UserstableComponent } from './users-dash/userstable/userstable.component';
import { AddUserComponent } from './users-dash/add-user/add-user.component';
import { AuthGuard } from '../authentication/auth.guard';
import { AuthenticationService } from '../authentication/authentication.service';
import { AdminServiceService } from './admin-service.service';
import { ReportPageComponent } from './users-dash/report-page/report-page.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}

@NgModule({
  declarations: [
    AdminInterfaceComponent,
    StatsInterfaceComponent,
    UsersDashComponent,
    UsersnavComponent,
    UserstableComponent,
    AddUserComponent,
    ReportPageComponent
  ],
  imports: [
    CommonModule,
    AngularMatModule,
    ReactiveFormsModule,
    ChartsModule,
    SharedModule,
    RouterModule.forRoot([{path : '', /*canActivate:[AuthGuard] */ component: AdminInterfaceComponent,
    children: [{
          path: '', component: StatsInterfaceComponent
    },{
      path: 'users' , component: UsersDashComponent,
      children : [{
        path: 'table' , component : UserstableComponent,
      }, {path: 'add' , component: AddUserComponent}
    ,    {path:'report' , component: ReportPageComponent}]
    }
  ]
    }])
  ],
  providers: [AuthenticationService,AdminServiceService],
})
export class AdminInterfaceModule { }

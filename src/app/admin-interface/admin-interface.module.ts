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



@NgModule({
  declarations: [
    AdminInterfaceComponent,
    StatsInterfaceComponent,
    UsersDashComponent,
    UsersnavComponent,
    UserstableComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    AngularMatModule,
    SharedModule,
    RouterModule.forRoot([{path : '', component: AdminInterfaceComponent,
    children: [{
          path: '', component: StatsInterfaceComponent
    },{
      path: 'users' , component: UsersDashComponent,
      children : [{
        path: 'table' , component : UserstableComponent,
      }, {path: 'add' , component: AddUserComponent}]
    }
  ]
    }])
  ],
  providers: [],
})
export class AdminInterfaceModule { }

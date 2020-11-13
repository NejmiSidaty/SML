import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminInterfaceComponent } from './admin-interface.component'
import {  RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { StatsInterfaceComponent } from './stats-interface/stats-interface.component';



@NgModule({
  declarations: [
    AdminInterfaceComponent,
    StatsInterfaceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{path : '', component: AdminInterfaceComponent}
    ])
  ],
  providers: [],
})
export class AdminInterfaceModule { }

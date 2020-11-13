import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminInterfaceModule } from './admin-interface/admin-interface.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminInterfaceModule,
    RouterModule.forChild([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

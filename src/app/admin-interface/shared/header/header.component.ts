import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   @Output() sidebarevent : EventEmitter<any> = new EventEmitter();

  constructor(private authService : AuthenticationService) { }

  ngOnInit() {
  }
  sidebartoggler(){
   this.sidebarevent.emit();
  }

logout(){
  this.authService.signOutUser();
}
}

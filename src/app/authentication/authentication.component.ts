import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  email : string;
  pass : string;

  constructor(private service : AuthenticationService , private router : Router) {

   }

  ngOnInit() {
  }


logIn(email:string , password :string){
  this.service.signinInUser(this.email,this.pass).then(
    () => {
         this.router.navigate(['']);
    },(error) => {
      console.log(error);
      alert('your email or password are incorrect');
    }
  );
}


}

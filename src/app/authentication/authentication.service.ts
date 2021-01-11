import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuth : boolean = false ;

  constructor(public auth: AngularFireAuth , private router: Router) { }

  signinInUser(email:string , password : string){
    return new Promise((resolve , reject)=> {
      this.auth.signInWithEmailAndPassword(email,password).then(
        (result) =>{
          this.isAuth = true;
          localStorage.setItem('user', JSON.stringify(result.user));
          resolve(result);
        },
        (error) => {
          this.isAuth=false;
          localStorage.setItem('user', null);
          reject(error);
        }
      )
    })
  }

  signOutUser(){
    this.isAuth = false;
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    this.auth.signOut();
    }

}

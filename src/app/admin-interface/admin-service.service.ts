import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { User } from './models/user';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  

  constructor(private db : AngularFireDatabase) {

   }

   /// get from Firebase
   getUsers(){
  return this.db.list('Users').valueChanges();   
   }

   /// get reports from firebase

  getReports(){
    return this.db.list('Reports').valueChanges();
  }

  //// get one user 
  
  getuser(id : number){
    return this.db.list('/Users', ref => ref.orderByChild('id').equalTo(id)).valueChanges();
  }

  /// add user to firebase 

  addUser ( user : any){
    return this.db.list('/User').push({
      email : user.email ,
      fullName : user.fullName,
      nativeLanguage : user.nativeLanguage,
      password : user.password,
      profileImageUrl : user.profileImageUrl,
      status : user.status,
      isbanned : user.isbanned,
    }).catch(error => {
      console.log(error);
    })
  }

}

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
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

}

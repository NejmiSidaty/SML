import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Stats } from './models/stats';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  stats : Stats = {
    numberOfUsers : 0,
    numberOfMessages : 0,
    numberOfReports : 0,
    numberOfBannedUsers  : 0,
    numberOfActiveUsers  : 0,
  }
  

  constructor(private db : AngularFireDatabase,private firebaseAuth: AngularFireAuth) {

   }

   /// get users from Firebase
   getUsers(){
  return this.db.list('Users').valueChanges();   
   }

   // get chats from firebase

   getChats(){
     return this.db.list('Chat').valueChanges();
   }

   /// get reports from firebase

  getReports(){
    return this.db.list('Reports').valueChanges();
  }

  //// get one user 
  
  getuser(id : number){
    return this.db.list('/Users', ref => ref.orderByChild('userId').equalTo(id)).valueChanges();
  }

  /// add user to firebase 

  addUser ( user : any){
    const Userid = this.db.createPushId();
    this.firebaseAuth.createUserWithEmailAndPassword(user.email, user.password).then(value => {
      this.db.database.ref('/Users').child(Userid).set({
        email : user.email ,
        userId : Userid,
        fullName : user.fullName,
        nativeLanguage : user.nativeLanguage,
        nativeLanguageCode : user.nativeLanguageCode,
        imageUrl : user.imageUrl,
        status : user.status,
        bannedOrNot : user.bannedOrNot,
      });
      alert('user added successfully!');
      window.location.reload();
    }).catch(err => {
      alert('there is something went wrong!');
    });
  }
   
/// banning user 

banUser(n : string){
  const ban = this.db.list('Users');
  return ban.update( n, { bannedOrNot: true });
}
unbanUser(b : string){
  const ban = this.db.list('Users');
  return ban.update( b, { bannedOrNot: false });
}

// Delete a report 

deleteReport(key : string){
  return this.db.list('/Reports').remove(key);
}









}

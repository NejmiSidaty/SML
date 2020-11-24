import { Component, OnInit , ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { User } from '../../models/user';


@Component({
  selector: 'app-userstable',
  templateUrl: './userstable.component.html',
  styleUrls: ['./userstable.component.css']
})
export class UserstableComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Full name', 'email', 'language'];
  users : User[] = [
   {userId:1 , email: 'jiyedspace@gmail.com' , fullName: 'Jihed Ahmed' , nativeLanguage : 'en' , profileImageUrl : 'test', status:'Online' ,banned: false},
   {userId:1 , email: 'jiyedspace@gmail.com' , fullName: 'Jihed Ahmed' , nativeLanguage : 'en' , profileImageUrl : 'test', status:'Online' ,banned: false},
   {userId:1 , email: 'jiyedspace@gmail.com' , fullName: 'Jihed Ahmed' , nativeLanguage : 'en' , profileImageUrl : 'test', status:'Online' ,banned: false},
   {userId:1 , email: 'jiyedspace@gmail.com' , fullName: 'Jihed Ahmed' , nativeLanguage : 'en' , profileImageUrl : 'test', status:'Online' ,banned: false},
   {userId:1 , email: 'jiyedspace@gmail.com' , fullName: 'Jihed Ahmed' , nativeLanguage : 'en' , profileImageUrl : 'test', status:'Online' ,banned: false},
   {userId:1 , email: 'jiyedspace@gmail.com' , fullName: 'Jihed Ahmed' , nativeLanguage : 'en' , profileImageUrl : 'test', status:'Online' ,banned: false},
   {userId:1 , email: 'jiyedspace@gmail.com' , fullName: 'Jihed Ahmed' , nativeLanguage : 'en' , profileImageUrl : 'test', status:'Online' ,banned: false},
   {userId:1 , email: 'jiyedspace@gmail.com' , fullName: 'Jihed Ahmed' , nativeLanguage : 'en' , profileImageUrl : 'test', status:'Online' ,banned: false},
   {userId:1 , email: 'jiyedspace@gmail.com' , fullName: 'Jihed Ahmed' , nativeLanguage : 'en' , profileImageUrl : 'test', status:'Online' ,banned: false},
   {userId:1 , email: 'jiyedspace@gmail.com' , fullName: 'Jihed Ahmed' , nativeLanguage : 'en' , profileImageUrl : 'test', status:'Online' ,banned: false},
   {userId:1 , email: 'jiyedspace@gmail.com' , fullName: 'Jihed Ahmed' , nativeLanguage : 'en' , profileImageUrl : 'test', status:'Online' ,banned: false},
   {userId:1 , email: 'jiyedspace@gmail.com' , fullName: 'Jihed Ahmed' , nativeLanguage : 'en' , profileImageUrl : 'test', status:'Online' ,banned: false},
   {userId:1 , email: 'jiyedspace@gmail.com' , fullName: 'Jihed Ahmed' , nativeLanguage : 'en' , profileImageUrl : 'test', status:'Online' ,banned: false},
   {userId:1 , email: 'jiyedspace@gmail.com' , fullName: 'Jihed Ahmed' , nativeLanguage : 'en' , profileImageUrl : 'test', status:'Online' ,banned: false},
 ] ;
 dataSource = new MatTableDataSource<User>(this.users);
 @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }

}

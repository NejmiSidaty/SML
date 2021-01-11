import { Component, OnInit , ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AdminServiceService } from '../../admin-service.service';



@Component({
  selector: 'app-userstable',
  templateUrl: './userstable.component.html',
  styleUrls: ['./userstable.component.css']
})
export class UserstableComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Full name', 'email', 'language','Banned','Ban'];
  users: any[] ;
  usersLength: number;
  touch=false;
  touch1=false;
  idUser: string ;


 @ViewChild(MatPaginator) paginator: MatPaginator; 
  dataSource : any;

  
  constructor(private service : AdminServiceService) { 

  }

  ngOnInit() {
    this.GetUsers();
  }

  Banuser(){
    this.service.banUser(this.idUser);
  }
  unBanuser(){
    this.service.unbanUser(this.idUser);
  }

  GetUsers(){
    this.service.getUsers().subscribe(
      (data : any) =>{
        console.log(data);
           this.users = data ;
           this.usersLength = data.length
           this.dataSource = new MatTableDataSource<any>(this.users);
           setTimeout(() => this.dataSource.paginator = this.paginator);
      },
      (error) => {
        alert(error);
      }
    )
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

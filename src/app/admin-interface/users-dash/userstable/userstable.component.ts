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
  displayedColumns: string[] = ['ID', 'Full name', 'email', 'language','Banned','edit'];
  users: any[] ;
  usersLength: number;


 @ViewChild(MatPaginator) paginator: MatPaginator; 
  dataSource : any;
  constructor(private service : AdminServiceService) { 

  }

  ngOnInit() {
    this.GetUsers();
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

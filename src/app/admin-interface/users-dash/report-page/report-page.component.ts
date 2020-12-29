import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminServiceService } from '../../admin-service.service';
import { Report } from '../../models/reports';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})
export class ReportPageComponent implements OnInit {
  Reports : Report[] = <any>[] ;  
  users: any[] = [] ;
  Reportlength: number;
  displayedColumns: string[] = ['Reporter', 'Reason', 'Reported','edit'];
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  dataSource : any;

  constructor(private service : AdminServiceService) { }

  ngOnInit(){
    this.getBlockedUser();
    this.getReports();
  }

  getBlockedUser(){
      this.service.getUsers().subscribe(
        (data : any) =>{
             for (let d in data){
               if (data[d].isBanned){
                 this.users.push(data[d]);
               }
             }
                    
        },
        (error) => {
          alert(error);
        }
      )
    }

   getReports(){
     this.service.getReports().subscribe((data: any ) => {
       for (let d in data){
         let report : Report = <any>{};
         report.id = data[d].id;
         report.reason = data[d].reason;
         this.service.getuser(data[d].reporterID).subscribe((reporter: any)=>{ report.reporter = reporter[0].fullName});
         this.service.getuser(data[d].reportedID).subscribe((reported: any)=>{ report.reported = reported[0].fullName});
         this.Reports.push(report);

      }
        console.log(this.Reports);
        this.Reportlength = this.Reports.length;
        this.dataSource = new MatTableDataSource<any>(this.Reports);
        setTimeout(() => this.dataSource.paginator = this.paginator);   
     },
     (error) => {
       console.log(error);
     }
     )
   }



   

}

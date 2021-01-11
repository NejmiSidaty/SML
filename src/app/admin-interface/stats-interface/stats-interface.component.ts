import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { ChartOptions, ChartType, ChartDataSets  } from 'chart.js';
import { Label , MultiDataSet, Color} from 'ng2-charts';

@Component({
  selector: 'app-stats-interface',
  templateUrl: './stats-interface.component.html',
  styleUrls: ['./stats-interface.component.css']
})
export class StatsInterfaceComponent implements OnInit {
  stats : any = {};
  banned : number = 0 ; active : number = 0
  doughnutChartLabels: Label[] = ['Active', 'Banned'];
  doughnutChartData: MultiDataSet = [];
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartColors: Color[] = [{
    backgroundColor: ['#ff6361', '#58508d']
   }];
  languagesList : string[] = [];
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
         display: true,
         scaleLabel: {
          display: true,
          labelString: "Users",
         },
         ticks: {
          beginAtZero: true,
          stepSize: 1
          
          }, gridLines: {
            display: true
         },
        },
       ],
       xAxes: [
        { gridLines: {
          display: false
       },
         scaleLabel: {
          display: true,
          labelString: "Languages",
         },
        },
       ],
    }
  };
  barChartLabels: Label[] = ['English', 'French', 'Arabic', 'Japan'];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], 
      backgroundColor: ['#003f5c','#7a5195','#ef5675','#ffa600'],
      label : 'Languages Per User'}
  ];

  englishN : number = 0 ; japanN: number = 0  ; arabicN: number = 0  ; frenchN : number = 0 ; 



  constructor(private service : AdminServiceService) { 
    this.stats.numberOfBannedUsers = 0; 
    this.stats.numberOfActiveUsers = 0 ;
  }

  ngOnInit() {
    this.getLanguagesNumber();
    this.getStats();
   
  }


  /// getting stats number from service 

  getStats(){
    /// users , banned , active users number 
    this.service.getUsers().subscribe(
      (data : any )=> {
         this.stats.numberOfUsers = data.length;
         for (let d in data){
           if (data[d].bannedOrNot){
             this.stats.numberOfBannedUsers += 1; 
           } else {
             this.stats.numberOfActiveUsers += 1 ; 
           }
         }
         this.doughnutChartData.push(this.stats.numberOfActiveUsers);
         this.doughnutChartData.push(this.stats.numberOfBannedUsers); 
     },(error) => {
       console.log(error);
     });

     ///Reports number
     this.service.getReports().subscribe((data : any) => {
       this.stats.numberOfReports = data.length ;
     })

     // messages number

     this.service.getChats().subscribe((data : any)=>{

       this.stats.numberOfMessages = data.length ; 
    
     });
    
    
    
  }
 


  /// gettin languages used by Users

  getLanguagesNumber(){
    this.service.getUsers().subscribe((data : any)=>{
          for(let d in data){
            this.languagesList.push(data[d].nativeLanguage) 
          }
          

          for(let i in this.languagesList){
            if(this.languagesList[i] == "english"){
               this.englishN += 1;
            }else if(this.languagesList[i] == "french"){
                this.frenchN +=1;
            }else if (this.languagesList[i] == "japan"){
                this.japanN +=1 ;
            }else{
                this.arabicN +=1 ; 
            }
      }
      this.barChartData[0].data.push(this.englishN);
      this.barChartData[0].data.push(this.frenchN);
      this.barChartData[0].data.push(this.arabicN);
      this.barChartData[0].data.push(this.japanN);
      console.log(this.barChartData[0].data);

      
    },(error)=>{
      console.log(error);
    })
   
  }


}

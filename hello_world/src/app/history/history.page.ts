import { Component, OnInit } from '@angular/core';
import { HistoryService } from './history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  OrderList = [];

  Rider;

  Session = [];
  OrderIdTemp ;
  DataTemp;
  
  sessionRider ;
  
 x=0 ;
 n=0;

  constructor(private historyService : HistoryService,
   
   ) { }

  ngOnInit() {
    

  this.Rider={
    id:"",
    name:"",
    username: "",
    password: "",
    income: ""
  };


  this.sessionRider  = localStorage.getItem('rider_id');

  this.historyService.getRider(this.sessionRider).subscribe(
    data => {
      console.log(data);
      
        this.Rider.id = data.id ;
        this.Rider.name = data.name ;
        this.Rider.username = data.username ;
        this.Rider.password = data.password ;
        this.Rider.income = data.income ;
         

         console.log(this.Rider);
    }

    
    
  );



    this.historyService.getByRiderId(this.sessionRider ).subscribe(
      data => {
        for(var i = 0 ; i < data.length ; i ++){

          this.OrderList.push(data[i]);
          this.Session[i] = 0 ;

      }

      for(let D of this.OrderList ){


        if(this.x==0)
        {
          this.OrderIdTemp  =  D[0];
          this.DataTemp = D;
        }
        if( D[0] == this.OrderIdTemp && this.x != 0){
          this.n+1;
          this.Session[this.x] =  1;
          this.OrderIdTemp = D[0];
          
          this.DataTemp.push(D[13] );
          this.OrderList[this.x-this.n] = this.DataTemp;
          
        }else if(D[0] != this.OrderIdTemp && this.x != 0){
          this.n = 0;
          this.Session[this.x] =  0;
          this.OrderIdTemp = D[0];
          this.DataTemp = D;
          this.OrderList[this.x] = this.DataTemp;
          
        }

        this.x++;
      }

      }

  );

  }

}

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
  
  
 x=0;

  constructor(private historyService : HistoryService,
   
   ) { }

  ngOnInit() {
    
    this.Rider = {
      id:'joke',
    name:'ประเสริฐ',
    income:1700
  }

    this.historyService.getByRiderId(this.Rider.id).subscribe(
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


          this.Session[this.x] =  1;
          this.OrderIdTemp = D[0];
          
          this.DataTemp.push(D[13] );
          this.OrderList[this.x-1] = this.DataTemp;
          this.DataTemp = D;
        }else{
          this.Session[this.x] =  0;
        }

        this.x++;
      }

      }

  );

  }

}

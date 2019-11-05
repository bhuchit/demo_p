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
  
  
 x=0 ;
 n=0;

  constructor(private historyService : HistoryService,
   
   ) { }

  ngOnInit() {
    
    this.Rider = { //นี่เป็นข้อมูลสมมุติของ rider ที่ Loginอยู่  ที่จริงแล้วจะต้องเชื่อมกับระบบล็อกอิน แล้วเอาข้อมูลที่ล็อกอินมาใช้
      id:'joke',
    name:'ประเสริฐ',
    income:1700
  } //

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

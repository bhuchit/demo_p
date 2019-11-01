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


  constructor(private historyService : HistoryService,
   
   ) { }

  ngOnInit() {
    
    this.Rider = {id:'joke',name:'ประเสริฐ',income:1700}

    this.historyService.getByRiderId(this.Rider.id).subscribe(
      data => {
        for(var i = 0 ; i < data.length ; i ++){
       
          this.OrderList.push(data[i]);
        }
      }

  );

  }

}

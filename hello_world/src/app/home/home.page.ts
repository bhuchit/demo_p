import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Order, HistoryService } from '../history/history.service';
import { HomeService } from './home.service';
import { HttpClient } from 'selenium-webdriver/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  orders: Array<any>;
  x: any;
  status: String = "กำลังดำเนินการ";
  constructor(
    private rout: Router,
    // private httpClient: HttpClient,
    // private orderService: HistoryService ,
    private homeService: HomeService
    ) {}

  ngOnInit() {
    this.homeService.getOrders().subscribe(order=>{
      this.orders = order;
      console.table(order);
    });
  
  }
  onAccept(id:any){
    console.log(id);
    this.homeService.updateStatusOrder(id,this.status).subscribe(update =>{
      console.table(update);
    })
    this.rout.navigate(['/history',{id}]);
    
      
  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
<<<<<<< HEAD
import { Order, HistoryService } from '../history/history.service';
import { HomeService } from './home.service';
import { HttpClient } from 'selenium-webdriver/http';

=======
import { Order } from '../history/history.service';
import {NavController,ModalController} from '@ionic/angular';
import { HomeService } from './home.service';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
>>>>>>> 68bda24396e7d1a05715c93fe2b3cc28b0305ec8

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
<<<<<<< HEAD
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
=======
export class HomePage {
  orders = ORDER_DATA;

 
  Orderlist1 = [];

  constructor(private rout: Router,private homeService : HomeService ) {

  }
>>>>>>> 68bda24396e7d1a05715c93fe2b3cc28b0305ec8

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


  ngOnInit(){


    this.homeService.getOrder().subscribe(
      data => {
        console.log("get Data");
        console.log(data);
        //this.market = JSON.stringify(data[0].id);
        // data[value of id] . parameter of oject
        for(var i = 0; i < data.length; i++){
          this.Orderlist1.push(data[i]);
          
          console.log((data[i])); //here you'll get sendernewcall value for all entry
          console.log(this.Orderlist1);
        }
      }

    );

   

  }




}


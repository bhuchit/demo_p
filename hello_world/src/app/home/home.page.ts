import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Order } from '../history/history.service';
import {NavController,ModalController} from '@ionic/angular';
import { HomeService } from './home.service';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

const ORDER_DATA: Order[] = [
  {oid: 1, oName:"A"},
  {oid: 2, oName:"B"},
  {oid: 3, oName:"C"},
  {oid: 4, oName:"D"},
  {oid: 5, oName:"E"},
  {oid: 6, oName:"F"},
];

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  orders = ORDER_DATA;

 
  Orderlist1 = [];

  constructor(private rout: Router,private homeService : HomeService ) {

  }

  onAccept(){
      this.rout.navigate(['${this.orders.oid}/history'])
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


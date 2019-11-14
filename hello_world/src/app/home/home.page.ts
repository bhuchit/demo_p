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

 
  OrderList1 = [];

  Session = [];
  OrderIdTemp ;
  DataTemp;
  
  
 x=0 ;
 n=0;

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
          this.OrderList1.push(data[i]);
          this.Session[i] = 0 ;
          
          console.log((data[i])); //here you'll get sendernewcall value for all entry
          
        }

        for(let D of this.OrderList1 ){


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
            this.OrderList1[this.x-this.n] = this.DataTemp;
            
          }else if(D[0] != this.OrderIdTemp && this.x != 0){
            this.n = 0;
            this.Session[this.x] =  0;
            this.OrderIdTemp = D[0];
            this.DataTemp = D;
            this.OrderList1[this.x] = this.DataTemp;
            
          }
  
          this.x++;
        }


      }

    );

   

  }




}


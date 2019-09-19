import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Order } from '../history/history.service';


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

  constructor(private rout: Router,
    ) {}

  onAccept(){
      this.rout.navigate(['${this.orders.oid}/history'])
  }
}

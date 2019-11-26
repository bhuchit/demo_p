import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  orders: []
  constructor(
    private rout: Router,
    private homeService: HomeService,
    ) { }

  ngOnInit() {
    // this.homeService.getOrders().subscribe(order=>{
    //   this.orders = order;
    //   console.table(order);
    // });
  }

  onAccept(){
      // this.rout.navigate(['${this.orders.oid}/history'])
  }
}

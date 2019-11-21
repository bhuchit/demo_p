import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { User } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  public API: string = "http://localhost:9000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(
    
    private http: HttpClient
  ) { }

  
  getOnOption():Observable<any>{
    return this.http.get(this.API+'/OnOption ',{headers:this.httpOptions.headers});
  }
}

export class history{
  hId: any;
  dateTime: any;
  user: User;
  order: Order;
  
}
export class Order{
  oId: any;
  distance: any;
  location: String;
  customer: Customer;
  restaurant: Restaurants
  status: String;
  
}
export class Customer{
  cId: any;
  cName: String; 
}
export class Restaurants{
  restId: any;
  resName: String;
}
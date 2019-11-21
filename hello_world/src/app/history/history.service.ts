import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { User } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
<<<<<<< HEAD
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
=======
  // public API: string = "http://localhost:8080";
  // httpOptions = {
    // headers: new HttpHeaders({
      // 'Content-Type':  'application/json'
    // })

  // };
  constructor(private http : HttpClient) { }

  baseURL = "http://localhost:9000";
  httpHeader = new HttpHeaders({'Content-Type':'application/json'})

  
  getByRiderId(Rider_id):Observable<any>{

    console.log("hi4444");

    return this.http.get(this.baseURL+'/OrderByRiderId/'+Rider_id,{headers:this.httpHeader});

>>>>>>> 68bda24396e7d1a05715c93fe2b3cc28b0305ec8
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
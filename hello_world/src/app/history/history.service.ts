import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { User } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
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

  }


  
  getRider(Rider_id):Observable<any>{

    console.log("hi999");

    return this.http.get(this.baseURL+'/Rider/'+Rider_id,{headers:this.httpHeader});

  }

}

export class history{
  hId: any;
  dateTime: any;
  user: User;
  order: Order;//Order class
  
}
export class Order{
  oid: any;
  oName: String;

}
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
  constructor(
    
    // private http: HttpClient
    ) { }
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
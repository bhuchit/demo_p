import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,  HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public API: string = "http://localhost:9000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(
    
    private http: HttpClient
    ) { }

    getOrders():Observable<any>{
      return this.http.get(this.API+'/Order', {headers:this.httpOptions.headers});
    }
}


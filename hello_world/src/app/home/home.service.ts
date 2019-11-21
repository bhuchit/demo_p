import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    
    getOnOptionByOrderId(id):Observable<any>{
      return this.http.get(this.API+'/FindOnOptionByOrderId/' + id, {headers:this.httpOptions.headers});
    }

    updateStatusOrder(id, status):Observable<any>{
      return this.http.put(this.API+'/Order/' + id +'/'+ status, {headers:this.httpOptions.headers});
    }

}

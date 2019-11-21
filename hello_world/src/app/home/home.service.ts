import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpHeaders, HttpClient } from '@angular/common/http';
=======
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpHeaderResponse } from '@angular/common/http';
>>>>>>> 68bda24396e7d1a05715c93fe2b3cc28b0305ec8
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

<<<<<<< HEAD
=======
  constructor(private http : HttpClient) { }

  baseURL = "https://damp-garden-65859.herokuapp.com";
  httpHeader = new HttpHeaders({'Content-Type':'application/json'})

  
  getOrder():Observable<any>{

    console.log("hi55555");

    return this.http.get(this.baseURL+'/Order',{headers:this.httpHeader});

  }

>>>>>>> 68bda24396e7d1a05715c93fe2b3cc28b0305ec8
}

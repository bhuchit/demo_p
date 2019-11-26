import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public API: string = "http://localhost:9000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(
    
    private http: HttpClient
    ) { }


  getUser():Observable<any>{
    return this.http.get('//localhost:8080/user');
  }
}

export class User{
  Id:any = "0";
  email:any = "bhu";
  password:any  = "1234"
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // public API: string = "http://localhost:8080";
  // httpOptions = {
    // headers: new HttpHeaders({
      // 'Content-Type':  'application/json'
    // })

  // };
  constructor(
    
    // private http: HttpClient
    ) { }

  // findUser(email:any, pass:any):Observable<any>{
  //   return this.http.get(this.API + '/user/' + email + pass);
  // }
  // getUser():Observable<any>{
  //   return this.http.get('//localhost:8080/user');
  // }
}

export class User{
  Id:any = "0";
  email:any = "beam";
  password:any  = "1234"
}
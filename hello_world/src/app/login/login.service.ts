import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { LoginPage } from './login.page';
import {Router} from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginRider {
  
  

  constructor(
    private http : HttpClient,  
    private nav : NavController,
    ) { 
 
  }

 

  baseURL = "http://localhost:9000";
  httpHeader = new HttpHeaders({'Content-Type':'application/json'})
  
  onLogininput(users):Observable<any>{
    console.log("Login");
    return this.http.post(this.baseURL+'/Rider/login',users,{headers:this.httpHeader , responseType:'text'}); 

    
  }



  getLogin(id,password):Observable<any>{
    return this.http.get(this.baseURL+'/Menu/restaurant/'+id,{headers:this.httpHeader});
  }
}

export class User{
  Id:any = "0";
  email:any = "beam";
  password:any  = "1234"
}
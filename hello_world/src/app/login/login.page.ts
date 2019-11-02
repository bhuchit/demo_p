import { Component, OnInit } from '@angular/core';
import { User, LoginRider } from './login.service';
import { Subscription, from } from 'rxjs';
import {Router} from '@angular/router';
import { NavParams,NavController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})




export class LoginPage implements OnInit {
  // sub: Subscription;
  username:"";
  email:any;
  password:"";
  http: any;

  users={
    username:"",
    password:""
  }
  data1;
  
  constructor(
    // private find: LoginService,
    // private user: LoginService,
  
    private rout: Router,

    private loginRider: LoginRider,
    private nav : NavController,
  ) { }

  ngOnInit() {
    
 
    

    // this.user.getUser().subscribe(user=>{
    //   this.users = user;
    //   console.table(this.users);
    // })
    // console.log(this.users);
  }
  
  onLogin() {
    
    console.log(this.users);
    
    this.loginRider.onLogininput(this.users).subscribe(
      data => {
        console.log("login!!");
        console.log(data);
        

         if( data == this.users.username ){
                  console.log("done!!");
                 this.nav.navigateForward('/home') ;
         }else
                  alert("รหัสผ่านหรืออีเมลผิด")
      }
      
    );
  
  }

  

  onRegister(){

  }
}

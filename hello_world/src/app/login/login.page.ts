import { Component, OnInit } from '@angular/core';
import { User, LoginService } from './login.service';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // sub: Subscription;
  users:User = new User();
  email:any;
  password:string;

  constructor(
    // private find: LoginService,
    // private user: LoginService,
    private rout: Router,
  ) { }

  ngOnInit() {
    // this.user.getUser().subscribe(user=>{
    //   this.users = user;
    //   console.table(this.users);
    // })
    // console.log(this.users);
  }
  
  onlogin() {
    // this.sub = this.find.findUser(this.email,this.pass).subscribe((find)=>{
    //     this.users = find;
    // })
    console.log(this.users);
    if(this.email == this.users.email && this.password == this.users.password){
      console.log("XXXX: "+this.email);
      console.log("XXXX: "+this.password);
      console.log("Successfully logged in!");
      this.rout.navigate(['home'])
    }
    else if(this.email != this.users.email || this.password != this.users.password){
      console.log("Error");
      alert("Email or Passsword not found");
    }
  }

  
  onRegister(){

  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import * as users from '../../../assets/users.json'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  constructor(private loginService:LoginService,private route:Router,public translate:TranslateService){

  }
  en:boolean=true;
  login:boolean=true;
  users:any = users;
  ngOnInit() {
   if(localStorage.getItem('lang')==='en'){
    this.en=true
   }
   else{
    this.en=false
   }
  }

  onSubmit(form: NgForm){
    const email = form.value.email;
    const passwd = form.value.password;

     this.login = this.loginService.login(email,passwd);
    if(this.login){
      console.log('passed')
      this.route.navigate(['catalog'])
    }
    else{
      console.log('user doesnt exist')
    }
  }

  onClicken(){
    this.translate.use('en')
    this.en=true
    localStorage.setItem('lang','en')
  }
  onClickar(){
    this.translate.use('ar')
    this.en=false
    localStorage.setItem('lang','ar')
  }

}

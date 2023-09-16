import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { signupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  
  constructor(private SignupService:signupService ,private route:Router,public translate:TranslateService){

  }
  en:boolean=true;
  signup:boolean=true;
  
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

     this.signup = this.SignupService.signup(email,passwd);
    if(this.signup){
      console.log('passed')
      this.route.navigate(['login'])
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

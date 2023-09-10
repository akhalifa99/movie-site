import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import {  Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

constructor(private router:Router, private loginService:LoginService){

}

  click(){
    localStorage.setItem('logged','false')
    this.loginService.logged=false;
    this.router.navigate([''])
  }

}

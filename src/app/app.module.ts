import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { authModule } from './auth/auth.module';

import { CommonModule } from '@angular/common';
import { UsersJsonComponent } from './users.json/users.json.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersJsonComponent
    
   
   
    
  ],
  imports: [
    authModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }



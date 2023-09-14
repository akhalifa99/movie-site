import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { authModule } from './auth/auth.module';
import { coreModule } from './core/core.module';
import { CommonModule } from '@angular/common';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// const appRoutes: Routes = [
//   {path:'', component: LoginComponent},
//   {path:'catalog', component: CatalogComponent,canActivate:[authGuard]},
//   {path:'catalog/:id', component: DetailsComponent,canActivate:[authGuard]}
// ];

@NgModule({
  declarations: [
    AppComponent
    
    //NgbModule
   
    
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



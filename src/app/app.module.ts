import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CatalogComponent } from './catalog/catalog.component';
import { RatingComponent } from './shared/rating/rating.component';
import { DetailsComponent } from './details/details.component';
import { LogoutComponent } from './shared/logout/logout.component';

import { catalogModule } from './catalog/catalog.module';
import { detailsModule } from './details/detail.module';
import { authModule } from './login/auth.module';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// const appRoutes: Routes = [
//   {path:'', component: LoginComponent},
//   {path:'catalog', component: CatalogComponent,canActivate:[authGuard]},
//   {path:'catalog/:id', component: DetailsComponent,canActivate:[authGuard]}
// ];

@NgModule({
  declarations: [
    AppComponent,
    
    //NgbModule
   
    
  ],
  imports: [
    authModule,
    RouterModule,
    detailsModule,
    catalogModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }



import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CatalogComponent } from './catalog/catalog.component';
import { RatingComponent } from './rating/rating.component';
import { DetailsComponent } from './details/details.component';
import { LogoutComponent } from './logout/logout.component';

// const appRoutes: Routes = [
//   {path:'', component: LoginComponent},
//   {path:'catalog', component: CatalogComponent,canActivate:[authGuard]},
//   {path:'catalog/:id', component: DetailsComponent,canActivate:[authGuard]}
// ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CatalogComponent,
    RatingComponent,
    DetailsComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

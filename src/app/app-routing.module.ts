import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { logoutGuard } from './auth/guard/logout.guard';
import { SignupComponent } from './auth/signup/signup.component';
import { UsersJsonComponent } from './users.json/users.json.component';

const routes: Routes = [
  {path:'', component: LoginComponent,canActivate:[logoutGuard]},
  {path:'signup', component: SignupComponent,canActivate:[logoutGuard]},
  {path:'catalog',loadChildren: () => import('./core/core.module').then(x => x.coreModule)},
  {path:'**',redirectTo:'catalog'},
  {path:'assets/users.json',component:UsersJsonComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

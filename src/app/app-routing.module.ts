import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { logoutGuard } from './auth/guard/logout.guard';

const routes: Routes = [
  {path:'', component: LoginComponent,canActivate:[logoutGuard]},
  {path:'catalog',loadChildren: () => import('./core/core.module').then(x => x.coreModule)},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

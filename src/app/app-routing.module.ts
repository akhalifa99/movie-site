import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './core/catalog/catalog.component';
import { DetailsComponent } from './core/details/details.component';
import { authGuard } from './auth/guard/auth.guard';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'catalog',loadChildren: () => import('./core/core.module').then(x => x.coreModule)},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

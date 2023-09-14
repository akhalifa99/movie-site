import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { authGuard } from '../guard/auth.guard';
import { CatalogComponent } from './catalog/catalog.component';


const routes:Routes=[
    {path:'', component: CatalogComponent,canActivate:[authGuard]},
    {path:':id', component: DetailsComponent,canActivate:[authGuard]}
    

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })


export class catalogRoutingModule{}
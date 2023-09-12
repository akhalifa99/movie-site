import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
import { authGuard } from '../guard/auth.guard';
import { CatalogComponent } from './catalog.component';


const routes:Routes=[
    {path:'catalog', component: CatalogComponent,canActivate:[authGuard]},
    

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })


export class catalogRoutingModule{}
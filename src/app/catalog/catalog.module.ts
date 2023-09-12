import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterLink, RouterModule } from "@angular/router";
import { DetailsComponent } from "../details/details.component";
import { LogoutComponent } from "../shared/logout/logout.component";
import { RatingComponent } from "../shared/rating/rating.component";
import { sharedModule } from "../shared/shared.module";
import { catalogRoutingModule } from "./catalog-routing.module";
import { CatalogComponent } from "./catalog.component";


@NgModule({
    declarations:[
        CatalogComponent
    ],
    imports:[
        sharedModule,RouterModule,catalogRoutingModule
    ],
    exports:[
        CatalogComponent,
        RatingComponent,
        catalogRoutingModule
    ]
})

export class catalogModule{

}
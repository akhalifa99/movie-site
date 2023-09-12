import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DetailsComponent } from "../details/details.component";
import { LogoutComponent } from "../shared/logout/logout.component";
import { RatingComponent } from "../shared/rating/rating.component";
import { catalogRoutingModule } from "./catalog-routing.module";
import { CatalogComponent } from "./catalog.component";


@NgModule({
    declarations:[
        CatalogComponent,
        RatingComponent,
        LogoutComponent,
        DetailsComponent,
        LogoutComponent
    ],
    imports:[
        CommonModule,RouterModule
    ],
    exports:[
        CatalogComponent,
        RatingComponent,
        LogoutComponent,
        catalogRoutingModule
    ]
})

export class catalogModule{

}
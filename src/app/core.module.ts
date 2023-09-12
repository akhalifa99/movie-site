import { NgModule } from "@angular/core";
import { catalogRoutingModule } from "./catalog/catalog-routing.module";
import { CatalogComponent } from "./catalog/catalog.component";
import { DetailsComponent } from "./details/details.component";
import { sharedModule } from "./shared/shared.module";

@NgModule({
    declarations:[
        CatalogComponent,
        DetailsComponent
    ],
    imports:[
        sharedModule,catalogRoutingModule
    ],
    exports:[
        CatalogComponent,
        DetailsComponent,
        catalogRoutingModule
    ]
})

export class coreModule{}
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CatalogComponent } from "./catalog/catalog.component";
import { DetailsComponent } from "./details/details.component";
import { sharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { catalogRoutingModule } from "./catalog-routing.module";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';





@NgModule({
    declarations:[
        CatalogComponent,
        DetailsComponent,
        
    ],
    
    imports:[
        sharedModule,
        catalogRoutingModule,
        RouterModule,
        MatProgressSpinnerModule
    ]

})

export class coreModule{}


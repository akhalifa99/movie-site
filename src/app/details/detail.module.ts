import { NgModule } from "@angular/core";
import { sharedModule } from "../shared/shared.module";
import { DetailsComponent } from "./details.component";


@NgModule({
    declarations:[
        DetailsComponent
    ],
    imports:[
        sharedModule
    ],
    exports:[DetailsComponent]
})

export class detailsModule{}
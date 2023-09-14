import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LogoutComponent } from "./logout/logout.component";
import { RatingComponent } from "./rating/rating.component";



@NgModule({
declarations:[
    LogoutComponent,
    RatingComponent
],
imports:[CommonModule
],
exports:[ 
    LogoutComponent,
    RatingComponent,
    CommonModule
]
})


export class sharedModule{}
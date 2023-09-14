import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { sharedModule } from "../shared/shared.module";
import { LoginComponent } from "./login/login.component";



@NgModule({
    declarations:[LoginComponent],
    imports:[
        RouterModule,
        FormsModule,
        sharedModule,
        TranslateModule.forRoot(
            {
              defaultLanguage:localStorage.getItem('lang'),
              loader:{
                provide:TranslateLoader,
                useFactory:createTranslateLoader,
                deps:[HttpClient]
              }
            }
          )
    ],
    exports:[LoginComponent]

})

export class authModule{
  
}


export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,"./assets/i18n/",'.json')
}
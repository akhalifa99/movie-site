import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { sharedModule } from "../shared/shared.module";
import { LoginComponent } from "./login.component";

@NgModule({
    declarations:[LoginComponent],
    imports:[FormsModule,
        sharedModule,
        TranslateModule.forRoot(
            {
              defaultLanguage:'en',
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

export class authModule{}

export class AppModule { }

export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,"./assets/i18n/",'.json')
}
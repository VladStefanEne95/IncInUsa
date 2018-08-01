import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { DirectorRoutingModule } from "./director-routing.module";
import { DirectorComponent } from "./director.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DirectorRoutingModule
    ],
    declarations: [
        DirectorComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DirectorModule { }

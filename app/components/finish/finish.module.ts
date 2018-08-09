import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { FinishRoutingModule } from "./finish-routing.module";
import { FinishComponent } from "./finish.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        FinishRoutingModule
    ],
    declarations: [
        FinishComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FinishModule { }

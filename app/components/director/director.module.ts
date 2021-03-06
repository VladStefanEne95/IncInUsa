import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { DirectorRoutingModule } from "./director-routing.module";
import { DirectorComponent } from "./director.component";

@NgModule({
    imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
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

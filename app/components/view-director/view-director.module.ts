import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ViewDirectorRoutingModule } from "./view-director-routing.module";
import { ViewDirectorComponent } from "./view-director.component";

@NgModule({
    imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
        ViewDirectorRoutingModule
    ],
    declarations: [
        ViewDirectorComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ViewDirectorModule { }

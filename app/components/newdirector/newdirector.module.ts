import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NewDirectorRoutingModule } from "./newdirector-routing.module";
import { NewDirectorComponent } from "./newdirector.component";

@NgModule({
    imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
        NewDirectorRoutingModule
    ],
    declarations: [
        NewDirectorComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NewDirectorModule { }

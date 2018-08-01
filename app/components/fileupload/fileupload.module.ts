import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { FileuploadRoutingModule } from "./fileupload-routing.module";
import { FileuploadComponent } from "./fileupload.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { DropDownModule } from "nativescript-drop-down/angular";


@NgModule({
    imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
		DropDownModule,
        FileuploadRoutingModule
    ],
    declarations: [
        FileuploadComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FileuploadModule { }

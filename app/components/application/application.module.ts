import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ApplicationRoutingModule } from "./application-routing.module";
import { ApplicationComponent } from "./application.component";
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';
import { NativeScriptFormsModule } from "nativescript-angular/forms";


@NgModule({
    imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
		TNSCheckBoxModule,
        ApplicationRoutingModule
    ],
    declarations: [
        ApplicationComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ApplicationModule { }

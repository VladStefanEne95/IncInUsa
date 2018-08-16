import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { StatusRoutingModule } from "./status-routing.module";
import { StatusComponent } from "./status.component";

import { SharedModule } from './../../shared.module';

@NgModule({
    imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
		StatusRoutingModule,
		SharedModule
    ],
    declarations: [
        StatusComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class StatusModule { }

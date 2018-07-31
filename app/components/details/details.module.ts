import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { DetailsRoutingModule } from "./details-routing.module";
import { DetailsComponent } from "./details.component";
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';

@NgModule({
    imports: [
		NativeScriptCommonModule,
		TNSCheckBoxModule,
		NativeScriptFormsModule,
        DetailsRoutingModule
    ],
    declarations: [
        DetailsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DetailsModule { }

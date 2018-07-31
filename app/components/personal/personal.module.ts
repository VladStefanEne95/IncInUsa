import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PersonalRoutingModule } from "./personal-routing.module";
import { PersonalComponent } from "./personal.component";
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
		TNSCheckBoxModule,
        PersonalRoutingModule
    ],
    declarations: [
        PersonalComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PersonalModule { }

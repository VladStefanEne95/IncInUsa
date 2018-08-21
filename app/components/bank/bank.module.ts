import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { BankRoutingModule } from "./bank-routing.module";
import { BankComponent } from "./bank.component";
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';

@NgModule({
    imports: [
		NativeScriptCommonModule,
		TNSCheckBoxModule,
		NativeScriptFormsModule,
        BankRoutingModule
    ],
    declarations: [
        BankComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BankModule { }

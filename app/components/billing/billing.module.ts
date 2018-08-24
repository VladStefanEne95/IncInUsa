import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { BillingRoutingModule } from "./billing-routing.module";
import { BillingComponent } from "./billing.component";
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
		TNSCheckBoxModule,
        BillingRoutingModule
    ],
    declarations: [
        BillingComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BillingModule { }

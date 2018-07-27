import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";


import { PaymentRoutingModule } from "./payment-routing.module";
import { PaymentComponent } from "./payment.component";


@NgModule({
    imports: [
        NativeScriptCommonModule,
		PaymentRoutingModule,
		NativeScriptFormsModule
    ],
    declarations: [
        PaymentComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PaymentModule { }

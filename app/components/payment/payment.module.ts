import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

import { PaymentRoutingModule } from "./payment-routing.module";
import { PaymentComponent } from "./payment.component";


@NgModule({
    imports: [
		NativeScriptCommonModule,
		TNSFontIconModule.forRoot({
			'fa': './assets/font-awesome.css'
		}),
		PaymentRoutingModule,
		TNSCheckBoxModule,
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

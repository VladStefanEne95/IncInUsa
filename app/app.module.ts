import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { PaymentService } from './services/payment/payment.service';
import { HttpClientModule } from '@angular/common/http';
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
		AppRoutingModule,
		HttpClientModule,
		NativeScriptFormsModule,
		NativeScriptHttpModule
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
	],
	providers: [
		PaymentService
	]
})
export class AppModule { }

import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { PaymentService } from './services/payment/payment.service';
import { IncorporationService } from './services/incorporation/incorporation.service';
import { StartService } from './services/start/start.service';
import { UploadService } from './services/upload/upload.service';
import { HttpClientModule } from '@angular/common/http';
import { NativeScriptHttpModule } from "nativescript-angular/http";


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import {registerElement} from "nativescript-angular/element-registry";
registerElement("FilterableListpicker", () => require("nativescript-filterable-listpicker").FilterableListpicker);

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
		PaymentService,
		UploadService,
		IncorporationService,
		StartService
	]
})
export class AppModule { }

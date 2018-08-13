import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ManageRoutingModule } from "./manage-routing.module";
import { ManageComponent } from "./manage.component";

@NgModule({
    imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
        ManageRoutingModule
    ],
    declarations: [
        ManageComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ManageModule { }

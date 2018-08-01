import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ReviewRoutingModule } from "./review-routing.module";
import { ReviewComponent } from "./review.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ReviewRoutingModule
    ],
    declarations: [
        ReviewComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ReviewModule { }

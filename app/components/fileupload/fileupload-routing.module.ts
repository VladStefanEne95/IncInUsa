import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { FileuploadComponent } from "./fileupload.component";

const routes: Routes = [
    { path: "", component: FileuploadComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class FileuploadRoutingModule { }

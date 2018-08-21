import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ViewDirectorComponent } from "./view-director.component";

const routes: Routes = [
	{ path: "", component: ViewDirectorComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ViewDirectorRoutingModule { }

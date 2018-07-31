import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/personal", pathMatch: "full" },
	{ path: "home", loadChildren: "./components/home/home.module#HomeModule" },
	{ path: "personal", loadChildren: "./components/personal/personal.module#PersonalModule" },
	{ path: "details", loadChildren: "./components/details/details.module#DetailsModule" },
	{ path: "payment", loadChildren: "./components/payment/payment.module#PaymentModule" },
	{ path: "fileupload", loadChildren: "./components/fileupload/fileupload.module#FileuploadModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

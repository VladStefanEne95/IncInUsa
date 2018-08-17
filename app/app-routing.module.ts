import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/manage", pathMatch: "full" },
	{ path: "home", loadChildren: "./components/home/home.module#HomeModule" },
	{ path: "finish", loadChildren: "./components/finish/finish.module#FinishModule" },
	{ path: "review", loadChildren: "./components/review/review.module#ReviewModule" },
	{ path: "director/:id", loadChildren: "./components/director/director.module#DirectorModule" },
	{ path: "newdirector", loadChildren: "./components/newdirector/newdirector.module#NewDirectorModule" },
	{ path: "personal", loadChildren: "./components/personal/personal.module#PersonalModule" },
	{ path: "details", loadChildren: "./components/details/details.module#DetailsModule" },
	{ path: "payment", loadChildren: "./components/payment/payment.module#PaymentModule" },
	{ path: "manage", loadChildren: "./components/manage/manage.module#ManageModule" },
	{ path: "status/:id", loadChildren: "./components/status/status.module#StatusModule" },
	{ path: "fileupload", loadChildren: "./components/fileupload/fileupload.module#FileuploadModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

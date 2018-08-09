"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
    { path: "", redirectTo: "/payment", pathMatch: "full" },
    { path: "home", loadChildren: "./components/home/home.module#HomeModule" },
    { path: "finish", loadChildren: "./components/finish/finish.module#FinishModule" },
    { path: "review", loadChildren: "./components/review/review.module#ReviewModule" },
    { path: "director/:id", loadChildren: "./components/director/director.module#DirectorModule" },
    { path: "newdirector", loadChildren: "./components/newdirector/newdirector.module#NewDirectorModule" },
    { path: "personal", loadChildren: "./components/personal/personal.module#PersonalModule" },
    { path: "details", loadChildren: "./components/details/details.module#DetailsModule" },
    { path: "payment", loadChildren: "./components/payment/payment.module#PaymentModule" },
    { path: "fileupload", loadChildren: "./components/fileupload/fileupload.module#FileuploadModule" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQzFELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsMENBQTBDLEVBQUU7SUFDMUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxnREFBZ0QsRUFBRTtJQUNsRixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLGdEQUFnRCxFQUFFO0lBQ2xGLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsc0RBQXNELEVBQUU7SUFDOUYsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSwrREFBK0QsRUFBRTtJQUN0RyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLHNEQUFzRCxFQUFFO0lBQzFGLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsbURBQW1ELEVBQUU7SUFDdEYsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxtREFBbUQsRUFBRTtJQUN0RixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLDREQUE0RCxFQUFFO0NBQ2xHLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9wYXltZW50XCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcblx0eyBwYXRoOiBcImhvbWVcIiwgbG9hZENoaWxkcmVuOiBcIi4vY29tcG9uZW50cy9ob21lL2hvbWUubW9kdWxlI0hvbWVNb2R1bGVcIiB9LFxuXHR7IHBhdGg6IFwiZmluaXNoXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvZmluaXNoL2ZpbmlzaC5tb2R1bGUjRmluaXNoTW9kdWxlXCIgfSxcblx0eyBwYXRoOiBcInJldmlld1wiLCBsb2FkQ2hpbGRyZW46IFwiLi9jb21wb25lbnRzL3Jldmlldy9yZXZpZXcubW9kdWxlI1Jldmlld01vZHVsZVwiIH0sXG5cdHsgcGF0aDogXCJkaXJlY3Rvci86aWRcIiwgbG9hZENoaWxkcmVuOiBcIi4vY29tcG9uZW50cy9kaXJlY3Rvci9kaXJlY3Rvci5tb2R1bGUjRGlyZWN0b3JNb2R1bGVcIiB9LFxuXHR7IHBhdGg6IFwibmV3ZGlyZWN0b3JcIiwgbG9hZENoaWxkcmVuOiBcIi4vY29tcG9uZW50cy9uZXdkaXJlY3Rvci9uZXdkaXJlY3Rvci5tb2R1bGUjTmV3RGlyZWN0b3JNb2R1bGVcIiB9LFxuXHR7IHBhdGg6IFwicGVyc29uYWxcIiwgbG9hZENoaWxkcmVuOiBcIi4vY29tcG9uZW50cy9wZXJzb25hbC9wZXJzb25hbC5tb2R1bGUjUGVyc29uYWxNb2R1bGVcIiB9LFxuXHR7IHBhdGg6IFwiZGV0YWlsc1wiLCBsb2FkQ2hpbGRyZW46IFwiLi9jb21wb25lbnRzL2RldGFpbHMvZGV0YWlscy5tb2R1bGUjRGV0YWlsc01vZHVsZVwiIH0sXG5cdHsgcGF0aDogXCJwYXltZW50XCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvcGF5bWVudC9wYXltZW50Lm1vZHVsZSNQYXltZW50TW9kdWxlXCIgfSxcblx0eyBwYXRoOiBcImZpbGV1cGxvYWRcIiwgbG9hZENoaWxkcmVuOiBcIi4vY29tcG9uZW50cy9maWxldXBsb2FkL2ZpbGV1cGxvYWQubW9kdWxlI0ZpbGV1cGxvYWRNb2R1bGVcIiB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIl19
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
    { path: "", redirectTo: "/review", pathMatch: "full" },
    { path: "home", loadChildren: "./components/home/home.module#HomeModule" },
    { path: "review", loadChildren: "./components/review/review.module#ReviewModule" },
    { path: "director", loadChildren: "./components/director/director.module#DirectorModule" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3pELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsMENBQTBDLEVBQUU7SUFDMUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxnREFBZ0QsRUFBRTtJQUNsRixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLHNEQUFzRCxFQUFFO0lBQzFGLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsK0RBQStELEVBQUU7SUFDdEcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxzREFBc0QsRUFBRTtJQUMxRixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLG1EQUFtRCxFQUFFO0lBQ3RGLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsbURBQW1ELEVBQUU7SUFDdEYsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSw0REFBNEQsRUFBRTtDQUNsRyxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvcmV2aWV3XCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcblx0eyBwYXRoOiBcImhvbWVcIiwgbG9hZENoaWxkcmVuOiBcIi4vY29tcG9uZW50cy9ob21lL2hvbWUubW9kdWxlI0hvbWVNb2R1bGVcIiB9LFxuXHR7IHBhdGg6IFwicmV2aWV3XCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvcmV2aWV3L3Jldmlldy5tb2R1bGUjUmV2aWV3TW9kdWxlXCIgfSxcblx0eyBwYXRoOiBcImRpcmVjdG9yXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvZGlyZWN0b3IvZGlyZWN0b3IubW9kdWxlI0RpcmVjdG9yTW9kdWxlXCIgfSxcblx0eyBwYXRoOiBcIm5ld2RpcmVjdG9yXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvbmV3ZGlyZWN0b3IvbmV3ZGlyZWN0b3IubW9kdWxlI05ld0RpcmVjdG9yTW9kdWxlXCIgfSxcblx0eyBwYXRoOiBcInBlcnNvbmFsXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvcGVyc29uYWwvcGVyc29uYWwubW9kdWxlI1BlcnNvbmFsTW9kdWxlXCIgfSxcblx0eyBwYXRoOiBcImRldGFpbHNcIiwgbG9hZENoaWxkcmVuOiBcIi4vY29tcG9uZW50cy9kZXRhaWxzL2RldGFpbHMubW9kdWxlI0RldGFpbHNNb2R1bGVcIiB9LFxuXHR7IHBhdGg6IFwicGF5bWVudFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9jb21wb25lbnRzL3BheW1lbnQvcGF5bWVudC5tb2R1bGUjUGF5bWVudE1vZHVsZVwiIH0sXG5cdHsgcGF0aDogXCJmaWxldXBsb2FkXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvZmlsZXVwbG9hZC9maWxldXBsb2FkLm1vZHVsZSNGaWxldXBsb2FkTW9kdWxlXCIgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
    { path: "", redirectTo: "/director", pathMatch: "full" },
    { path: "home", loadChildren: "./components/home/home.module#HomeModule" },
    { path: "review", loadChildren: "./components/review/review.module#ReviewModule" },
    { path: "director", loadChildren: "./components/director/director.module#DirectorModule" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQzNELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsMENBQTBDLEVBQUU7SUFDMUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxnREFBZ0QsRUFBRTtJQUNsRixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLHNEQUFzRCxFQUFFO0lBQzFGLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsc0RBQXNELEVBQUU7SUFDMUYsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxtREFBbUQsRUFBRTtJQUN0RixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLG1EQUFtRCxFQUFFO0lBQ3RGLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsNERBQTRELEVBQUU7Q0FDbEcsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2RpcmVjdG9yXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcblx0eyBwYXRoOiBcImhvbWVcIiwgbG9hZENoaWxkcmVuOiBcIi4vY29tcG9uZW50cy9ob21lL2hvbWUubW9kdWxlI0hvbWVNb2R1bGVcIiB9LFxuXHR7IHBhdGg6IFwicmV2aWV3XCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvcmV2aWV3L3Jldmlldy5tb2R1bGUjUmV2aWV3TW9kdWxlXCIgfSxcblx0eyBwYXRoOiBcImRpcmVjdG9yXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvZGlyZWN0b3IvZGlyZWN0b3IubW9kdWxlI0RpcmVjdG9yTW9kdWxlXCIgfSxcblx0eyBwYXRoOiBcInBlcnNvbmFsXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvcGVyc29uYWwvcGVyc29uYWwubW9kdWxlI1BlcnNvbmFsTW9kdWxlXCIgfSxcblx0eyBwYXRoOiBcImRldGFpbHNcIiwgbG9hZENoaWxkcmVuOiBcIi4vY29tcG9uZW50cy9kZXRhaWxzL2RldGFpbHMubW9kdWxlI0RldGFpbHNNb2R1bGVcIiB9LFxuXHR7IHBhdGg6IFwicGF5bWVudFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9jb21wb25lbnRzL3BheW1lbnQvcGF5bWVudC5tb2R1bGUjUGF5bWVudE1vZHVsZVwiIH0sXG5cdHsgcGF0aDogXCJmaWxldXBsb2FkXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvZmlsZXVwbG9hZC9maWxldXBsb2FkLm1vZHVsZSNGaWxldXBsb2FkTW9kdWxlXCIgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==
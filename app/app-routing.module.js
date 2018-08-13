"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3pELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsMENBQTBDLEVBQUU7SUFDMUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxnREFBZ0QsRUFBRTtJQUNsRixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLGdEQUFnRCxFQUFFO0lBQ2xGLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsc0RBQXNELEVBQUU7SUFDOUYsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSwrREFBK0QsRUFBRTtJQUN0RyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLHNEQUFzRCxFQUFFO0lBQzFGLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsbURBQW1ELEVBQUU7SUFDdEYsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxtREFBbUQsRUFBRTtJQUN0RixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLGdEQUFnRCxFQUFFO0lBQ2xGLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsNERBQTRELEVBQUU7Q0FDbEcsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL21hbmFnZVwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG5cdHsgcGF0aDogXCJob21lXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvaG9tZS9ob21lLm1vZHVsZSNIb21lTW9kdWxlXCIgfSxcblx0eyBwYXRoOiBcImZpbmlzaFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9jb21wb25lbnRzL2ZpbmlzaC9maW5pc2gubW9kdWxlI0ZpbmlzaE1vZHVsZVwiIH0sXG5cdHsgcGF0aDogXCJyZXZpZXdcIiwgbG9hZENoaWxkcmVuOiBcIi4vY29tcG9uZW50cy9yZXZpZXcvcmV2aWV3Lm1vZHVsZSNSZXZpZXdNb2R1bGVcIiB9LFxuXHR7IHBhdGg6IFwiZGlyZWN0b3IvOmlkXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvZGlyZWN0b3IvZGlyZWN0b3IubW9kdWxlI0RpcmVjdG9yTW9kdWxlXCIgfSxcblx0eyBwYXRoOiBcIm5ld2RpcmVjdG9yXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvbmV3ZGlyZWN0b3IvbmV3ZGlyZWN0b3IubW9kdWxlI05ld0RpcmVjdG9yTW9kdWxlXCIgfSxcblx0eyBwYXRoOiBcInBlcnNvbmFsXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvcGVyc29uYWwvcGVyc29uYWwubW9kdWxlI1BlcnNvbmFsTW9kdWxlXCIgfSxcblx0eyBwYXRoOiBcImRldGFpbHNcIiwgbG9hZENoaWxkcmVuOiBcIi4vY29tcG9uZW50cy9kZXRhaWxzL2RldGFpbHMubW9kdWxlI0RldGFpbHNNb2R1bGVcIiB9LFxuXHR7IHBhdGg6IFwicGF5bWVudFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9jb21wb25lbnRzL3BheW1lbnQvcGF5bWVudC5tb2R1bGUjUGF5bWVudE1vZHVsZVwiIH0sXG5cdHsgcGF0aDogXCJtYW5hZ2VcIiwgbG9hZENoaWxkcmVuOiBcIi4vY29tcG9uZW50cy9tYW5hZ2UvbWFuYWdlLm1vZHVsZSNNYW5hZ2VNb2R1bGVcIiB9LFxuXHR7IHBhdGg6IFwiZmlsZXVwbG9hZFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9jb21wb25lbnRzL2ZpbGV1cGxvYWQvZmlsZXVwbG9hZC5tb2R1bGUjRmlsZXVwbG9hZE1vZHVsZVwiIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=
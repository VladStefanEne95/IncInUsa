"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var view_director_component_1 = require("./view-director.component");
var routes = [
    { path: "", component: view_director_component_1.ViewDirectorComponent }
];
var ViewDirectorRoutingModule = /** @class */ (function () {
    function ViewDirectorRoutingModule() {
    }
    ViewDirectorRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], ViewDirectorRoutingModule);
    return ViewDirectorRoutingModule;
}());
exports.ViewDirectorRoutingModule = ViewDirectorRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1kaXJlY3Rvci1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpZXctZGlyZWN0b3Itcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBRXZFLHFFQUFrRTtBQUVsRSxJQUFNLE1BQU0sR0FBVztJQUN0QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLCtDQUFxQixFQUFFO0NBQzlDLENBQUM7QUFNRjtJQUFBO0lBQXlDLENBQUM7SUFBN0IseUJBQXlCO1FBSnJDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1cseUJBQXlCLENBQUk7SUFBRCxnQ0FBQztDQUFBLEFBQTFDLElBQTBDO0FBQTdCLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBWaWV3RGlyZWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3LWRpcmVjdG9yLmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcblx0eyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IFZpZXdEaXJlY3RvckNvbXBvbmVudCB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWaWV3RGlyZWN0b3JSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var application_routing_module_1 = require("./application-routing.module");
var application_component_1 = require("./application.component");
var angular_1 = require("nativescript-checkbox/angular");
var forms_1 = require("nativescript-angular/forms");
var ApplicationModule = /** @class */ (function () {
    function ApplicationModule() {
    }
    ApplicationModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                forms_1.NativeScriptFormsModule,
                angular_1.TNSCheckBoxModule,
                application_routing_module_1.ApplicationRoutingModule
            ],
            declarations: [
                application_component_1.ApplicationComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ApplicationModule);
    return ApplicationModule;
}());
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwbGljYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSwyRUFBd0U7QUFDeEUsaUVBQStEO0FBQy9ELHlEQUFrRTtBQUNsRSxvREFBcUU7QUFpQnJFO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFkN0IsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNYLGlDQUF3QjtnQkFDeEIsK0JBQXVCO2dCQUN2QiwyQkFBaUI7Z0JBQ1gscURBQXdCO2FBQzNCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRDQUFvQjthQUN2QjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBLEFBQWxDLElBQWtDO0FBQXJCLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgQXBwbGljYXRpb25Sb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwbGljYXRpb24tcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgQXBwbGljYXRpb25Db21wb25lbnQgfSBmcm9tIFwiLi9hcHBsaWNhdGlvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVE5TQ2hlY2tCb3hNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtY2hlY2tib3gvYW5ndWxhcic7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuXHRcdE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuXHRcdE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG5cdFx0VE5TQ2hlY2tCb3hNb2R1bGUsXHJcbiAgICAgICAgQXBwbGljYXRpb25Sb3V0aW5nTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwbGljYXRpb25Db21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25Nb2R1bGUgeyB9XHJcbiJdfQ==
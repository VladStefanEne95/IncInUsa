"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var payment_service_1 = require("./services/payment/payment.service");
var incorporation_service_1 = require("./services/incorporation/incorporation.service");
var start_service_1 = require("./services/start/start.service");
var upload_service_1 = require("./services/upload/upload.service");
var http_1 = require("@angular/common/http");
var http_2 = require("nativescript-angular/http");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("FilterableListpicker", function () { return require("nativescript-filterable-listpicker").FilterableListpicker; });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    'fa': './assets/font-awesome.css'
                }),
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.NativeScriptFormsModule,
                http_2.NativeScriptHttpModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            providers: [
                payment_service_1.PaymentService,
                upload_service_1.UploadService,
                incorporation_service_1.IncorporationService,
                start_service_1.StartService
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSxzRUFBb0U7QUFDcEUsd0ZBQXNGO0FBQ3RGLGdFQUE4RDtBQUM5RCxtRUFBaUU7QUFDakUsNkNBQXdEO0FBQ3hELGtEQUFtRTtBQUNuRSx1RUFBOEQ7QUFFOUQsMkRBQXdEO0FBQ3hELGlEQUErQztBQUUvQywwRUFBc0U7QUFDdEUsa0NBQWUsQ0FBQyxzQkFBc0IsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsb0JBQW9CLEVBQWxFLENBQWtFLENBQUMsQ0FBQztBQWdDbEg7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQTNCckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ1gsd0NBQWtCO2dCQUNsQiw2Q0FBaUIsQ0FBQyxPQUFPLENBQUM7b0JBQ3pCLElBQUksRUFBRSwyQkFBMkI7aUJBQ2pDLENBQUM7Z0JBQ0YscUNBQWdCO2dCQUNoQix1QkFBZ0I7Z0JBQ2hCLCtCQUF1QjtnQkFDdkIsNkJBQXNCO2FBQ25CO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ3RCO1lBQ0QsU0FBUyxFQUFFO2dCQUNWLGdDQUFjO2dCQUNkLDhCQUFhO2dCQUNiLDRDQUFvQjtnQkFDcEIsNEJBQVk7YUFDWjtTQUNELENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3BheW1lbnQvcGF5bWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW5jb3Jwb3JhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2luY29ycG9yYXRpb24vaW5jb3Jwb3JhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3RhcnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zdGFydC9zdGFydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXBsb2FkU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXBsb2FkL3VwbG9hZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcblxyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5yZWdpc3RlckVsZW1lbnQoXCJGaWx0ZXJhYmxlTGlzdHBpY2tlclwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWZpbHRlcmFibGUtbGlzdHBpY2tlclwiKS5GaWx0ZXJhYmxlTGlzdHBpY2tlcik7XHJcblxyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG5cdFx0TmF0aXZlU2NyaXB0TW9kdWxlLFxyXG5cdFx0VE5TRm9udEljb25Nb2R1bGUuZm9yUm9vdCh7XHJcblx0XHRcdCdmYSc6ICcuL2Fzc2V0cy9mb250LWF3ZXNvbWUuY3NzJ1xyXG5cdFx0fSksXHJcblx0XHRBcHBSb3V0aW5nTW9kdWxlLFxyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG5cdFx0TmF0aXZlU2NyaXB0SHR0cE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdFBheW1lbnRTZXJ2aWNlLFxyXG5cdFx0VXBsb2FkU2VydmljZSxcclxuXHRcdEluY29ycG9yYXRpb25TZXJ2aWNlLFxyXG5cdFx0U3RhcnRTZXJ2aWNlXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=
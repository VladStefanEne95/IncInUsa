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
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSxzRUFBb0U7QUFDcEUsd0ZBQXNGO0FBQ3RGLGdFQUE4RDtBQUM5RCxtRUFBaUU7QUFDakUsNkNBQXdEO0FBQ3hELGtEQUFtRTtBQUVuRSwyREFBd0Q7QUFDeEQsaURBQStDO0FBMEIvQztJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBeEJyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ3hCLHFDQUFnQjtnQkFDaEIsdUJBQWdCO2dCQUNoQiwrQkFBdUI7Z0JBQ3ZCLDZCQUFzQjthQUNuQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUN0QjtZQUNELFNBQVMsRUFBRTtnQkFDVixnQ0FBYztnQkFDZCw4QkFBYTtnQkFDYiw0Q0FBb0I7Z0JBQ3BCLDRCQUFZO2FBQ1o7U0FDRCxDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9wYXltZW50L3BheW1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IEluY29ycG9yYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmNvcnBvcmF0aW9uL2luY29ycG9yYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFN0YXJ0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc3RhcnQvc3RhcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IFVwbG9hZFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3VwbG9hZC91cGxvYWQuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xyXG5cclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuXHRcdEFwcFJvdXRpbmdNb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcblx0XHROYXRpdmVTY3JpcHRIdHRwTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0UGF5bWVudFNlcnZpY2UsXHJcblx0XHRVcGxvYWRTZXJ2aWNlLFxyXG5cdFx0SW5jb3Jwb3JhdGlvblNlcnZpY2UsXHJcblx0XHRTdGFydFNlcnZpY2VcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==
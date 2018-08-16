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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSxzRUFBb0U7QUFDcEUsd0ZBQXNGO0FBQ3RGLGdFQUE4RDtBQUM5RCxtRUFBaUU7QUFDakUsNkNBQXdEO0FBQ3hELGtEQUFtRTtBQUVuRSwyREFBd0Q7QUFDeEQsaURBQStDO0FBMEIvQztJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBeEJyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ3hCLHFDQUFnQjtnQkFDaEIsdUJBQWdCO2dCQUNoQiwrQkFBdUI7Z0JBQ3ZCLDZCQUFzQjthQUNuQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUN0QjtZQUNELFNBQVMsRUFBRTtnQkFDVixnQ0FBYztnQkFDZCw4QkFBYTtnQkFDYiw0Q0FBb0I7Z0JBQ3BCLDRCQUFZO2FBQ1o7U0FDRCxDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9wYXltZW50L3BheW1lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBJbmNvcnBvcmF0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaW5jb3Jwb3JhdGlvbi9pbmNvcnBvcmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RhcnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zdGFydC9zdGFydC5zZXJ2aWNlJztcbmltcG9ydCB7IFVwbG9hZFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3VwbG9hZC91cGxvYWQuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcblx0XHRBcHBSb3V0aW5nTW9kdWxlLFxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0SHR0cE1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFBheW1lbnRTZXJ2aWNlLFxuXHRcdFVwbG9hZFNlcnZpY2UsXG5cdFx0SW5jb3Jwb3JhdGlvblNlcnZpY2UsXG5cdFx0U3RhcnRTZXJ2aWNlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19
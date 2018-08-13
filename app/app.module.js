"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var payment_service_1 = require("./services/payment/payment.service");
var incorporation_service_1 = require("./services/incorporation/incorporation.service");
var start_service_1 = require("./services/start/start.service");
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
                incorporation_service_1.IncorporationService,
                start_service_1.StartService
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSxzRUFBb0U7QUFDcEUsd0ZBQXNGO0FBQ3RGLGdFQUE4RDtBQUM5RCw2Q0FBd0Q7QUFDeEQsa0RBQW1FO0FBRW5FLDJEQUF3RDtBQUN4RCxpREFBK0M7QUF5Qi9DO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUF2QnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDeEIscUNBQWdCO2dCQUNoQix1QkFBZ0I7Z0JBQ2hCLCtCQUF1QjtnQkFDdkIsNkJBQXNCO2FBQ25CO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ3RCO1lBQ0QsU0FBUyxFQUFFO2dCQUNWLGdDQUFjO2dCQUNkLDRDQUFvQjtnQkFDcEIsNEJBQVk7YUFDWjtTQUNELENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3BheW1lbnQvcGF5bWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IEluY29ycG9yYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmNvcnBvcmF0aW9uL2luY29ycG9yYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTdGFydFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3N0YXJ0L3N0YXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG5cdFx0QXBwUm91dGluZ01vZHVsZSxcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRQYXltZW50U2VydmljZSxcblx0XHRJbmNvcnBvcmF0aW9uU2VydmljZSxcblx0XHRTdGFydFNlcnZpY2Vcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=
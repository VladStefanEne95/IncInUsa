"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var payment_routing_module_1 = require("./payment-routing.module");
var payment_component_1 = require("./payment.component");
var PaymentModule = /** @class */ (function () {
    function PaymentModule() {
    }
    PaymentModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                payment_routing_module_1.PaymentRoutingModule,
                forms_1.NativeScriptFormsModule
            ],
            declarations: [
                payment_component_1.PaymentComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], PaymentModule);
    return PaymentModule;
}());
exports.PaymentModule = PaymentModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXltZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsb0RBQXFFO0FBR3JFLG1FQUFnRTtBQUNoRSx5REFBdUQ7QUFnQnZEO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixhQUFhO1FBYnpCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQzlCLDZDQUFvQjtnQkFDcEIsK0JBQXVCO2FBQ3BCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLG9DQUFnQjthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csYUFBYSxDQUFJO0lBQUQsb0JBQUM7Q0FBQSxBQUE5QixJQUE4QjtBQUFqQixzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cblxuaW1wb3J0IHsgUGF5bWVudFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9wYXltZW50LXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBQYXltZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vcGF5bWVudC5jb21wb25lbnRcIjtcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuXHRcdFBheW1lbnRSb3V0aW5nTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgUGF5bWVudENvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50TW9kdWxlIHsgfVxuIl19
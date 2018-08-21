"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var bank_routing_module_1 = require("./bank-routing.module");
var bank_component_1 = require("./bank.component");
var angular_1 = require("nativescript-checkbox/angular");
var BankModule = /** @class */ (function () {
    function BankModule() {
    }
    BankModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                angular_1.TNSCheckBoxModule,
                forms_1.NativeScriptFormsModule,
                bank_routing_module_1.BankRoutingModule
            ],
            declarations: [
                bank_component_1.BankComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], BankModule);
    return BankModule;
}());
exports.BankModule = BankModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuay5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYW5rLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsb0RBQXFFO0FBRXJFLDZEQUEwRDtBQUMxRCxtREFBaUQ7QUFDakQseURBQWtFO0FBZ0JsRTtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBZHRCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDWCxpQ0FBd0I7Z0JBQ3hCLDJCQUFpQjtnQkFDakIsK0JBQXVCO2dCQUNqQix1Q0FBaUI7YUFDcEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsOEJBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgQmFua1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9iYW5rLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEJhbmtDb21wb25lbnQgfSBmcm9tIFwiLi9iYW5rLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUTlNDaGVja0JveE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jaGVja2JveC9hbmd1bGFyJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcblx0XHROYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcblx0XHRUTlNDaGVja0JveE1vZHVsZSxcclxuXHRcdE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIEJhbmtSb3V0aW5nTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQmFua0NvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCYW5rTW9kdWxlIHsgfVxyXG4iXX0=
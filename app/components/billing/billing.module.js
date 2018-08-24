"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var billing_routing_module_1 = require("./billing-routing.module");
var billing_component_1 = require("./billing.component");
var angular_1 = require("nativescript-checkbox/angular");
var forms_1 = require("nativescript-angular/forms");
var BillingModule = /** @class */ (function () {
    function BillingModule() {
    }
    BillingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                forms_1.NativeScriptFormsModule,
                angular_1.TNSCheckBoxModule,
                billing_routing_module_1.BillingRoutingModule
            ],
            declarations: [
                billing_component_1.BillingComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], BillingModule);
    return BillingModule;
}());
exports.BillingModule = BillingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiaWxsaW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUsbUVBQWdFO0FBQ2hFLHlEQUF1RDtBQUN2RCx5REFBa0U7QUFDbEUsb0RBQXFFO0FBZ0JyRTtJQUFBO0lBQTZCLENBQUM7SUFBakIsYUFBYTtRQWR6QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ1gsaUNBQXdCO2dCQUN4QiwrQkFBdUI7Z0JBQ3ZCLDJCQUFpQjtnQkFDWCw2Q0FBb0I7YUFDdkI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysb0NBQWdCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxhQUFhLENBQUk7SUFBRCxvQkFBQztDQUFBLEFBQTlCLElBQThCO0FBQWpCLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQgeyBCaWxsaW5nUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2JpbGxpbmctcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgQmlsbGluZ0NvbXBvbmVudCB9IGZyb20gXCIuL2JpbGxpbmcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFROU0NoZWNrQm94TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNoZWNrYm94L2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuXHRcdE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuXHRcdE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG5cdFx0VE5TQ2hlY2tCb3hNb2R1bGUsXHJcbiAgICAgICAgQmlsbGluZ1JvdXRpbmdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBCaWxsaW5nQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJpbGxpbmdNb2R1bGUgeyB9XHJcbiJdfQ==
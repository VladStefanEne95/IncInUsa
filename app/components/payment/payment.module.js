"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var angular_1 = require("nativescript-checkbox/angular");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var payment_routing_module_1 = require("./payment-routing.module");
var payment_component_1 = require("./payment.component");
var PaymentModule = /** @class */ (function () {
    function PaymentModule() {
    }
    PaymentModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    'fa': './assets/font-awesome.css'
                }),
                payment_routing_module_1.PaymentRoutingModule,
                angular_1.TNSCheckBoxModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXltZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsb0RBQXFFO0FBQ3JFLHlEQUFrRTtBQUNsRSx1RUFBOEQ7QUFFOUQsbUVBQWdFO0FBQ2hFLHlEQUF1RDtBQW9CdkQ7SUFBQTtJQUE2QixDQUFDO0lBQWpCLGFBQWE7UUFqQnpCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDWCxpQ0FBd0I7Z0JBQ3hCLDZDQUFpQixDQUFDLE9BQU8sQ0FBQztvQkFDekIsSUFBSSxFQUFFLDJCQUEyQjtpQkFDakMsQ0FBQztnQkFDRiw2Q0FBb0I7Z0JBQ3BCLDJCQUFpQjtnQkFDakIsK0JBQXVCO2FBQ3BCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLG9DQUFnQjthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csYUFBYSxDQUFJO0lBQUQsb0JBQUM7Q0FBQSxBQUE5QixJQUE4QjtBQUFqQixzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBUTlNDaGVja0JveE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jaGVja2JveC9hbmd1bGFyJztcclxuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcclxuXHJcbmltcG9ydCB7IFBheW1lbnRSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vcGF5bWVudC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBQYXltZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vcGF5bWVudC5jb21wb25lbnRcIjtcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG5cdFx0TmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG5cdFx0VE5TRm9udEljb25Nb2R1bGUuZm9yUm9vdCh7XHJcblx0XHRcdCdmYSc6ICcuL2Fzc2V0cy9mb250LWF3ZXNvbWUuY3NzJ1xyXG5cdFx0fSksXHJcblx0XHRQYXltZW50Um91dGluZ01vZHVsZSxcclxuXHRcdFROU0NoZWNrQm94TW9kdWxlLFxyXG5cdFx0TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBQYXltZW50Q29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBheW1lbnRNb2R1bGUgeyB9XHJcbiJdfQ==
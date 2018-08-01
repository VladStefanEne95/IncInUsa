"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var fileupload_routing_module_1 = require("./fileupload-routing.module");
var fileupload_component_1 = require("./fileupload.component");
var forms_1 = require("nativescript-angular/forms");
var angular_1 = require("nativescript-drop-down/angular");
var FileuploadModule = /** @class */ (function () {
    function FileuploadModule() {
    }
    FileuploadModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                forms_1.NativeScriptFormsModule,
                angular_1.DropDownModule,
                fileupload_routing_module_1.FileuploadRoutingModule
            ],
            declarations: [
                fileupload_component_1.FileuploadComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], FileuploadModule);
    return FileuploadModule;
}());
exports.FileuploadModule = FileuploadModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXVwbG9hZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxldXBsb2FkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUseUVBQXNFO0FBQ3RFLCtEQUE2RDtBQUM3RCxvREFBcUU7QUFDckUsMERBQWdFO0FBaUJoRTtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBZDVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDWCxpQ0FBd0I7Z0JBQ3hCLCtCQUF1QjtnQkFDdkIsd0JBQWM7Z0JBQ1IsbURBQXVCO2FBQzFCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDBDQUFtQjthQUN0QjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHsgRmlsZXVwbG9hZFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9maWxldXBsb2FkLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBGaWxldXBsb2FkQ29tcG9uZW50IH0gZnJvbSBcIi4vZmlsZXVwbG9hZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBEcm9wRG93bk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duL2FuZ3VsYXJcIjtcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcblx0XHROYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG5cdFx0RHJvcERvd25Nb2R1bGUsXG4gICAgICAgIEZpbGV1cGxvYWRSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgRmlsZXVwbG9hZENvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBGaWxldXBsb2FkTW9kdWxlIHsgfVxuIl19
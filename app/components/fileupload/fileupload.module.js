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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXVwbG9hZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxldXBsb2FkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUseUVBQXNFO0FBQ3RFLCtEQUE2RDtBQUM3RCxvREFBcUU7QUFDckUsMERBQWdFO0FBaUJoRTtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBZDVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDWCxpQ0FBd0I7Z0JBQ3hCLCtCQUF1QjtnQkFDdkIsd0JBQWM7Z0JBQ1IsbURBQXVCO2FBQzFCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDBDQUFtQjthQUN0QjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgRmlsZXVwbG9hZFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9maWxldXBsb2FkLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEZpbGV1cGxvYWRDb21wb25lbnQgfSBmcm9tIFwiLi9maWxldXBsb2FkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBEcm9wRG93bk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duL2FuZ3VsYXJcIjtcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG5cdFx0TmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG5cdFx0TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcblx0XHREcm9wRG93bk1vZHVsZSxcclxuICAgICAgICBGaWxldXBsb2FkUm91dGluZ01vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEZpbGV1cGxvYWRDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsZXVwbG9hZE1vZHVsZSB7IH1cclxuIl19
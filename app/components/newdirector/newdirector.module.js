"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var newdirector_routing_module_1 = require("./newdirector-routing.module");
var newdirector_component_1 = require("./newdirector.component");
var NewDirectorModule = /** @class */ (function () {
    function NewDirectorModule() {
    }
    NewDirectorModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                forms_1.NativeScriptFormsModule,
                newdirector_routing_module_1.NewDirectorRoutingModule
            ],
            declarations: [
                newdirector_component_1.NewDirectorComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], NewDirectorModule);
    return NewDirectorModule;
}());
exports.NewDirectorModule = NewDirectorModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3ZGlyZWN0b3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV3ZGlyZWN0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxvREFBcUU7QUFDckUsMkVBQXdFO0FBQ3hFLGlFQUErRDtBQWUvRDtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBYjdCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDWCxpQ0FBd0I7Z0JBQ3hCLCtCQUF1QjtnQkFDakIscURBQXdCO2FBQzNCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRDQUFvQjthQUN2QjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBLEFBQWxDLElBQWtDO0FBQXJCLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOZXdEaXJlY3RvclJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9uZXdkaXJlY3Rvci1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgTmV3RGlyZWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi9uZXdkaXJlY3Rvci5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG5cdFx0TmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOZXdEaXJlY3RvclJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBOZXdEaXJlY3RvckNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZXdEaXJlY3Rvck1vZHVsZSB7IH1cbiJdfQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var view_director_routing_module_1 = require("./view-director-routing.module");
var view_director_component_1 = require("./view-director.component");
var ViewDirectorModule = /** @class */ (function () {
    function ViewDirectorModule() {
    }
    ViewDirectorModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                forms_1.NativeScriptFormsModule,
                view_director_routing_module_1.ViewDirectorRoutingModule
            ],
            declarations: [
                view_director_component_1.ViewDirectorComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ViewDirectorModule);
    return ViewDirectorModule;
}());
exports.ViewDirectorModule = ViewDirectorModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1kaXJlY3Rvci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWV3LWRpcmVjdG9yLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsb0RBQXFFO0FBQ3JFLCtFQUEyRTtBQUMzRSxxRUFBa0U7QUFlbEU7SUFBQTtJQUFrQyxDQUFDO0lBQXRCLGtCQUFrQjtRQWI5QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ1gsaUNBQXdCO2dCQUN4QiwrQkFBdUI7Z0JBQ2pCLHdEQUF5QjthQUM1QjtZQUNELFlBQVksRUFBRTtnQkFDViwrQ0FBcUI7YUFDeEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGtCQUFrQixDQUFJO0lBQUQseUJBQUM7Q0FBQSxBQUFuQyxJQUFtQztBQUF0QixnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgVmlld0RpcmVjdG9yUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3ZpZXctZGlyZWN0b3Itcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgVmlld0RpcmVjdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy1kaXJlY3Rvci5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcblx0XHROYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcblx0XHROYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgICAgICBWaWV3RGlyZWN0b3JSb3V0aW5nTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgVmlld0RpcmVjdG9yQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZpZXdEaXJlY3Rvck1vZHVsZSB7IH1cclxuIl19
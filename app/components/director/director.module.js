"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var director_routing_module_1 = require("./director-routing.module");
var director_component_1 = require("./director.component");
var DirectorModule = /** @class */ (function () {
    function DirectorModule() {
    }
    DirectorModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                forms_1.NativeScriptFormsModule,
                director_routing_module_1.DirectorRoutingModule
            ],
            declarations: [
                director_component_1.DirectorComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], DirectorModule);
    return DirectorModule;
}());
exports.DirectorModule = DirectorModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0b3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlyZWN0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxvREFBcUU7QUFDckUscUVBQWtFO0FBQ2xFLDJEQUF5RDtBQWV6RDtJQUFBO0lBQThCLENBQUM7SUFBbEIsY0FBYztRQWIxQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ1gsaUNBQXdCO2dCQUN4QiwrQkFBdUI7Z0JBQ2pCLCtDQUFxQjthQUN4QjtZQUNELFlBQVksRUFBRTtnQkFDVixzQ0FBaUI7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGNBQWMsQ0FBSTtJQUFELHFCQUFDO0NBQUEsQUFBL0IsSUFBK0I7QUFBbEIsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgRGlyZWN0b3JSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vZGlyZWN0b3Itcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IERpcmVjdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vZGlyZWN0b3IuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuXHRcdE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgRGlyZWN0b3JSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgRGlyZWN0b3JDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRGlyZWN0b3JNb2R1bGUgeyB9XG4iXX0=
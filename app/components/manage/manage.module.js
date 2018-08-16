"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var manage_routing_module_1 = require("./manage-routing.module");
var manage_component_1 = require("./manage.component");
var shared_module_1 = require("./../../shared.module");
var ManageModule = /** @class */ (function () {
    function ManageModule() {
    }
    ManageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                forms_1.NativeScriptFormsModule,
                manage_routing_module_1.ManageRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                manage_component_1.ManageComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ManageModule);
    return ManageModule;
}());
exports.ManageModule = ManageModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hbmFnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLG9EQUFxRTtBQUNyRSxpRUFBOEQ7QUFDOUQsdURBQXFEO0FBRXJELHVEQUFxRDtBQWdCckQ7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFkeEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNYLGlDQUF3QjtnQkFDeEIsK0JBQXVCO2dCQUN2QiwyQ0FBbUI7Z0JBQ25CLDRCQUFZO2FBQ1Q7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysa0NBQWU7YUFDbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTWFuYWdlUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL21hbmFnZS1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgTWFuYWdlQ29tcG9uZW50IH0gZnJvbSBcIi4vbWFuYWdlLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLy4uLy4uL3NoYXJlZC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcblx0XHROYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG5cdFx0TWFuYWdlUm91dGluZ01vZHVsZSxcblx0XHRTaGFyZWRNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBNYW5hZ2VDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTWFuYWdlTW9kdWxlIHsgfVxuIl19
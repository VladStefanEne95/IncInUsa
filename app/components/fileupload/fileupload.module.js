"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var fileupload_routing_module_1 = require("./fileupload-routing.module");
var fileupload_component_1 = require("./fileupload.component");
var FileuploadModule = /** @class */ (function () {
    function FileuploadModule() {
    }
    FileuploadModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXVwbG9hZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxldXBsb2FkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUseUVBQXNFO0FBQ3RFLCtEQUE2RDtBQWM3RDtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBWjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLG1EQUF1QjthQUMxQjtZQUNELFlBQVksRUFBRTtnQkFDViwwQ0FBbUI7YUFDdEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IEZpbGV1cGxvYWRSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vZmlsZXVwbG9hZC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgRmlsZXVwbG9hZENvbXBvbmVudCB9IGZyb20gXCIuL2ZpbGV1cGxvYWQuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIEZpbGV1cGxvYWRSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgRmlsZXVwbG9hZENvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBGaWxldXBsb2FkTW9kdWxlIHsgfVxuIl19
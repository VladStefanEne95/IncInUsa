"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var status_update_pipe_1 = require("./pipes/status-update.pipe");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                status_update_pipe_1.StatusUpdate
            ],
            exports: [
                status_update_pipe_1.StatusUpdate
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZSAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaGFyZWQubW9kdWxlIC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBDQUErQztBQUMvQyxzQ0FBeUM7QUFDekMsaUVBQTBEO0FBYTFEO0lBQUE7SUFBNEIsQ0FBQztJQUFoQixZQUFZO1FBWHhCLGVBQVEsQ0FBQztZQUNULE9BQU8sRUFBRTtnQkFDUixxQkFBWTthQUNaO1lBQ0UsWUFBWSxFQUFFO2dCQUNWLGlDQUFZO2FBQ2xCO1lBQ0QsT0FBTyxFQUFFO2dCQUNGLGlDQUFZO2FBQ2Y7U0FDSixDQUFDO09BQ1csWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQSxBQUE3QixJQUE2QjtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdGF0dXNVcGRhdGUgfSBmcm9tICcuL3BpcGVzL3N0YXR1cy11cGRhdGUucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFsgXG5cdFx0Q29tbW9uTW9kdWxlIFxuXHRdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdGF0dXNVcGRhdGVcblx0XSxcblx0ZXhwb3J0czogW1xuICAgICAgICBTdGF0dXNVcGRhdGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7IH1cbiJdfQ==
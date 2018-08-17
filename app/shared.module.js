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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBK0M7QUFDL0Msc0NBQXlDO0FBQ3pDLGlFQUEwRDtBQWExRDtJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQVh4QixlQUFRLENBQUM7WUFDVCxPQUFPLEVBQUU7Z0JBQ1IscUJBQVk7YUFDWjtZQUNFLFlBQVksRUFBRTtnQkFDVixpQ0FBWTthQUNsQjtZQUNELE9BQU8sRUFBRTtnQkFDRixpQ0FBWTthQUNmO1NBQ0osQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0YXR1c1VwZGF0ZSB9IGZyb20gJy4vcGlwZXMvc3RhdHVzLXVwZGF0ZS5waXBlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogWyBcclxuXHRcdENvbW1vbk1vZHVsZSBcclxuXHRdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgU3RhdHVzVXBkYXRlXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcbiAgICAgICAgU3RhdHVzVXBkYXRlXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUgeyB9XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBK0M7QUFDL0Msc0NBQXlDO0FBQ3pDLGlFQUEwRDtBQWExRDtJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQVh4QixlQUFRLENBQUM7WUFDVCxPQUFPLEVBQUU7Z0JBQ1IscUJBQVk7YUFDWjtZQUNFLFlBQVksRUFBRTtnQkFDVixpQ0FBWTthQUNsQjtZQUNELE9BQU8sRUFBRTtnQkFDRixpQ0FBWTthQUNmO1NBQ0osQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3RhdHVzVXBkYXRlIH0gZnJvbSAnLi9waXBlcy9zdGF0dXMtdXBkYXRlLnBpcGUnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbIFxuXHRcdENvbW1vbk1vZHVsZSBcblx0XSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3RhdHVzVXBkYXRlXG5cdF0sXG5cdGV4cG9ydHM6IFtcbiAgICAgICAgU3RhdHVzVXBkYXRlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUgeyB9XG4iXX0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var StartService = /** @class */ (function () {
    function StartService(http, router) {
        this.http = http;
        this.router = router;
        this.submitUrl = "http://bf18aabd.ngrok.io/incorporation-data/refresh/";
    }
    StartService.prototype.refreshStatus = function (uuid) {
        return this.http.get(this.submitUrl + uuid);
    };
    StartService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], StartService);
    return StartService;
}());
exports.StartService = StartService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsNkNBQWdFO0FBQ2hFLDBDQUF5QztBQUl6QztJQUlFLHNCQUFvQixJQUFnQixFQUFVLE1BQWM7UUFBeEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGcEQsY0FBUyxHQUFHLHNEQUFzRCxDQUFDO0lBRVgsQ0FBQztJQUVqRSxvQ0FBYSxHQUFiLFVBQWMsSUFBSTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBUlUsWUFBWTtRQUR4QixpQkFBVSxFQUFFO3lDQUtlLGlCQUFVLEVBQWtCLGVBQU07T0FKakQsWUFBWSxDQVN4QjtJQUFELG1CQUFDO0NBQUEsQUFURCxJQVNDO0FBVFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCAgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3RhcnRTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBzdWJtaXRVcmwgPSBcImh0dHA6Ly9iZjE4YWFiZC5uZ3Jvay5pby9pbmNvcnBvcmF0aW9uLWRhdGEvcmVmcmVzaC9cIjtcclxuICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfSBcclxuICBcclxuICByZWZyZXNoU3RhdHVzKHV1aWQpIHtcclxuXHRyZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnN1Ym1pdFVybCArIHV1aWQpOyBcdFxyXG4gIH1cclxufSJdfQ==
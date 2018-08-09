"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var PaymentService = /** @class */ (function () {
    function PaymentService(http, router) {
        this.http = http;
        this.router = router;
        this.submitUrl = "http://c7d35988.ngrok.io/payment/";
    }
    PaymentService.prototype.submitToken = function (token) {
        console.log(token);
        return this.http.get("" + this.submitUrl + token);
    };
    PaymentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], PaymentService);
    return PaymentService;
}());
exports.PaymentService = PaymentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGF5bWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDZDQUFnRTtBQUNoRSwwQ0FBeUM7QUFJekM7SUFJRSx3QkFBb0IsSUFBZ0IsRUFBVSxNQUFjO1FBQXhDLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRnBELGNBQVMsR0FBRyxtQ0FBbUMsQ0FBQztJQUVRLENBQUM7SUFFakUsb0NBQVcsR0FBWCxVQUFZLEtBQWE7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQU8sQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFUVSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBS2UsaUJBQVUsRUFBa0IsZUFBTTtPQUpqRCxjQUFjLENBVzFCO0lBQUQscUJBQUM7Q0FBQSxBQVhELElBV0M7QUFYWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsICBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQYXltZW50U2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgc3VibWl0VXJsID0gXCJodHRwOi8vYzdkMzU5ODgubmdyb2suaW8vcGF5bWVudC9cIjtcclxuICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG4gIFxyXG4gIHN1Ym1pdFRva2VuKHRva2VuOiBzdHJpbmcpIHtcclxuXHRjb25zb2xlLmxvZyh0b2tlbik7XHJcblx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5zdWJtaXRVcmx9JHt0b2tlbn1gKTsgXHRcclxuICB9XHJcblxyXG59Il19
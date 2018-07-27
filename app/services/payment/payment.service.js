"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var PaymentService = /** @class */ (function () {
    function PaymentService(http, router) {
        this.http = http;
        this.router = router;
        this.submitUrl = "http://localhost:3000/";
    }
    PaymentService.prototype.submitToken = function (token) {
        console.log(token);
        return this.http.get("http://localhost:3000/test");
    };
    PaymentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], PaymentService);
    return PaymentService;
}());
exports.PaymentService = PaymentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGF5bWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDZDQUFnRTtBQUNoRSwwQ0FBeUM7QUFJekM7SUFJRSx3QkFBb0IsSUFBZ0IsRUFBVSxNQUFjO1FBQXhDLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRnBELGNBQVMsR0FBRyx3QkFBd0IsQ0FBQztJQUVtQixDQUFDO0lBRWpFLG9DQUFXLEdBQVgsVUFBWSxLQUFhO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQVRVLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FLZSxpQkFBVSxFQUFrQixlQUFNO09BSmpELGNBQWMsQ0FXMUI7SUFBRCxxQkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBheW1lbnRTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBzdWJtaXRVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIjtcclxuICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG4gIFxyXG4gIHN1Ym1pdFRva2VuKHRva2VuOiBzdHJpbmcpIHtcclxuXHQgIGNvbnNvbGUubG9nKHRva2VuKTtcclxuXHQgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3Rlc3RcIik7IFx0XHJcbiAgfVxyXG5cclxufSJdfQ==
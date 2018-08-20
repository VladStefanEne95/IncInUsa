"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var PaymentService = /** @class */ (function () {
    function PaymentService(http, router) {
        this.http = http;
        this.router = router;
        this.submitUrl = "http://4f0b569b.ngrok.io/payment/";
    }
    PaymentService.prototype.submitToken = function (token) {
        console.log(token);
        var headears = new http_1.HttpHeaders();
        headears.append('Content-Type', 'application/json');
        return this.http.post(this.submitUrl, { stripeToken: token });
    };
    PaymentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], PaymentService);
    return PaymentService;
}());
exports.PaymentService = PaymentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGF5bWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDZDQUFnRTtBQUNoRSwwQ0FBeUM7QUFJekM7SUFJRSx3QkFBb0IsSUFBZ0IsRUFBVSxNQUFjO1FBQXhDLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRnBELGNBQVMsR0FBRyxtQ0FBbUMsQ0FBQztJQUVRLENBQUM7SUFFakUsb0NBQVcsR0FBWCxVQUFZLEtBQWE7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLFFBQVEsR0FBRyxJQUFJLGtCQUFXLEVBQUUsQ0FBQztRQUNqQyxRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUMsV0FBVyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQVhVLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FLZSxpQkFBVSxFQUFrQixlQUFNO09BSmpELGNBQWMsQ0FhMUI7SUFBRCxxQkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBheW1lbnRTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBzdWJtaXRVcmwgPSBcImh0dHA6Ly80ZjBiNTY5Yi5uZ3Jvay5pby9wYXltZW50L1wiO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcbiAgXHJcbiAgc3VibWl0VG9rZW4odG9rZW46IHN0cmluZykge1xyXG5cdGNvbnNvbGUubG9nKHRva2VuKTtcclxuXHRsZXQgaGVhZGVhcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuXHRoZWFkZWFycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcblx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuc3VibWl0VXJsLCB7c3RyaXBlVG9rZW46IHRva2VufSk7IFx0XHJcbiAgfVxyXG5cclxufSJdfQ==
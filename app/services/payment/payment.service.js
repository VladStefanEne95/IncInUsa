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
    PaymentService.prototype.submitToken = function (token, payment) {
        console.log(token);
        var headears = new http_1.HttpHeaders();
        headears.append('Content-Type', 'application/json');
        return this.http.post(this.submitUrl, { stripeToken: token, sum: payment });
    };
    PaymentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], PaymentService);
    return PaymentService;
}());
exports.PaymentService = PaymentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGF5bWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDZDQUFnRTtBQUNoRSwwQ0FBeUM7QUFJekM7SUFJRSx3QkFBb0IsSUFBZ0IsRUFBVSxNQUFjO1FBQXhDLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRnBELGNBQVMsR0FBRyxtQ0FBbUMsQ0FBQztJQUVRLENBQUM7SUFFakUsb0NBQVcsR0FBWCxVQUFZLEtBQWEsRUFBRSxPQUFlO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxrQkFBVyxFQUFFLENBQUM7UUFDakMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNwRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQVhVLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FLZSxpQkFBVSxFQUFrQixlQUFNO09BSmpELGNBQWMsQ0FhMUI7SUFBRCxxQkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBheW1lbnRTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBzdWJtaXRVcmwgPSBcImh0dHA6Ly80ZjBiNTY5Yi5uZ3Jvay5pby9wYXltZW50L1wiO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcbiAgXHJcbiAgc3VibWl0VG9rZW4odG9rZW46IHN0cmluZywgcGF5bWVudDogbnVtYmVyKSB7XHJcblx0Y29uc29sZS5sb2codG9rZW4pO1xyXG5cdGxldCBoZWFkZWFycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG5cdGhlYWRlYXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuXHRyZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5zdWJtaXRVcmwsIHtzdHJpcGVUb2tlbjogdG9rZW4sIHN1bTogcGF5bWVudH0pOyBcdFxyXG4gIH1cclxuXHJcbn0iXX0=
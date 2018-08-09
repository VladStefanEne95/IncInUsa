"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var IncorporationService = /** @class */ (function () {
    function IncorporationService(http, router) {
        this.http = http;
        this.router = router;
        this.submitUrl = "http://a891c9ec.ngrok.io/payment/";
    }
    IncorporationService.prototype.submitData = function (firstName, lastName, email, al1, al2, city, postal, country, state, directors, uuid) {
        console.log(uuid);
        var data = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "al1": al1,
            "al2": al2,
            "city": city,
            "postal": postal,
            "country": country,
            "state": state,
            "uuid": uuid,
            "directors": directors
        };
        var body = JSON.stringify(data);
        var headears = new http_1.HttpHeaders();
        headears.append('Content-Type', 'application/json');
        return this.http.post("" + this.submitUrl, data, { headers: headears });
    };
    IncorporationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], IncorporationService);
    return IncorporationService;
}());
exports.IncorporationService = IncorporationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jb3Jwb3JhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5jb3Jwb3JhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDZDQUFnRTtBQUNoRSwwQ0FBeUM7QUFJekM7SUFJRSw4QkFBb0IsSUFBZ0IsRUFBVSxNQUFjO1FBQXhDLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRnBELGNBQVMsR0FBRyxtQ0FBbUMsQ0FBQztJQUVRLENBQUM7SUFFakUseUNBQVUsR0FBVixVQUFXLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJO1FBRS9GLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsSUFBSSxJQUFJLEdBQUc7WUFDWixXQUFXLEVBQUUsU0FBUztZQUN0QixVQUFVLEVBQUUsUUFBUTtZQUNwQixPQUFPLEVBQUUsS0FBSztZQUNkLEtBQUssRUFBRSxHQUFHO1lBQ1YsS0FBSyxFQUFFLEdBQUc7WUFDVixNQUFNLEVBQUUsSUFBSTtZQUNaLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLE9BQU8sRUFBRSxLQUFLO1lBQ2QsTUFBTSxFQUFFLElBQUk7WUFDWixXQUFXLEVBQUUsU0FBUztTQUNwQixDQUFBO1FBQ0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLFFBQVEsR0FBRyxJQUFJLGtCQUFXLEVBQUUsQ0FBQztRQUNqQyxRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFHLElBQUksQ0FBQyxTQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQTFCVSxvQkFBb0I7UUFEaEMsaUJBQVUsRUFBRTt5Q0FLZSxpQkFBVSxFQUFrQixlQUFNO09BSmpELG9CQUFvQixDQTRCaEM7SUFBRCwyQkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsICBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJbmNvcnBvcmF0aW9uU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgc3VibWl0VXJsID0gXCJodHRwOi8vYTg5MWM5ZWMubmdyb2suaW8vcGF5bWVudC9cIjtcclxuICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG4gIFxyXG4gIHN1Ym1pdERhdGEoZmlyc3ROYW1lLCBsYXN0TmFtZSwgZW1haWwsIGFsMSwgYWwyLCBjaXR5LCBwb3N0YWwsIGNvdW50cnksIHN0YXRlLCBkaXJlY3RvcnMsIHV1aWQpIHtcclxuXHJcblx0Y29uc29sZS5sb2codXVpZCk7XHJcblx0ICBsZXQgZGF0YSA9IHtcclxuXHRcdFwiZmlyc3ROYW1lXCI6IGZpcnN0TmFtZSxcclxuXHRcdFwibGFzdE5hbWVcIjogbGFzdE5hbWUsXHJcblx0XHRcImVtYWlsXCI6IGVtYWlsLCBcclxuXHRcdFwiYWwxXCI6IGFsMSwgXHJcblx0XHRcImFsMlwiOiBhbDIsIFxyXG5cdFx0XCJjaXR5XCI6IGNpdHksIFxyXG5cdFx0XCJwb3N0YWxcIjogcG9zdGFsLCBcclxuXHRcdFwiY291bnRyeVwiOiBjb3VudHJ5LCBcclxuXHRcdFwic3RhdGVcIjogc3RhdGUsIFxyXG5cdFx0XCJ1dWlkXCI6IHV1aWQsXHJcblx0XHRcImRpcmVjdG9yc1wiOiBkaXJlY3RvcnNcclxuXHQgIH1cclxuXHQgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcblx0ICBsZXQgaGVhZGVhcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuXHQgIGhlYWRlYXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuXHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5zdWJtaXRVcmx9YCwgZGF0YSwge2hlYWRlcnM6IGhlYWRlYXJzfSk7IFx0XHJcbiAgfVxyXG5cclxufSJdfQ==
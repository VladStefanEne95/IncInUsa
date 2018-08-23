"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var IncorporationService = /** @class */ (function () {
    function IncorporationService(http, router) {
        this.http = http;
        this.router = router;
        this.submitUrl = "http://5066c173.ngrok.io/incorporation-data/";
    }
    IncorporationService.prototype.submitData = function (firstName, lastName, email, al1, al2, city, postal, country, state, directors, uuid, companyName, companyType) {
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
            "directors": directors,
            "companyName": companyName,
            "companyType": companyType
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jb3Jwb3JhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5jb3Jwb3JhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDZDQUFnRTtBQUNoRSwwQ0FBeUM7QUFJekM7SUFJRSw4QkFBb0IsSUFBZ0IsRUFBVSxNQUFjO1FBQXhDLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRnBELGNBQVMsR0FBRyw4Q0FBOEMsQ0FBQztJQUVILENBQUM7SUFFakUseUNBQVUsR0FBVixVQUFXLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFdBQVc7UUFFekgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQixJQUFJLElBQUksR0FBRztZQUNaLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLE9BQU8sRUFBRSxLQUFLO1lBQ2QsS0FBSyxFQUFFLEdBQUc7WUFDVixLQUFLLEVBQUUsR0FBRztZQUNWLE1BQU0sRUFBRSxJQUFJO1lBQ1osUUFBUSxFQUFFLE1BQU07WUFDaEIsU0FBUyxFQUFFLE9BQU87WUFDbEIsT0FBTyxFQUFFLEtBQUs7WUFDZCxNQUFNLEVBQUUsSUFBSTtZQUNaLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLGFBQWEsRUFBRSxXQUFXO1lBQzFCLGFBQWEsRUFBRSxXQUFXO1NBQ3hCLENBQUE7UUFDRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksUUFBUSxHQUFHLElBQUksa0JBQVcsRUFBRSxDQUFDO1FBQ2pDLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUcsSUFBSSxDQUFDLFNBQVcsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBNUJVLG9CQUFvQjtRQURoQyxpQkFBVSxFQUFFO3lDQUtlLGlCQUFVLEVBQWtCLGVBQU07T0FKakQsb0JBQW9CLENBOEJoQztJQUFELDJCQUFDO0NBQUEsQUE5QkQsSUE4QkM7QUE5Qlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEluY29ycG9yYXRpb25TZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBzdWJtaXRVcmwgPSBcImh0dHA6Ly81MDY2YzE3My5uZ3Jvay5pby9pbmNvcnBvcmF0aW9uLWRhdGEvXCI7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuICBcclxuICBzdWJtaXREYXRhKGZpcnN0TmFtZSwgbGFzdE5hbWUsIGVtYWlsLCBhbDEsIGFsMiwgY2l0eSwgcG9zdGFsLCBjb3VudHJ5LCBzdGF0ZSwgZGlyZWN0b3JzLCB1dWlkLCBjb21wYW55TmFtZSwgY29tcGFueVR5cGUpIHtcclxuXHJcblx0Y29uc29sZS5sb2codXVpZCk7XHJcblx0ICBsZXQgZGF0YSA9IHtcclxuXHRcdFwiZmlyc3ROYW1lXCI6IGZpcnN0TmFtZSxcclxuXHRcdFwibGFzdE5hbWVcIjogbGFzdE5hbWUsXHJcblx0XHRcImVtYWlsXCI6IGVtYWlsLCBcclxuXHRcdFwiYWwxXCI6IGFsMSwgXHJcblx0XHRcImFsMlwiOiBhbDIsIFxyXG5cdFx0XCJjaXR5XCI6IGNpdHksIFxyXG5cdFx0XCJwb3N0YWxcIjogcG9zdGFsLCBcclxuXHRcdFwiY291bnRyeVwiOiBjb3VudHJ5LCBcclxuXHRcdFwic3RhdGVcIjogc3RhdGUsIFxyXG5cdFx0XCJ1dWlkXCI6IHV1aWQsXHJcblx0XHRcImRpcmVjdG9yc1wiOiBkaXJlY3RvcnMsXHJcblx0XHRcImNvbXBhbnlOYW1lXCI6IGNvbXBhbnlOYW1lLFxyXG5cdFx0XCJjb21wYW55VHlwZVwiOiBjb21wYW55VHlwZVxyXG5cdCAgfVxyXG5cdCAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuXHQgIGxldCBoZWFkZWFycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG5cdCAgaGVhZGVhcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG5cdHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnN1Ym1pdFVybH1gLCBkYXRhLCB7aGVhZGVyczogaGVhZGVhcnN9KTsgXHRcclxuICB9XHJcblxyXG59Il19
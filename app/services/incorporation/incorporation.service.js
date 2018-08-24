"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var IncorporationService = /** @class */ (function () {
    function IncorporationService(http, router) {
        this.http = http;
        this.router = router;
        this.submitUrl = "http://7409d3fd.ngrok.io/incorporation-data/";
    }
    IncorporationService.prototype.submitBilling = function (firstName, lastName, email, al1, al2, city, postal, country, state, uuid, emoji) {
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
            "emoji": emoji
        };
        var body = JSON.stringify(data);
        var headears = new http_1.HttpHeaders();
        headears.append('Content-Type', 'application/json');
        return this.http.post("http://7409d3fd.ngrok.io/incorporation-data/billing", data, { headers: headears });
    };
    IncorporationService.prototype.submitData = function (firstName, lastName, email, al1, al2, city, postal, country, state, directors, uuid, companyName, companyType, emoji) {
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
            "emoji": emoji,
            "directors": directors,
            "companyName": companyName,
            "companyType": companyType
        };
        var body = JSON.stringify(data);
        var headears = new http_1.HttpHeaders();
        headears.append('Content-Type', 'application/json');
        return this.http.post(this.submitUrl, data, { headers: headears });
    };
    IncorporationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], IncorporationService);
    return IncorporationService;
}());
exports.IncorporationService = IncorporationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jb3Jwb3JhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5jb3Jwb3JhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDZDQUFnRTtBQUNoRSwwQ0FBeUM7QUFJekM7SUFJRSw4QkFBb0IsSUFBZ0IsRUFBVSxNQUFjO1FBQXhDLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRnBELGNBQVMsR0FBRyw4Q0FBOEMsQ0FBQztJQUVILENBQUM7SUFFakUsNENBQWEsR0FBYixVQUFjLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLO1FBRTlGLElBQUksSUFBSSxHQUFHO1lBQ1QsV0FBVyxFQUFFLFNBQVM7WUFDdEIsVUFBVSxFQUFFLFFBQVE7WUFDcEIsT0FBTyxFQUFFLEtBQUs7WUFDZCxLQUFLLEVBQUUsR0FBRztZQUNWLEtBQUssRUFBRSxHQUFHO1lBQ1YsTUFBTSxFQUFFLElBQUk7WUFDWixRQUFRLEVBQUUsTUFBTTtZQUNoQixTQUFTLEVBQUUsT0FBTztZQUNsQixPQUFPLEVBQUUsS0FBSztZQUNkLE1BQU0sRUFBRSxJQUFJO1lBQ1osT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFBO1FBQ0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLFFBQVEsR0FBRyxJQUFJLGtCQUFXLEVBQUUsQ0FBQztRQUNqQyxRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxREFBcUQsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBRUQseUNBQVUsR0FBVixVQUFXLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxLQUFLO1FBRWhJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsSUFBSSxJQUFJLEdBQUc7WUFDWixXQUFXLEVBQUUsU0FBUztZQUN0QixVQUFVLEVBQUUsUUFBUTtZQUNwQixPQUFPLEVBQUUsS0FBSztZQUNkLEtBQUssRUFBRSxHQUFHO1lBQ1YsS0FBSyxFQUFFLEdBQUc7WUFDVixNQUFNLEVBQUUsSUFBSTtZQUNaLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLE9BQU8sRUFBRSxLQUFLO1lBQ2QsTUFBTSxFQUFFLElBQUk7WUFDWixPQUFPLEVBQUUsS0FBSztZQUNkLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLGFBQWEsRUFBRSxXQUFXO1lBQzFCLGFBQWEsRUFBRSxXQUFXO1NBQ3hCLENBQUE7UUFDRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksUUFBUSxHQUFHLElBQUksa0JBQVcsRUFBRSxDQUFDO1FBQ2pDLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQWxEVSxvQkFBb0I7UUFEaEMsaUJBQVUsRUFBRTt5Q0FLZSxpQkFBVSxFQUFrQixlQUFNO09BSmpELG9CQUFvQixDQW9EaEM7SUFBRCwyQkFBQztDQUFBLEFBcERELElBb0RDO0FBcERZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsICBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJbmNvcnBvcmF0aW9uU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgc3VibWl0VXJsID0gXCJodHRwOi8vNzQwOWQzZmQubmdyb2suaW8vaW5jb3Jwb3JhdGlvbi1kYXRhL1wiO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcblxyXG4gIHN1Ym1pdEJpbGxpbmcoZmlyc3ROYW1lLCBsYXN0TmFtZSwgZW1haWwsIGFsMSwgYWwyLCBjaXR5LCBwb3N0YWwsIGNvdW50cnksIHN0YXRlLCB1dWlkLCBlbW9qaSkge1xyXG5cdCAgXHJcblx0bGV0IGRhdGEgPSB7XHJcblx0ICBcImZpcnN0TmFtZVwiOiBmaXJzdE5hbWUsXHJcblx0ICBcImxhc3ROYW1lXCI6IGxhc3ROYW1lLFxyXG5cdCAgXCJlbWFpbFwiOiBlbWFpbCwgXHJcblx0ICBcImFsMVwiOiBhbDEsIFxyXG5cdCAgXCJhbDJcIjogYWwyLCBcclxuXHQgIFwiY2l0eVwiOiBjaXR5LCBcclxuXHQgIFwicG9zdGFsXCI6IHBvc3RhbCwgXHJcblx0ICBcImNvdW50cnlcIjogY291bnRyeSwgXHJcblx0ICBcInN0YXRlXCI6IHN0YXRlLCBcclxuXHQgIFwidXVpZFwiOiB1dWlkLFxyXG5cdCAgXCJlbW9qaVwiOiBlbW9qaVxyXG5cdH1cclxuXHRsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG5cdGxldCBoZWFkZWFycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG5cdGhlYWRlYXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXCJodHRwOi8vNzQwOWQzZmQubmdyb2suaW8vaW5jb3Jwb3JhdGlvbi1kYXRhL2JpbGxpbmdcIiwgZGF0YSwge2hlYWRlcnM6IGhlYWRlYXJzfSk7IFx0XHJcbiAgfVxyXG4gIFxyXG4gIHN1Ym1pdERhdGEoZmlyc3ROYW1lLCBsYXN0TmFtZSwgZW1haWwsIGFsMSwgYWwyLCBjaXR5LCBwb3N0YWwsIGNvdW50cnksIHN0YXRlLCBkaXJlY3RvcnMsIHV1aWQsIGNvbXBhbnlOYW1lLCBjb21wYW55VHlwZSwgZW1vamkpIHtcclxuXHJcblx0Y29uc29sZS5sb2codXVpZCk7XHJcblx0ICBsZXQgZGF0YSA9IHtcclxuXHRcdFwiZmlyc3ROYW1lXCI6IGZpcnN0TmFtZSxcclxuXHRcdFwibGFzdE5hbWVcIjogbGFzdE5hbWUsXHJcblx0XHRcImVtYWlsXCI6IGVtYWlsLCBcclxuXHRcdFwiYWwxXCI6IGFsMSwgXHJcblx0XHRcImFsMlwiOiBhbDIsIFxyXG5cdFx0XCJjaXR5XCI6IGNpdHksIFxyXG5cdFx0XCJwb3N0YWxcIjogcG9zdGFsLCBcclxuXHRcdFwiY291bnRyeVwiOiBjb3VudHJ5LCBcclxuXHRcdFwic3RhdGVcIjogc3RhdGUsIFxyXG5cdFx0XCJ1dWlkXCI6IHV1aWQsXHJcblx0XHRcImVtb2ppXCI6IGVtb2ppLFxyXG5cdFx0XCJkaXJlY3RvcnNcIjogZGlyZWN0b3JzLFxyXG5cdFx0XCJjb21wYW55TmFtZVwiOiBjb21wYW55TmFtZSxcclxuXHRcdFwiY29tcGFueVR5cGVcIjogY29tcGFueVR5cGVcclxuXHQgIH1cclxuXHQgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcblx0ICBsZXQgaGVhZGVhcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuXHQgIGhlYWRlYXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuXHRyZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5zdWJtaXRVcmwsIGRhdGEsIHtoZWFkZXJzOiBoZWFkZWFyc30pOyBcdFxyXG4gIH1cclxuXHJcbn0iXX0=
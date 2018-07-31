"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var appSettings = require("application-settings");
var PersonalComponent = /** @class */ (function () {
    function PersonalComponent(page, router) {
        this.page = page;
        this.router = router;
        // Use the component constructor to inject providers.
        page.actionBarHidden = true;
    }
    PersonalComponent.prototype.ngOnInit = function () {
        this.companyName = appSettings.getString("companyName", "");
        this.companyType = appSettings.getString("companyType", "");
        this.firstName = appSettings.getString("firstName", "");
        this.lastName = appSettings.getString("lastName", "");
        this.email = appSettings.getString("email", "");
        this.al1 = appSettings.getString("al1", "");
        this.al2 = appSettings.getString("al2", "");
        this.city = appSettings.getString("city", "");
        this.postal = appSettings.getString("postal", 0);
        this.country = appSettings.getString("country", "");
        this.state = appSettings.getString("state", "");
        this.FirstCheckBox.nativeElement.checked = "true";
    };
    PersonalComponent.prototype.step2 = function () {
        if (this.firstName == "" ||
            this.lastName == "" ||
            this.email == "" ||
            this.al1 == "" ||
            this.al2 == "" ||
            this.city == "" ||
            this.postal == 0 ||
            this.country == "" ||
            this.state == "") {
            alert("please complete the entire form");
            return;
        }
        appSettings.setString("firstName", this.firstName);
        appSettings.setString("lastName", this.lastName);
        appSettings.setString("email", this.email);
        appSettings.setString("al1", this.al1);
        appSettings.setString("al2", this.al2);
        appSettings.setString("city", this.city);
        appSettings.setString("postal", this.postal);
        appSettings.setString("country", this.country);
        appSettings.setString("state", this.state);
        appSettings.setString("addToDirectors", this.FirstCheckBox.nativeElement.checked);
        this.router.navigate(["/payment"]);
    };
    __decorate([
        core_1.ViewChild("CB1"),
        __metadata("design:type", core_1.ElementRef)
    ], PersonalComponent.prototype, "FirstCheckBox", void 0);
    PersonalComponent = __decorate([
        core_1.Component({
            selector: "Personal",
            moduleId: module.id,
            templateUrl: "./personal.component.html",
            styleUrls: ['./personal.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router])
    ], PersonalComponent);
    return PersonalComponent;
}());
exports.PersonalComponent = PersonalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVyc29uYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLGdDQUE2QjtBQUc3QiwwQ0FBeUM7QUFDekMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFTbEQ7SUFpQkksMkJBQXFCLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3pELHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNGLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ25ELENBQUM7SUFDRCxpQ0FBSyxHQUFMO1FBRUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRTtZQUNuQixJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFO1lBQ2QsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRTtZQUNsQixJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEIsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7WUFDekMsTUFBTSxDQUFDO1FBQ1IsQ0FBQztRQUNGLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRCxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakQsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLFdBQVcsQ0FBQyxTQUFTLENBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0MsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLFdBQVcsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUEzRGlCO1FBQWpCLGdCQUFTLENBQUMsS0FBSyxDQUFDO2tDQUFnQixpQkFBVTs0REFBQztJQUZoQyxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN0QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3ZDLENBQUM7eUNBa0I2QixXQUFJLEVBQWtCLGVBQU07T0FqQjlDLGlCQUFpQixDQStEN0I7SUFBRCx3QkFBQztDQUFBLEFBL0RELElBK0RDO0FBL0RZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQge0tleWJvYXJkVHlwZX0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbnZhciBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJQZXJzb25hbFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiBcIi4vcGVyc29uYWwuY29tcG9uZW50Lmh0bWxcIixcblx0c3R5bGVVcmxzOiBbJy4vcGVyc29uYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBlcnNvbmFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRAVmlld0NoaWxkKFwiQ0IxXCIpIEZpcnN0Q2hlY2tCb3g6IEVsZW1lbnRSZWY7XG5cblx0Zmlyc3ROYW1lIDpzdHJpbmc7XG5cdGxhc3ROYW1lIDpzdHJpbmc7XG5cdGVtYWlsIDpzdHJpbmc7XG5cdGFsMSA6c3RyaW5nO1xuXHRhbDIgOnN0cmluZztcblx0Y2l0eSA6c3RyaW5nO1xuXHRwb3N0YWwgOm51bWJlcjtcblx0Y291bnRyeSA6c3RyaW5nO1xuXHRzdGF0ZSA6c3RyaW5nO1xuXHRjb21wYW55TmFtZTogc3RyaW5nO1xuXHRjb21wYW55VHlwZSA6c3RyaW5nO1xuXHRcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcblx0XHQvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuXHRcdHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBhbnlOYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY29tcGFueU5hbWVcIiwgXCJcIik7XG5cdFx0dGhpcy5jb21wYW55VHlwZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNvbXBhbnlUeXBlXCIsIFwiXCIpO1xuXHRcdHRoaXMuZmlyc3ROYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiZmlyc3ROYW1lXCIsIFwiXCIpO1xuXHRcdHRoaXMubGFzdE5hbWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJsYXN0TmFtZVwiLCBcIlwiKTtcblx0XHR0aGlzLmVtYWlsID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiZW1haWxcIiwgXCJcIik7XG5cdFx0dGhpcy5hbDEgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbDFcIiwgXCJcIik7XG5cdFx0dGhpcy5hbDIgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbDJcIiwgXCJcIik7XG5cdFx0dGhpcy5jaXR5ID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY2l0eVwiLCBcIlwiKTtcblx0XHR0aGlzLnBvc3RhbCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInBvc3RhbFwiLCAwKTtcblx0XHR0aGlzLmNvdW50cnkgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjb3VudHJ5XCIsIFwiXCIpO1xuXHRcdHRoaXMuc3RhdGUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJzdGF0ZVwiLCBcIlwiKTtcblx0XHR0aGlzLkZpcnN0Q2hlY2tCb3gubmF0aXZlRWxlbWVudC5jaGVja2VkID0gXCJ0cnVlXCI7XG5cdH1cblx0c3RlcDIoKSB7XG5cdFxuXHRcdGlmICh0aGlzLmZpcnN0TmFtZSA9PSBcIlwiIHx8XG5cdFx0XHR0aGlzLmxhc3ROYW1lID09IFwiXCIgfHxcblx0XHRcdHRoaXMuZW1haWwgPT0gXCJcIiB8fFxuXHRcdFx0dGhpcy5hbDEgPT0gXCJcIiB8fFxuXHRcdFx0dGhpcy5hbDIgPT0gXCJcIiB8fFxuXHRcdFx0dGhpcy5jaXR5ID09IFwiXCIgfHxcblx0XHRcdHRoaXMucG9zdGFsID09IDAgfHxcblx0XHRcdHRoaXMuY291bnRyeSA9PSBcIlwiIHx8XG5cdFx0XHR0aGlzLnN0YXRlID09IFwiXCIpIHtcblx0XHRcdFx0YWxlcnQoXCJwbGVhc2UgY29tcGxldGUgdGhlIGVudGlyZSBmb3JtXCIpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiZmlyc3ROYW1lXCIsIHRoaXMuZmlyc3ROYW1lKTtcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJsYXN0TmFtZVwiLCB0aGlzLmxhc3ROYW1lKTtcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJlbWFpbFwiLCB0aGlzLmVtYWlsKTtcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJhbDFcIiwgdGhpcy5hbDEpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsMlwiLCB0aGlzLmFsMik7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiY2l0eVwiLCB0aGlzLmNpdHkpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyAoXCJwb3N0YWxcIiwgdGhpcy5wb3N0YWwpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImNvdW50cnlcIiwgdGhpcy5jb3VudHJ5KTtcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJzdGF0ZVwiLCB0aGlzLnN0YXRlKTtcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJhZGRUb0RpcmVjdG9yc1wiLCB0aGlzLkZpcnN0Q2hlY2tCb3gubmF0aXZlRWxlbWVudC5jaGVja2VkKTtcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcGF5bWVudFwiXSk7XG5cdH1cblxufVxuIl19
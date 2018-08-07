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
    PersonalComponent.prototype.step3 = function () {
        // if (this.firstName == "" ||
        // 	this.lastName == "" ||
        // 	this.email == "" ||
        // 	this.al1 == "" ||
        // 	this.al2 == "" ||
        // 	this.city == "" ||
        // 	this.postal == 0 ||
        // 	this.country == "" ||
        // 	this.state == "") {
        // 		alert("please complete the entire form");
        // 		return;
        // 	}
        appSettings.setString("firstName", this.firstName);
        appSettings.setString("lastName", this.lastName);
        appSettings.setString("email", this.email);
        appSettings.setString("al1", this.al1);
        appSettings.setString("al2", this.al2);
        appSettings.setString("city", this.city);
        appSettings.setString("postal", this.postal);
        appSettings.setString("country", this.country);
        appSettings.setString("state", this.state);
        appSettings.setString("addToDirectors", String(this.FirstCheckBox.nativeElement.checked));
        if (this.FirstCheckBox.nativeElement.checked == true) {
            appSettings.setString("directors", JSON.stringify([{
                    "firstName": this.firstName,
                    "lastName": this.lastName,
                    "email": this.email,
                    "al1": this.al1,
                    "al2": this.al2,
                    "city": this.city,
                    "postal": this.postal,
                    "country": this.country,
                    "state": this.state
                }]));
        }
        else {
            appSettings.setString("directors", JSON.stringify([{}]));
        }
        this.router.navigate(["/review"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVyc29uYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLGdDQUE2QjtBQUc3QiwwQ0FBeUM7QUFDekMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFTbEQ7SUFrQkksMkJBQXFCLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3pELHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNGLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMs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QUMsS0FBSyxDQUFDO2tDQUFnQixpQkFBVTs0REFBQztJQUZoQyxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN0QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3ZDLENBQUM7eUNBbUI2QixXQUFJLEVBQWtCLGVBQU07T0FsQjlDLGlCQUFpQixDQW1GN0I7SUFBRCx3QkFBQztDQUFBLEFBbkZELElBbUZDO0FBbkZZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQge0tleWJvYXJkVHlwZX0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbnZhciBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJQZXJzb25hbFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiBcIi4vcGVyc29uYWwuY29tcG9uZW50Lmh0bWxcIixcblx0c3R5bGVVcmxzOiBbJy4vcGVyc29uYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBlcnNvbmFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRAVmlld0NoaWxkKFwiQ0IxXCIpIEZpcnN0Q2hlY2tCb3g6IEVsZW1lbnRSZWY7XG5cblx0Zmlyc3ROYW1lIDpzdHJpbmc7XG5cdGxhc3ROYW1lIDpzdHJpbmc7XG5cdGVtYWlsIDpzdHJpbmc7XG5cdGFsMSA6c3RyaW5nO1xuXHRhbDIgOnN0cmluZztcblx0Y2l0eSA6c3RyaW5nO1xuXHRwb3N0YWwgOm51bWJlcjtcblx0Y291bnRyeSA6c3RyaW5nO1xuXHRzdGF0ZSA6c3RyaW5nO1xuXHRjb21wYW55TmFtZTogc3RyaW5nO1xuXHRjb21wYW55VHlwZSA6c3RyaW5nO1xuXHRkaXJlY3RvcnMgOnN0cmluZztcblx0XG5cbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG5cdFx0Ly8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wYW55TmFtZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNvbXBhbnlOYW1lXCIsIFwiXCIpO1xuXHRcdHRoaXMuY29tcGFueVR5cGUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjb21wYW55VHlwZVwiLCBcIlwiKTtcblx0XHR0aGlzLmZpcnN0TmFtZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImZpcnN0TmFtZVwiLCBcIlwiKTtcblx0XHR0aGlzLmxhc3ROYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwibGFzdE5hbWVcIiwgXCJcIik7XG5cdFx0dGhpcy5lbWFpbCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImVtYWlsXCIsIFwiXCIpO1xuXHRcdHRoaXMuYWwxID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWwxXCIsIFwiXCIpO1xuXHRcdHRoaXMuYWwyID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWwyXCIsIFwiXCIpO1xuXHRcdHRoaXMuY2l0eSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNpdHlcIiwgXCJcIik7XG5cdFx0dGhpcy5wb3N0YWwgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJwb3N0YWxcIiwgMCk7XG5cdFx0dGhpcy5jb3VudHJ5ID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY291bnRyeVwiLCBcIlwiKTtcblx0XHR0aGlzLnN0YXRlID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwic3RhdGVcIiwgXCJcIik7XG5cdFx0dGhpcy5GaXJzdENoZWNrQm94Lm5hdGl2ZUVsZW1lbnQuY2hlY2tlZCA9IFwidHJ1ZVwiO1xuXHR9XG5cblxuXHRzdGVwMygpIHtcblx0XG5cdFx0Ly8gaWYgKHRoaXMuZmlyc3ROYW1lID09IFwiXCIgfHxcblx0XHQvLyBcdHRoaXMubGFzdE5hbWUgPT0gXCJcIiB8fFxuXHRcdC8vIFx0dGhpcy5lbWFpbCA9PSBcIlwiIHx8XG5cdFx0Ly8gXHR0aGlzLmFsMSA9PSBcIlwiIHx8XG5cdFx0Ly8gXHR0aGlzLmFsMiA9PSBcIlwiIHx8XG5cdFx0Ly8gXHR0aGlzLmNpdHkgPT0gXCJcIiB8fFxuXHRcdC8vIFx0dGhpcy5wb3N0YWwgPT0gMCB8fFxuXHRcdC8vIFx0dGhpcy5jb3VudHJ5ID09IFwiXCIgfHxcblx0XHQvLyBcdHRoaXMuc3RhdGUgPT0gXCJcIikge1xuXHRcdC8vIFx0XHRhbGVydChcInBsZWFzZSBjb21wbGV0ZSB0aGUgZW50aXJlIGZvcm1cIik7XG5cdFx0Ly8gXHRcdHJldHVybjtcblx0XHQvLyBcdH1cblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJmaXJzdE5hbWVcIiwgdGhpcy5maXJzdE5hbWUpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImxhc3ROYW1lXCIsIHRoaXMubGFzdE5hbWUpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImVtYWlsXCIsIHRoaXMuZW1haWwpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsMVwiLCB0aGlzLmFsMSk7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWwyXCIsIHRoaXMuYWwyKTtcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJjaXR5XCIsIHRoaXMuY2l0eSk7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nIChcInBvc3RhbFwiLCB0aGlzLnBvc3RhbCk7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiY291bnRyeVwiLCB0aGlzLmNvdW50cnkpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcInN0YXRlXCIsIHRoaXMuc3RhdGUpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFkZFRvRGlyZWN0b3JzXCIsIFN0cmluZyh0aGlzLkZpcnN0Q2hlY2tCb3gubmF0aXZlRWxlbWVudC5jaGVja2VkKSk7XG5cblx0XHRpZiAodGhpcy5GaXJzdENoZWNrQm94Lm5hdGl2ZUVsZW1lbnQuY2hlY2tlZCA9PSB0cnVlKSB7XG5cdFx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJkaXJlY3RvcnNcIiwgSlNPTi5zdHJpbmdpZnkoW3sgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJmaXJzdE5hbWVcIjogdGhpcy5maXJzdE5hbWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFwibGFzdE5hbWVcIjogdGhpcy5sYXN0TmFtZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgXCJlbWFpbFwiOiB0aGlzLmVtYWlsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBcImFsMVwiOiB0aGlzLmFsMSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgXCJhbDJcIjogdGhpcy5hbDIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFwiY2l0eVwiOiB0aGlzLmNpdHksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFwicG9zdGFsXCI6IHRoaXMucG9zdGFsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBcImNvdW50cnlcIjogdGhpcy5jb3VudHJ5LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBcInN0YXRlXCI6IHRoaXMuc3RhdGVcblx0XHRcdH1dKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImRpcmVjdG9yc1wiLCBKU09OLnN0cmluZ2lmeShbe31dKSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3Jldmlld1wiXSk7XG5cdH1cblxufVxuIl19
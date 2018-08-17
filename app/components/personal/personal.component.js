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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVyc29uYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLGdDQUE2QjtBQUc3QiwwQ0FBeUM7QUFDekMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFTbEQ7SUFrQkksMkJBQXFCLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3pELHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNGLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMs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QUMsS0FBSyxDQUFDO2tDQUFnQixpQkFBVTs0REFBQztJQUZoQyxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN0QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3ZDLENBQUM7eUNBbUI2QixXQUFJLEVBQWtCLGVBQU07T0FsQjlDLGlCQUFpQixDQW1GN0I7SUFBRCx3QkFBQztDQUFBLEFBbkZELElBbUZDO0FBbkZZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtLZXlib2FyZFR5cGV9IGZyb20gXCJ1aS9lbnVtc1wiO1xyXG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG52YXIgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJQZXJzb25hbFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHR0ZW1wbGF0ZVVybDogXCIuL3BlcnNvbmFsLmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbJy4vcGVyc29uYWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZXJzb25hbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdEBWaWV3Q2hpbGQoXCJDQjFcIikgRmlyc3RDaGVja0JveDogRWxlbWVudFJlZjtcclxuXHJcblx0Zmlyc3ROYW1lIDpzdHJpbmc7XHJcblx0bGFzdE5hbWUgOnN0cmluZztcclxuXHRlbWFpbCA6c3RyaW5nO1xyXG5cdGFsMSA6c3RyaW5nO1xyXG5cdGFsMiA6c3RyaW5nO1xyXG5cdGNpdHkgOnN0cmluZztcclxuXHRwb3N0YWwgOm51bWJlcjtcclxuXHRjb3VudHJ5IDpzdHJpbmc7XHJcblx0c3RhdGUgOnN0cmluZztcclxuXHRjb21wYW55TmFtZTogc3RyaW5nO1xyXG5cdGNvbXBhbnlUeXBlIDpzdHJpbmc7XHJcblx0ZGlyZWN0b3JzIDpzdHJpbmc7XHJcblx0XHJcblxyXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG5cdFx0Ly8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuXHRcdHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuY29tcGFueU5hbWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjb21wYW55TmFtZVwiLCBcIlwiKTtcclxuXHRcdHRoaXMuY29tcGFueVR5cGUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjb21wYW55VHlwZVwiLCBcIlwiKTtcclxuXHRcdHRoaXMuZmlyc3ROYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiZmlyc3ROYW1lXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5sYXN0TmFtZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImxhc3ROYW1lXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5lbWFpbCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImVtYWlsXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5hbDEgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbDFcIiwgXCJcIik7XHJcblx0XHR0aGlzLmFsMiA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsMlwiLCBcIlwiKTtcclxuXHRcdHRoaXMuY2l0eSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNpdHlcIiwgXCJcIik7XHJcblx0XHR0aGlzLnBvc3RhbCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInBvc3RhbFwiLCAwKTtcclxuXHRcdHRoaXMuY291bnRyeSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNvdW50cnlcIiwgXCJcIik7XHJcblx0XHR0aGlzLnN0YXRlID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwic3RhdGVcIiwgXCJcIik7XHJcblx0XHR0aGlzLkZpcnN0Q2hlY2tCb3gubmF0aXZlRWxlbWVudC5jaGVja2VkID0gXCJ0cnVlXCI7XHJcblx0fVxyXG5cclxuXHJcblx0c3RlcDMoKSB7XHJcblx0XHJcblx0XHQvLyBpZiAodGhpcy5maXJzdE5hbWUgPT0gXCJcIiB8fFxyXG5cdFx0Ly8gXHR0aGlzLmxhc3ROYW1lID09IFwiXCIgfHxcclxuXHRcdC8vIFx0dGhpcy5lbWFpbCA9PSBcIlwiIHx8XHJcblx0XHQvLyBcdHRoaXMuYWwxID09IFwiXCIgfHxcclxuXHRcdC8vIFx0dGhpcy5hbDIgPT0gXCJcIiB8fFxyXG5cdFx0Ly8gXHR0aGlzLmNpdHkgPT0gXCJcIiB8fFxyXG5cdFx0Ly8gXHR0aGlzLnBvc3RhbCA9PSAwIHx8XHJcblx0XHQvLyBcdHRoaXMuY291bnRyeSA9PSBcIlwiIHx8XHJcblx0XHQvLyBcdHRoaXMuc3RhdGUgPT0gXCJcIikge1xyXG5cdFx0Ly8gXHRcdGFsZXJ0KFwicGxlYXNlIGNvbXBsZXRlIHRoZSBlbnRpcmUgZm9ybVwiKTtcclxuXHRcdC8vIFx0XHRyZXR1cm47XHJcblx0XHQvLyBcdH1cclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImZpcnN0TmFtZVwiLCB0aGlzLmZpcnN0TmFtZSk7XHJcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJsYXN0TmFtZVwiLCB0aGlzLmxhc3ROYW1lKTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImVtYWlsXCIsIHRoaXMuZW1haWwpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWwxXCIsIHRoaXMuYWwxKTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsMlwiLCB0aGlzLmFsMik7XHJcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJjaXR5XCIsIHRoaXMuY2l0eSk7XHJcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcgKFwicG9zdGFsXCIsIHRoaXMucG9zdGFsKTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImNvdW50cnlcIiwgdGhpcy5jb3VudHJ5KTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcInN0YXRlXCIsIHRoaXMuc3RhdGUpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWRkVG9EaXJlY3RvcnNcIiwgU3RyaW5nKHRoaXMuRmlyc3RDaGVja0JveC5uYXRpdmVFbGVtZW50LmNoZWNrZWQpKTtcclxuXHJcblx0XHRpZiAodGhpcy5GaXJzdENoZWNrQm94Lm5hdGl2ZUVsZW1lbnQuY2hlY2tlZCA9PSB0cnVlKSB7XHJcblx0XHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImRpcmVjdG9yc1wiLCBKU09OLnN0cmluZ2lmeShbeyBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiZmlyc3ROYW1lXCI6IHRoaXMuZmlyc3ROYW1lLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFwibGFzdE5hbWVcIjogdGhpcy5sYXN0TmFtZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBcImVtYWlsXCI6IHRoaXMuZW1haWwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgXCJhbDFcIjogdGhpcy5hbDEsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgXCJhbDJcIjogdGhpcy5hbDIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgXCJjaXR5XCI6IHRoaXMuY2l0eSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBcInBvc3RhbFwiOiB0aGlzLnBvc3RhbCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBcImNvdW50cnlcIjogdGhpcy5jb3VudHJ5LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFwic3RhdGVcIjogdGhpcy5zdGF0ZVxyXG5cdFx0XHR9XSkpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiZGlyZWN0b3JzXCIsIEpTT04uc3RyaW5naWZ5KFt7fV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcmV2aWV3XCJdKTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==
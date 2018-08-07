"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var plugin = require("nativescript-uuid");
var appSettings = require("application-settings");
var ReviewComponent = /** @class */ (function () {
    //@ViewChild("step2") step2: ElementRef;
    function ReviewComponent(page, router) {
        this.page = page;
        this.router = router;
        // Use the component constructor to inject providers.
        page.actionBarHidden = true;
        this.page = page;
        this.page.addCss("#step3 {visibility: collapsed}");
    }
    ReviewComponent.prototype.editDirector = function () {
        this.router.navigate(["/director"]);
    };
    ReviewComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
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
        this.directors = appSettings.getString("directors", "");
    };
    ReviewComponent.prototype.next = function () {
        this.router.navigate(["/payment"]);
    };
    ReviewComponent.prototype.addDirector = function () {
        this.router.navigate(["/newdirector"]);
    };
    ReviewComponent = __decorate([
        core_1.Component({
            selector: "Review",
            moduleId: module.id,
            templateUrl: "./review.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router])
    ], ReviewComponent);
    return ReviewComponent;
}());
exports.ReviewComponent = ReviewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJldmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0U7QUFDeEUsZ0NBQTZCO0FBQzdCLDBDQUF5QztBQUV6QyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUM1QyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQU9sRDtJQWVDLHdDQUF3QztJQUNyQyx5QkFBb0IsSUFBVSxFQUFVLE1BQWM7UUFBbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDeEQscURBQXFEO1FBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVKLHNDQUFZLEdBQVo7UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUdFLGtDQUFRLEdBQVI7UUFDRix1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELDhCQUFJLEdBQUo7UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELHFDQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQWpEVyxlQUFlO1FBTDNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHlCQUF5QjtTQUN6QyxDQUFDO3lDQWlCNEIsV0FBSSxFQUFrQixlQUFNO09BaEI3QyxlQUFlLENBa0QzQjtJQUFELHNCQUFDO0NBQUEsQUFsREQsSUFrREM7QUFsRFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuY29uc3QgcGx1Z2luID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11dWlkXCIpO1xudmFyIGFwcFNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJSZXZpZXdcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmV2aWV3LmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgUmV2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRmaXJzdE5hbWUgOnN0cmluZztcblx0bGFzdE5hbWUgOnN0cmluZztcblx0ZW1haWwgOnN0cmluZztcblx0YWwxIDpzdHJpbmc7XG5cdGFsMiA6c3RyaW5nO1xuXHRjaXR5IDpzdHJpbmc7XG5cdHBvc3RhbCA6bnVtYmVyO1xuXHRjb3VudHJ5IDpzdHJpbmc7XG5cdHN0YXRlIDpzdHJpbmc7XG5cdGNvbXBhbnlOYW1lOiBzdHJpbmc7XG5cdGNvbXBhbnlUeXBlIDpzdHJpbmc7XG5cdGRpcmVjdG9ycyA6c3RyaW5nO1xuXG5cdC8vQFZpZXdDaGlsZChcInN0ZXAyXCIpIHN0ZXAyOiBFbGVtZW50UmVmO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuXHRcdC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG5cdFx0cGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuXHRcdHRoaXMucGFnZSA9IHBhZ2U7XG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIiNzdGVwMyB7dmlzaWJpbGl0eTogY29sbGFwc2VkfVwiKTtcbiAgICB9XG5cblx0ZWRpdERpcmVjdG9yKCkge1xuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9kaXJlY3RvclwiXSk7XG5cdH1cblxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cdFx0Ly8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG5cdFx0dGhpcy5jb21wYW55TmFtZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNvbXBhbnlOYW1lXCIsIFwiXCIpO1xuXHRcdHRoaXMuY29tcGFueVR5cGUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjb21wYW55VHlwZVwiLCBcIlwiKTtcblx0XHR0aGlzLmZpcnN0TmFtZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImZpcnN0TmFtZVwiLCBcIlwiKTtcblx0XHR0aGlzLmxhc3ROYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwibGFzdE5hbWVcIiwgXCJcIik7XG5cdFx0dGhpcy5lbWFpbCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImVtYWlsXCIsIFwiXCIpO1xuXHRcdHRoaXMuYWwxID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWwxXCIsIFwiXCIpO1xuXHRcdHRoaXMuYWwyID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWwyXCIsIFwiXCIpO1xuXHRcdHRoaXMuY2l0eSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNpdHlcIiwgXCJcIik7XG5cdFx0dGhpcy5wb3N0YWwgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJwb3N0YWxcIiwgMCk7XG5cdFx0dGhpcy5jb3VudHJ5ID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY291bnRyeVwiLCBcIlwiKTtcblx0XHR0aGlzLnN0YXRlID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwic3RhdGVcIiwgXCJcIik7XG5cdFx0dGhpcy5kaXJlY3RvcnMgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJkaXJlY3RvcnNcIiwgXCJcIik7XG5cdH1cblxuXHRuZXh0KCkge1xuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9wYXltZW50XCJdKTtcblx0fVxuXHRhZGREaXJlY3RvcigpIHtcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbmV3ZGlyZWN0b3JcIl0pO1xuXHR9XG59XG4iXX0=
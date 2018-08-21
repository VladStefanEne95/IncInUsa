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
    ReviewComponent.prototype.editDirector = function (id) {
        this.router.navigate(["/director", id]);
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
        this.bankAccount = appSettings.getString("bankAccount", "");
        this.state = appSettings.getString("state", "");
        this.directors = appSettings.getString("directors", "");
        if (this.directors)
            this.directorsArr = JSON.parse(this.directors);
        console.log(appSettings.getString("payment", 0));
        this.payment = parseInt(appSettings.getString("payment", 0)) + 595;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJldmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0U7QUFDeEUsZ0NBQTZCO0FBQzdCLDBDQUF5QztBQUV6QyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUM1QyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQU9sRDtJQWtCQyx3Q0FBd0M7SUFDckMseUJBQW9CLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3hELHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFSixzQ0FBWSxHQUFaLFVBQWEsRUFBRTtRQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUdFLGtDQUFRLEdBQVI7UUFDRix1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ3BFLENBQUM7SUFFRCw4QkFBSSxHQUFKO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxxQ0FBVyxHQUFYO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUF6RFcsZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7U0FDekMsQ0FBQzt5Q0FvQjRCLFdBQUksRUFBa0IsZUFBTTtPQW5CN0MsZUFBZSxDQTBEM0I7SUFBRCxzQkFBQztDQUFBLEFBMURELElBMERDO0FBMURZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuY29uc3QgcGx1Z2luID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11dWlkXCIpO1xyXG52YXIgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlJldmlld1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmV2aWV3LmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFJldmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdGZpcnN0TmFtZSA6c3RyaW5nO1xyXG5cdGxhc3ROYW1lIDpzdHJpbmc7XHJcblx0ZW1haWwgOnN0cmluZztcclxuXHRhbDEgOnN0cmluZztcclxuXHRhbDIgOnN0cmluZztcclxuXHRjaXR5IDpzdHJpbmc7XHJcblx0cG9zdGFsIDpudW1iZXI7XHJcblx0Y291bnRyeSA6c3RyaW5nO1xyXG5cdHN0YXRlIDpzdHJpbmc7XHJcblx0Y29tcGFueU5hbWU6IHN0cmluZztcclxuXHRjb21wYW55VHlwZSA6c3RyaW5nO1xyXG5cdGRpcmVjdG9ycyA6c3RyaW5nO1xyXG5cdGRpcmVjdG9yc0FyciA6QXJyYXk8YW55PjtcclxuXHRiYW5rQWNjb3VudCA6c3RyaW5nO1xyXG5cdHBheW1lbnQgOm51bWJlcjtcclxuXHJcblx0Ly9AVmlld0NoaWxkKFwic3RlcDJcIikgc3RlcDI6IEVsZW1lbnRSZWY7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuXHRcdC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblx0XHR0aGlzLnBhZ2UgPSBwYWdlO1xyXG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIiNzdGVwMyB7dmlzaWJpbGl0eTogY29sbGFwc2VkfVwiKTtcclxuICAgIH1cclxuXHJcblx0ZWRpdERpcmVjdG9yKGlkKSB7XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGlyZWN0b3JcIiwgaWRdKTtcclxuXHR9XHJcblxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0Ly8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcblx0XHR0aGlzLmNvbXBhbnlOYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY29tcGFueU5hbWVcIiwgXCJcIik7XHJcblx0XHR0aGlzLmNvbXBhbnlUeXBlID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY29tcGFueVR5cGVcIiwgXCJcIik7XHJcblx0XHR0aGlzLmZpcnN0TmFtZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImZpcnN0TmFtZVwiLCBcIlwiKTtcclxuXHRcdHRoaXMubGFzdE5hbWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJsYXN0TmFtZVwiLCBcIlwiKTtcclxuXHRcdHRoaXMuZW1haWwgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJlbWFpbFwiLCBcIlwiKTtcclxuXHRcdHRoaXMuYWwxID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWwxXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5hbDIgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbDJcIiwgXCJcIik7XHJcblx0XHR0aGlzLmNpdHkgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjaXR5XCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5wb3N0YWwgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJwb3N0YWxcIiwgMCk7XHJcblx0XHR0aGlzLmNvdW50cnkgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjb3VudHJ5XCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5iYW5rQWNjb3VudCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImJhbmtBY2NvdW50XCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInN0YXRlXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5kaXJlY3RvcnMgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJkaXJlY3RvcnNcIiwgXCJcIik7XHJcblx0XHRpZiAodGhpcy5kaXJlY3RvcnMpXHJcblx0XHRcdHRoaXMuZGlyZWN0b3JzQXJyID0gSlNPTi5wYXJzZSh0aGlzLmRpcmVjdG9ycyk7XHJcblx0XHRjb25zb2xlLmxvZyhhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJwYXltZW50XCIsIDApKTtcclxuXHRcdHRoaXMucGF5bWVudCA9IHBhcnNlSW50KGFwcFNldHRpbmdzLmdldFN0cmluZyhcInBheW1lbnRcIiwgMCkpICsgNTk1O1xyXG5cdH1cclxuXHJcblx0bmV4dCgpIHtcclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9wYXltZW50XCJdKTtcclxuXHR9XHJcblx0YWRkRGlyZWN0b3IoKSB7XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbmV3ZGlyZWN0b3JcIl0pO1xyXG5cdH1cclxufVxyXG4iXX0=
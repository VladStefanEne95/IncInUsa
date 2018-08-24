"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var plugin = require("nativescript-uuid");
var appSettings = require("application-settings");
var ReviewComponent = /** @class */ (function () {
    function ReviewComponent(page, router) {
        this.page = page;
        this.router = router;
        page.actionBarHidden = true;
        this.page = page;
        this.page.addCss("#step3 {visibility: collapsed}");
    }
    ReviewComponent.prototype.editDirector = function (id) {
        this.router.navigate(["/director", id]);
    };
    ReviewComponent.prototype.ngOnInit = function () {
        this.companyName = appSettings.getString("companyName", "");
        this.companyType = appSettings.getString("companyType", "");
        this.firstName = appSettings.getString("firstName", "");
        this.lastName = appSettings.getString("lastName", "");
        this.email = appSettings.getString("email", "");
        this.al1 = appSettings.getString("al1", "");
        this.al2 = appSettings.getString("al2", "");
        this.city = appSettings.getString("city", "");
        this.postal = appSettings.getString("postal", "");
        this.country = appSettings.getString("country", "");
        this.bankAccount = appSettings.getString("bankAccount", "");
        this.state = appSettings.getString("state", "");
        this.emoji = appSettings.getString("emoji", "");
        this.directors = appSettings.getString("directors", "");
        if (this.directors)
            this.directorsArr = JSON.parse(this.directors);
        if (Object.keys(this.directorsArr[0]).length === 0 && this.directorsArr[0].constructor === Object) {
            this.firstDirector = false;
        }
        else {
            this.firstDirector = true;
        }
        this.payment = parseInt(appSettings.getString("payment", 0)) + 595;
    };
    ReviewComponent.prototype.next = function () {
        if (this.directorsArr.length == 1 && Object.keys(this.directorsArr[0]).length === 0 && this.directorsArr[0].constructor === Object) {
            alert("You need to add at least one director");
            return;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJldmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0U7QUFDeEUsZ0NBQTZCO0FBQzdCLDBDQUF5QztBQUV6QyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUM1QyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQU9sRDtJQW9CSSx5QkFBb0IsSUFBVSxFQUFVLE1BQWM7UUFBbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDeEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUosc0NBQVksR0FBWixVQUFhLEVBQUU7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFHRSxrQ0FBUSxHQUFSO1FBQ0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsS0FBSyxH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LElBcUVDO0FBckVZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuY29uc3QgcGx1Z2luID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11dWlkXCIpO1xyXG52YXIgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlJldmlld1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmV2aWV3LmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFJldmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdGZpcnN0TmFtZSA6c3RyaW5nO1xyXG5cdGxhc3ROYW1lIDpzdHJpbmc7XHJcblx0ZW1haWwgOnN0cmluZztcclxuXHRhbDEgOnN0cmluZztcclxuXHRhbDIgOnN0cmluZztcclxuXHRjaXR5IDpzdHJpbmc7XHJcblx0cG9zdGFsIDpzdHJpbmc7XHJcblx0Y291bnRyeSA6c3RyaW5nO1xyXG5cdHN0YXRlIDpzdHJpbmc7XHJcblx0Y29tcGFueU5hbWU6IHN0cmluZztcclxuXHRjb21wYW55VHlwZSA6c3RyaW5nO1xyXG5cdGRpcmVjdG9ycyA6c3RyaW5nO1xyXG5cdGRpcmVjdG9yc0FyciA6QXJyYXk8YW55PjtcclxuXHRiYW5rQWNjb3VudCA6c3RyaW5nO1xyXG5cdGVtb2ppIDpzdHJpbmc7XHJcblx0cGF5bWVudCA6bnVtYmVyO1xyXG5cdGZpcnN0RGlyZWN0b3IgOmJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblx0XHR0aGlzLnBhZ2UgPSBwYWdlO1xyXG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIiNzdGVwMyB7dmlzaWJpbGl0eTogY29sbGFwc2VkfVwiKTtcclxuICAgIH1cclxuXHJcblx0ZWRpdERpcmVjdG9yKGlkKSB7XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGlyZWN0b3JcIiwgaWRdKTtcclxuXHR9XHJcblxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5jb21wYW55TmFtZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNvbXBhbnlOYW1lXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5jb21wYW55VHlwZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNvbXBhbnlUeXBlXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5maXJzdE5hbWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJmaXJzdE5hbWVcIiwgXCJcIik7XHJcblx0XHR0aGlzLmxhc3ROYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwibGFzdE5hbWVcIiwgXCJcIik7XHJcblx0XHR0aGlzLmVtYWlsID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiZW1haWxcIiwgXCJcIik7XHJcblx0XHR0aGlzLmFsMSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsMVwiLCBcIlwiKTtcclxuXHRcdHRoaXMuYWwyID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWwyXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5jaXR5ID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY2l0eVwiLCBcIlwiKTtcclxuXHRcdHRoaXMucG9zdGFsID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwicG9zdGFsXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5jb3VudHJ5ID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY291bnRyeVwiLCBcIlwiKTtcclxuXHRcdHRoaXMuYmFua0FjY291bnQgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJiYW5rQWNjb3VudFwiLCBcIlwiKTtcclxuXHRcdHRoaXMuc3RhdGUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJzdGF0ZVwiLCBcIlwiKTtcclxuXHRcdHRoaXMuZW1vamkgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJlbW9qaVwiLCBcIlwiKTtcclxuXHRcdHRoaXMuZGlyZWN0b3JzID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiZGlyZWN0b3JzXCIsIFwiXCIpO1xyXG5cdFx0XHJcblx0XHRpZiAodGhpcy5kaXJlY3RvcnMpXHJcblx0XHRcdHRoaXMuZGlyZWN0b3JzQXJyID0gSlNPTi5wYXJzZSh0aGlzLmRpcmVjdG9ycyk7XHJcblx0XHRcclxuXHRcdGlmIChPYmplY3Qua2V5cyh0aGlzLmRpcmVjdG9yc0FyclswXSkubGVuZ3RoID09PSAwICYmIHRoaXMuZGlyZWN0b3JzQXJyWzBdLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcclxuXHRcdFx0dGhpcy5maXJzdERpcmVjdG9yID0gZmFsc2U7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmZpcnN0RGlyZWN0b3IgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucGF5bWVudCA9IHBhcnNlSW50KGFwcFNldHRpbmdzLmdldFN0cmluZyhcInBheW1lbnRcIiwgMCkpICsgNTk1O1xyXG5cdH1cclxuXHJcblx0bmV4dCgpIHtcclxuXHRcdGlmICh0aGlzLmRpcmVjdG9yc0Fyci5sZW5ndGggPT0gMSAmJiBPYmplY3Qua2V5cyh0aGlzLmRpcmVjdG9yc0FyclswXSkubGVuZ3RoID09PSAwICYmIHRoaXMuZGlyZWN0b3JzQXJyWzBdLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcclxuXHRcdFx0YWxlcnQoXCJZb3UgbmVlZCB0byBhZGQgYXQgbGVhc3Qgb25lIGRpcmVjdG9yXCIpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcGF5bWVudFwiXSk7XHJcblx0fVxyXG5cdGFkZERpcmVjdG9yKCkge1xyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL25ld2RpcmVjdG9yXCJdKTtcclxuXHR9XHJcbn1cclxuIl19
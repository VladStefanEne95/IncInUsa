"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var plugin = require("nativescript-uuid");
var appSettings = require("application-settings");
var HomeComponent = /** @class */ (function () {
    //@ViewChild("step2") step2: ElementRef;
    function HomeComponent(page, router) {
        this.page = page;
        this.router = router;
        // Use the component constructor to inject providers.
        page.actionBarHidden = true;
        this.page = page;
        this.page.addCss("#step3 {visibility: collapsed}");
    }
    HomeComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        this.companyUuid = appSettings.getString("companyUuid", "");
        if (this.companyUuid == "")
            this.viewType = 1;
        else
            this.viewType = 2;
    };
    HomeComponent.prototype.oldInc = function () {
        alert("good for you");
    };
    HomeComponent.prototype.continue = function () {
        var uuid = plugin.getUUID();
        appSettings.setString("companyUuid", uuid);
        console.log("The device UUID is " + uuid);
        this.router.navigate(["/details"]);
        // this.page.addCss("#step3 {visibility: collapsed}");
        // this.page.addCss("#step2 {visibility: visible}");
    };
    HomeComponent.prototype.start = function () {
        var uuid = plugin.getUUID();
        appSettings.setString("companyUuid", uuid);
        appSettings.setString("companyName", "");
        appSettings.setString("companyType", "");
        appSettings.setString("firstName", "");
        appSettings.setString("lastName", "");
        appSettings.setString("email", "");
        appSettings.setString("al1", "");
        appSettings.setString("al2", "");
        appSettings.setString("city", "");
        appSettings.setString("postal", "");
        appSettings.setString("country", "");
        appSettings.setString("state", "");
        appSettings.setString("addToDirectors", "");
        this.router.navigate(["/details"]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUN4RSxnQ0FBNkI7QUFDN0IsMENBQXlDO0FBRXpDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQzVDLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBT2xEO0lBS0Msd0NBQXdDO0lBQ3JDLHVCQUFvQixJQUFVLEVBQVUsTUFBYztRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN4RCxxREFBcUQ7UUFDckQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNGLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUk7WUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBQ00sOEJBQU0sR0FBYjtRQUNDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRU0sZ0NBQVEsR0FBZjtRQUNDLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNuQyxzREFBc0Q7UUFDdEQsb0RBQW9EO0lBQ3JELENBQUM7SUFFTSw2QkFBSyxHQUFaO1FBQ0MsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVCLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLFdBQVcsQ0FBQyxTQUFTLENBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLFdBQVcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLFdBQVcsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFsRFcsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FPNEIsV0FBSSxFQUFrQixlQUFNO09BTjdDLGFBQWEsQ0FtRHpCO0lBQUQsb0JBQUM7Q0FBQSxBQW5ERCxJQW1EQztBQW5EWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5jb25zdCBwbHVnaW4gPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXV1aWRcIik7XG52YXIgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGNvbXBhbnlVdWlkIDpzdHJpbmc7XG5cdHZpZXdUeXBlIDpudW1iZXI7XG5cblx0Ly9AVmlld0NoaWxkKFwic3RlcDJcIikgc3RlcDI6IEVsZW1lbnRSZWY7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG5cdFx0Ly8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG5cdFx0dGhpcy5wYWdlID0gcGFnZTtcblx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiI3N0ZXAzIHt2aXNpYmlsaXR5OiBjb2xsYXBzZWR9XCIpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuXHRcdHRoaXMuY29tcGFueVV1aWQgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjb21wYW55VXVpZFwiLCBcIlwiKTtcblx0XHRpZiAodGhpcy5jb21wYW55VXVpZCA9PSBcIlwiKVxuXHRcdFx0dGhpcy52aWV3VHlwZSA9IDE7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy52aWV3VHlwZSA9IDI7XG5cdH1cblx0cHVibGljIG9sZEluYygpIHtcblx0XHRhbGVydChcImdvb2QgZm9yIHlvdVwiKTtcblx0fVxuXG5cdHB1YmxpYyBjb250aW51ZSgpOiB2b2lkIHtcblx0XHR2YXIgdXVpZCA9IHBsdWdpbi5nZXRVVUlEKCk7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiY29tcGFueVV1aWRcIiwgdXVpZCk7XG5cdFx0Y29uc29sZS5sb2coXCJUaGUgZGV2aWNlIFVVSUQgaXMgXCIgKyB1dWlkKTtcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGV0YWlsc1wiXSk7XG5cdFx0Ly8gdGhpcy5wYWdlLmFkZENzcyhcIiNzdGVwMyB7dmlzaWJpbGl0eTogY29sbGFwc2VkfVwiKTtcblx0XHQvLyB0aGlzLnBhZ2UuYWRkQ3NzKFwiI3N0ZXAyIHt2aXNpYmlsaXR5OiB2aXNpYmxlfVwiKTtcblx0fVxuXHRcblx0cHVibGljIHN0YXJ0KCl7XG5cdFx0dmFyIHV1aWQgPSBwbHVnaW4uZ2V0VVVJRCgpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImNvbXBhbnlVdWlkXCIsIHV1aWQpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImNvbXBhbnlOYW1lXCIsIFwiXCIpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImNvbXBhbnlUeXBlXCIsIFwiXCIpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImZpcnN0TmFtZVwiLCBcIlwiKTtcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJsYXN0TmFtZVwiLCBcIlwiKTtcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJlbWFpbFwiLCBcIlwiKTtcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJhbDFcIiwgXCJcIik7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWwyXCIsIFwiXCIpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImNpdHlcIiwgXCJcIik7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nIChcInBvc3RhbFwiLCBcIlwiKTtcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJjb3VudHJ5XCIsIFwiXCIpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcInN0YXRlXCIsIFwiXCIpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFkZFRvRGlyZWN0b3JzXCIsIFwiXCIpO1xuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9kZXRhaWxzXCJdKTtcblx0fVxufVxuIl19
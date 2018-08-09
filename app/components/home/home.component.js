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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUN4RSxnQ0FBNkI7QUFDN0IsMENBQXlDO0FBRXpDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQzVDLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBT2xEO0lBS0Msd0NBQXdDO0lBQ3JDLHVCQUFvQixJQUFVLEVBQVUsTUFBYztRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN4RCxxREFBcUQ7UUFDckQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNGLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUk7WUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBQ00sOEJBQU0sR0FBYjtRQUNDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRU0sZ0NBQVEsR0FBZjtRQUNDLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNuQyxzREFBc0Q7UUFDdEQsb0RBQW9EO0lBQ3JELENBQUM7SUFFTSw2QkFBSyxHQUFaO1FBQ0MsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVCLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLFdBQVcsQ0FBQyxTQUFTLENBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLFdBQVcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLFdBQVcsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFqRFcsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FPNEIsV0FBSSxFQUFrQixlQUFNO09BTjdDLGFBQWEsQ0FrRHpCO0lBQUQsb0JBQUM7Q0FBQSxBQWxERCxJQWtEQztBQWxEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5jb25zdCBwbHVnaW4gPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXV1aWRcIik7XG52YXIgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGNvbXBhbnlVdWlkIDpzdHJpbmc7XG5cdHZpZXdUeXBlIDpudW1iZXI7XG5cblx0Ly9AVmlld0NoaWxkKFwic3RlcDJcIikgc3RlcDI6IEVsZW1lbnRSZWY7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG5cdFx0Ly8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIiNzdGVwMyB7dmlzaWJpbGl0eTogY29sbGFwc2VkfVwiKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHQvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cblx0XHR0aGlzLmNvbXBhbnlVdWlkID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY29tcGFueVV1aWRcIiwgXCJcIik7XG5cdFx0aWYgKHRoaXMuY29tcGFueVV1aWQgPT0gXCJcIilcblx0XHRcdHRoaXMudmlld1R5cGUgPSAxO1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMudmlld1R5cGUgPSAyO1xuXHR9XG5cdHB1YmxpYyBvbGRJbmMoKSB7XG5cdFx0YWxlcnQoXCJnb29kIGZvciB5b3VcIik7XG5cdH1cblxuXHRwdWJsaWMgY29udGludWUoKTogdm9pZCB7XG5cdFx0dmFyIHV1aWQgPSBwbHVnaW4uZ2V0VVVJRCgpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImNvbXBhbnlVdWlkXCIsIHV1aWQpO1xuXHRcdGNvbnNvbGUubG9nKFwiVGhlIGRldmljZSBVVUlEIGlzIFwiICsgdXVpZCk7XG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2RldGFpbHNcIl0pO1xuXHRcdC8vIHRoaXMucGFnZS5hZGRDc3MoXCIjc3RlcDMge3Zpc2liaWxpdHk6IGNvbGxhcHNlZH1cIik7XG5cdFx0Ly8gdGhpcy5wYWdlLmFkZENzcyhcIiNzdGVwMiB7dmlzaWJpbGl0eTogdmlzaWJsZX1cIik7XG5cdH1cblx0XG5cdHB1YmxpYyBzdGFydCgpe1xuXHRcdHZhciB1dWlkID0gcGx1Z2luLmdldFVVSUQoKTtcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJjb21wYW55VXVpZFwiLCB1dWlkKTtcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJjb21wYW55TmFtZVwiLCBcIlwiKTtcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJjb21wYW55VHlwZVwiLCBcIlwiKTtcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJmaXJzdE5hbWVcIiwgXCJcIik7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwibGFzdE5hbWVcIiwgXCJcIik7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiZW1haWxcIiwgXCJcIik7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWwxXCIsIFwiXCIpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsMlwiLCBcIlwiKTtcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJjaXR5XCIsIFwiXCIpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyAoXCJwb3N0YWxcIiwgXCJcIik7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiY291bnRyeVwiLCBcIlwiKTtcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJzdGF0ZVwiLCBcIlwiKTtcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJhZGRUb0RpcmVjdG9yc1wiLCBcIlwiKTtcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGV0YWlsc1wiXSk7XG5cdH1cbn1cbiJdfQ==
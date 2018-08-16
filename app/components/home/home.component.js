"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var start_service_1 = require("./../../services/start/start.service");
var plugin = require("nativescript-uuid");
var appSettings = require("application-settings");
var HomeComponent = /** @class */ (function () {
    //@ViewChild("step2") step2: ElementRef;
    function HomeComponent(page, router, StartService) {
        this.page = page;
        this.router = router;
        this.StartService = StartService;
        // Use the component constructor to inject providers.
        page.actionBarHidden = true;
        this.page.addCss("#step3 {visibility: collapsed}");
    }
    HomeComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        this.companyUuid = appSettings.getString("uuid", "");
        if (this.companyUuid == "")
            this.viewType = 1;
        else
            this.viewType = 2;
        this.StartService.refreshStatus(this.companyUuid).subscribe(function (response) {
            appSettings.setString("status", response['incorporation'][0].status);
        }, function (error) { return console.log(error); });
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
        appSettings.setString("uuid", uuid);
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
        __metadata("design:paramtypes", [page_1.Page, router_1.Router, start_service_1.StartService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUN4RSxnQ0FBNkI7QUFDN0IsMENBQXlDO0FBQ3pDLHNFQUFtRTtBQUVuRSxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUM1QyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQU9sRDtJQUtDLHdDQUF3QztJQUNyQyx1QkFBb0IsSUFBVSxFQUFVLE1BQWMsRUFBVSxZQUEwQjtRQUF0RSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzVGLHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0YsdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDckQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSTtZQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQzFELFVBQUEsUUFBUTtZQUNOLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNyRSxDQUFDLEVBQ0YsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUMzQixDQUFDO0lBQ0gsQ0FBQztJQUNNLDhCQUFNLEdBQWI7UUFDQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVNLGdDQUFRLEdBQWY7UUFDQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUIsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsc0RBQXNEO1FBQ3RELG9EQUFvRDtJQUNyRCxDQUFDO0lBRU0sNkJBQUssR0FBWjtRQUNDLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwQyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QyxXQUFXLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2QyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0QyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuQyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNsQyxXQUFXLENBQUMsU0FBUyxDQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyQyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuQyxXQUFXLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBdkRXLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBTzRCLFdBQUksRUFBa0IsZUFBTSxFQUF3Qiw0QkFBWTtPQU5qRixhQUFhLENBd0R6QjtJQUFELG9CQUFDO0NBQUEsQUF4REQsSUF3REM7QUF4RFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN0YXJ0U2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvc3RhcnQvc3RhcnQuc2VydmljZSdcblxuY29uc3QgcGx1Z2luID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11dWlkXCIpO1xudmFyIGFwcFNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRjb21wYW55VXVpZCA6c3RyaW5nO1xuXHR2aWV3VHlwZSA6bnVtYmVyO1xuXG5cdC8vQFZpZXdDaGlsZChcInN0ZXAyXCIpIHN0ZXAyOiBFbGVtZW50UmVmO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBTdGFydFNlcnZpY2U6IFN0YXJ0U2VydmljZSkge1xuXHRcdC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG5cdFx0cGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuXHRcdHRoaXMucGFnZS5hZGRDc3MoXCIjc3RlcDMge3Zpc2liaWxpdHk6IGNvbGxhcHNlZH1cIik7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cdFx0Ly8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG5cdFx0dGhpcy5jb21wYW55VXVpZCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInV1aWRcIiwgXCJcIik7XG5cdFx0aWYgKHRoaXMuY29tcGFueVV1aWQgPT0gXCJcIilcblx0XHRcdHRoaXMudmlld1R5cGUgPSAxO1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMudmlld1R5cGUgPSAyO1xuXHRcdHRoaXMuU3RhcnRTZXJ2aWNlLnJlZnJlc2hTdGF0dXModGhpcy5jb21wYW55VXVpZCkuc3Vic2NyaWJlKFxuXHRcdFx0cmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcInN0YXR1c1wiLCByZXNwb25zZVsnaW5jb3Jwb3JhdGlvbiddWzBdLnN0YXR1cylcblx0XHRcdFx0fSxcblx0XHRcdGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdCk7XG5cdH1cblx0cHVibGljIG9sZEluYygpIHtcblx0XHRhbGVydChcImdvb2QgZm9yIHlvdVwiKTtcblx0fVxuXG5cdHB1YmxpYyBjb250aW51ZSgpOiB2b2lkIHtcblx0XHR2YXIgdXVpZCA9IHBsdWdpbi5nZXRVVUlEKCk7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiY29tcGFueVV1aWRcIiwgdXVpZCk7XG5cdFx0Y29uc29sZS5sb2coXCJUaGUgZGV2aWNlIFVVSUQgaXMgXCIgKyB1dWlkKTtcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGV0YWlsc1wiXSk7XG5cdFx0Ly8gdGhpcy5wYWdlLmFkZENzcyhcIiNzdGVwMyB7dmlzaWJpbGl0eTogY29sbGFwc2VkfVwiKTtcblx0XHQvLyB0aGlzLnBhZ2UuYWRkQ3NzKFwiI3N0ZXAyIHt2aXNpYmlsaXR5OiB2aXNpYmxlfVwiKTtcblx0fVxuXHRcblx0cHVibGljIHN0YXJ0KCl7XG5cdFx0dmFyIHV1aWQgPSBwbHVnaW4uZ2V0VVVJRCgpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcInV1aWRcIiwgdXVpZCk7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiY29tcGFueU5hbWVcIiwgXCJcIik7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiY29tcGFueVR5cGVcIiwgXCJcIik7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiZmlyc3ROYW1lXCIsIFwiXCIpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImxhc3ROYW1lXCIsIFwiXCIpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImVtYWlsXCIsIFwiXCIpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsMVwiLCBcIlwiKTtcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJhbDJcIiwgXCJcIik7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiY2l0eVwiLCBcIlwiKTtcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcgKFwicG9zdGFsXCIsIFwiXCIpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImNvdW50cnlcIiwgXCJcIik7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwic3RhdGVcIiwgXCJcIik7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWRkVG9EaXJlY3RvcnNcIiwgXCJcIik7XG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2RldGFpbHNcIl0pO1xuXHR9XG59XG4iXX0=
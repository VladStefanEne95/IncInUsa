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
        this.StartService.refreshStatus(this.companyUuid).subscribe();
        appSettings.setString("status");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUN4RSxnQ0FBNkI7QUFDN0IsMENBQXlDO0FBQ3pDLHNFQUFtRTtBQUVuRSxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUM1QyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQU9sRDtJQUtDLHdDQUF3QztJQUNyQyx1QkFBb0IsSUFBVSxFQUFVLE1BQWMsRUFBVSxZQUEwQjtRQUF0RSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzVGLHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0YsdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDckQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSTtZQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUM3RCxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBRyxDQUFDO0lBQ25DLENBQUM7SUFDTSw4QkFBTSxHQUFiO1FBQ0MsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxnQ0FBUSxHQUFmO1FBQ0MsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVCLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ25DLHNEQUFzRDtRQUN0RCxvREFBb0Q7SUFDckQsQ0FBQztJQUVNLDZCQUFLLEdBQVo7UUFDQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUIsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbEMsV0FBVyxDQUFDLFNBQVMsQ0FBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDckMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDckMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQW5EVyxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQU80QixXQUFJLEVBQWtCLGVBQU0sRUFBd0IsNEJBQVk7T0FOakYsYUFBYSxDQW9EekI7SUFBRCxvQkFBQztDQUFBLEFBcERELElBb0RDO0FBcERZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdGFydFNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL3N0YXJ0L3N0YXJ0LnNlcnZpY2UnXG5cbmNvbnN0IHBsdWdpbiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdXVpZFwiKTtcbnZhciBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29tcGFueVV1aWQgOnN0cmluZztcblx0dmlld1R5cGUgOm51bWJlcjtcblxuXHQvL0BWaWV3Q2hpbGQoXCJzdGVwMlwiKSBzdGVwMjogRWxlbWVudFJlZjtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgU3RhcnRTZXJ2aWNlOiBTdGFydFNlcnZpY2UpIHtcblx0XHQvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuXHRcdHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcblx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiI3N0ZXAzIHt2aXNpYmlsaXR5OiBjb2xsYXBzZWR9XCIpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuXHRcdHRoaXMuY29tcGFueVV1aWQgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1dWlkXCIsIFwiXCIpO1xuXHRcdGlmICh0aGlzLmNvbXBhbnlVdWlkID09IFwiXCIpXG5cdFx0XHR0aGlzLnZpZXdUeXBlID0gMTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLnZpZXdUeXBlID0gMjtcblx0XHR0aGlzLlN0YXJ0U2VydmljZS5yZWZyZXNoU3RhdHVzKHRoaXMuY29tcGFueVV1aWQpLnN1YnNjcmliZSgpXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwic3RhdHVzXCIsICk7XG5cdH1cblx0cHVibGljIG9sZEluYygpIHtcblx0XHRhbGVydChcImdvb2QgZm9yIHlvdVwiKTtcblx0fVxuXG5cdHB1YmxpYyBjb250aW51ZSgpOiB2b2lkIHtcblx0XHR2YXIgdXVpZCA9IHBsdWdpbi5nZXRVVUlEKCk7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiY29tcGFueVV1aWRcIiwgdXVpZCk7XG5cdFx0Y29uc29sZS5sb2coXCJUaGUgZGV2aWNlIFVVSUQgaXMgXCIgKyB1dWlkKTtcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGV0YWlsc1wiXSk7XG5cdFx0Ly8gdGhpcy5wYWdlLmFkZENzcyhcIiNzdGVwMyB7dmlzaWJpbGl0eTogY29sbGFwc2VkfVwiKTtcblx0XHQvLyB0aGlzLnBhZ2UuYWRkQ3NzKFwiI3N0ZXAyIHt2aXNpYmlsaXR5OiB2aXNpYmxlfVwiKTtcblx0fVxuXHRcblx0cHVibGljIHN0YXJ0KCl7XG5cdFx0dmFyIHV1aWQgPSBwbHVnaW4uZ2V0VVVJRCgpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcInV1aWRcIiwgdXVpZCk7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiY29tcGFueU5hbWVcIiwgXCJcIik7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiY29tcGFueVR5cGVcIiwgXCJcIik7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiZmlyc3ROYW1lXCIsIFwiXCIpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImxhc3ROYW1lXCIsIFwiXCIpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImVtYWlsXCIsIFwiXCIpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsMVwiLCBcIlwiKTtcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJhbDJcIiwgXCJcIik7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiY2l0eVwiLCBcIlwiKTtcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcgKFwicG9zdGFsXCIsIFwiXCIpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImNvdW50cnlcIiwgXCJcIik7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwic3RhdGVcIiwgXCJcIik7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWRkVG9EaXJlY3RvcnNcIiwgXCJcIik7XG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2RldGFpbHNcIl0pO1xuXHR9XG59XG4iXX0=
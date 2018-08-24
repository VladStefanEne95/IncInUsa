"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var plugin = require("nativescript-uuid");
var appSettings = require("application-settings");
var FinishComponent = /** @class */ (function () {
    function FinishComponent(page, router) {
        this.page = page;
        this.router = router;
        page.actionBarHidden = true;
    }
    FinishComponent.prototype.ngOnInit = function () {
        appSettings.setString("companyName", "");
        appSettings.setString("companyType", "");
        appSettings.setString("firstName", "");
        appSettings.setString("lastName", ""),
            appSettings.setString("uuid", "");
        appSettings.setString("email", "");
        appSettings.setString("al1", "");
        appSettings.setString("al2", "");
        appSettings.setString("city", "");
        appSettings.setString("postal", "");
        appSettings.setString("country", "");
        appSettings.setString("state", "");
        appSettings.setString("emoji", "");
        appSettings.setString("directors", "");
        appSettings.setString("billing", "");
        appSettings.setString("billingfirstName", "");
        appSettings.setString("billinglastName", ""),
            appSettings.setString("billingemail", "");
        appSettings.setString("billingal1", "");
        appSettings.setString("billingal2", "");
        appSettings.setString("billingcity", "");
        appSettings.setString("billingpostal", "");
        appSettings.setString("billingcountry", "");
        appSettings.setString("billingstate", "");
        appSettings.setString("billingemoji", "");
    };
    FinishComponent.prototype.viewAppStatus = function () {
        this.router.navigate(["/manage"]);
    };
    FinishComponent = __decorate([
        core_1.Component({
            selector: "Finish",
            moduleId: module.id,
            templateUrl: "./finish.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router])
    ], FinishComponent);
    return FinishComponent;
}());
exports.FinishComponent = FinishComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluaXNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbmlzaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0U7QUFDeEUsZ0NBQTZCO0FBQzdCLDBDQUF5QztBQUV6QyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUM1QyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQU9sRDtJQUVJLHlCQUFvQixJQUFVLEVBQVUsTUFBYztRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN4RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUVGLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQztZQUNyQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNsQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuQyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNsQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNwQyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuQyxXQUFXLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUV2QyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyQyxXQUFXLENBQUMsU0FBUyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLFdBQVcsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDO1lBQzVDLFdBQVcsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLFdBQVcsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLFdBQVcsQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLFdBQVcsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNNLHVDQUFhLEdBQXBCO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFyQ1csZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7U0FDekMsQ0FBQzt5Q0FHNEIsV0FBSSxFQUFrQixlQUFNO09BRjdDLGVBQWUsQ0FzQzNCO0lBQUQsc0JBQUM7Q0FBQSxBQXRDRCxJQXNDQztBQXRDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmNvbnN0IHBsdWdpbiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdXVpZFwiKTtcclxudmFyIGFwcFNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJGaW5pc2hcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2ZpbmlzaC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaW5pc2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG5cdFx0cGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0XHJcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJjb21wYW55TmFtZVwiLCBcIlwiKTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImNvbXBhbnlUeXBlXCIsIFwiXCIpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiZmlyc3ROYW1lXCIsIFwiXCIpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwibGFzdE5hbWVcIiwgXCJcIiksIFxyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwidXVpZFwiLCBcIlwiKTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImVtYWlsXCIsIFwiXCIpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWwxXCIsIFwiXCIpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWwyXCIsIFwiXCIpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiY2l0eVwiLCBcIlwiKTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcInBvc3RhbFwiLCBcIlwiKTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImNvdW50cnlcIiwgXCJcIik7XHJcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJzdGF0ZVwiLCBcIlwiKTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImVtb2ppXCIsIFwiXCIpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiZGlyZWN0b3JzXCIsIFwiXCIpO1xyXG5cclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImJpbGxpbmdcIiwgXCJcIik7XHJcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJiaWxsaW5nZmlyc3ROYW1lXCIsIFwiXCIpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYmlsbGluZ2xhc3ROYW1lXCIsIFwiXCIpLCBcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImJpbGxpbmdlbWFpbFwiLCBcIlwiKTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImJpbGxpbmdhbDFcIiwgXCJcIik7XHJcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJiaWxsaW5nYWwyXCIsIFwiXCIpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYmlsbGluZ2NpdHlcIiwgXCJcIik7XHJcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJiaWxsaW5ncG9zdGFsXCIsIFwiXCIpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYmlsbGluZ2NvdW50cnlcIiwgXCJcIik7XHJcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJiaWxsaW5nc3RhdGVcIiwgXCJcIik7XHJcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJiaWxsaW5nZW1vamlcIiwgXCJcIik7XHRcclxuXHR9XHJcblx0cHVibGljIHZpZXdBcHBTdGF0dXMoKSB7XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbWFuYWdlXCJdKTtcclxuXHR9XHJcbn1cclxuIl19
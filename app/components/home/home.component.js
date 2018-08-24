"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var start_service_1 = require("./../../services/start/start.service");
var dialogs = require("ui/dialogs");
var appSettings = require("application-settings");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(page, router, StartService) {
        this.page = page;
        this.router = router;
        this.StartService = StartService;
        page.actionBarHidden = true;
        this.page.addCss("#step3 {visibility: collapsed}");
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.companyUuid = appSettings.getString("uuid", "");
        console.log(this.companyUuid);
        this.uuidString = appSettings.getString("uuidString", "");
        if (this.companyUuid == "")
            this.viewType = 1;
        else
            this.viewType = 2;
    };
    HomeComponent.prototype.generateUuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    HomeComponent.prototype.oldInc = function () {
        var _this = this;
        dialogs.prompt({
            title: "Application Number",
            cancelButtonText: "Cancel",
            neutralButtonText: "Done",
            defaultText: ""
        }).then(function (r) {
            _this.StartService.refreshStatus(r.text).subscribe(function (response) {
                var uuidArr = _this.uuidString.split(",");
                uuidArr.push(r.text);
                _this.uuidString = uuidArr.toString();
                appSettings.setString("uuidString", _this.uuidString);
                _this.router.navigate(["/manage"]);
            }, function (error) { return console.log(error); });
        });
    };
    HomeComponent.prototype.continue = function () {
        this.router.navigate(["/details"]);
    };
    HomeComponent.prototype.start = function () {
        var uuid = this.generateUuid();
        var uuidArr = [];
        uuidArr = this.uuidString.split(",");
        uuidArr.push(uuid);
        this.uuidString = uuidArr.toString();
        appSettings.setString("uuidString", this.uuidString);
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
        appSettings.setString("emoji", "");
        appSettings.setString("state", "");
        appSettings.setString("billing", "");
        appSettings.setString("billingfirstName", "");
        appSettings.setString("billinglastName", "");
        appSettings.setString("billingemail", "");
        appSettings.setString("billingal1", "");
        appSettings.setString("billingal2", "");
        appSettings.setString("billingcity", "");
        appSettings.setString("billingpostal", "");
        appSettings.setString("billingcountry", "");
        appSettings.setString("billingemoji", "");
        appSettings.setString("billingstate", "");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUN4RSxnQ0FBNkI7QUFDN0IsMENBQXlDO0FBQ3pDLHNFQUFtRTtBQUVuRSxvQ0FBc0M7QUFFdEMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFPbEQ7SUFNSSx1QkFBb0IsSUFBVSxFQUFVLE1BQWMsRUFBVSxZQUEwQjtRQUF0RSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzVGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDRixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSTtZQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFTSxvQ0FBWSxHQUFuQjtRQUNDLE1BQU0sQ0FBQyxzQ0FBc0MsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQVMsQ0FBQztZQUN2RSxJQUFJLENBQUMsR0FBRyxJQUFJLENB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QUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FPNEIsV0FBSSxFQUFrQixlQUFNLEVBQXdCLDRCQUFZO09BTmpGLGFBQWEsQ0F3RnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXhGRCxJQXdGQztBQXhGWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3RhcnRTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9zdGFydC9zdGFydC5zZXJ2aWNlJ1xyXG5cclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5cclxudmFyIGFwcFNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHRjb21wYW55VXVpZCA6c3RyaW5nO1xyXG5cdHZpZXdUeXBlIDpudW1iZXI7XHJcblx0dXVpZFN0cmluZyA6YW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBTdGFydFNlcnZpY2U6IFN0YXJ0U2VydmljZSkge1xyXG5cdFx0cGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIiNzdGVwMyB7dmlzaWJpbGl0eTogY29sbGFwc2VkfVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuY29tcGFueVV1aWQgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1dWlkXCIsIFwiXCIpO1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy5jb21wYW55VXVpZCk7XHJcblx0XHR0aGlzLnV1aWRTdHJpbmcgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1dWlkU3RyaW5nXCIsIFwiXCIpO1xyXG5cdFx0aWYgKHRoaXMuY29tcGFueVV1aWQgPT0gXCJcIilcclxuXHRcdFx0dGhpcy52aWV3VHlwZSA9IDE7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMudmlld1R5cGUgPSAyO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdlbmVyYXRlVXVpZCgpIHtcclxuXHRcdHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKGMpIHtcclxuXHRcdCAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwLCB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xyXG5cdFx0ICByZXR1cm4gdi50b1N0cmluZygxNik7XHJcblx0XHR9KTtcclxuXHQgIH1cclxuXHRwdWJsaWMgb2xkSW5jKCkge1xyXG5cdFx0ZGlhbG9ncy5wcm9tcHQoe1xyXG5cdFx0XHR0aXRsZTogXCJBcHBsaWNhdGlvbiBOdW1iZXJcIixcclxuXHRcdFx0Y2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcclxuXHRcdFx0bmV1dHJhbEJ1dHRvblRleHQ6IFwiRG9uZVwiLFxyXG5cdFx0XHRkZWZhdWx0VGV4dDogXCJcIlxyXG5cdFx0fSkudGhlbihyID0+IHtcclxuXHRcdFx0dGhpcy5TdGFydFNlcnZpY2UucmVmcmVzaFN0YXR1cyhyLnRleHQpLnN1YnNjcmliZShcclxuXHRcdFx0XHRyZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgdXVpZEFyciA9IHRoaXMudXVpZFN0cmluZy5zcGxpdChcIixcIik7XHJcblx0XHRcdFx0XHR1dWlkQXJyLnB1c2goci50ZXh0KTtcclxuXHRcdFx0XHRcdHRoaXMudXVpZFN0cmluZyA9IHV1aWRBcnIudG9TdHJpbmcoKTtcclxuXHRcdFx0XHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcInV1aWRTdHJpbmdcIiwgdGhpcy51dWlkU3RyaW5nKTtcclxuXHRcdFx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9tYW5hZ2VcIl0pO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcblx0XHRcdCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblxyXG5cdHB1YmxpYyBjb250aW51ZSgpOiB2b2lkIHtcclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9kZXRhaWxzXCJdKTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIHN0YXJ0KCkge1xyXG5cdFx0bGV0IHV1aWQgPSB0aGlzLmdlbmVyYXRlVXVpZCgpO1xyXG5cdFx0bGV0IHV1aWRBcnIgPSBbXTtcclxuXHRcdHV1aWRBcnIgPSB0aGlzLnV1aWRTdHJpbmcuc3BsaXQoXCIsXCIpO1xyXG5cdFx0dXVpZEFyci5wdXNoKHV1aWQpO1xyXG5cdFx0dGhpcy51dWlkU3RyaW5nID0gdXVpZEFyci50b1N0cmluZygpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwidXVpZFN0cmluZ1wiLCB0aGlzLnV1aWRTdHJpbmcpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwidXVpZFwiLCB1dWlkKTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImNvbXBhbnlOYW1lXCIsIFwiXCIpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiY29tcGFueVR5cGVcIiwgXCJcIik7XHJcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJmaXJzdE5hbWVcIiwgXCJcIik7XHJcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJsYXN0TmFtZVwiLCBcIlwiKTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImVtYWlsXCIsIFwiXCIpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWwxXCIsIFwiXCIpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWwyXCIsIFwiXCIpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiY2l0eVwiLCBcIlwiKTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyAoXCJwb3N0YWxcIiwgXCJcIik7XHJcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJjb3VudHJ5XCIsIFwiXCIpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiZW1vamlcIiwgXCJcIik7XHJcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJzdGF0ZVwiLCBcIlwiKTtcclxuXHJcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJiaWxsaW5nXCIsIFwiXCIpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYmlsbGluZ2ZpcnN0TmFtZVwiLCBcIlwiKTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImJpbGxpbmdsYXN0TmFtZVwiLCBcIlwiKTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImJpbGxpbmdlbWFpbFwiLCBcIlwiKTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImJpbGxpbmdhbDFcIiwgXCJcIik7XHJcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJiaWxsaW5nYWwyXCIsIFwiXCIpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYmlsbGluZ2NpdHlcIiwgXCJcIik7XHJcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcgKFwiYmlsbGluZ3Bvc3RhbFwiLCBcIlwiKTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImJpbGxpbmdjb3VudHJ5XCIsIFwiXCIpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYmlsbGluZ2Vtb2ppXCIsIFwiXCIpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYmlsbGluZ3N0YXRlXCIsIFwiXCIpO1xyXG5cclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFkZFRvRGlyZWN0b3JzXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2RldGFpbHNcIl0pO1xyXG5cdH1cclxufVxyXG4iXX0=
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
        // Use the component constructor to inject providers.
        page.actionBarHidden = true;
        this.page.addCss("#step3 {visibility: collapsed}");
    }
    HomeComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        this.companyUuid = appSettings.getString("uuid", "");
        this.uuidString = appSettings.getString("uuidString", "");
        if (this.companyUuid == "")
            this.viewType = 1;
        else
            this.viewType = 2;
        this.StartService.refreshStatus(this.companyUuid).subscribe(function (response) {
            appSettings.setString("status", response['incorporation'][0].status);
        }, function (error) { return console.log(error); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUN4RSxnQ0FBNkI7QUFDN0IsMENBQXlDO0FBQ3pDLHNFQUFtRTtBQUVuRSxvQ0FBc0M7QUFFdEMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFPbEQ7SUFNSSx1QkFBb0IsSUFBVSxFQUFVLE1BQWMsRUFBVSxZQUEwQjtRQUF0RSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzVGLHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0YsdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJO1lBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FDMUQsVUFBQSxRQUFRO1lBQ04sV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLGVBQWUsQ0FBQyxD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LE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuQyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNsQyxXQUFXLENBQUMsU0FBUyxDQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyQyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuQyxXQUFXLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBakZXLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBTzRCLFdBQUksRUFBa0IsZUFBTSxFQUF3Qiw0QkFBWTtPQU5qRixhQUFhLENBa0Z6QjtJQUFELG9CQUFDO0NBQUEsQUFsRkQsSUFrRkM7QUFsRlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN0YXJ0U2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvc3RhcnQvc3RhcnQuc2VydmljZSdcclxuXHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuXHJcbnZhciBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblx0Y29tcGFueVV1aWQgOnN0cmluZztcclxuXHR2aWV3VHlwZSA6bnVtYmVyO1xyXG5cdHV1aWRTdHJpbmcgOmFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgU3RhcnRTZXJ2aWNlOiBTdGFydFNlcnZpY2UpIHtcclxuXHRcdC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiI3N0ZXAzIHt2aXNpYmlsaXR5OiBjb2xsYXBzZWR9XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0Ly8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcblx0XHR0aGlzLmNvbXBhbnlVdWlkID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidXVpZFwiLCBcIlwiKTtcclxuXHRcdHRoaXMudXVpZFN0cmluZyA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInV1aWRTdHJpbmdcIiwgXCJcIik7XHJcblx0XHRpZiAodGhpcy5jb21wYW55VXVpZCA9PSBcIlwiKVxyXG5cdFx0XHR0aGlzLnZpZXdUeXBlID0gMTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy52aWV3VHlwZSA9IDI7XHJcblx0XHR0aGlzLlN0YXJ0U2VydmljZS5yZWZyZXNoU3RhdHVzKHRoaXMuY29tcGFueVV1aWQpLnN1YnNjcmliZShcclxuXHRcdFx0cmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwic3RhdHVzXCIsIHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0uc3RhdHVzKVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZW5lcmF0ZVV1aWQoKSB7XHJcblx0XHRyZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihjKSB7XHJcblx0XHQgIHZhciByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMCwgdiA9IGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KTtcclxuXHRcdCAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG5cdFx0fSk7XHJcblx0ICB9XHJcblx0cHVibGljIG9sZEluYygpIHtcclxuXHRcdGRpYWxvZ3MucHJvbXB0KHtcclxuXHRcdFx0dGl0bGU6IFwiQXBwbGljYXRpb24gTnVtYmVyXCIsXHJcblx0XHRcdGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXHJcblx0XHRcdG5ldXRyYWxCdXR0b25UZXh0OiBcIkRvbmVcIixcclxuXHRcdFx0ZGVmYXVsdFRleHQ6IFwiXCJcclxuXHRcdH0pLnRoZW4ociA9PiB7XHJcblx0XHRcdHRoaXMuU3RhcnRTZXJ2aWNlLnJlZnJlc2hTdGF0dXMoci50ZXh0KS5zdWJzY3JpYmUoXHJcblx0XHRcdFx0cmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHV1aWRBcnIgPSB0aGlzLnV1aWRTdHJpbmcuc3BsaXQoXCIsXCIpO1xyXG5cdFx0XHRcdFx0dXVpZEFyci5wdXNoKHIudGV4dCk7XHJcblx0XHRcdFx0XHR0aGlzLnV1aWRTdHJpbmcgPSB1dWlkQXJyLnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJ1dWlkU3RyaW5nXCIsIHRoaXMudXVpZFN0cmluZyk7XHJcblx0XHRcdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbWFuYWdlXCJdKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG5cclxuXHRwdWJsaWMgY29udGludWUoKTogdm9pZCB7XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGV0YWlsc1wiXSk7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBzdGFydCgpe1xyXG5cclxuXHRcdGxldCB1dWlkID0gdGhpcy5nZW5lcmF0ZVV1aWQoKTtcclxuXHRcdGxldCB1dWlkQXJyID0gW107XHJcblx0XHR1dWlkQXJyID0gdGhpcy51dWlkU3RyaW5nLnNwbGl0KFwiLFwiKTtcclxuXHRcdHV1aWRBcnIucHVzaCh1dWlkKTtcclxuXHRcdHRoaXMudXVpZFN0cmluZyA9IHV1aWRBcnIudG9TdHJpbmcoKTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcInV1aWRTdHJpbmdcIiwgdGhpcy51dWlkU3RyaW5nKTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcInV1aWRcIiwgdXVpZCk7XHJcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJjb21wYW55TmFtZVwiLCBcIlwiKTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImNvbXBhbnlUeXBlXCIsIFwiXCIpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiZmlyc3ROYW1lXCIsIFwiXCIpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwibGFzdE5hbWVcIiwgXCJcIik7XHJcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJlbWFpbFwiLCBcIlwiKTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsMVwiLCBcIlwiKTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsMlwiLCBcIlwiKTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImNpdHlcIiwgXCJcIik7XHJcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcgKFwicG9zdGFsXCIsIFwiXCIpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiY291bnRyeVwiLCBcIlwiKTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcInN0YXRlXCIsIFwiXCIpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWRkVG9EaXJlY3RvcnNcIiwgXCJcIik7XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGV0YWlsc1wiXSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
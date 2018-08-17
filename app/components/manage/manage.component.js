"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var start_service_1 = require("./../../services/start/start.service");
var plugin = require("nativescript-uuid");
var appSettings = require("application-settings");
var ManageComponent = /** @class */ (function () {
    //@ViewChild("step2") step2: ElementRef;
    function ManageComponent(page, router, _Activatedroute, StartService) {
        this.page = page;
        this.router = router;
        this._Activatedroute = _Activatedroute;
        this.StartService = StartService;
        // Use the component constructor to inject providers.
        page.actionBarHidden = true;
        this.page = page;
    }
    ManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Init your component properties here.
        this.companyName = appSettings.getString("companyName", "");
        this.companyType = appSettings.getString("companyType", "");
        this.uuidString = appSettings.getString("uuidString", "");
        this.uuidArr = this.uuidString.split(",");
        this.serverArr = [];
        this.companyUuid = appSettings.getString("uuid", "");
        this.status = appSettings.getString("status", "");
        var i = 0;
        for (var _i = 0, _a = this.uuidArr; _i < _a.length; _i++) {
            var uuidElem = _a[_i];
            if (uuidElem) {
                this.serverArr[i] = {};
                i++;
            }
        }
        i = 0;
        for (var _b = 0, _c = this.uuidArr; _b < _c.length; _b++) {
            var uuidElem = _c[_b];
            if (uuidElem) {
                this.StartService.refreshStatus(uuidElem).subscribe(function (response) {
                    _this.serverArr[i].status = response['incorporation'][0].status;
                    _this.serverArr[i].companyName = response['incorporation'][0].companyName;
                    _this.serverArr[i].companyType = response['incorporation'][0].companyType;
                    _this.serverArr[i].updatedAt = response['incorporation'][0].updatedAt;
                    console.log(_this.serverArr[i].status, _this.serverArr[i].updatedAt);
                    i++;
                }, function (error) { return console.log(error); });
            }
        }
    };
    ManageComponent.prototype.done = function () {
        alert("to do");
    };
    ManageComponent.prototype.viewStatus = function () {
        this.router.navigate(['/status/' + this.companyUuid]);
    };
    ManageComponent = __decorate([
        core_1.Component({
            selector: "Manage",
            moduleId: module.id,
            templateUrl: "./manage.component.html",
            styleUrls: ['./manage.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router, router_1.ActivatedRoute, start_service_1.StartService])
    ], ManageComponent);
    return ManageComponent;
}());
exports.ManageComponent = ManageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hbmFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0U7QUFDeEUsZ0NBQTZCO0FBQzdCLDBDQUF5RDtBQUN6RCxzRUFBb0U7QUFHcEUsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDNUMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFRbEQ7SUFXQyx3Q0FBd0M7SUFDckMseUJBQW9CLElBQVUsRUFBVSxNQUFjLEVBQVUsZUFBOEIsRUFBVSxZQUEwQjtRQUE5RyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFlO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDcEkscURBQXFEO1FBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2YsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFBQSxpQkFpQ0Y7UUFoQ0EsdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLEdBQUcsQ0FBQyxDQUFpQixVQUFZLEVBQVosS0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLGNBQVksRUFBWixJQUFZO1lBQTVCLElBQUksUUFBUSxTQUFBO1lBQ2hCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3ZCLENBQUMsRUFBRSxDQUFDO1lBQ0wsQ0FBQztTQUNEO1FBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNOLEdBQUcsQ0FBQyxDQUFpQixVQUFZLEVBQVosS0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLGNBQVksRUFBWixJQUFZO1lBQTVCLElBQUksUUFBUSxTQUFBO1lBQ2hCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUNsRCxVQUFBLFFBQVE7b0JBQ04sS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFDL0QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztvQkFDekUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztvQkFDekUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztvQkFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNuRSxDQUFDLEVBQUUsQ0FBQztnQkFDTCxDQUFDLEVBQ0YsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUMzQixDQUFDO1lBQ0gsQ0FBQztTQUNEO0lBQ0YsQ0FBQztJQUVNLDhCQUFJLEdBQVg7UUFDQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUVNLG9DQUFVLEdBQWpCO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQTNEVyxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDdEIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUNyQyxDQUFDO3lDQWE0QixXQUFJLEVBQWtCLGVBQU0sRUFBMEIsdUJBQWMsRUFBd0IsNEJBQVk7T0FaekgsZUFBZSxDQTREM0I7SUFBRCxzQkFBQztDQUFBLEFBNURELElBNERDO0FBNURZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3RhcnRTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9zdGFydC9zdGFydC5zZXJ2aWNlJztcclxuXHJcblxyXG5jb25zdCBwbHVnaW4gPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXV1aWRcIik7XHJcbnZhciBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiTWFuYWdlXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vbWFuYWdlLmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbJy4vbWFuYWdlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFuYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblx0Y29tcGFueU5hbWU6IHN0cmluZztcclxuXHRjb21wYW55VHlwZSA6c3RyaW5nO1xyXG5cdGNvbXBhbnlVdWlkIDpzdHJpbmc7XHJcblx0dXVpZFN0cmluZyA6c3RyaW5nO1xyXG5cdHV1aWRBcnIgOmFueTtcclxuXHRzZXJ2ZXJBcnIgOmFueTtcclxuXHR1cGRhdGVkQXQgOmFueTtcclxuXHRzdGF0dXMgOnN0cmluZztcclxuXHJcblx0Ly9AVmlld0NoaWxkKFwic3RlcDJcIikgc3RlcDI6IEVsZW1lbnRSZWY7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX0FjdGl2YXRlZHJvdXRlOkFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIFN0YXJ0U2VydmljZTogU3RhcnRTZXJ2aWNlKSB7XHJcblx0XHQvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG5cdFx0cGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG5cdFx0dGhpcy5wYWdlID0gcGFnZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHRcdC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG5cdFx0dGhpcy5jb21wYW55TmFtZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNvbXBhbnlOYW1lXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5jb21wYW55VHlwZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNvbXBhbnlUeXBlXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy51dWlkU3RyaW5nID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidXVpZFN0cmluZ1wiLCBcIlwiKTtcclxuXHRcdHRoaXMudXVpZEFyciA9IHRoaXMudXVpZFN0cmluZy5zcGxpdChcIixcIik7XHJcblx0XHR0aGlzLnNlcnZlckFyciA9IFtdO1xyXG5cclxuXHRcdHRoaXMuY29tcGFueVV1aWQgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1dWlkXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5zdGF0dXMgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJzdGF0dXNcIiwgXCJcIik7XHJcblx0XHRsZXQgaSA9IDA7XHJcblx0XHRmb3IgKGxldCB1dWlkRWxlbSBvZiB0aGlzLnV1aWRBcnIpIHtcclxuXHRcdFx0aWYgKHV1aWRFbGVtKSB7XHJcblx0XHRcdFx0dGhpcy5zZXJ2ZXJBcnJbaV0gPSB7fTtcclxuXHRcdFx0XHRpKys7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGkgPSAwO1xyXG5cdFx0Zm9yIChsZXQgdXVpZEVsZW0gb2YgdGhpcy51dWlkQXJyKSB7XHJcblx0XHRcdGlmICh1dWlkRWxlbSkge1xyXG5cdFx0XHRcdHRoaXMuU3RhcnRTZXJ2aWNlLnJlZnJlc2hTdGF0dXModXVpZEVsZW0pLnN1YnNjcmliZShcclxuXHRcdFx0XHRcdHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNlcnZlckFycltpXS5zdGF0dXMgPSByZXNwb25zZVsnaW5jb3Jwb3JhdGlvbiddWzBdLnN0YXR1cztcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNlcnZlckFycltpXS5jb21wYW55TmFtZSA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0uY29tcGFueU5hbWU7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXJ2ZXJBcnJbaV0uY29tcGFueVR5cGUgPSByZXNwb25zZVsnaW5jb3Jwb3JhdGlvbiddWzBdLmNvbXBhbnlUeXBlO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2VydmVyQXJyW2ldLnVwZGF0ZWRBdCA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0udXBkYXRlZEF0O1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuc2VydmVyQXJyW2ldLnN0YXR1cywgdGhpcy5zZXJ2ZXJBcnJbaV0udXBkYXRlZEF0KTtcclxuXHRcdFx0XHRcdFx0XHRpKys7XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBkb25lKCl7XHJcblx0XHRhbGVydChcInRvIGRvXCIpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHZpZXdTdGF0dXMoKSB7XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zdGF0dXMvJyArIHRoaXMuY29tcGFueVV1aWRdKTtcclxuXHR9XHJcbn1cclxuIl19
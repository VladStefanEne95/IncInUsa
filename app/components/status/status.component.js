"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var start_service_1 = require("./../../services/start/start.service");
var plugin = require("nativescript-uuid");
var appSettings = require("application-settings");
var StatusComponent = /** @class */ (function () {
    function StatusComponent(page, router, _Activatedroute, StartService) {
        this.page = page;
        this.router = router;
        this._Activatedroute = _Activatedroute;
        this.StartService = StartService;
        page.actionBarHidden = true;
        this.page = page;
    }
    StatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uuid = this._Activatedroute.snapshot.params['id'];
        this.StartService.refreshStatus(this.uuid).subscribe(function (response) {
            _this.status = response['status'];
            if (_this.status)
                console.log(_this.status);
            _this.companyName = response['incorporation'][0].companyName;
            _this.companyType = response['incorporation'][0].companyType;
            _this.updatedAt = response['incorporation'][0].updatedAt;
        }, function (error) { return console.log(error); });
    };
    StatusComponent.prototype.viewApplication = function (uuid) {
        this.router.navigate(["/application", uuid]);
    };
    StatusComponent.prototype.done = function () {
        alert("to do");
    };
    StatusComponent = __decorate([
        core_1.Component({
            selector: "Status",
            moduleId: module.id,
            templateUrl: "./status.component.html",
            styleUrls: ['./status.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router, router_1.ActivatedRoute, start_service_1.StartService])
    ], StatusComponent);
    return StatusComponent;
}());
exports.StatusComponent = StatusComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YXR1cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0U7QUFDeEUsZ0NBQTZCO0FBQzdCLDBDQUF5RDtBQUN6RCxzRUFBb0U7QUFHcEUsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDNUMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFRbEQ7SUFTSSx5QkFBb0IsSUFBVSxFQUFVLE1BQWMsRUFBVSxlQUE4QixFQUFVLFlBQTBCO1FBQTlHLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWU7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUNwSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNmLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBYUY7UUFaQSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUNuRCxVQUFBLFFBQVE7WUFDUCxLQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqQyxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFCLEtBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUM1RCxLQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7WUFDNUQsS0FBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3pELENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzNCLENBQUM7SUFDSCxDQUFDO0lBRU0seUNBQWUsR0FBdEIsVUFBdUIsSUFBSTtRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTSw4QkFBSSxHQUFYO1FBQ0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFuQ1csZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3RCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDckMsQ0FBQzt5Q0FVNEIsV0FBSSxFQUFrQixlQUFNLEVBQTBCLHVCQUFjLEVBQXdCLDRCQUFZO09BVHpILGVBQWUsQ0FvQzNCO0lBQUQsc0JBQUM7Q0FBQSxBQXBDRCxJQW9DQztBQXBDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN0YXJ0U2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvc3RhcnQvc3RhcnQuc2VydmljZSc7XHJcblxyXG5cclxuY29uc3QgcGx1Z2luID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11dWlkXCIpO1xyXG52YXIgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlN0YXR1c1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHR0ZW1wbGF0ZVVybDogXCIuL3N0YXR1cy5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWycuL3N0YXR1cy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN0YXR1c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdHV1aWQgOnN0cmluZztcclxuXHRjb21wYW55TmFtZTogc3RyaW5nO1xyXG5cdGNvbXBhbnlUeXBlIDpzdHJpbmc7XHJcblx0dXBkYXRlZEF0IDphbnk7XHJcblx0c3RhdHVzIDphbnk7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfQWN0aXZhdGVkcm91dGU6QWN0aXZhdGVkUm91dGUsIHByaXZhdGUgU3RhcnRTZXJ2aWNlOiBTdGFydFNlcnZpY2UpIHtcclxuXHRcdHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuXHRcdHRoaXMucGFnZSA9IHBhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLnV1aWQgPSB0aGlzLl9BY3RpdmF0ZWRyb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2lkJ107XHJcblx0XHR0aGlzLlN0YXJ0U2VydmljZS5yZWZyZXNoU3RhdHVzKHRoaXMudXVpZCkuc3Vic2NyaWJlKFxyXG5cdFx0XHRyZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zdGF0dXMgPSByZXNwb25zZVsnc3RhdHVzJ107XHJcblx0XHRcdFx0aWYgKHRoaXMuc3RhdHVzKVxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5zdGF0dXMpO1xyXG5cdFx0XHRcdHRoaXMuY29tcGFueU5hbWUgPSByZXNwb25zZVsnaW5jb3Jwb3JhdGlvbiddWzBdLmNvbXBhbnlOYW1lO1xyXG5cdFx0XHRcdHRoaXMuY29tcGFueVR5cGUgPSByZXNwb25zZVsnaW5jb3Jwb3JhdGlvbiddWzBdLmNvbXBhbnlUeXBlO1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlZEF0ID0gcmVzcG9uc2VbJ2luY29ycG9yYXRpb24nXVswXS51cGRhdGVkQXQ7XHJcblx0XHRcdH0sXHJcblx0XHRcdGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB2aWV3QXBwbGljYXRpb24odXVpZCkge1xyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2FwcGxpY2F0aW9uXCIsIHV1aWRdKTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIGRvbmUoKXtcclxuXHRcdGFsZXJ0KFwidG8gZG9cIik7XHJcblx0fVxyXG59XHJcbiJdfQ==
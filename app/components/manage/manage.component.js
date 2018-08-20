"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var start_service_1 = require("./../../services/start/start.service");
var plugin = require("nativescript-uuid");
var appSettings = require("application-settings");
var ManageComponent = /** @class */ (function () {
    function ManageComponent(page, router, _Activatedroute, StartService) {
        this.page = page;
        this.router = router;
        this._Activatedroute = _Activatedroute;
        this.StartService = StartService;
        page.actionBarHidden = true;
        this.page = page;
    }
    ManageComponent.prototype.ngOnInit = function () {
        var _this = this;
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
                    _this.serverArr[i].uuid = response['incorporation'][0].uuid;
                    i++;
                }, function (error) { return console.log(error); });
            }
        }
    };
    ManageComponent.prototype.done = function () {
        alert("to do");
    };
    ManageComponent.prototype.viewStatus = function (companyUuid) {
        this.router.navigate(['/status/' + companyUuid]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hbmFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0U7QUFDeEUsZ0NBQTZCO0FBQzdCLDBDQUF5RDtBQUN6RCxzRUFBb0U7QUFHcEUsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDNUMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFRbEQ7SUFVSSx5QkFBb0IsSUFBVSxFQUFVLE1BQWMsRUFBVSxlQUE4QixFQUFVLFlBQTBCO1FBQTlHLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWU7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUNwSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNmLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBZ0NGO1FBL0JBLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLEdBQUcsQ0FBQyxDQUFpQixVQUFZLEVBQVosS0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLGNBQVksRUFBWixJQUFZO1lBQTVCLElBQUksUUFBUSxTQUFBO1lBQ2hCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3ZCLENBQUMsRUFBRSxDQUFDO1lBQ0wsQ0FBQztTQUNEO1FBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNOLEdBQUcsQ0FBQyxDQUFpQixVQUFZLEVBQVosS0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLGNBQVksRUFBWixJQUFZO1lBQTVCLElBQUksUUFBUSxTQUFBO1lBQ2hCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUNsRCxVQUFBLFFBQVE7b0JBQ04sS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFDL0QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztvQkFDekUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztvQkFDekUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztvQkFDckUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDM0QsQ0FBQyxFQUFFLENBQUM7Z0JBQ0wsQ0FBQyxFQUNGLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDM0IsQ0FBQztZQUNILENBQUM7U0FDRDtJQUNGLENBQUM7SUFFTSw4QkFBSSxHQUFYO1FBQ0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFFTSxvQ0FBVSxHQUFqQixVQUFrQixXQUFtQjtRQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUF2RFcsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3RCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDckMsQ0FBQzt5Q0FXNEIsV0FBSSxFQUFrQixlQUFNLEVBQTBCLHVCQUFjLEVBQXdCLDRCQUFZO09BVnpILGVBQWUsQ0F3RDNCO0lBQUQsc0JBQUM7Q0FBQSxBQXhERCxJQXdEQztBQXhEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN0YXJ0U2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvc3RhcnQvc3RhcnQuc2VydmljZSc7XHJcblxyXG5cclxuY29uc3QgcGx1Z2luID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11dWlkXCIpO1xyXG52YXIgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIk1hbmFnZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHR0ZW1wbGF0ZVVybDogXCIuL21hbmFnZS5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWycuL21hbmFnZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hbmFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdGNvbXBhbnlOYW1lOiBzdHJpbmc7XHJcblx0Y29tcGFueVR5cGUgOnN0cmluZztcclxuXHRjb21wYW55VXVpZCA6c3RyaW5nO1xyXG5cdHV1aWRTdHJpbmcgOnN0cmluZztcclxuXHR1dWlkQXJyIDphbnk7XHJcblx0c2VydmVyQXJyIDpBcnJheTxhbnk+O1xyXG5cdHN0YXR1cyA6c3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfQWN0aXZhdGVkcm91dGU6QWN0aXZhdGVkUm91dGUsIHByaXZhdGUgU3RhcnRTZXJ2aWNlOiBTdGFydFNlcnZpY2UpIHtcclxuXHRcdHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuXHRcdHRoaXMucGFnZSA9IHBhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmNvbXBhbnlOYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY29tcGFueU5hbWVcIiwgXCJcIik7XHJcblx0XHR0aGlzLmNvbXBhbnlUeXBlID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY29tcGFueVR5cGVcIiwgXCJcIik7XHJcblx0XHR0aGlzLnV1aWRTdHJpbmcgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1dWlkU3RyaW5nXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy51dWlkQXJyID0gdGhpcy51dWlkU3RyaW5nLnNwbGl0KFwiLFwiKTtcclxuXHRcdHRoaXMuc2VydmVyQXJyID0gW107XHJcblxyXG5cdFx0dGhpcy5jb21wYW55VXVpZCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInV1aWRcIiwgXCJcIik7XHJcblx0XHR0aGlzLnN0YXR1cyA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInN0YXR1c1wiLCBcIlwiKTtcclxuXHRcdGxldCBpID0gMDtcclxuXHRcdGZvciAobGV0IHV1aWRFbGVtIG9mIHRoaXMudXVpZEFycikge1xyXG5cdFx0XHRpZiAodXVpZEVsZW0pIHtcclxuXHRcdFx0XHR0aGlzLnNlcnZlckFycltpXSA9IHt9O1xyXG5cdFx0XHRcdGkrKztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aSA9IDA7XHJcblx0XHRmb3IgKGxldCB1dWlkRWxlbSBvZiB0aGlzLnV1aWRBcnIpIHtcclxuXHRcdFx0aWYgKHV1aWRFbGVtKSB7XHJcblx0XHRcdFx0dGhpcy5TdGFydFNlcnZpY2UucmVmcmVzaFN0YXR1cyh1dWlkRWxlbSkuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdFx0cmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2VydmVyQXJyW2ldLnN0YXR1cyA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0uc3RhdHVzO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2VydmVyQXJyW2ldLmNvbXBhbnlOYW1lID0gcmVzcG9uc2VbJ2luY29ycG9yYXRpb24nXVswXS5jb21wYW55TmFtZTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNlcnZlckFycltpXS5jb21wYW55VHlwZSA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0uY29tcGFueVR5cGU7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXJ2ZXJBcnJbaV0udXBkYXRlZEF0ID0gcmVzcG9uc2VbJ2luY29ycG9yYXRpb24nXVswXS51cGRhdGVkQXQ7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXJ2ZXJBcnJbaV0udXVpZCA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0udXVpZDtcclxuXHRcdFx0XHRcdFx0XHRpKys7XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBkb25lKCl7XHJcblx0XHRhbGVydChcInRvIGRvXCIpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHZpZXdTdGF0dXMoY29tcGFueVV1aWQgOnN0cmluZykge1xyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3RhdHVzLycgKyBjb21wYW55VXVpZF0pO1xyXG5cdH1cclxufVxyXG4iXX0=
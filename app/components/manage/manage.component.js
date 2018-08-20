"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var start_service_1 = require("./../../services/start/start.service");
var dialogs = require("ui/dialogs");
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
    ManageComponent.prototype.oldInc = function () {
        var _this = this;
        dialogs.prompt({
            title: "Application Number",
            cancelButtonText: "Cancel",
            neutralButtonText: "Done",
            defaultText: ""
        }).then(function (r) {
            _this.uuidString = appSettings.getString("uuidString", "");
            if (_this.uuidString.indexOf(r.text) !== -1) {
                _this.uuidArr = _this.uuidString.split(",");
                _this.uuidArr.push(r.text);
                _this.uuidString = _this.uuidArr.toString();
                appSettings.setString("uuidString", _this.uuidString);
                _this.StartService.refreshStatus(r.text).subscribe(function (response) {
                    var counter = _this.serverArr.length;
                    _this.serverArr[counter] = {};
                    _this.serverArr[counter].status = response['incorporation'][0].status;
                    _this.serverArr[counter].companyName = response['incorporation'][0].companyName;
                    _this.serverArr[counter].companyType = response['incorporation'][0].companyType;
                    _this.serverArr[counter].updatedAt = response['incorporation'][0].updatedAt;
                    _this.serverArr[counter].uuid = response['incorporation'][0].uuid;
                }, function (error) { return console.log(error); });
            }
            else
                alert("You already have this application");
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hbmFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0U7QUFDeEUsZ0NBQTZCO0FBQzdCLDBDQUF5RDtBQUN6RCxzRUFBb0U7QUFDcEUsb0NBQXFDO0FBR3JDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQzVDLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBUWxEO0lBVUkseUJBQW9CLElBQVUsRUFBVSxNQUFjLEVBQVUsZUFBOEIsRUFBVSxZQUEwQjtRQUE5RyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFlO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDcEksSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDZixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUFBLGlCQWdDRjtRQS9CQSxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRXBCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFD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QUFJO2dCQUNMLEtBQUssQ0FBRSxtQ0FBbUMsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVNLG9DQUFVLEdBQWpCLFVBQWtCLFdBQW1CO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQXJGVyxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDdEIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUNyQyxDQUFDO3lDQVc0QixXQUFJLEVBQWtCLGVBQU0sRUFBMEIsdUJBQWMsRUFBd0IsNEJBQVk7T0FWekgsZUFBZSxDQXNGM0I7SUFBRCxzQkFBQztDQUFBLEFBdEZELElBc0ZDO0FBdEZZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3RhcnRTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9zdGFydC9zdGFydC5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiXHJcblxyXG5cclxuY29uc3QgcGx1Z2luID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11dWlkXCIpO1xyXG52YXIgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIk1hbmFnZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHR0ZW1wbGF0ZVVybDogXCIuL21hbmFnZS5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWycuL21hbmFnZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hbmFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdGNvbXBhbnlOYW1lOiBzdHJpbmc7XHJcblx0Y29tcGFueVR5cGUgOnN0cmluZztcclxuXHRjb21wYW55VXVpZCA6c3RyaW5nO1xyXG5cdHV1aWRTdHJpbmcgOnN0cmluZztcclxuXHR1dWlkQXJyIDphbnk7XHJcblx0c2VydmVyQXJyIDpBcnJheTxhbnk+O1xyXG5cdHN0YXR1cyA6c3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfQWN0aXZhdGVkcm91dGU6QWN0aXZhdGVkUm91dGUsIHByaXZhdGUgU3RhcnRTZXJ2aWNlOiBTdGFydFNlcnZpY2UpIHtcclxuXHRcdHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuXHRcdHRoaXMucGFnZSA9IHBhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmNvbXBhbnlOYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY29tcGFueU5hbWVcIiwgXCJcIik7XHJcblx0XHR0aGlzLmNvbXBhbnlUeXBlID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY29tcGFueVR5cGVcIiwgXCJcIik7XHJcblx0XHR0aGlzLnV1aWRTdHJpbmcgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1dWlkU3RyaW5nXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy51dWlkQXJyID0gdGhpcy51dWlkU3RyaW5nLnNwbGl0KFwiLFwiKTtcclxuXHRcdHRoaXMuc2VydmVyQXJyID0gW107XHJcblxyXG5cdFx0dGhpcy5jb21wYW55VXVpZCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInV1aWRcIiwgXCJcIik7XHJcblx0XHR0aGlzLnN0YXR1cyA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInN0YXR1c1wiLCBcIlwiKTtcclxuXHRcdGxldCBpID0gMDtcclxuXHRcdGZvciAobGV0IHV1aWRFbGVtIG9mIHRoaXMudXVpZEFycikge1xyXG5cdFx0XHRpZiAodXVpZEVsZW0pIHtcclxuXHRcdFx0XHR0aGlzLnNlcnZlckFycltpXSA9IHt9O1xyXG5cdFx0XHRcdGkrKztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aSA9IDA7XHJcblx0XHRmb3IgKGxldCB1dWlkRWxlbSBvZiB0aGlzLnV1aWRBcnIpIHtcclxuXHRcdFx0aWYgKHV1aWRFbGVtKSB7XHJcblx0XHRcdFx0dGhpcy5TdGFydFNlcnZpY2UucmVmcmVzaFN0YXR1cyh1dWlkRWxlbSkuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdFx0cmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNlcnZlckFycltpXS5zdGF0dXMgPSByZXNwb25zZVsnaW5jb3Jwb3JhdGlvbiddWzBdLnN0YXR1cztcclxuXHRcdFx0XHRcdFx0dGhpcy5zZXJ2ZXJBcnJbaV0uY29tcGFueU5hbWUgPSByZXNwb25zZVsnaW5jb3Jwb3JhdGlvbiddWzBdLmNvbXBhbnlOYW1lO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNlcnZlckFycltpXS5jb21wYW55VHlwZSA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0uY29tcGFueVR5cGU7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2VydmVyQXJyW2ldLnVwZGF0ZWRBdCA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0udXBkYXRlZEF0O1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNlcnZlckFycltpXS51dWlkID0gcmVzcG9uc2VbJ2luY29ycG9yYXRpb24nXVswXS51dWlkO1xyXG5cdFx0XHRcdFx0XHRpKys7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgZG9uZSgpIHtcclxuXHRcdGFsZXJ0KFwidG8gZG9cIik7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgb2xkSW5jKCkge1xyXG5cdFx0ZGlhbG9ncy5wcm9tcHQoe1xyXG5cdFx0XHR0aXRsZTogXCJBcHBsaWNhdGlvbiBOdW1iZXJcIixcclxuXHRcdFx0Y2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcclxuXHRcdFx0bmV1dHJhbEJ1dHRvblRleHQ6IFwiRG9uZVwiLFxyXG5cdFx0XHRkZWZhdWx0VGV4dDogXCJcIlxyXG5cdFx0fSkudGhlbihyID0+IHtcclxuXHRcdFx0dGhpcy51dWlkU3RyaW5nID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidXVpZFN0cmluZ1wiLCBcIlwiKTtcclxuXHRcdFx0aWYgKHRoaXMudXVpZFN0cmluZy5pbmRleE9mKHIudGV4dCkgIT09IC0xKSB7XHJcblx0XHRcdFx0dGhpcy51dWlkQXJyID0gdGhpcy51dWlkU3RyaW5nLnNwbGl0KFwiLFwiKTtcclxuXHRcdFx0XHR0aGlzLnV1aWRBcnIucHVzaChyLnRleHQpO1xyXG5cdFx0XHRcdHRoaXMudXVpZFN0cmluZyA9IHRoaXMudXVpZEFyci50b1N0cmluZygpO1xyXG5cdFx0XHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcInV1aWRTdHJpbmdcIiwgdGhpcy51dWlkU3RyaW5nKTtcclxuXHRcdFx0XHR0aGlzLlN0YXJ0U2VydmljZS5yZWZyZXNoU3RhdHVzKHIudGV4dCkuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdFx0cmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdFx0XHRsZXQgY291bnRlciA9IHRoaXMuc2VydmVyQXJyLmxlbmd0aDtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZXJ2ZXJBcnJbY291bnRlcl0gPSB7fTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZXJ2ZXJBcnJbY291bnRlcl0uc3RhdHVzID0gcmVzcG9uc2VbJ2luY29ycG9yYXRpb24nXVswXS5zdGF0dXM7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2VydmVyQXJyW2NvdW50ZXJdLmNvbXBhbnlOYW1lID0gcmVzcG9uc2VbJ2luY29ycG9yYXRpb24nXVswXS5jb21wYW55TmFtZTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZXJ2ZXJBcnJbY291bnRlcl0uY29tcGFueVR5cGUgPSByZXNwb25zZVsnaW5jb3Jwb3JhdGlvbiddWzBdLmNvbXBhbnlUeXBlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNlcnZlckFycltjb3VudGVyXS51cGRhdGVkQXQgPSByZXNwb25zZVsnaW5jb3Jwb3JhdGlvbiddWzBdLnVwZGF0ZWRBdDtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZXJ2ZXJBcnJbY291bnRlcl0udXVpZCA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0udXVpZDtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9IGVsc2UgXHJcblx0XHRcdFx0YWxlcnQgKFwiWW91IGFscmVhZHkgaGF2ZSB0aGlzIGFwcGxpY2F0aW9uXCIpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdmlld1N0YXR1cyhjb21wYW55VXVpZCA6c3RyaW5nKSB7XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zdGF0dXMvJyArIGNvbXBhbnlVdWlkXSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
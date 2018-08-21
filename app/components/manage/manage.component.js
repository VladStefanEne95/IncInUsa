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
        // this.uuidArr =['006f0010-9239-46d1-a6bc-b4c7c5f5de82','a151487f-5fda-468f-a044-16bb6222c2a8','bfc8bac0-ffc9-448e-8bf4-d374c1fa68d5'];
        // appSettings.setString("uuidString", ['006f0010-9239-46d1-a6bc-b4c7c5f5de82','a151487f-5fda-468f-a044-16bb6222c2a8','bfc8bac0-ffc9-448e-8bf4-d374c1fa68d5'].toString());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hbmFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0U7QUFDeEUsZ0NBQTZCO0FBQzdCLDBDQUF5RDtBQUN6RCxzRUFBb0U7QUFDcEUsb0NBQXFDO0FBR3JDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQzVDLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBUWxEO0lBVUkseUJBQW9CLElBQVUsRUFBVSxNQUFjLEVBQVUsZUFBOEIsRUFBVSxZQUEwQjtRQUE5RyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFlO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDcEksSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDZixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUFBLGlCQW1DRjtRQWxDQSxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUUxRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLHdJQUF3STtRQUN4SSwwS0FBMEs7UUFDMUssSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFcEIsSUFB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QUMzQixDQUFDO1lBQ0gsQ0FBQztZQUFDLElBQUk7Z0JBQ0wsS0FBSyxDQUFFLG1DQUFtQyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRU0sb0NBQVUsR0FBakIsVUFBa0IsV0FBbUI7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBeEZXLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN0QixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3JDLENBQUM7eUNBVzRCLFdBQUksRUFBa0IsZUFBTSxFQUEwQix1QkFBYyxFQUF3Qiw0QkFBWTtPQVZ6SCxlQUFlLENBeUYzQjtJQUFELHNCQUFDO0NBQUEsQUF6RkQsSUF5RkM7QUF6RlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdGFydFNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL3N0YXJ0L3N0YXJ0LnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCJcclxuXHJcblxyXG5jb25zdCBwbHVnaW4gPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXV1aWRcIik7XHJcbnZhciBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiTWFuYWdlXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vbWFuYWdlLmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbJy4vbWFuYWdlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFuYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblx0Y29tcGFueU5hbWU6IHN0cmluZztcclxuXHRjb21wYW55VHlwZSA6c3RyaW5nO1xyXG5cdGNvbXBhbnlVdWlkIDpzdHJpbmc7XHJcblx0dXVpZFN0cmluZyA6c3RyaW5nO1xyXG5cdHV1aWRBcnIgOmFueTtcclxuXHRzZXJ2ZXJBcnIgOkFycmF5PGFueT47XHJcblx0c3RhdHVzIDpzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9BY3RpdmF0ZWRyb3V0ZTpBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBTdGFydFNlcnZpY2U6IFN0YXJ0U2VydmljZSkge1xyXG5cdFx0cGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG5cdFx0dGhpcy5wYWdlID0gcGFnZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuY29tcGFueU5hbWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjb21wYW55TmFtZVwiLCBcIlwiKTtcclxuXHRcdHRoaXMuY29tcGFueVR5cGUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjb21wYW55VHlwZVwiLCBcIlwiKTtcclxuXHRcdHRoaXMudXVpZFN0cmluZyA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInV1aWRTdHJpbmdcIiwgXCJcIik7XHJcblx0XHRcclxuXHRcdHRoaXMudXVpZEFyciA9IHRoaXMudXVpZFN0cmluZy5zcGxpdChcIixcIik7XHJcblx0XHQvLyB0aGlzLnV1aWRBcnIgPVsnMDA2ZjAwMTAtOTIzOS00NmQxLWE2YmMtYjRjN2M1ZjVkZTgyJywnYTE1MTQ4N2YtNWZkYS00NjhmLWEwNDQtMTZiYjYyMjJjMmE4JywnYmZjOGJhYzAtZmZjOS00NDhlLThiZjQtZDM3NGMxZmE2OGQ1J107XHJcblx0XHQvLyBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJ1dWlkU3RyaW5nXCIsIFsnMDA2ZjAwMTAtOTIzOS00NmQxLWE2YmMtYjRjN2M1ZjVkZTgyJywnYTE1MTQ4N2YtNWZkYS00NjhmLWEwNDQtMTZiYjYyMjJjMmE4JywnYmZjOGJhYzAtZmZjOS00NDhlLThiZjQtZDM3NGMxZmE2OGQ1J10udG9TdHJpbmcoKSk7XHJcblx0XHR0aGlzLnNlcnZlckFyciA9IFtdO1xyXG5cclxuXHRcdHRoaXMuY29tcGFueVV1aWQgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1dWlkXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5zdGF0dXMgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJzdGF0dXNcIiwgXCJcIik7XHJcblx0XHRsZXQgaSA9IDA7XHJcblx0XHRmb3IgKGxldCB1dWlkRWxlbSBvZiB0aGlzLnV1aWRBcnIpIHtcclxuXHRcdFx0aWYgKHV1aWRFbGVtKSB7XHJcblx0XHRcdFx0dGhpcy5zZXJ2ZXJBcnJbaV0gPSB7fTtcclxuXHRcdFx0XHRpKys7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGkgPSAwO1xyXG5cdFx0Zm9yIChsZXQgdXVpZEVsZW0gb2YgdGhpcy51dWlkQXJyKSB7XHJcblx0XHRcdGlmICh1dWlkRWxlbSkge1xyXG5cdFx0XHRcdHRoaXMuU3RhcnRTZXJ2aWNlLnJlZnJlc2hTdGF0dXModXVpZEVsZW0pLnN1YnNjcmliZShcclxuXHRcdFx0XHRcdHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZXJ2ZXJBcnJbaV0uc3RhdHVzID0gcmVzcG9uc2VbJ2luY29ycG9yYXRpb24nXVswXS5zdGF0dXM7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2VydmVyQXJyW2ldLmNvbXBhbnlOYW1lID0gcmVzcG9uc2VbJ2luY29ycG9yYXRpb24nXVswXS5jb21wYW55TmFtZTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZXJ2ZXJBcnJbaV0uY29tcGFueVR5cGUgPSByZXNwb25zZVsnaW5jb3Jwb3JhdGlvbiddWzBdLmNvbXBhbnlUeXBlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNlcnZlckFycltpXS51cGRhdGVkQXQgPSByZXNwb25zZVsnaW5jb3Jwb3JhdGlvbiddWzBdLnVwZGF0ZWRBdDtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZXJ2ZXJBcnJbaV0udXVpZCA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0udXVpZDtcclxuXHRcdFx0XHRcdFx0aSsrO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cHVibGljIGRvbmUoKSB7XHJcblx0XHRhbGVydChcInRvIGRvXCIpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG9sZEluYygpIHtcclxuXHRcdGRpYWxvZ3MucHJvbXB0KHtcclxuXHRcdFx0dGl0bGU6IFwiQXBwbGljYXRpb24gTnVtYmVyXCIsXHJcblx0XHRcdGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXHJcblx0XHRcdG5ldXRyYWxCdXR0b25UZXh0OiBcIkRvbmVcIixcclxuXHRcdFx0ZGVmYXVsdFRleHQ6IFwiXCJcclxuXHRcdH0pLnRoZW4ociA9PiB7XHJcblx0XHRcdHRoaXMudXVpZFN0cmluZyA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInV1aWRTdHJpbmdcIiwgXCJcIik7XHJcblx0XHRcdGlmICh0aGlzLnV1aWRTdHJpbmcuaW5kZXhPZihyLnRleHQpICE9PSAtMSkge1xyXG5cdFx0XHRcdHRoaXMudXVpZEFyciA9IHRoaXMudXVpZFN0cmluZy5zcGxpdChcIixcIik7XHJcblx0XHRcdFx0dGhpcy51dWlkQXJyLnB1c2goci50ZXh0KTtcclxuXHRcdFx0XHR0aGlzLnV1aWRTdHJpbmcgPSB0aGlzLnV1aWRBcnIudG9TdHJpbmcoKTtcclxuXHRcdFx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJ1dWlkU3RyaW5nXCIsIHRoaXMudXVpZFN0cmluZyk7XHJcblx0XHRcdFx0dGhpcy5TdGFydFNlcnZpY2UucmVmcmVzaFN0YXR1cyhyLnRleHQpLnN1YnNjcmliZShcclxuXHRcdFx0XHRcdHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRcdFx0bGV0IGNvdW50ZXIgPSB0aGlzLnNlcnZlckFyci5sZW5ndGg7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2VydmVyQXJyW2NvdW50ZXJdID0ge307XHJcblx0XHRcdFx0XHRcdHRoaXMuc2VydmVyQXJyW2NvdW50ZXJdLnN0YXR1cyA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0uc3RhdHVzO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNlcnZlckFycltjb3VudGVyXS5jb21wYW55TmFtZSA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0uY29tcGFueU5hbWU7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2VydmVyQXJyW2NvdW50ZXJdLmNvbXBhbnlUeXBlID0gcmVzcG9uc2VbJ2luY29ycG9yYXRpb24nXVswXS5jb21wYW55VHlwZTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZXJ2ZXJBcnJbY291bnRlcl0udXBkYXRlZEF0ID0gcmVzcG9uc2VbJ2luY29ycG9yYXRpb24nXVswXS51cGRhdGVkQXQ7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2VydmVyQXJyW2NvdW50ZXJdLnV1aWQgPSByZXNwb25zZVsnaW5jb3Jwb3JhdGlvbiddWzBdLnV1aWQ7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSBlbHNlIFxyXG5cdFx0XHRcdGFsZXJ0IChcIllvdSBhbHJlYWR5IGhhdmUgdGhpcyBhcHBsaWNhdGlvblwiKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHZpZXdTdGF0dXMoY29tcGFueVV1aWQgOnN0cmluZykge1xyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3RhdHVzLycgKyBjb21wYW55VXVpZF0pO1xyXG5cdH1cclxufVxyXG4iXX0=
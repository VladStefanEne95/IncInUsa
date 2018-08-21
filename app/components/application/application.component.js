"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var start_service_1 = require("./../../services/start/start.service");
var appSettings = require("application-settings");
var ApplicationComponent = /** @class */ (function () {
    function ApplicationComponent(page, router, _Activatedroute, StartService) {
        this.page = page;
        this.router = router;
        this._Activatedroute = _Activatedroute;
        this.StartService = StartService;
        // Use the component constructor to inject providers.
        page.actionBarHidden = true;
        this.page = page;
    }
    ApplicationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uuid = this._Activatedroute.snapshot.params['id'];
        this.directors = appSettings.getString("directors", "");
        this.StartService.refreshStatus(this.uuid).subscribe(function (response) {
            _this.companyName = response['incorporation'][0].companyName;
            _this.companyType = response['incorporation'][0].companyType;
            _this.firstName = response['incorporation'][0].firstName;
            _this.lastName = response['incorporation'][0].lastName;
            _this.email = response['incorporation'][0].email;
            _this.al1 = response['incorporation'][0].al1;
            _this.al2 = response['incorporation'][0].al2;
            _this.city = response['incorporation'][0].city;
            _this.postal = response['incorporation'][0].postal;
            _this.country = response['incorporation'][0].country;
            _this.state = response['incorporation'][0].state;
            _this.directors = response['incorporation'][0].directors;
            _this.directorsArr = JSON.parse(_this.directors);
        }, function (error) { return console.log(error); });
    };
    ApplicationComponent.prototype.step3 = function () {
        this.router.navigate(["/review"]);
    };
    ApplicationComponent.prototype.viewDirector = function (id) {
        this.router.navigate(["/view-director", this.uuid, id]);
    };
    __decorate([
        core_1.ViewChild("CB1"),
        __metadata("design:type", core_1.ElementRef)
    ], ApplicationComponent.prototype, "FirstCheckBox", void 0);
    ApplicationComponent = __decorate([
        core_1.Component({
            selector: "Application",
            moduleId: module.id,
            templateUrl: "./application.component.html",
            styleUrls: ['./application.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router, router_1.ActivatedRoute, start_service_1.StartService])
    ], ApplicationComponent);
    return ApplicationComponent;
}());
exports.ApplicationComponent = ApplicationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwbGljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLGdDQUErQjtBQUcvQiwwQ0FBMEQ7QUFDMUQsc0VBQW9FO0FBR3BFLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBU2xEO0lBcUJJLDhCQUFvQixJQUFVLEVBQVUsTUFBYyxFQUFVLGVBQThCLEVBQVUsWUFBMEI7UUFBOUcsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBZTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ3BJLHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNmLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQUEsaUJBdUJGO1FBdEJBLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFHeEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FDbkQsVUFBQSxRQUFRO1lBQ1AsS0FBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1lBQzVELEtBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUM1RCxLQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDeEQsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3RELEtBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNoRCxLQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDNUMsS0FBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQzVDLEtBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM5QyxLQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDbEQsS0FBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ3BELEtBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNoRCxLQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDeEQsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRCxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUMzQixDQUFDO0lBQ0gsQ0FBQztJQUVELG9DQUFLLEdBQUw7UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELDJDQUFZLEdBQVosVUFBYSxFQUFFO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQXhEaUI7UUFBakIsZ0JBQVMsQ0FBQyxLQUFLLENBQUM7a0NBQWdCLGlCQUFVOytEQUFDO0lBRmhDLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3RCLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7U0FDMUMsQ0FBQzt5Q0FzQjRCLFdBQUksRUFBa0IsZUFBTSxFQUEwQix1QkFBYyxFQUF3Qiw0QkFBWTtPQXJCekgsb0JBQW9CLENBNERoQztJQUFELDJCQUFDO0NBQUEsQUE1REQsSUE0REM7QUE1RFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IEtleWJvYXJkVHlwZSB9IGZyb20gXCJ1aS9lbnVtc1wiO1xyXG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xyXG5pbXBvcnQgeyAgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN0YXJ0U2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvc3RhcnQvc3RhcnQuc2VydmljZSc7XHJcblxyXG5cclxudmFyIGFwcFNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiQXBwbGljYXRpb25cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9hcHBsaWNhdGlvbi5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWycuL2FwcGxpY2F0aW9uLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHRAVmlld0NoaWxkKFwiQ0IxXCIpIEZpcnN0Q2hlY2tCb3g6IEVsZW1lbnRSZWY7XHJcblxyXG5cdGZpcnN0TmFtZSA6c3RyaW5nO1xyXG5cdGxhc3ROYW1lIDpzdHJpbmc7XHJcblx0ZW1haWwgOnN0cmluZztcclxuXHRhbDEgOnN0cmluZztcclxuXHRhbDIgOnN0cmluZztcclxuXHRjaXR5IDpzdHJpbmc7XHJcblx0cG9zdGFsIDpudW1iZXI7XHJcblx0Y291bnRyeSA6c3RyaW5nO1xyXG5cdHN0YXRlIDpzdHJpbmc7XHJcblx0Y29tcGFueU5hbWU6IHN0cmluZztcclxuXHRjb21wYW55VHlwZSA6c3RyaW5nO1xyXG5cdGRpcmVjdG9ycyA6c3RyaW5nO1xyXG5cdHV1aWQgOnN0cmluZztcclxuXHRjb21wYW55VXVpZCA6c3RyaW5nO1xyXG5cdGRpcmVjdG9yc0FyciA6YW55O1xyXG5cclxuXHRcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfQWN0aXZhdGVkcm91dGU6QWN0aXZhdGVkUm91dGUsIHByaXZhdGUgU3RhcnRTZXJ2aWNlOiBTdGFydFNlcnZpY2UpIHtcclxuXHRcdC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblx0XHR0aGlzLnBhZ2UgPSBwYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy51dWlkID0gdGhpcy5fQWN0aXZhdGVkcm91dGUuc25hcHNob3QucGFyYW1zWydpZCddO1xyXG5cdFx0dGhpcy5kaXJlY3RvcnMgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJkaXJlY3RvcnNcIiwgXCJcIik7XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0dGhpcy5TdGFydFNlcnZpY2UucmVmcmVzaFN0YXR1cyh0aGlzLnV1aWQpLnN1YnNjcmliZShcclxuXHRcdFx0cmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdHRoaXMuY29tcGFueU5hbWUgPSByZXNwb25zZVsnaW5jb3Jwb3JhdGlvbiddWzBdLmNvbXBhbnlOYW1lO1xyXG5cdFx0XHRcdHRoaXMuY29tcGFueVR5cGUgPSByZXNwb25zZVsnaW5jb3Jwb3JhdGlvbiddWzBdLmNvbXBhbnlUeXBlO1xyXG5cdFx0XHRcdHRoaXMuZmlyc3ROYW1lID0gcmVzcG9uc2VbJ2luY29ycG9yYXRpb24nXVswXS5maXJzdE5hbWU7XHJcblx0XHRcdFx0dGhpcy5sYXN0TmFtZSA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0ubGFzdE5hbWU7XHJcblx0XHRcdFx0dGhpcy5lbWFpbCA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0uZW1haWw7XHJcblx0XHRcdFx0dGhpcy5hbDEgPSByZXNwb25zZVsnaW5jb3Jwb3JhdGlvbiddWzBdLmFsMTtcclxuXHRcdFx0XHR0aGlzLmFsMiA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0uYWwyO1xyXG5cdFx0XHRcdHRoaXMuY2l0eSA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0uY2l0eTtcclxuXHRcdFx0XHR0aGlzLnBvc3RhbCA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0ucG9zdGFsO1xyXG5cdFx0XHRcdHRoaXMuY291bnRyeSA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0uY291bnRyeTtcclxuXHRcdFx0XHR0aGlzLnN0YXRlID0gcmVzcG9uc2VbJ2luY29ycG9yYXRpb24nXVswXS5zdGF0ZTtcclxuXHRcdFx0XHR0aGlzLmRpcmVjdG9ycyA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0uZGlyZWN0b3JzO1xyXG5cdFx0XHRcdHRoaXMuZGlyZWN0b3JzQXJyID0gSlNPTi5wYXJzZSh0aGlzLmRpcmVjdG9ycyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHN0ZXAzKCkge1xyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3Jldmlld1wiXSk7XHJcblx0fVxyXG5cclxuXHR2aWV3RGlyZWN0b3IoaWQpIHtcclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi92aWV3LWRpcmVjdG9yXCIsIHRoaXMudXVpZCwgaWRdKTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==
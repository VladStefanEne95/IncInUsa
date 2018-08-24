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
            _this.emoji = response['incorporation'][0].emoji;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwbGljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLGdDQUErQjtBQUcvQiwwQ0FBMEQ7QUFDMUQsc0VBQW9FO0FBR3BFLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBU2xEO0lBc0JJLDhCQUFvQixJQUFVLEVBQVUsTUFBYyxFQUFVLGVBQThCLEVBQVUsWUFBMEI7UUFBOUcsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBZTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ3BJLHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNmLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQUEsaUJBd0JGO1FBdkJBLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFHeEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FDbkQsVUFBQSxRQUFRO1lBQ1AsS0FBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1lBQzVELEtBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUM1RCxLQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDeEQsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3RELEtBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNoRCxLQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDNUMsS0FBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQzVDLEtBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM5QyxLQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDbEQsS0FBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ3BELEtBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNoRCxLQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDaEQsS0FBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ3hELEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDM0IsQ0FBQztJQUNILENBQUM7SUFFRCxvQ0FBSyxHQUFMO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCwyQ0FBWSxHQUFaLFVBQWEsRUFBRTtRQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUExRGlCO1FBQWpCLGdCQUFTLENBQUMsS0FBSyxDQUFDO2tDQUFnQixpQkFBVTsrREFBQztJQUZoQyxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN0QixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzFDLENBQUM7eUNBdUI0QixXQUFJLEVBQWtCLGVBQU0sRUFBMEIsdUJBQWMsRUFBd0IsNEJBQVk7T0F0QnpILG9CQUFvQixDQThEaEM7SUFBRCwyQkFBQztDQUFBLEFBOURELElBOERDO0FBOURZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBLZXlib2FyZFR5cGUgfSBmcm9tIFwidWkvZW51bXNcIjtcclxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcclxuaW1wb3J0IHsgIEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdGFydFNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL3N0YXJ0L3N0YXJ0LnNlcnZpY2UnO1xyXG5cclxuXHJcbnZhciBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkFwcGxpY2F0aW9uXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vYXBwbGljYXRpb24uY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsnLi9hcHBsaWNhdGlvbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblx0QFZpZXdDaGlsZChcIkNCMVwiKSBGaXJzdENoZWNrQm94OiBFbGVtZW50UmVmO1xyXG5cclxuXHRmaXJzdE5hbWUgOnN0cmluZztcclxuXHRsYXN0TmFtZSA6c3RyaW5nO1xyXG5cdGVtYWlsIDpzdHJpbmc7XHJcblx0YWwxIDpzdHJpbmc7XHJcblx0YWwyIDpzdHJpbmc7XHJcblx0Y2l0eSA6c3RyaW5nO1xyXG5cdHBvc3RhbCA6c3RyaW5nO1xyXG5cdGNvdW50cnkgOnN0cmluZztcclxuXHRzdGF0ZSA6c3RyaW5nO1xyXG5cdGNvbXBhbnlOYW1lOiBzdHJpbmc7XHJcblx0Y29tcGFueVR5cGUgOnN0cmluZztcclxuXHRkaXJlY3RvcnMgOnN0cmluZztcclxuXHR1dWlkIDpzdHJpbmc7XHJcblx0ZW1vamkgOnN0cmluZztcclxuXHRjb21wYW55VXVpZCA6c3RyaW5nO1xyXG5cdGRpcmVjdG9yc0FyciA6YW55O1xyXG5cclxuXHRcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfQWN0aXZhdGVkcm91dGU6QWN0aXZhdGVkUm91dGUsIHByaXZhdGUgU3RhcnRTZXJ2aWNlOiBTdGFydFNlcnZpY2UpIHtcclxuXHRcdC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblx0XHR0aGlzLnBhZ2UgPSBwYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy51dWlkID0gdGhpcy5fQWN0aXZhdGVkcm91dGUuc25hcHNob3QucGFyYW1zWydpZCddO1xyXG5cdFx0dGhpcy5kaXJlY3RvcnMgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJkaXJlY3RvcnNcIiwgXCJcIik7XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0dGhpcy5TdGFydFNlcnZpY2UucmVmcmVzaFN0YXR1cyh0aGlzLnV1aWQpLnN1YnNjcmliZShcclxuXHRcdFx0cmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdHRoaXMuY29tcGFueU5hbWUgPSByZXNwb25zZVsnaW5jb3Jwb3JhdGlvbiddWzBdLmNvbXBhbnlOYW1lO1xyXG5cdFx0XHRcdHRoaXMuY29tcGFueVR5cGUgPSByZXNwb25zZVsnaW5jb3Jwb3JhdGlvbiddWzBdLmNvbXBhbnlUeXBlO1xyXG5cdFx0XHRcdHRoaXMuZmlyc3ROYW1lID0gcmVzcG9uc2VbJ2luY29ycG9yYXRpb24nXVswXS5maXJzdE5hbWU7XHJcblx0XHRcdFx0dGhpcy5sYXN0TmFtZSA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0ubGFzdE5hbWU7XHJcblx0XHRcdFx0dGhpcy5lbWFpbCA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0uZW1haWw7XHJcblx0XHRcdFx0dGhpcy5hbDEgPSByZXNwb25zZVsnaW5jb3Jwb3JhdGlvbiddWzBdLmFsMTtcclxuXHRcdFx0XHR0aGlzLmFsMiA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0uYWwyO1xyXG5cdFx0XHRcdHRoaXMuY2l0eSA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0uY2l0eTtcclxuXHRcdFx0XHR0aGlzLnBvc3RhbCA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0ucG9zdGFsO1xyXG5cdFx0XHRcdHRoaXMuY291bnRyeSA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0uY291bnRyeTtcclxuXHRcdFx0XHR0aGlzLnN0YXRlID0gcmVzcG9uc2VbJ2luY29ycG9yYXRpb24nXVswXS5zdGF0ZTtcclxuXHRcdFx0XHR0aGlzLmVtb2ppID0gcmVzcG9uc2VbJ2luY29ycG9yYXRpb24nXVswXS5lbW9qaTtcclxuXHRcdFx0XHR0aGlzLmRpcmVjdG9ycyA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0uZGlyZWN0b3JzO1xyXG5cdFx0XHRcdHRoaXMuZGlyZWN0b3JzQXJyID0gSlNPTi5wYXJzZSh0aGlzLmRpcmVjdG9ycyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHN0ZXAzKCkge1xyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3Jldmlld1wiXSk7XHJcblx0fVxyXG5cclxuXHR2aWV3RGlyZWN0b3IoaWQpIHtcclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi92aWV3LWRpcmVjdG9yXCIsIHRoaXMudXVpZCwgaWRdKTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==
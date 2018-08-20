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
        if (this.directorsArr)
            this.directorsArr = JSON.parse(this.directors);
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
        }, function (error) { return console.log(error); });
    };
    ApplicationComponent.prototype.step3 = function () {
        this.router.navigate(["/review"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwbGljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLGdDQUErQjtBQUcvQiwwQ0FBMEQ7QUFDMUQsc0VBQW9FO0FBR3BFLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBU2xEO0lBcUJJLDhCQUFvQixJQUFVLEVBQVUsTUFBYyxFQUFVLGVBQThCLEVBQVUsWUFBMEI7UUFBOUcsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBZTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ3BJLHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNmLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQUEsaUJBdUJGO1FBdEJBLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFeEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQ25ELFVBQUEsUUFBUTtZQUNQLEtBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUM1RCxLQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7WUFDNUQsS0FBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ3hELEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUN0RCxLQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDaEQsS0FBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQzVDLEtBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUM1QyxLQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDOUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2xELEtBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNwRCxLQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDakQsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDM0IsQ0FBQztJQUNILENBQUM7SUFFRCxvQ0FBSyxHQUFMO1FBRUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFyRGlCO1FBQWpCLGdCQUFTLENBQUMsS0FBSyxDQUFDO2tDQUFnQixpQkFBVTsrREFBQztJQUZoQyxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN0QixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzFDLENBQUM7eUNBc0I0QixXQUFJLEVBQWtCLGVBQU0sRUFBMEIsdUJBQWMsRUFBd0IsNEJBQVk7T0FyQnpILG9CQUFvQixDQXlEaEM7SUFBRCwyQkFBQztDQUFBLEFBekRELElBeURDO0FBekRZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBLZXlib2FyZFR5cGUgfSBmcm9tIFwidWkvZW51bXNcIjtcclxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcclxuaW1wb3J0IHsgIEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdGFydFNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL3N0YXJ0L3N0YXJ0LnNlcnZpY2UnO1xyXG5cclxuXHJcbnZhciBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkFwcGxpY2F0aW9uXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vYXBwbGljYXRpb24uY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsnLi9hcHBsaWNhdGlvbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblx0QFZpZXdDaGlsZChcIkNCMVwiKSBGaXJzdENoZWNrQm94OiBFbGVtZW50UmVmO1xyXG5cclxuXHRmaXJzdE5hbWUgOnN0cmluZztcclxuXHRsYXN0TmFtZSA6c3RyaW5nO1xyXG5cdGVtYWlsIDpzdHJpbmc7XHJcblx0YWwxIDpzdHJpbmc7XHJcblx0YWwyIDpzdHJpbmc7XHJcblx0Y2l0eSA6c3RyaW5nO1xyXG5cdHBvc3RhbCA6bnVtYmVyO1xyXG5cdGNvdW50cnkgOnN0cmluZztcclxuXHRzdGF0ZSA6c3RyaW5nO1xyXG5cdGNvbXBhbnlOYW1lOiBzdHJpbmc7XHJcblx0Y29tcGFueVR5cGUgOnN0cmluZztcclxuXHRkaXJlY3RvcnMgOnN0cmluZztcclxuXHR1dWlkIDpzdHJpbmc7XHJcblx0Y29tcGFueVV1aWQgOnN0cmluZztcclxuXHRkaXJlY3RvcnNBcnIgOmFueTtcclxuXHJcblx0XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX0FjdGl2YXRlZHJvdXRlOkFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIFN0YXJ0U2VydmljZTogU3RhcnRTZXJ2aWNlKSB7XHJcblx0XHQvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG5cdFx0cGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG5cdFx0dGhpcy5wYWdlID0gcGFnZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHRcdHRoaXMudXVpZCA9IHRoaXMuX0FjdGl2YXRlZHJvdXRlLnNuYXBzaG90LnBhcmFtc1snaWQnXTtcclxuXHRcdHRoaXMuZGlyZWN0b3JzID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiZGlyZWN0b3JzXCIsIFwiXCIpO1xyXG5cdFx0XHJcblx0XHRpZiAodGhpcy5kaXJlY3RvcnNBcnIpXHJcblx0XHRcdHRoaXMuZGlyZWN0b3JzQXJyID0gSlNPTi5wYXJzZSh0aGlzLmRpcmVjdG9ycyk7XHJcblx0XHRcclxuXHRcdHRoaXMuU3RhcnRTZXJ2aWNlLnJlZnJlc2hTdGF0dXModGhpcy51dWlkKS5zdWJzY3JpYmUoXHJcblx0XHRcdHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHR0aGlzLmNvbXBhbnlOYW1lID0gcmVzcG9uc2VbJ2luY29ycG9yYXRpb24nXVswXS5jb21wYW55TmFtZTtcclxuXHRcdFx0XHR0aGlzLmNvbXBhbnlUeXBlID0gcmVzcG9uc2VbJ2luY29ycG9yYXRpb24nXVswXS5jb21wYW55VHlwZTtcclxuXHRcdFx0XHR0aGlzLmZpcnN0TmFtZSA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0uZmlyc3ROYW1lO1xyXG5cdFx0XHRcdHRoaXMubGFzdE5hbWUgPSByZXNwb25zZVsnaW5jb3Jwb3JhdGlvbiddWzBdLmxhc3ROYW1lO1xyXG5cdFx0XHRcdHRoaXMuZW1haWwgPSByZXNwb25zZVsnaW5jb3Jwb3JhdGlvbiddWzBdLmVtYWlsO1xyXG5cdFx0XHRcdHRoaXMuYWwxID0gcmVzcG9uc2VbJ2luY29ycG9yYXRpb24nXVswXS5hbDE7XHJcblx0XHRcdFx0dGhpcy5hbDIgPSByZXNwb25zZVsnaW5jb3Jwb3JhdGlvbiddWzBdLmFsMjtcclxuXHRcdFx0XHR0aGlzLmNpdHkgPSByZXNwb25zZVsnaW5jb3Jwb3JhdGlvbiddWzBdLmNpdHk7XHJcblx0XHRcdFx0dGhpcy5wb3N0YWwgPSByZXNwb25zZVsnaW5jb3Jwb3JhdGlvbiddWzBdLnBvc3RhbDtcclxuXHRcdFx0XHR0aGlzLmNvdW50cnkgPSByZXNwb25zZVsnaW5jb3Jwb3JhdGlvbiddWzBdLmNvdW50cnk7XHJcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0uc3RhdGU7XHJcblx0XHRcdH0sXHJcblx0XHRcdGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHN0ZXAzKCkge1xyXG5cclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9yZXZpZXdcIl0pO1xyXG5cdH1cclxuXHJcbn1cclxuIl19
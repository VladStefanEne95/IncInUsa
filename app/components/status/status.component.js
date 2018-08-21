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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YXR1cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0U7QUFDeEUsZ0NBQTZCO0FBQzdCLDBDQUF5RDtBQUN6RCxzRUFBb0U7QUFHcEUsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDNUMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFRbEQ7SUFTSSx5QkFBb0IsSUFBVSxFQUFVLE1BQWMsRUFBVSxlQUE4QixFQUFVLFlBQTBCO1FBQTlHLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWU7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUNwSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNmLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBV0Y7UUFWQSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUNuRCxVQUFBLFFBQVE7WUFDUCxLQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqQyxLQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7WUFDNUQsS0FBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1lBQzVELEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN6RCxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUMzQixDQUFDO0lBQ0gsQ0FBQztJQUVNLHlDQUFlLEdBQXRCLFVBQXVCLElBQUk7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU0sOEJBQUksR0FBWDtRQUNDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBakNXLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN0QixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3JDLENBQUM7eUNBVTRCLFdBQUksRUFBa0IsZUFBTSxFQUEwQix1QkFBYyxFQUF3Qiw0QkFBWTtPQVR6SCxlQUFlLENBa0MzQjtJQUFELHNCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7QUFsQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdGFydFNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL3N0YXJ0L3N0YXJ0LnNlcnZpY2UnO1xyXG5cclxuXHJcbmNvbnN0IHBsdWdpbiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdXVpZFwiKTtcclxudmFyIGFwcFNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJTdGF0dXNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9zdGF0dXMuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsnLi9zdGF0dXMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdGF0dXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHR1dWlkIDpzdHJpbmc7XHJcblx0Y29tcGFueU5hbWU6IHN0cmluZztcclxuXHRjb21wYW55VHlwZSA6c3RyaW5nO1xyXG5cdHVwZGF0ZWRBdCA6YW55O1xyXG5cdHN0YXR1cyA6YW55O1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX0FjdGl2YXRlZHJvdXRlOkFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIFN0YXJ0U2VydmljZTogU3RhcnRTZXJ2aWNlKSB7XHJcblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblx0XHR0aGlzLnBhZ2UgPSBwYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy51dWlkID0gdGhpcy5fQWN0aXZhdGVkcm91dGUuc25hcHNob3QucGFyYW1zWydpZCddO1xyXG5cdFx0dGhpcy5TdGFydFNlcnZpY2UucmVmcmVzaFN0YXR1cyh0aGlzLnV1aWQpLnN1YnNjcmliZShcclxuXHRcdFx0cmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc3RhdHVzID0gcmVzcG9uc2VbJ3N0YXR1cyddO1xyXG5cdFx0XHRcdHRoaXMuY29tcGFueU5hbWUgPSByZXNwb25zZVsnaW5jb3Jwb3JhdGlvbiddWzBdLmNvbXBhbnlOYW1lO1xyXG5cdFx0XHRcdHRoaXMuY29tcGFueVR5cGUgPSByZXNwb25zZVsnaW5jb3Jwb3JhdGlvbiddWzBdLmNvbXBhbnlUeXBlO1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlZEF0ID0gcmVzcG9uc2VbJ2luY29ycG9yYXRpb24nXVswXS51cGRhdGVkQXQ7XHJcblx0XHRcdH0sXHJcblx0XHRcdGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB2aWV3QXBwbGljYXRpb24odXVpZCkge1xyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2FwcGxpY2F0aW9uXCIsIHV1aWRdKTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIGRvbmUoKXtcclxuXHRcdGFsZXJ0KFwidG8gZG9cIik7XHJcblx0fVxyXG59XHJcbiJdfQ==
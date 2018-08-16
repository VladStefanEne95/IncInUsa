"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var start_service_1 = require("./../../services/start/start.service");
var plugin = require("nativescript-uuid");
var appSettings = require("application-settings");
var StatusComponent = /** @class */ (function () {
    //@ViewChild("step2") step2: ElementRef;
    function StatusComponent(page, router, _Activatedroute, StartService) {
        this.page = page;
        this.router = router;
        this._Activatedroute = _Activatedroute;
        this.StartService = StartService;
        // Use the component constructor to inject providers.
        page.actionBarHidden = true;
        this.page = page;
    }
    StatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Init your component properties here.
        this.companyName = appSettings.getString("companyName", "");
        this.companyType = appSettings.getString("companyType", "");
        this.companyUuid = appSettings.getString("uuid", "");
        this.status = appSettings.getString("status", "");
        this.StartService.refreshStatus(this.companyUuid).subscribe(function (response) {
            appSettings.setString("status", response['incorporation'][0].status);
            _this.status = response['incorporation'][0].status;
            _this.updatedAt = response['incorporation'][0].updatedAt;
        }, function (error) { return console.log(error); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YXR1cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0U7QUFDeEUsZ0NBQTZCO0FBQzdCLDBDQUF5RDtBQUN6RCxzRUFBb0U7QUFHcEUsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDNUMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFRbEQ7SUFRQyx3Q0FBd0M7SUFDckMseUJBQW9CLElBQVUsRUFBVSxNQUFjLEVBQVUsZUFBOEIsRUFBVSxZQUEwQjtRQUE5RyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFlO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDcEkscURBQXFEO1FBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2YsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFBQSxpQkFjRjtRQWJBLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQzFELFVBQUEsUUFBUTtZQUNOLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNwRSxLQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDbEQsS0FBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3pELENBQUMsRUFDRixVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzNCLENBQUM7SUFDSCxDQUFDO0lBRU0sOEJBQUksR0FBWDtRQUNDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBakNXLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN0QixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3JDLENBQUM7eUNBVTRCLFdBQUksRUFBa0IsZUFBTSxFQUEwQix1QkFBYyxFQUF3Qiw0QkFBWTtPQVR6SCxlQUFlLENBa0MzQjtJQUFELHNCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7QUFsQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdGFydFNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL3N0YXJ0L3N0YXJ0LnNlcnZpY2UnO1xuXG5cbmNvbnN0IHBsdWdpbiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdXVpZFwiKTtcbnZhciBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiU3RhdHVzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9zdGF0dXMuY29tcG9uZW50Lmh0bWxcIixcblx0c3R5bGVVcmxzOiBbJy4vc3RhdHVzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdGF0dXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGNvbXBhbnlOYW1lOiBzdHJpbmc7XG5cdGNvbXBhbnlUeXBlIDpzdHJpbmc7XG5cdGNvbXBhbnlVdWlkIDpzdHJpbmc7XG5cdHVwZGF0ZWRBdCA6YW55O1xuXHRzdGF0dXMgOnN0cmluZztcblxuXHQvL0BWaWV3Q2hpbGQoXCJzdGVwMlwiKSBzdGVwMjogRWxlbWVudFJlZjtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX0FjdGl2YXRlZHJvdXRlOkFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIFN0YXJ0U2VydmljZTogU3RhcnRTZXJ2aWNlKSB7XG5cdFx0Ly8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG5cdFx0dGhpcy5wYWdlID0gcGFnZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHQvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cblx0XHR0aGlzLmNvbXBhbnlOYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY29tcGFueU5hbWVcIiwgXCJcIik7XG5cdFx0dGhpcy5jb21wYW55VHlwZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNvbXBhbnlUeXBlXCIsIFwiXCIpO1xuXHRcdHRoaXMuY29tcGFueVV1aWQgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1dWlkXCIsIFwiXCIpO1xuXHRcdHRoaXMuc3RhdHVzID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwic3RhdHVzXCIsIFwiXCIpO1xuXHRcdHRoaXMuU3RhcnRTZXJ2aWNlLnJlZnJlc2hTdGF0dXModGhpcy5jb21wYW55VXVpZCkuc3Vic2NyaWJlKFxuXHRcdFx0cmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcInN0YXR1c1wiLCByZXNwb25zZVsnaW5jb3Jwb3JhdGlvbiddWzBdLnN0YXR1cylcblx0XHRcdFx0XHR0aGlzLnN0YXR1cyA9IHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0uc3RhdHVzO1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlZEF0ID0gcmVzcG9uc2VbJ2luY29ycG9yYXRpb24nXVswXS51cGRhdGVkQXQ7XG5cdFx0XHRcdH0sXG5cdFx0XHRlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcblx0XHQpO1xuXHR9XG5cdFxuXHRwdWJsaWMgZG9uZSgpe1xuXHRcdGFsZXJ0KFwidG8gZG9cIik7XG5cdH1cbn1cbiJdfQ==
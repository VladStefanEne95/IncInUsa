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
        this.companyUuid = appSettings.getString("uuid", "");
        this.status = appSettings.getString("status", "");
        console.log(this.companyUuid);
        this.StartService.refreshStatus(this.companyUuid).subscribe(function (response) {
            appSettings.setString("status", response['incorporation'][0].status);
            _this.status = response['incorporation'][0].status;
        }, function (error) { return console.log(error); });
    };
    ManageComponent.prototype.done = function () {
        alert("to do");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hbmFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0U7QUFDeEUsZ0NBQTZCO0FBQzdCLDBDQUF5RDtBQUN6RCxzRUFBb0U7QUFFcEUsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDNUMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFRbEQ7SUFPQyx3Q0FBd0M7SUFDckMseUJBQW9CLElBQVUsRUFBVSxNQUFjLEVBQVUsZUFBOEIsRUFBVSxZQUEwQjtRQUE5RyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFlO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDcEkscURBQXFEO1FBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2YsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFBQSxpQkFjRjtRQWJBLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQzFELFVBQUEsUUFBUTtZQUNOLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNwRSxLQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDbkQsQ0FBQyxFQUNGLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDM0IsQ0FBQztJQUNILENBQUM7SUFFTSw4QkFBSSxHQUFYO1FBQ0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFoQ1csZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3RCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDckMsQ0FBQzt5Q0FTNEIsV0FBSSxFQUFrQixlQUFNLEVBQTBCLHVCQUFjLEVBQXdCLDRCQUFZO09BUnpILGVBQWUsQ0FpQzNCO0lBQUQsc0JBQUM7Q0FBQSxBQWpDRCxJQWlDQztBQWpDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN0YXJ0U2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvc3RhcnQvc3RhcnQuc2VydmljZSc7XG5cbmNvbnN0IHBsdWdpbiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdXVpZFwiKTtcbnZhciBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiTWFuYWdlXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9tYW5hZ2UuY29tcG9uZW50Lmh0bWxcIixcblx0c3R5bGVVcmxzOiBbJy4vbWFuYWdlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYW5hZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGNvbXBhbnlOYW1lOiBzdHJpbmc7XG5cdGNvbXBhbnlUeXBlIDpzdHJpbmc7XG5cdGNvbXBhbnlVdWlkIDpzdHJpbmc7XG5cdHN0YXR1cyA6c3RyaW5nO1xuXG5cdC8vQFZpZXdDaGlsZChcInN0ZXAyXCIpIHN0ZXAyOiBFbGVtZW50UmVmO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfQWN0aXZhdGVkcm91dGU6QWN0aXZhdGVkUm91dGUsIHByaXZhdGUgU3RhcnRTZXJ2aWNlOiBTdGFydFNlcnZpY2UpIHtcblx0XHQvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuXHRcdHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcblx0XHR0aGlzLnBhZ2UgPSBwYWdlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuXHRcdHRoaXMuY29tcGFueU5hbWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjb21wYW55TmFtZVwiLCBcIlwiKTtcblx0XHR0aGlzLmNvbXBhbnlUeXBlID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY29tcGFueVR5cGVcIiwgXCJcIik7XG5cdFx0dGhpcy5jb21wYW55VXVpZCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInV1aWRcIiwgXCJcIik7XG5cdFx0dGhpcy5zdGF0dXMgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJzdGF0dXNcIiwgXCJcIik7XG5cdFx0Y29uc29sZS5sb2codGhpcy5jb21wYW55VXVpZCk7XG5cdFx0dGhpcy5TdGFydFNlcnZpY2UucmVmcmVzaFN0YXR1cyh0aGlzLmNvbXBhbnlVdWlkKS5zdWJzY3JpYmUoXG5cdFx0XHRyZXNwb25zZSA9PiB7XG5cdFx0XHRcdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwic3RhdHVzXCIsIHJlc3BvbnNlWydpbmNvcnBvcmF0aW9uJ11bMF0uc3RhdHVzKVxuXHRcdFx0XHRcdHRoaXMuc3RhdHVzID0gcmVzcG9uc2VbJ2luY29ycG9yYXRpb24nXVswXS5zdGF0dXM7XG5cdFx0XHRcdH0sXG5cdFx0XHRlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcblx0XHQpO1xuXHR9XG5cdFxuXHRwdWJsaWMgZG9uZSgpe1xuXHRcdGFsZXJ0KFwidG8gZG9cIik7XG5cdH1cbn1cbiJdfQ==
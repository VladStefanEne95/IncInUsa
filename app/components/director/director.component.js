"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var plugin = require("nativescript-uuid");
var appSettings = require("application-settings");
var DirectorComponent = /** @class */ (function () {
    //@ViewChild("step2") step2: ElementRef;
    function DirectorComponent(page, router) {
        this.page = page;
        this.router = router;
        // Use the component constructor to inject providers.
        page.actionBarHidden = true;
        this.page = page;
    }
    DirectorComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        this.companyName = appSettings.getString("companyName", "");
        this.companyType = appSettings.getString("companyType", "");
        this.firstName = appSettings.getString("firstName", "");
        this.lastName = appSettings.getString("lastName", "");
        this.email = appSettings.getString("email", "");
        this.al1 = appSettings.getString("al1", "");
        this.al2 = appSettings.getString("al2", "");
        this.city = appSettings.getString("city", "");
        this.postal = appSettings.getString("postal", 0);
        this.country = appSettings.getString("country", "");
        this.state = appSettings.getString("state", "");
    };
    DirectorComponent.prototype.start = function () {
        var uuid = plugin.getUUID();
        appSettings.setString("companyUuid", uuid);
        appSettings.setString("companyName", "");
        appSettings.setString("companyType", "");
        appSettings.setString("firstName", "");
        appSettings.setString("lastName", "");
        appSettings.setString("email", "");
        appSettings.setString("al1", "");
        appSettings.setString("al2", "");
        appSettings.setString("city", "");
        appSettings.setString("postal", "");
        appSettings.setString("country", "");
        appSettings.setString("state", "");
        appSettings.setString("addToDirectors", "");
        console.log("The device UUID is " + uuid);
        this.router.navigate(["/details"]);
    };
    DirectorComponent = __decorate([
        core_1.Component({
            selector: "Director",
            moduleId: module.id,
            templateUrl: "./director.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router])
    ], DirectorComponent);
    return DirectorComponent;
}());
exports.DirectorComponent = DirectorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlyZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLGdDQUE2QjtBQUM3QiwwQ0FBeUM7QUFFekMsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDNUMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFPbEQ7SUFjQyx3Q0FBd0M7SUFDckMsMkJBQW9CLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3hELHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNmLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0YsdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU0saUNBQUssR0FBWjtRQUNDLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QyxXQUFXLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2QyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0QyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuQyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNsQyxXQUFXLENBQUMsU0FBUyxDQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyQyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuQyxXQUFXLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFyRFcsaUJBQWlCO1FBTDdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtTQUMzQyxDQUFDO3lDQWdCNEIsV0FBSSxFQUFrQixlQUFNO09BZjdDLGlCQUFpQixDQXNEN0I7SUFBRCx3QkFBQztDQUFBLEFBdERELElBc0RDO0FBdERZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5jb25zdCBwbHVnaW4gPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXV1aWRcIik7XG52YXIgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkRpcmVjdG9yXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2RpcmVjdG9yLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgRGlyZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGZpcnN0TmFtZSA6c3RyaW5nO1xuXHRsYXN0TmFtZSA6c3RyaW5nO1xuXHRlbWFpbCA6c3RyaW5nO1xuXHRhbDEgOnN0cmluZztcblx0YWwyIDpzdHJpbmc7XG5cdGNpdHkgOnN0cmluZztcblx0cG9zdGFsIDpudW1iZXI7XG5cdGNvdW50cnkgOnN0cmluZztcblx0c3RhdGUgOnN0cmluZztcblx0Y29tcGFueU5hbWU6IHN0cmluZztcblx0Y29tcGFueVR5cGUgOnN0cmluZztcblxuXHQvL0BWaWV3Q2hpbGQoXCJzdGVwMlwiKSBzdGVwMjogRWxlbWVudFJlZjtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcblx0XHQvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuXHRcdHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcblx0XHR0aGlzLnBhZ2UgPSBwYWdlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuXHRcdHRoaXMuY29tcGFueU5hbWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjb21wYW55TmFtZVwiLCBcIlwiKTtcblx0XHR0aGlzLmNvbXBhbnlUeXBlID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY29tcGFueVR5cGVcIiwgXCJcIik7XG5cdFx0dGhpcy5maXJzdE5hbWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJmaXJzdE5hbWVcIiwgXCJcIik7XG5cdFx0dGhpcy5sYXN0TmFtZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImxhc3ROYW1lXCIsIFwiXCIpO1xuXHRcdHRoaXMuZW1haWwgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJlbWFpbFwiLCBcIlwiKTtcblx0XHR0aGlzLmFsMSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsMVwiLCBcIlwiKTtcblx0XHR0aGlzLmFsMiA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsMlwiLCBcIlwiKTtcblx0XHR0aGlzLmNpdHkgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjaXR5XCIsIFwiXCIpO1xuXHRcdHRoaXMucG9zdGFsID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwicG9zdGFsXCIsIDApO1xuXHRcdHRoaXMuY291bnRyeSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNvdW50cnlcIiwgXCJcIik7XG5cdFx0dGhpcy5zdGF0ZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInN0YXRlXCIsIFwiXCIpO1xuXHR9XG5cdFxuXHRwdWJsaWMgc3RhcnQoKXtcblx0XHR2YXIgdXVpZCA9IHBsdWdpbi5nZXRVVUlEKCk7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiY29tcGFueVV1aWRcIiwgdXVpZCk7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiY29tcGFueU5hbWVcIiwgXCJcIik7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiY29tcGFueVR5cGVcIiwgXCJcIik7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiZmlyc3ROYW1lXCIsIFwiXCIpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImxhc3ROYW1lXCIsIFwiXCIpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImVtYWlsXCIsIFwiXCIpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsMVwiLCBcIlwiKTtcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJhbDJcIiwgXCJcIik7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiY2l0eVwiLCBcIlwiKTtcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcgKFwicG9zdGFsXCIsIFwiXCIpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImNvdW50cnlcIiwgXCJcIik7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwic3RhdGVcIiwgXCJcIik7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWRkVG9EaXJlY3RvcnNcIiwgXCJcIik7XG5cdFx0Y29uc29sZS5sb2coXCJUaGUgZGV2aWNlIFVVSUQgaXMgXCIgKyB1dWlkKTtcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGV0YWlsc1wiXSk7XG5cdH1cbn1cbiJdfQ==
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
        this.directors = appSettings.getString("directors", "");
        var directorsObj;
        if (this.directors) {
            directorsObj = JSON.parse(this.directors);
            this.firstName = directorsObj[0].firstName;
            this.lastName = directorsObj[0].lastName;
            this.email = directorsObj[0].email;
            this.al1 = directorsObj[0].al1;
            this.al2 = directorsObj[0].al2;
            this.city = directorsObj[0].city;
            this.postal = directorsObj[0].postal;
            this.country = directorsObj[0].country;
            this.state = directorsObj[0].state;
        }
        else {
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
        }
    };
    DirectorComponent.prototype.done = function () {
        appSettings.setString("directors", JSON.stringify([{
                "firstName": this.firstName,
                "lastName": this.lastName,
                "email": this.email,
                "al1": this.al1,
                "al2": this.al2,
                "city": this.city,
                "postal": this.postal,
                "country": this.country,
                "state": this.state
            }]));
        this.router.navigate(["/review"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlyZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLGdDQUE2QjtBQUM3QiwwQ0FBeUM7QUFFekMsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDNUMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFPbEQ7SUFlQyx3Q0FBd0M7SUFDckMsMkJBQW9CLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3hELHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNmLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0YsdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxZQUFZLENBQUM7UUFDakIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ25DLElBQUksQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDLENB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LElBa0VDO0FBbEVZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5jb25zdCBwbHVnaW4gPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXV1aWRcIik7XG52YXIgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkRpcmVjdG9yXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2RpcmVjdG9yLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgRGlyZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGZpcnN0TmFtZSA6c3RyaW5nO1xuXHRsYXN0TmFtZSA6c3RyaW5nO1xuXHRlbWFpbCA6c3RyaW5nO1xuXHRhbDEgOnN0cmluZztcblx0YWwyIDpzdHJpbmc7XG5cdGNpdHkgOnN0cmluZztcblx0cG9zdGFsIDpudW1iZXI7XG5cdGNvdW50cnkgOnN0cmluZztcblx0c3RhdGUgOnN0cmluZztcblx0Y29tcGFueU5hbWU6IHN0cmluZztcblx0Y29tcGFueVR5cGUgOnN0cmluZztcblx0ZGlyZWN0b3JzIDpzdHJpbmc7XG5cblx0Ly9AVmlld0NoaWxkKFwic3RlcDJcIikgc3RlcDI6IEVsZW1lbnRSZWY7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG5cdFx0Ly8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG5cdFx0dGhpcy5wYWdlID0gcGFnZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHQvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cblx0XHR0aGlzLmRpcmVjdG9ycyA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImRpcmVjdG9yc1wiLCBcIlwiKTtcblx0XHRsZXQgZGlyZWN0b3JzT2JqO1xuXHRcdGlmICh0aGlzLmRpcmVjdG9ycykge1xuXHRcdFx0ZGlyZWN0b3JzT2JqID0gSlNPTi5wYXJzZSh0aGlzLmRpcmVjdG9ycyk7XG5cdFx0XHR0aGlzLmZpcnN0TmFtZSA9IGRpcmVjdG9yc09ialswXS5maXJzdE5hbWU7XG5cdFx0XHR0aGlzLmxhc3ROYW1lID0gZGlyZWN0b3JzT2JqWzBdLmxhc3ROYW1lO1xuXHRcdFx0dGhpcy5lbWFpbCA9IGRpcmVjdG9yc09ialswXS5lbWFpbDtcblx0XHRcdHRoaXMuYWwxID0gZGlyZWN0b3JzT2JqWzBdLmFsMTtcblx0XHRcdHRoaXMuYWwyID0gZGlyZWN0b3JzT2JqWzBdLmFsMjtcblx0XHRcdHRoaXMuY2l0eSA9IGRpcmVjdG9yc09ialswXS5jaXR5O1xuXHRcdFx0dGhpcy5wb3N0YWwgPSBkaXJlY3RvcnNPYmpbMF0ucG9zdGFsO1xuXHRcdFx0dGhpcy5jb3VudHJ5ID0gZGlyZWN0b3JzT2JqWzBdLmNvdW50cnk7XG5cdFx0XHR0aGlzLnN0YXRlID0gZGlyZWN0b3JzT2JqWzBdLnN0YXRlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNvbXBhbnlOYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY29tcGFueU5hbWVcIiwgXCJcIik7XG5cdFx0XHR0aGlzLmNvbXBhbnlUeXBlID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY29tcGFueVR5cGVcIiwgXCJcIik7XG5cdFx0XHR0aGlzLmZpcnN0TmFtZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImZpcnN0TmFtZVwiLCBcIlwiKTtcblx0XHRcdHRoaXMubGFzdE5hbWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJsYXN0TmFtZVwiLCBcIlwiKTtcblx0XHRcdHRoaXMuZW1haWwgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJlbWFpbFwiLCBcIlwiKTtcblx0XHRcdHRoaXMuYWwxID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWwxXCIsIFwiXCIpO1xuXHRcdFx0dGhpcy5hbDIgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbDJcIiwgXCJcIik7XG5cdFx0XHR0aGlzLmNpdHkgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjaXR5XCIsIFwiXCIpO1xuXHRcdFx0dGhpcy5wb3N0YWwgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJwb3N0YWxcIiwgMCk7XG5cdFx0XHR0aGlzLmNvdW50cnkgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjb3VudHJ5XCIsIFwiXCIpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInN0YXRlXCIsIFwiXCIpO1xuXHRcdH1cblx0fVxuXHRcblx0cHVibGljIGRvbmUoKXtcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJkaXJlY3RvcnNcIiwgSlNPTi5zdHJpbmdpZnkoW3sgXG5cdFx0XHRcImZpcnN0TmFtZVwiOiB0aGlzLmZpcnN0TmFtZSxcblx0XHRcdCBcImxhc3ROYW1lXCI6IHRoaXMubGFzdE5hbWUsXG5cdFx0XHQgXCJlbWFpbFwiOiB0aGlzLmVtYWlsLFxuXHRcdFx0IFwiYWwxXCI6IHRoaXMuYWwxLFxuXHRcdFx0IFwiYWwyXCI6IHRoaXMuYWwyLFxuXHRcdFx0IFwiY2l0eVwiOiB0aGlzLmNpdHksXG5cdFx0XHQgXCJwb3N0YWxcIjogdGhpcy5wb3N0YWwsXG5cdFx0XHQgXCJjb3VudHJ5XCI6IHRoaXMuY291bnRyeSxcblx0XHRcdCBcInN0YXRlXCI6IHRoaXMuc3RhdGVcblx0XHR9XSkpO1xuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9yZXZpZXdcIl0pO1xuXHR9XG59XG4iXX0=
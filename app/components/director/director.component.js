"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var plugin = require("nativescript-uuid");
var appSettings = require("application-settings");
var DirectorComponent = /** @class */ (function () {
    //@ViewChild("step2") step2: ElementRef;
    function DirectorComponent(page, router, _Activatedroute) {
        this.page = page;
        this.router = router;
        this._Activatedroute = _Activatedroute;
        // Use the component constructor to inject providers.
        page.actionBarHidden = true;
        this.page = page;
    }
    DirectorComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        this.id = this._Activatedroute.snapshot.params['id'];
        console.log(this.id);
        this.directors = appSettings.getString("directors", "");
        var directorsObj;
        if (this.directors) {
            directorsObj = JSON.parse(this.directors);
            this.firstName = directorsObj[this.id].firstName;
            this.lastName = directorsObj[this.id].lastName;
            this.email = directorsObj[this.id].email;
            this.al1 = directorsObj[this.id].al1;
            this.al2 = directorsObj[this.id].al2;
            this.city = directorsObj[this.id].city;
            this.postal = directorsObj[this.id].postal;
            this.country = directorsObj[this.id].country;
            this.state = directorsObj[this.id].state;
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
        __metadata("design:paramtypes", [page_1.Page, router_1.Router, router_1.ActivatedRoute])
    ], DirectorComponent);
    return DirectorComponent;
}());
exports.DirectorComponent = DirectorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlyZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLGdDQUE2QjtBQUM3QiwwQ0FBeUQ7QUFFekQsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDNUMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFPbEQ7SUFnQkMsd0NBQXdDO0lBQ3JDLDJCQUFvQixJQUFVLEVBQVUsTUFBYyxFQUFVLGVBQThCO1FBQTFFLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWU7UUFDaEcscURBQXFEO1FBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2YsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDRix1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RCxJQUFJLFlBQVksQ0FBQztRQUNqQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNwQixZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNqRCxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQy9DLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDekMsSUFBSSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNyQyxJQUFJLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQzdDLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDMUMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELENBQUM7SUFDRixDQUFDO0lBRU0sZ0NBQUksR0FBWDtRQUNDLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDbEQsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTO2dCQUMxQixVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3pCLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRztnQkFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUN2QixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDcEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBcEVXLGlCQUFpQjtRQUw3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7U0FDM0MsQ0FBQzt5Q0FrQjRCLFdBQUksRUFBa0IsZUFBTSxFQUEwQix1QkFBYztPQWpCckYsaUJBQWlCLENBcUU3QjtJQUFELHdCQUFDO0NBQUEsQUFyRUQsSUFxRUM7QUFyRVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmNvbnN0IHBsdWdpbiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdXVpZFwiKTtcclxudmFyIGFwcFNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJEaXJlY3RvclwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZGlyZWN0b3IuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlyZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHRpZCA6bnVtYmVyO1xyXG5cdGZpcnN0TmFtZSA6c3RyaW5nO1xyXG5cdGxhc3ROYW1lIDpzdHJpbmc7XHJcblx0ZW1haWwgOnN0cmluZztcclxuXHRhbDEgOnN0cmluZztcclxuXHRhbDIgOnN0cmluZztcclxuXHRjaXR5IDpzdHJpbmc7XHJcblx0cG9zdGFsIDpudW1iZXI7XHJcblx0Y291bnRyeSA6c3RyaW5nO1xyXG5cdHN0YXRlIDpzdHJpbmc7XHJcblx0Y29tcGFueU5hbWU6IHN0cmluZztcclxuXHRjb21wYW55VHlwZSA6c3RyaW5nO1xyXG5cdGRpcmVjdG9ycyA6c3RyaW5nO1xyXG5cclxuXHQvL0BWaWV3Q2hpbGQoXCJzdGVwMlwiKSBzdGVwMjogRWxlbWVudFJlZjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfQWN0aXZhdGVkcm91dGU6QWN0aXZhdGVkUm91dGUpIHtcclxuXHRcdC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblx0XHR0aGlzLnBhZ2UgPSBwYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0Ly8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcblx0XHR0aGlzLmlkID0gdGhpcy5fQWN0aXZhdGVkcm91dGUuc25hcHNob3QucGFyYW1zWydpZCddO1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy5pZCk7XHJcblx0XHR0aGlzLmRpcmVjdG9ycyA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImRpcmVjdG9yc1wiLCBcIlwiKTtcclxuXHRcdGxldCBkaXJlY3RvcnNPYmo7XHJcblx0XHRpZiAodGhpcy5kaXJlY3RvcnMpIHtcclxuXHRcdFx0ZGlyZWN0b3JzT2JqID0gSlNPTi5wYXJzZSh0aGlzLmRpcmVjdG9ycyk7XHJcblx0XHRcdHRoaXMuZmlyc3ROYW1lID0gZGlyZWN0b3JzT2JqW3RoaXMuaWRdLmZpcnN0TmFtZTtcclxuXHRcdFx0dGhpcy5sYXN0TmFtZSA9IGRpcmVjdG9yc09ialt0aGlzLmlkXS5sYXN0TmFtZTtcclxuXHRcdFx0dGhpcy5lbWFpbCA9IGRpcmVjdG9yc09ialt0aGlzLmlkXS5lbWFpbDtcclxuXHRcdFx0dGhpcy5hbDEgPSBkaXJlY3RvcnNPYmpbdGhpcy5pZF0uYWwxO1xyXG5cdFx0XHR0aGlzLmFsMiA9IGRpcmVjdG9yc09ialt0aGlzLmlkXS5hbDI7XHJcblx0XHRcdHRoaXMuY2l0eSA9IGRpcmVjdG9yc09ialt0aGlzLmlkXS5jaXR5O1xyXG5cdFx0XHR0aGlzLnBvc3RhbCA9IGRpcmVjdG9yc09ialt0aGlzLmlkXS5wb3N0YWw7XHJcblx0XHRcdHRoaXMuY291bnRyeSA9IGRpcmVjdG9yc09ialt0aGlzLmlkXS5jb3VudHJ5O1xyXG5cdFx0XHR0aGlzLnN0YXRlID0gZGlyZWN0b3JzT2JqW3RoaXMuaWRdLnN0YXRlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5jb21wYW55TmFtZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNvbXBhbnlOYW1lXCIsIFwiXCIpO1xyXG5cdFx0XHR0aGlzLmNvbXBhbnlUeXBlID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY29tcGFueVR5cGVcIiwgXCJcIik7XHJcblx0XHRcdHRoaXMuZmlyc3ROYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiZmlyc3ROYW1lXCIsIFwiXCIpO1xyXG5cdFx0XHR0aGlzLmxhc3ROYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwibGFzdE5hbWVcIiwgXCJcIik7XHJcblx0XHRcdHRoaXMuZW1haWwgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJlbWFpbFwiLCBcIlwiKTtcclxuXHRcdFx0dGhpcy5hbDEgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbDFcIiwgXCJcIik7XHJcblx0XHRcdHRoaXMuYWwyID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWwyXCIsIFwiXCIpO1xyXG5cdFx0XHR0aGlzLmNpdHkgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjaXR5XCIsIFwiXCIpO1xyXG5cdFx0XHR0aGlzLnBvc3RhbCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInBvc3RhbFwiLCAwKTtcclxuXHRcdFx0dGhpcy5jb3VudHJ5ID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY291bnRyeVwiLCBcIlwiKTtcclxuXHRcdFx0dGhpcy5zdGF0ZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInN0YXRlXCIsIFwiXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgZG9uZSgpe1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiZGlyZWN0b3JzXCIsIEpTT04uc3RyaW5naWZ5KFt7IFxyXG5cdFx0XHRcImZpcnN0TmFtZVwiOiB0aGlzLmZpcnN0TmFtZSxcclxuXHRcdFx0IFwibGFzdE5hbWVcIjogdGhpcy5sYXN0TmFtZSxcclxuXHRcdFx0IFwiZW1haWxcIjogdGhpcy5lbWFpbCxcclxuXHRcdFx0IFwiYWwxXCI6IHRoaXMuYWwxLFxyXG5cdFx0XHQgXCJhbDJcIjogdGhpcy5hbDIsXHJcblx0XHRcdCBcImNpdHlcIjogdGhpcy5jaXR5LFxyXG5cdFx0XHQgXCJwb3N0YWxcIjogdGhpcy5wb3N0YWwsXHJcblx0XHRcdCBcImNvdW50cnlcIjogdGhpcy5jb3VudHJ5LFxyXG5cdFx0XHQgXCJzdGF0ZVwiOiB0aGlzLnN0YXRlXHJcblx0XHR9XSkpO1xyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3Jldmlld1wiXSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
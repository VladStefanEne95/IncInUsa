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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlyZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLGdDQUE2QjtBQUM3QiwwQ0FBeUQ7QUFFekQsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDNUMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFPbEQ7SUFnQkMsd0NBQXdDO0lBQ3JDLDJCQUFvQixJQUFVLEVBQVUsTUFBYyxFQUFVLGVBQThCO1FBQTFFLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWU7UUFDaEcscURBQXFEO1FBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2YsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDRix1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RCxJQUFJLFlBQVksQ0FBQztRQUNqQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNwQixZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNqRCxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQy9DLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDekMsSUFBSSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNyQyxJQUFJLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQzdDLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDMUMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELENBQUM7SUFDRixDQUFDO0lBRU0sZ0NBQUksR0FBWDtRQUNDLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDbEQsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTO2dCQUMxQixVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3pCLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRztnQkFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUN2QixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDcEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBcEVXLGlCQUFpQjtRQUw3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7U0FDM0MsQ0FBQzt5Q0FrQjRCLFdBQUksRUFBa0IsZUFBTSxFQUEwQix1QkFBYztPQWpCckYsaUJBQWlCLENBcUU3QjtJQUFELHdCQUFDO0NBQUEsQUFyRUQsSUFxRUM7QUFyRVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5jb25zdCBwbHVnaW4gPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXV1aWRcIik7XG52YXIgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkRpcmVjdG9yXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2RpcmVjdG9yLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgRGlyZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGlkIDpudW1iZXI7XG5cdGZpcnN0TmFtZSA6c3RyaW5nO1xuXHRsYXN0TmFtZSA6c3RyaW5nO1xuXHRlbWFpbCA6c3RyaW5nO1xuXHRhbDEgOnN0cmluZztcblx0YWwyIDpzdHJpbmc7XG5cdGNpdHkgOnN0cmluZztcblx0cG9zdGFsIDpudW1iZXI7XG5cdGNvdW50cnkgOnN0cmluZztcblx0c3RhdGUgOnN0cmluZztcblx0Y29tcGFueU5hbWU6IHN0cmluZztcblx0Y29tcGFueVR5cGUgOnN0cmluZztcblx0ZGlyZWN0b3JzIDpzdHJpbmc7XG5cblx0Ly9AVmlld0NoaWxkKFwic3RlcDJcIikgc3RlcDI6IEVsZW1lbnRSZWY7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9BY3RpdmF0ZWRyb3V0ZTpBY3RpdmF0ZWRSb3V0ZSkge1xuXHRcdC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG5cdFx0cGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuXHRcdHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cdFx0Ly8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG5cdFx0dGhpcy5pZCA9IHRoaXMuX0FjdGl2YXRlZHJvdXRlLnNuYXBzaG90LnBhcmFtc1snaWQnXTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLmlkKTtcblx0XHR0aGlzLmRpcmVjdG9ycyA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImRpcmVjdG9yc1wiLCBcIlwiKTtcblx0XHRsZXQgZGlyZWN0b3JzT2JqO1xuXHRcdGlmICh0aGlzLmRpcmVjdG9ycykge1xuXHRcdFx0ZGlyZWN0b3JzT2JqID0gSlNPTi5wYXJzZSh0aGlzLmRpcmVjdG9ycyk7XG5cdFx0XHR0aGlzLmZpcnN0TmFtZSA9IGRpcmVjdG9yc09ialt0aGlzLmlkXS5maXJzdE5hbWU7XG5cdFx0XHR0aGlzLmxhc3ROYW1lID0gZGlyZWN0b3JzT2JqW3RoaXMuaWRdLmxhc3ROYW1lO1xuXHRcdFx0dGhpcy5lbWFpbCA9IGRpcmVjdG9yc09ialt0aGlzLmlkXS5lbWFpbDtcblx0XHRcdHRoaXMuYWwxID0gZGlyZWN0b3JzT2JqW3RoaXMuaWRdLmFsMTtcblx0XHRcdHRoaXMuYWwyID0gZGlyZWN0b3JzT2JqW3RoaXMuaWRdLmFsMjtcblx0XHRcdHRoaXMuY2l0eSA9IGRpcmVjdG9yc09ialt0aGlzLmlkXS5jaXR5O1xuXHRcdFx0dGhpcy5wb3N0YWwgPSBkaXJlY3RvcnNPYmpbdGhpcy5pZF0ucG9zdGFsO1xuXHRcdFx0dGhpcy5jb3VudHJ5ID0gZGlyZWN0b3JzT2JqW3RoaXMuaWRdLmNvdW50cnk7XG5cdFx0XHR0aGlzLnN0YXRlID0gZGlyZWN0b3JzT2JqW3RoaXMuaWRdLnN0YXRlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNvbXBhbnlOYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY29tcGFueU5hbWVcIiwgXCJcIik7XG5cdFx0XHR0aGlzLmNvbXBhbnlUeXBlID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY29tcGFueVR5cGVcIiwgXCJcIik7XG5cdFx0XHR0aGlzLmZpcnN0TmFtZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImZpcnN0TmFtZVwiLCBcIlwiKTtcblx0XHRcdHRoaXMubGFzdE5hbWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJsYXN0TmFtZVwiLCBcIlwiKTtcblx0XHRcdHRoaXMuZW1haWwgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJlbWFpbFwiLCBcIlwiKTtcblx0XHRcdHRoaXMuYWwxID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWwxXCIsIFwiXCIpO1xuXHRcdFx0dGhpcy5hbDIgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbDJcIiwgXCJcIik7XG5cdFx0XHR0aGlzLmNpdHkgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjaXR5XCIsIFwiXCIpO1xuXHRcdFx0dGhpcy5wb3N0YWwgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJwb3N0YWxcIiwgMCk7XG5cdFx0XHR0aGlzLmNvdW50cnkgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjb3VudHJ5XCIsIFwiXCIpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInN0YXRlXCIsIFwiXCIpO1xuXHRcdH1cblx0fVxuXHRcblx0cHVibGljIGRvbmUoKXtcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJkaXJlY3RvcnNcIiwgSlNPTi5zdHJpbmdpZnkoW3sgXG5cdFx0XHRcImZpcnN0TmFtZVwiOiB0aGlzLmZpcnN0TmFtZSxcblx0XHRcdCBcImxhc3ROYW1lXCI6IHRoaXMubGFzdE5hbWUsXG5cdFx0XHQgXCJlbWFpbFwiOiB0aGlzLmVtYWlsLFxuXHRcdFx0IFwiYWwxXCI6IHRoaXMuYWwxLFxuXHRcdFx0IFwiYWwyXCI6IHRoaXMuYWwyLFxuXHRcdFx0IFwiY2l0eVwiOiB0aGlzLmNpdHksXG5cdFx0XHQgXCJwb3N0YWxcIjogdGhpcy5wb3N0YWwsXG5cdFx0XHQgXCJjb3VudHJ5XCI6IHRoaXMuY291bnRyeSxcblx0XHRcdCBcInN0YXRlXCI6IHRoaXMuc3RhdGVcblx0XHR9XSkpO1xuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9yZXZpZXdcIl0pO1xuXHR9XG59XG4iXX0=
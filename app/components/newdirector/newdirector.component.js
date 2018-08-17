"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var plugin = require("nativescript-uuid");
var appSettings = require("application-settings");
var NewDirectorComponent = /** @class */ (function () {
    //@ViewChild("step2") step2: ElementRef;
    function NewDirectorComponent(page, router) {
        this.page = page;
        this.router = router;
        // Use the component constructor to inject providers.
        page.actionBarHidden = true;
        this.page = page;
    }
    NewDirectorComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        this.directors = appSettings.getString("directors", "");
        this.directorsObj = JSON.parse(this.directors);
        this.directorLength = this.directorsObj.length;
    };
    NewDirectorComponent.prototype.addDirector = function () {
        var auxObj = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            al1: this.al1,
            al2: this.al2,
            city: this.city,
            postal: this.postal,
            country: this.country,
            state: this.state,
        };
        this.directorsObj.push(auxObj);
        appSettings.setString("directors", JSON.stringify(this.directorsObj));
        this.router.navigate(["/review"]);
    };
    NewDirectorComponent = __decorate([
        core_1.Component({
            selector: "NewDirector",
            moduleId: module.id,
            templateUrl: "./newdirector.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router])
    ], NewDirectorComponent);
    return NewDirectorComponent;
}());
exports.NewDirectorComponent = NewDirectorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3ZGlyZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV3ZGlyZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLGdDQUE2QjtBQUM3QiwwQ0FBeUM7QUFFekMsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDNUMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFPbEQ7SUFpQkMsd0NBQXdDO0lBQ3JDLDhCQUFvQixJQUFVLEVBQVUsTUFBYztRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN4RCxxREFBcUQ7UUFDckQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDZixDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNGLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztJQUNoRCxDQUFDO0lBRU0sMENBQVcsR0FBbEI7UUFDQyxJQUFJLE1BQU0sR0FBRztZQUNaLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2pCLENBQUE7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQixXQUFXLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBOUNXLG9CQUFvQjtRQUxoQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7U0FDOUMsQ0FBQzt5Q0FtQjRCLFdBQUksRUFBa0IsZUFBTTtPQWxCN0Msb0JBQW9CLENBK0NoQztJQUFELDJCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7QUEvQ1ksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuY29uc3QgcGx1Z2luID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11dWlkXCIpO1xyXG52YXIgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIk5ld0RpcmVjdG9yXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9uZXdkaXJlY3Rvci5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZXdEaXJlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdGZpcnN0TmFtZSA6c3RyaW5nO1xyXG5cdGxhc3ROYW1lIDpzdHJpbmc7XHJcblx0ZW1haWwgOnN0cmluZztcclxuXHRhbDEgOnN0cmluZztcclxuXHRhbDIgOnN0cmluZztcclxuXHRjaXR5IDpzdHJpbmc7XHJcblx0cG9zdGFsIDpudW1iZXI7XHJcblx0Y291bnRyeSA6c3RyaW5nO1xyXG5cdHN0YXRlIDpzdHJpbmc7XHJcblx0Y29tcGFueU5hbWU6IHN0cmluZztcclxuXHRjb21wYW55VHlwZSA6c3RyaW5nO1xyXG5cdGRpcmVjdG9ycyA6c3RyaW5nO1xyXG5cdGRpcmVjdG9yc09iaiA6YW55O1xyXG5cdGRpcmVjdG9yTGVuZ3RoOiBudW1iZXI7XHJcblxyXG5cdC8vQFZpZXdDaGlsZChcInN0ZXAyXCIpIHN0ZXAyOiBFbGVtZW50UmVmO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcblx0XHQvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG5cdFx0cGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG5cdFx0dGhpcy5wYWdlID0gcGFnZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHRcdC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG5cdFx0dGhpcy5kaXJlY3RvcnMgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJkaXJlY3RvcnNcIiwgXCJcIik7XHJcblx0XHR0aGlzLmRpcmVjdG9yc09iaiA9IEpTT04ucGFyc2UodGhpcy5kaXJlY3RvcnMpO1xyXG5cdFx0dGhpcy5kaXJlY3Rvckxlbmd0aCA9IHRoaXMuZGlyZWN0b3JzT2JqLmxlbmd0aDtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIGFkZERpcmVjdG9yKCl7XHJcblx0XHRsZXQgYXV4T2JqID0ge1xyXG5cdFx0XHRmaXJzdE5hbWU6IHRoaXMuZmlyc3ROYW1lLFxyXG5cdFx0XHRsYXN0TmFtZTogdGhpcy5sYXN0TmFtZSxcclxuXHRcdFx0ZW1haWw6IHRoaXMuZW1haWwsXHJcblx0XHRcdGFsMTogdGhpcy5hbDEsXHJcblx0XHRcdGFsMjogdGhpcy5hbDIsXHJcblx0XHRcdGNpdHk6IHRoaXMuY2l0eSxcclxuXHRcdFx0cG9zdGFsOiB0aGlzLnBvc3RhbCxcclxuXHRcdFx0Y291bnRyeTogdGhpcy5jb3VudHJ5LFxyXG5cdFx0XHRzdGF0ZTogdGhpcy5zdGF0ZSxcclxuXHRcdH1cclxuXHRcdHRoaXMuZGlyZWN0b3JzT2JqLnB1c2goYXV4T2JqKTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImRpcmVjdG9yc1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmRpcmVjdG9yc09iaikpO1xyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3Jldmlld1wiXSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
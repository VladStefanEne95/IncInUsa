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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3ZGlyZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV3ZGlyZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLGdDQUE2QjtBQUM3QiwwQ0FBeUM7QUFFekMsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDNUMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFPbEQ7SUFpQkMsd0NBQXdDO0lBQ3JDLDhCQUFvQixJQUFVLEVBQVUsTUFBYztRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN4RCxxREFBcUQ7UUFDckQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDZixDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNGLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztJQUNoRCxDQUFDO0lBRU0sMENBQVcsR0FBbEI7UUFDQyxJQUFJLE1BQU0sR0FBRztZQUNaLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2pCLENBQUE7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQixXQUFXLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBOUNXLG9CQUFvQjtRQUxoQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7U0FDOUMsQ0FBQzt5Q0FtQjRCLFdBQUksRUFBa0IsZUFBTTtPQWxCN0Msb0JBQW9CLENBK0NoQztJQUFELDJCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7QUEvQ1ksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmNvbnN0IHBsdWdpbiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdXVpZFwiKTtcbnZhciBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiTmV3RGlyZWN0b3JcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbmV3ZGlyZWN0b3IuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBOZXdEaXJlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Zmlyc3ROYW1lIDpzdHJpbmc7XG5cdGxhc3ROYW1lIDpzdHJpbmc7XG5cdGVtYWlsIDpzdHJpbmc7XG5cdGFsMSA6c3RyaW5nO1xuXHRhbDIgOnN0cmluZztcblx0Y2l0eSA6c3RyaW5nO1xuXHRwb3N0YWwgOm51bWJlcjtcblx0Y291bnRyeSA6c3RyaW5nO1xuXHRzdGF0ZSA6c3RyaW5nO1xuXHRjb21wYW55TmFtZTogc3RyaW5nO1xuXHRjb21wYW55VHlwZSA6c3RyaW5nO1xuXHRkaXJlY3RvcnMgOnN0cmluZztcblx0ZGlyZWN0b3JzT2JqIDphbnk7XG5cdGRpcmVjdG9yTGVuZ3RoOiBudW1iZXI7XG5cblx0Ly9AVmlld0NoaWxkKFwic3RlcDJcIikgc3RlcDI6IEVsZW1lbnRSZWY7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG5cdFx0Ly8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG5cdFx0dGhpcy5wYWdlID0gcGFnZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHQvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cblx0XHR0aGlzLmRpcmVjdG9ycyA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImRpcmVjdG9yc1wiLCBcIlwiKTtcblx0XHR0aGlzLmRpcmVjdG9yc09iaiA9IEpTT04ucGFyc2UodGhpcy5kaXJlY3RvcnMpO1xuXHRcdHRoaXMuZGlyZWN0b3JMZW5ndGggPSB0aGlzLmRpcmVjdG9yc09iai5sZW5ndGg7XG5cdH1cblx0XG5cdHB1YmxpYyBhZGREaXJlY3Rvcigpe1xuXHRcdGxldCBhdXhPYmogPSB7XG5cdFx0XHRmaXJzdE5hbWU6IHRoaXMuZmlyc3ROYW1lLFxuXHRcdFx0bGFzdE5hbWU6IHRoaXMubGFzdE5hbWUsXG5cdFx0XHRlbWFpbDogdGhpcy5lbWFpbCxcblx0XHRcdGFsMTogdGhpcy5hbDEsXG5cdFx0XHRhbDI6IHRoaXMuYWwyLFxuXHRcdFx0Y2l0eTogdGhpcy5jaXR5LFxuXHRcdFx0cG9zdGFsOiB0aGlzLnBvc3RhbCxcblx0XHRcdGNvdW50cnk6IHRoaXMuY291bnRyeSxcblx0XHRcdHN0YXRlOiB0aGlzLnN0YXRlLFxuXHRcdH1cblx0XHR0aGlzLmRpcmVjdG9yc09iai5wdXNoKGF1eE9iaik7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiZGlyZWN0b3JzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuZGlyZWN0b3JzT2JqKSk7XG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3Jldmlld1wiXSk7XG5cdH1cbn1cbiJdfQ==
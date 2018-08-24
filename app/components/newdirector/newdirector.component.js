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
    NewDirectorComponent.prototype.isValidEmail = function () {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.email);
    };
    NewDirectorComponent.prototype.addDirector = function () {
        if (!this.isValidEmail()) {
            alert("Invalid Email");
            return;
        }
        if (this.firstName == ""
            || this.lastName == ""
            || this.al1 == ""
            || this.city == ""
            || this.postal == ""
            || this.country == ""
            || this.state == "") {
            alert("Please complete the entire form");
            return;
        }
        var auxObj = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            al1: this.al1,
            al2: this.al2,
            city: this.city,
            postal: this.postal,
            country: this.country,
            emoji: this.emoji,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3ZGlyZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV3ZGlyZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLGdDQUE2QjtBQUM3QiwwQ0FBeUM7QUFFekMsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDNUMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFPbEQ7SUFrQkMsd0NBQXdDO0lBQ3JDLDhCQUFvQixJQUFVLEVBQVUsTUFBYztRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN4RCxxREFBcUQ7UUFDckQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDZixDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNGLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztJQUNoRCxDQUFDO0lBQ0QsMkNBQVksR0FBWjtRQUNDLElBQUksRUFBRSxHQUFHLHdKQUF3SixDQUFDO1FBQ2xLLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUgsMENBQVcsR0FBWDtRQUNDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQixLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDdkIsTUFBTSxDQUFDO1FBQ1IsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUNGLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRTtlQUNqQixJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUU7ZUFDbkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFO2VBQ2QsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO2VBQ2YsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFO2VBQ2pCLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRTtlQUNsQixJQUFJLENBQUMsS0FBSyxJQUFJLEVBQ2xCLENBQUMsQ0FBQyxDQUFDO1lBQ0YsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7WUFDekMsTUFBTSxDQUFDO1FBQ1IsQ0FBQztRQUVELElBQUksTUFBTSxHQUFHO1lBQ1osU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2pCLENBQUE7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQixXQUFXLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBckVXLG9CQUFvQjtRQUxoQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7U0FDOUMsQ0FBQzt5Q0FvQjRCLFdBQUksRUFBa0IsZUFBTTtPQW5CN0Msb0JBQW9CLENBc0VoQztJQUFELDJCQUFDO0NBQUEsQUF0RUQsSUFzRUM7QUF0RVksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuY29uc3QgcGx1Z2luID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11dWlkXCIpO1xyXG52YXIgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIk5ld0RpcmVjdG9yXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9uZXdkaXJlY3Rvci5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZXdEaXJlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdGZpcnN0TmFtZSA6c3RyaW5nO1xyXG5cdGxhc3ROYW1lIDpzdHJpbmc7XHJcblx0ZW1haWwgOnN0cmluZztcclxuXHRhbDEgOnN0cmluZztcclxuXHRhbDIgOnN0cmluZztcclxuXHRjaXR5IDpzdHJpbmc7XHJcblx0cG9zdGFsIDpzdHJpbmc7XHJcblx0Y291bnRyeSA6c3RyaW5nO1xyXG5cdHN0YXRlIDpzdHJpbmc7XHJcblx0Y29tcGFueU5hbWU6IHN0cmluZztcclxuXHRjb21wYW55VHlwZSA6c3RyaW5nO1xyXG5cdGVtb2ppIDpzdHJpbmc7XHJcblx0ZGlyZWN0b3JzIDpzdHJpbmc7XHJcblx0ZGlyZWN0b3JzT2JqIDphbnk7XHJcblx0ZGlyZWN0b3JMZW5ndGg6IG51bWJlcjtcclxuXHJcblx0Ly9AVmlld0NoaWxkKFwic3RlcDJcIikgc3RlcDI6IEVsZW1lbnRSZWY7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuXHRcdC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblx0XHR0aGlzLnBhZ2UgPSBwYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0Ly8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcblx0XHR0aGlzLmRpcmVjdG9ycyA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImRpcmVjdG9yc1wiLCBcIlwiKTtcclxuXHRcdHRoaXMuZGlyZWN0b3JzT2JqID0gSlNPTi5wYXJzZSh0aGlzLmRpcmVjdG9ycyk7XHJcblx0XHR0aGlzLmRpcmVjdG9yTGVuZ3RoID0gdGhpcy5kaXJlY3RvcnNPYmoubGVuZ3RoO1xyXG5cdH1cclxuXHRpc1ZhbGlkRW1haWwoKSB7XHJcblx0XHR2YXIgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuXHRcdHJldHVybiByZS50ZXN0KHRoaXMuZW1haWwpO1xyXG4gICB9XHJcblxyXG5cdGFkZERpcmVjdG9yKCl7XHJcblx0XHRpZiAoIXRoaXMuaXNWYWxpZEVtYWlsKCkpIHtcclxuXHRcdFx0YWxlcnQoXCJJbnZhbGlkIEVtYWlsXCIpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRpZiAoXHJcblx0XHRcdHRoaXMuZmlyc3ROYW1lID09IFwiXCIgXHJcblx0XHRcdHx8IHRoaXMubGFzdE5hbWUgPT0gXCJcIiBcclxuXHRcdFx0fHwgdGhpcy5hbDEgPT0gXCJcIiBcclxuXHRcdFx0fHwgdGhpcy5jaXR5ID09IFwiXCIgXHJcblx0XHRcdHx8IHRoaXMucG9zdGFsID09IFwiXCIgXHJcblx0XHRcdHx8IHRoaXMuY291bnRyeSA9PSBcIlwiIFxyXG5cdFx0XHR8fCB0aGlzLnN0YXRlID09IFwiXCJcclxuXHRcdCkge1xyXG5cdFx0XHRhbGVydChcIlBsZWFzZSBjb21wbGV0ZSB0aGUgZW50aXJlIGZvcm1cIik7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgYXV4T2JqID0ge1xyXG5cdFx0XHRmaXJzdE5hbWU6IHRoaXMuZmlyc3ROYW1lLFxyXG5cdFx0XHRsYXN0TmFtZTogdGhpcy5sYXN0TmFtZSxcclxuXHRcdFx0ZW1haWw6IHRoaXMuZW1haWwsXHJcblx0XHRcdGFsMTogdGhpcy5hbDEsXHJcblx0XHRcdGFsMjogdGhpcy5hbDIsXHJcblx0XHRcdGNpdHk6IHRoaXMuY2l0eSxcclxuXHRcdFx0cG9zdGFsOiB0aGlzLnBvc3RhbCxcclxuXHRcdFx0Y291bnRyeTogdGhpcy5jb3VudHJ5LFxyXG5cdFx0XHRlbW9qaTogdGhpcy5lbW9qaSxcclxuXHRcdFx0c3RhdGU6IHRoaXMuc3RhdGUsXHJcblx0XHR9XHJcblx0XHR0aGlzLmRpcmVjdG9yc09iai5wdXNoKGF1eE9iaik7XHJcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJkaXJlY3RvcnNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5kaXJlY3RvcnNPYmopKTtcclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9yZXZpZXdcIl0pO1xyXG5cdH1cclxufVxyXG4iXX0=
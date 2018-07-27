"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var HomeComponent = /** @class */ (function () {
    //@ViewChild("step2") step2: ElementRef;
    function HomeComponent(page) {
        // Use the component constructor to inject providers.
        page.actionBarHidden = true;
        this.page = page;
        this.page.addCss("#step3 {visibility: collapsed}");
    }
    HomeComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    HomeComponent.prototype.step3 = function (page) {
        console.log("aici");
        this.page.addCss("#step2 {visibility: collapsed}");
        this.page.addCss("#step3 {visibility: visible}");
    };
    HomeComponent.prototype.step2 = function (page) {
        console.log("aici");
        this.page.addCss("#step3 {visibility: collapsed}");
        this.page.addCss("#step2 {visibility: visible}");
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUN4RSxnQ0FBNkI7QUFPN0I7SUFHQyx3Q0FBd0M7SUFDckMsdUJBQVksSUFBVTtRQUN4QixxREFBcUQ7UUFDckQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUM5QyxDQUFDO0lBQ0QsNkJBQUssR0FBTCxVQUFNLElBQVU7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsNkJBQUssR0FBTCxVQUFNLElBQVU7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBeEJXLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBS29CLFdBQUk7T0FKYixhQUFhLENBeUJ6QjtJQUFELG9CQUFDO0NBQUEsQUF6QkQsSUF5QkM7QUF6Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRwYWdlO1xuXHQvL0BWaWV3Q2hpbGQoXCJzdGVwMlwiKSBzdGVwMjogRWxlbWVudFJlZjtcbiAgICBjb25zdHJ1Y3RvcihwYWdlOiBQYWdlKSB7XG5cdFx0Ly8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG5cdFx0dGhpcy5wYWdlID0gcGFnZTtcblx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiI3N0ZXAzIHt2aXNpYmlsaXR5OiBjb2xsYXBzZWR9XCIpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cblx0fVxuXHRzdGVwMyhwYWdlOiBQYWdlKTogdm9pZHtcblx0XHRjb25zb2xlLmxvZyhcImFpY2lcIik7XG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIiNzdGVwMiB7dmlzaWJpbGl0eTogY29sbGFwc2VkfVwiKTtcblx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiI3N0ZXAzIHt2aXNpYmlsaXR5OiB2aXNpYmxlfVwiKTtcblx0fVxuXG5cdHN0ZXAyKHBhZ2U6IFBhZ2UpOiB2b2lke1xuXHRcdGNvbnNvbGUubG9nKFwiYWljaVwiKTtcblx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiI3N0ZXAzIHt2aXNpYmlsaXR5OiBjb2xsYXBzZWR9XCIpO1xuXHRcdHRoaXMucGFnZS5hZGRDc3MoXCIjc3RlcDIge3Zpc2liaWxpdHk6IHZpc2libGV9XCIpO1xuXHR9XG59XG4iXX0=
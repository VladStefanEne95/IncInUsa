"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var appSettings = require("application-settings");
var BankComponent = /** @class */ (function () {
    function BankComponent(page, router) {
        this.page = page;
        this.router = router;
        this.page = page;
        page.actionBarHidden = true;
        this.page.addCss("#CB1 {visibility: collapsed}");
        this.page.addCss("#CB2 {visibility: collapsed}");
    }
    BankComponent.prototype.ngOnInit = function () {
        console.log(appSettings.getString("bankAccount", ""));
        this.bankAccount = (appSettings.getString("bankAccount", "") == 'true');
        if (this.bankAccount == true) {
            this.FirstCheckBox.nativeElement.checked = true;
            this.page.addCss("#CB1 {visibility: visible}");
            this.payment = 100;
        }
        if (this.bankAccount == false) {
            this.SecondCheckBox.nativeElement.checked = true;
            this.page.addCss("#CB2 {visibility: visible}");
            this.payment = 0;
        }
    };
    BankComponent.prototype.nextStep = function () {
        appSettings.setString("payment", this.payment.toString());
        appSettings.setString("bankAccount", this.bankAccount.toString());
        this.router.navigate(["/personal"]);
    };
    BankComponent.prototype.firstCheckboxTap = function () {
        this.FirstCheckBox.nativeElement.checked = true;
        this.SecondCheckBox.nativeElement.checked = false;
        this.bankAccount = true;
        this.payment = 100;
        this.page.addCss("#CB1 {visibility: visible}");
        this.page.addCss("#CB2 {visibility: collapsed}");
    };
    BankComponent.prototype.secondCheckboxTap = function () {
        this.FirstCheckBox.nativeElement.checked = false;
        this.SecondCheckBox.nativeElement.checked = true;
        this.bankAccount = false;
        this.payment = 0;
        this.page.addCss("#CB2 {visibility: visible}");
        this.page.addCss("#CB1 {visibility: collapsed}");
    };
    __decorate([
        core_1.ViewChild("CB1"),
        __metadata("design:type", core_1.ElementRef)
    ], BankComponent.prototype, "FirstCheckBox", void 0);
    __decorate([
        core_1.ViewChild("CB2"),
        __metadata("design:type", core_1.ElementRef)
    ], BankComponent.prototype, "SecondCheckBox", void 0);
    BankComponent = __decorate([
        core_1.Component({
            selector: "Bank",
            moduleId: module.id,
            templateUrl: "./bank.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router])
    ], BankComponent);
    return BankComponent;
}());
exports.BankComponent = BankComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUN4RSxnQ0FBNkI7QUFDN0IsMENBQXlDO0FBQ3pDLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBUWxEO0lBUUksdUJBQW9CLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3hELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUM7UUFDeEUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNwQixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNsQixDQUFDO0lBRUYsQ0FBQztJQUdNLGdDQUFRLEdBQWY7UUFDQyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDMUQsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sd0NBQWdCLEdBQXZCO1FBQ0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNoRCxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2xELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0seUNBQWlCLEdBQXhCO1FBQ0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNqRCxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2pELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBbERpQjtRQUFqQixnQkFBUyxDQUFDLEtBQUssQ0FBQztrQ0FBZ0IsaUJBQVU7d0RBQUM7SUFDMUI7UUFBakIsZ0JBQVMsQ0FBQyxLQUFLLENBQUM7a0NBQWlCLGlCQUFVO3lEQUFDO0lBTmpDLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBUzRCLFdBQUksRUFBa0IsZUFBTTtPQVI3QyxhQUFhLENBd0R6QjtJQUFELG9CQUFDO0NBQUEsQUF4REQsSUF3REM7QUF4RFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbnZhciBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkJhbmtcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2JhbmsuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQmFua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0XHJcblx0YmFua0FjY291bnQgOmJvb2xlYW47XHJcblx0cGF5bWVudCA6bnVtYmVyO1xyXG5cclxuXHRAVmlld0NoaWxkKFwiQ0IxXCIpIEZpcnN0Q2hlY2tCb3g6IEVsZW1lbnRSZWY7XHJcblx0QFZpZXdDaGlsZChcIkNCMlwiKSBTZWNvbmRDaGVja0JveDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuXHRcdHRoaXMucGFnZSA9IHBhZ2U7XHJcblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiI0NCMSB7dmlzaWJpbGl0eTogY29sbGFwc2VkfVwiKTtcclxuXHRcdHRoaXMucGFnZS5hZGRDc3MoXCIjQ0IyIHt2aXNpYmlsaXR5OiBjb2xsYXBzZWR9XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYmFua0FjY291bnRcIiwgXCJcIikpO1xyXG5cdFx0dGhpcy5iYW5rQWNjb3VudCA9IChhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJiYW5rQWNjb3VudFwiLCBcIlwiKSA9PSAndHJ1ZScpO1xyXG5cdFx0aWYgKHRoaXMuYmFua0FjY291bnQgPT0gdHJ1ZSkge1xyXG5cdFx0XHR0aGlzLkZpcnN0Q2hlY2tCb3gubmF0aXZlRWxlbWVudC5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5wYWdlLmFkZENzcyhcIiNDQjEge3Zpc2liaWxpdHk6IHZpc2libGV9XCIpO1xyXG5cdFx0XHR0aGlzLnBheW1lbnQgPSAxMDA7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmICh0aGlzLmJhbmtBY2NvdW50ID09IGZhbHNlKSB7XHJcblx0XHRcdHRoaXMuU2Vjb25kQ2hlY2tCb3gubmF0aXZlRWxlbWVudC5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5wYWdlLmFkZENzcyhcIiNDQjIge3Zpc2liaWxpdHk6IHZpc2libGV9XCIpO1xyXG5cdFx0XHR0aGlzLnBheW1lbnQgPSAwO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cclxuXHRwdWJsaWMgbmV4dFN0ZXAoKSB7XHJcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJwYXltZW50XCIsIHRoaXMucGF5bWVudC50b1N0cmluZygpKTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImJhbmtBY2NvdW50XCIsIHRoaXMuYmFua0FjY291bnQudG9TdHJpbmcoKSk7XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcGVyc29uYWxcIl0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGZpcnN0Q2hlY2tib3hUYXAoKSB7XHJcblx0XHR0aGlzLkZpcnN0Q2hlY2tCb3gubmF0aXZlRWxlbWVudC5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdHRoaXMuU2Vjb25kQ2hlY2tCb3gubmF0aXZlRWxlbWVudC5jaGVja2VkID0gZmFsc2U7XHJcblx0XHR0aGlzLmJhbmtBY2NvdW50ID0gdHJ1ZTsgXHJcblx0XHR0aGlzLnBheW1lbnQgPSAxMDA7XHJcblx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiI0NCMSB7dmlzaWJpbGl0eTogdmlzaWJsZX1cIik7XHJcblx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiI0NCMiB7dmlzaWJpbGl0eTogY29sbGFwc2VkfVwiKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZWNvbmRDaGVja2JveFRhcCgpIHtcclxuXHRcdHRoaXMuRmlyc3RDaGVja0JveC5uYXRpdmVFbGVtZW50LmNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdHRoaXMuU2Vjb25kQ2hlY2tCb3gubmF0aXZlRWxlbWVudC5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdHRoaXMuYmFua0FjY291bnQgPSBmYWxzZTtcclxuXHRcdHRoaXMucGF5bWVudCA9IDA7XHJcblx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiI0NCMiB7dmlzaWJpbGl0eTogdmlzaWJsZX1cIik7XHJcblx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiI0NCMSB7dmlzaWJpbGl0eTogY29sbGFwc2VkfVwiKTtcclxuXHR9XHJcbn1cclxuIl19
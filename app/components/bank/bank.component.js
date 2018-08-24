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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUN4RSxnQ0FBNkI7QUFDN0IsMENBQXlDO0FBQ3pDLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBUWxEO0lBUUksdUJBQW9CLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3hELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNGLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQztRQUN4RSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLENBQUM7SUFFRixDQUFDO0lBR00sZ0NBQVEsR0FBZjtRQUNDLFdBQVcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMxRCxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSx3Q0FBZ0IsR0FBdkI7UUFDQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2hELElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDbEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTSx5Q0FBaUIsR0FBeEI7UUFDQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2pELElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDakQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFqRGlCO1FBQWpCLGdCQUFTLENBQUMsS0FBSyxDQUFDO2tDQUFnQixpQkFBVTt3REFBQztJQUMxQjtRQUFqQixnQkFBUyxDQUFDLEtBQUssQ0FBQztrQ0FBaUIsaUJBQVU7eURBQUM7SUFOakMsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FTNEIsV0FBSSxFQUFrQixlQUFNO09BUjdDLGFBQWEsQ0F1RHpCO0lBQUQsb0JBQUM7Q0FBQSxBQXZERCxJQXVEQztBQXZEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxudmFyIGFwcFNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiQmFua1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYmFuay5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCYW5rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRcclxuXHRiYW5rQWNjb3VudCA6Ym9vbGVhbjtcclxuXHRwYXltZW50IDpudW1iZXI7XHJcblxyXG5cdEBWaWV3Q2hpbGQoXCJDQjFcIikgRmlyc3RDaGVja0JveDogRWxlbWVudFJlZjtcclxuXHRAVmlld0NoaWxkKFwiQ0IyXCIpIFNlY29uZENoZWNrQm94OiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG5cdFx0dGhpcy5wYWdlID0gcGFnZTtcclxuXHRcdHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuXHRcdHRoaXMucGFnZS5hZGRDc3MoXCIjQ0IxIHt2aXNpYmlsaXR5OiBjb2xsYXBzZWR9XCIpO1xyXG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIiNDQjIge3Zpc2liaWxpdHk6IGNvbGxhcHNlZH1cIik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmJhbmtBY2NvdW50ID0gKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImJhbmtBY2NvdW50XCIsIFwiXCIpID09ICd0cnVlJyk7XHJcblx0XHRpZiAodGhpcy5iYW5rQWNjb3VudCA9PSB0cnVlKSB7XHJcblx0XHRcdHRoaXMuRmlyc3RDaGVja0JveC5uYXRpdmVFbGVtZW50LmNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiI0NCMSB7dmlzaWJpbGl0eTogdmlzaWJsZX1cIik7XHJcblx0XHRcdHRoaXMucGF5bWVudCA9IDEwMDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYgKHRoaXMuYmFua0FjY291bnQgPT0gZmFsc2UpIHtcclxuXHRcdFx0dGhpcy5TZWNvbmRDaGVja0JveC5uYXRpdmVFbGVtZW50LmNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiI0NCMiB7dmlzaWJpbGl0eTogdmlzaWJsZX1cIik7XHJcblx0XHRcdHRoaXMucGF5bWVudCA9IDA7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblxyXG5cdHB1YmxpYyBuZXh0U3RlcCgpIHtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcInBheW1lbnRcIiwgdGhpcy5wYXltZW50LnRvU3RyaW5nKCkpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYmFua0FjY291bnRcIiwgdGhpcy5iYW5rQWNjb3VudC50b1N0cmluZygpKTtcclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9wZXJzb25hbFwiXSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZmlyc3RDaGVja2JveFRhcCgpIHtcclxuXHRcdHRoaXMuRmlyc3RDaGVja0JveC5uYXRpdmVFbGVtZW50LmNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5TZWNvbmRDaGVja0JveC5uYXRpdmVFbGVtZW50LmNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdHRoaXMuYmFua0FjY291bnQgPSB0cnVlOyBcclxuXHRcdHRoaXMucGF5bWVudCA9IDEwMDtcclxuXHRcdHRoaXMucGFnZS5hZGRDc3MoXCIjQ0IxIHt2aXNpYmlsaXR5OiB2aXNpYmxlfVwiKTtcclxuXHRcdHRoaXMucGFnZS5hZGRDc3MoXCIjQ0IyIHt2aXNpYmlsaXR5OiBjb2xsYXBzZWR9XCIpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNlY29uZENoZWNrYm94VGFwKCkge1xyXG5cdFx0dGhpcy5GaXJzdENoZWNrQm94Lm5hdGl2ZUVsZW1lbnQuY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5TZWNvbmRDaGVja0JveC5uYXRpdmVFbGVtZW50LmNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5iYW5rQWNjb3VudCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5wYXltZW50ID0gMDtcclxuXHRcdHRoaXMucGFnZS5hZGRDc3MoXCIjQ0IyIHt2aXNpYmlsaXR5OiB2aXNpYmxlfVwiKTtcclxuXHRcdHRoaXMucGFnZS5hZGRDc3MoXCIjQ0IxIHt2aXNpYmlsaXR5OiBjb2xsYXBzZWR9XCIpO1xyXG5cdH1cclxufVxyXG4iXX0=
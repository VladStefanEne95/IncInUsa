"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var appSettings = require("application-settings");
var DetailsComponent = /** @class */ (function () {
    //@ViewChild("step2") step2: ElementRef;
    function DetailsComponent(page, router) {
        this.router = router;
        // Use the component constructor to inject providers.
        this.page = page;
        page.actionBarHidden = true;
        this.page.addCss("#CB1 {visibility: collapsed}");
        this.page.addCss("#CB2 {visibility: collapsed}");
    }
    DetailsComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        this.companyName = appSettings.getString("companyName", "");
        this.companyType = appSettings.getString("companyType", "");
        if (this.companyType == "LLC") {
            this.FirstCheckBox.nativeElement.checked = true;
            this.page.addCss("#CB1 {visibility: visible}");
        }
        if (this.companyType == "Inc") {
            this.SecondCheckBox.nativeElement.checked = true;
            this.page.addCss("#CB2 {visibility: visible}");
        }
    };
    DetailsComponent.prototype.step3 = function () {
        if (this.companyName == "" || this.companyType == "") {
            alert("please complete the form before proceeding");
            return;
        }
        appSettings.setString("companyName", this.companyName);
        appSettings.setString("companyType", this.companyType);
        this.router.navigate(["/personal"]);
    };
    DetailsComponent.prototype.buttonTapes = function () {
        alert("some text");
    };
    DetailsComponent.prototype.firstCheckboxTap = function () {
        this.FirstCheckBox.nativeElement.checked = true;
        this.SecondCheckBox.nativeElement.checked = false;
        this.companyType = "LLC";
        this.page.addCss("#CB1 {visibility: visible}");
        this.page.addCss("#CB2 {visibility: collapsed}");
    };
    DetailsComponent.prototype.secondCheckboxTap = function () {
        this.FirstCheckBox.nativeElement.checked = false;
        this.SecondCheckBox.nativeElement.checked = true;
        this.companyType = "Inc";
        this.page.addCss("#CB2 {visibility: visible}");
        this.page.addCss("#CB1 {visibility: collapsed}");
    };
    __decorate([
        core_1.ViewChild("CB1"),
        __metadata("design:type", core_1.ElementRef)
    ], DetailsComponent.prototype, "FirstCheckBox", void 0);
    __decorate([
        core_1.ViewChild("CB2"),
        __metadata("design:type", core_1.ElementRef)
    ], DetailsComponent.prototype, "SecondCheckBox", void 0);
    DetailsComponent = __decorate([
        core_1.Component({
            selector: "Details",
            moduleId: module.id,
            templateUrl: "./details.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUN4RSxnQ0FBNkI7QUFDN0IsMENBQXlDO0FBQ3pDLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBUWxEO0lBU0Msd0NBQXdDO0lBQ3JDLDBCQUFZLElBQVUsRUFBVSxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNoRCxxREFBcUQ7UUFDckQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0YsdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU1RCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ2hELENBQUM7UUFFRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ2hELENBQUM7SUFDRixDQUFDO0lBR00sZ0NBQUssR0FBWjtRQUNDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyRCxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztZQUNwRCxNQUFNLENBQUM7UUFDUixDQUFDO1FBQ0QsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZELFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVNLHNDQUFXLEdBQWxCO1FBQ0MsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFDTSwyQ0FBZ0IsR0FBdkI7UUFDQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2hELElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDbEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTSw0Q0FBaUIsR0FBeEI7UUFDQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2pELElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDakQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUF6RGlCO1FBQWpCLGdCQUFTLENBQUMsS0FBSyxDQUFDO2tDQUFnQixpQkFBVTsyREFBQztJQUMxQjtRQUFqQixnQkFBUyxDQUFDLEtBQUssQ0FBQztrQ0FBaUIsaUJBQVU7NERBQUM7SUFOakMsZ0JBQWdCO1FBTDVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtTQUMxQyxDQUFDO3lDQVdvQixXQUFJLEVBQWtCLGVBQU07T0FWckMsZ0JBQWdCLENBK0Q1QjtJQUFELHVCQUFDO0NBQUEsQUEvREQsSUErREM7QUEvRFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG52YXIgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiRGV0YWlsc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9kZXRhaWxzLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdFxuXHRjb21wYW55TmFtZSA6c3RyaW5nO1xuXHRjb21wYW55VHlwZSA6c3RyaW5nO1xuXG5cdEBWaWV3Q2hpbGQoXCJDQjFcIikgRmlyc3RDaGVja0JveDogRWxlbWVudFJlZjtcblx0QFZpZXdDaGlsZChcIkNCMlwiKSBTZWNvbmRDaGVja0JveDogRWxlbWVudFJlZjtcblxuXHRwYWdlO1xuXHQvL0BWaWV3Q2hpbGQoXCJzdGVwMlwiKSBzdGVwMjogRWxlbWVudFJlZjtcbiAgICBjb25zdHJ1Y3RvcihwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG5cdFx0Ly8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cblx0XHR0aGlzLnBhZ2UgPSBwYWdlO1xuXHRcdHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcblx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiI0NCMSB7dmlzaWJpbGl0eTogY29sbGFwc2VkfVwiKTtcblx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiI0NCMiB7dmlzaWJpbGl0eTogY29sbGFwc2VkfVwiKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHQvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cblx0XHR0aGlzLmNvbXBhbnlOYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY29tcGFueU5hbWVcIiwgXCJcIik7XG5cdFx0dGhpcy5jb21wYW55VHlwZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNvbXBhbnlUeXBlXCIsIFwiXCIpO1xuXG5cdFx0aWYodGhpcy5jb21wYW55VHlwZSA9PSBcIkxMQ1wiKSB7XG5cdFx0XHR0aGlzLkZpcnN0Q2hlY2tCb3gubmF0aXZlRWxlbWVudC5jaGVja2VkID0gdHJ1ZTtcblx0XHRcdHRoaXMucGFnZS5hZGRDc3MoXCIjQ0IxIHt2aXNpYmlsaXR5OiB2aXNpYmxlfVwiKTtcblx0XHR9XG5cdFx0XG5cdFx0aWYodGhpcy5jb21wYW55VHlwZSA9PSBcIkluY1wiKSB7XG5cdFx0XHR0aGlzLlNlY29uZENoZWNrQm94Lm5hdGl2ZUVsZW1lbnQuY2hlY2tlZCA9IHRydWU7XG5cdFx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiI0NCMiB7dmlzaWJpbGl0eTogdmlzaWJsZX1cIik7XG5cdFx0fVxuXHR9XG5cblxuXHRwdWJsaWMgc3RlcDMoKSB7XG5cdFx0aWYodGhpcy5jb21wYW55TmFtZSA9PSBcIlwiIHx8IHRoaXMuY29tcGFueVR5cGUgPT0gXCJcIikge1xuXHRcdFx0YWxlcnQoXCJwbGVhc2UgY29tcGxldGUgdGhlIGZvcm0gYmVmb3JlIHByb2NlZWRpbmdcIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImNvbXBhbnlOYW1lXCIsIHRoaXMuY29tcGFueU5hbWUpO1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImNvbXBhbnlUeXBlXCIsIHRoaXMuY29tcGFueVR5cGUpO1xuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9wZXJzb25hbFwiXSk7XG5cdH1cblxuXHRwdWJsaWMgYnV0dG9uVGFwZXMoKSB7XG5cdFx0YWxlcnQoXCJzb21lIHRleHRcIik7XG5cdH1cblx0cHVibGljIGZpcnN0Q2hlY2tib3hUYXAoKSB7XG5cdFx0dGhpcy5GaXJzdENoZWNrQm94Lm5hdGl2ZUVsZW1lbnQuY2hlY2tlZCA9IHRydWU7XG5cdFx0dGhpcy5TZWNvbmRDaGVja0JveC5uYXRpdmVFbGVtZW50LmNoZWNrZWQgPSBmYWxzZTtcblx0XHR0aGlzLmNvbXBhbnlUeXBlID0gXCJMTENcIjsgXG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIiNDQjEge3Zpc2liaWxpdHk6IHZpc2libGV9XCIpO1xuXHRcdHRoaXMucGFnZS5hZGRDc3MoXCIjQ0IyIHt2aXNpYmlsaXR5OiBjb2xsYXBzZWR9XCIpO1xuXHR9XG5cblx0cHVibGljIHNlY29uZENoZWNrYm94VGFwKCkge1xuXHRcdHRoaXMuRmlyc3RDaGVja0JveC5uYXRpdmVFbGVtZW50LmNoZWNrZWQgPSBmYWxzZTtcblx0XHR0aGlzLlNlY29uZENoZWNrQm94Lm5hdGl2ZUVsZW1lbnQuY2hlY2tlZCA9IHRydWU7XG5cdFx0dGhpcy5jb21wYW55VHlwZSA9IFwiSW5jXCI7XG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIiNDQjIge3Zpc2liaWxpdHk6IHZpc2libGV9XCIpO1xuXHRcdHRoaXMucGFnZS5hZGRDc3MoXCIjQ0IxIHt2aXNpYmlsaXR5OiBjb2xsYXBzZWR9XCIpO1xuXHR9XG59XG4iXX0=
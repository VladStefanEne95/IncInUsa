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
        this.router.navigate(["/manage"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUN4RSxnQ0FBNkI7QUFDN0IsMENBQXlDO0FBQ3pDLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBUWxEO0lBU0Msd0NBQXdDO0lBQ3JDLDBCQUFZLElBQVUsRUFBVSxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNoRCxxREFBcUQ7UUFDckQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0YsdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU1RCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ2hELENBQUM7UUFFRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ2hELENBQUM7SUFDRixDQUFDO0lBR00sZ0NBQUssR0FBWjtRQUNDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyRCxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztZQUNwRCxNQUFNLENBQUM7UUFDUixDQUFDO1FBQ0QsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZELFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLHNDQUFXLEdBQWxCO1FBQ0MsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFDTSwyQ0FBZ0IsR0FBdkI7UUFDQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2hELElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDbEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTSw0Q0FBaUIsR0FBeEI7UUFDQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2pELElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDakQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUF6RGlCO1FBQWpCLGdCQUFTLENBQUMsS0FBSyxDQUFDO2tDQUFnQixpQkFBVTsyREFBQztJQUMxQjtRQUFqQixnQkFBUyxDQUFDLEtBQUssQ0FBQztrQ0FBaUIsaUJBQVU7NERBQUM7SUFOakMsZ0JBQWdCO1FBTDVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtTQUMxQyxDQUFDO3lDQVdvQixXQUFJLEVBQWtCLGVBQU07T0FWckMsZ0JBQWdCLENBK0Q1QjtJQUFELHVCQUFDO0NBQUEsQUEvREQsSUErREM7QUEvRFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG52YXIgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJEZXRhaWxzXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9kZXRhaWxzLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdFxyXG5cdGNvbXBhbnlOYW1lIDpzdHJpbmc7XHJcblx0Y29tcGFueVR5cGUgOnN0cmluZztcclxuXHJcblx0QFZpZXdDaGlsZChcIkNCMVwiKSBGaXJzdENoZWNrQm94OiBFbGVtZW50UmVmO1xyXG5cdEBWaWV3Q2hpbGQoXCJDQjJcIikgU2Vjb25kQ2hlY2tCb3g6IEVsZW1lbnRSZWY7XHJcblxyXG5cdHBhZ2U7XHJcblx0Ly9AVmlld0NoaWxkKFwic3RlcDJcIikgc3RlcDI6IEVsZW1lbnRSZWY7XHJcbiAgICBjb25zdHJ1Y3RvcihwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcblx0XHQvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG5cdFx0dGhpcy5wYWdlID0gcGFnZTtcclxuXHRcdHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuXHRcdHRoaXMucGFnZS5hZGRDc3MoXCIjQ0IxIHt2aXNpYmlsaXR5OiBjb2xsYXBzZWR9XCIpO1xyXG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIiNDQjIge3Zpc2liaWxpdHk6IGNvbGxhcHNlZH1cIik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblx0XHQvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuXHRcdHRoaXMuY29tcGFueU5hbWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjb21wYW55TmFtZVwiLCBcIlwiKTtcclxuXHRcdHRoaXMuY29tcGFueVR5cGUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjb21wYW55VHlwZVwiLCBcIlwiKTtcclxuXHJcblx0XHRpZih0aGlzLmNvbXBhbnlUeXBlID09IFwiTExDXCIpIHtcclxuXHRcdFx0dGhpcy5GaXJzdENoZWNrQm94Lm5hdGl2ZUVsZW1lbnQuY2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdHRoaXMucGFnZS5hZGRDc3MoXCIjQ0IxIHt2aXNpYmlsaXR5OiB2aXNpYmxlfVwiKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYodGhpcy5jb21wYW55VHlwZSA9PSBcIkluY1wiKSB7XHJcblx0XHRcdHRoaXMuU2Vjb25kQ2hlY2tCb3gubmF0aXZlRWxlbWVudC5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5wYWdlLmFkZENzcyhcIiNDQjIge3Zpc2liaWxpdHk6IHZpc2libGV9XCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHB1YmxpYyBzdGVwMygpIHtcclxuXHRcdGlmKHRoaXMuY29tcGFueU5hbWUgPT0gXCJcIiB8fCB0aGlzLmNvbXBhbnlUeXBlID09IFwiXCIpIHtcclxuXHRcdFx0YWxlcnQoXCJwbGVhc2UgY29tcGxldGUgdGhlIGZvcm0gYmVmb3JlIHByb2NlZWRpbmdcIik7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImNvbXBhbnlOYW1lXCIsIHRoaXMuY29tcGFueU5hbWUpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiY29tcGFueVR5cGVcIiwgdGhpcy5jb21wYW55VHlwZSk7XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbWFuYWdlXCJdKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBidXR0b25UYXBlcygpIHtcclxuXHRcdGFsZXJ0KFwic29tZSB0ZXh0XCIpO1xyXG5cdH1cclxuXHRwdWJsaWMgZmlyc3RDaGVja2JveFRhcCgpIHtcclxuXHRcdHRoaXMuRmlyc3RDaGVja0JveC5uYXRpdmVFbGVtZW50LmNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5TZWNvbmRDaGVja0JveC5uYXRpdmVFbGVtZW50LmNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdHRoaXMuY29tcGFueVR5cGUgPSBcIkxMQ1wiOyBcclxuXHRcdHRoaXMucGFnZS5hZGRDc3MoXCIjQ0IxIHt2aXNpYmlsaXR5OiB2aXNpYmxlfVwiKTtcclxuXHRcdHRoaXMucGFnZS5hZGRDc3MoXCIjQ0IyIHt2aXNpYmlsaXR5OiBjb2xsYXBzZWR9XCIpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNlY29uZENoZWNrYm94VGFwKCkge1xyXG5cdFx0dGhpcy5GaXJzdENoZWNrQm94Lm5hdGl2ZUVsZW1lbnQuY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5TZWNvbmRDaGVja0JveC5uYXRpdmVFbGVtZW50LmNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5jb21wYW55VHlwZSA9IFwiSW5jXCI7XHJcblx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiI0NCMiB7dmlzaWJpbGl0eTogdmlzaWJsZX1cIik7XHJcblx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiI0NCMSB7dmlzaWJpbGl0eTogY29sbGFwc2VkfVwiKTtcclxuXHR9XHJcbn1cclxuIl19
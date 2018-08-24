"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var nativescript_stripe_1 = require("nativescript-stripe");
var payment_service_1 = require("./../../services/payment/payment.service");
var incorporation_service_1 = require("./../../services/incorporation/incorporation.service");
var appSettings = require("application-settings");
var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(page, PaymentService, IncorporationService, router) {
        this.page = page;
        this.PaymentService = PaymentService;
        this.IncorporationService = IncorporationService;
        this.router = router;
        this.cardNumber = '';
        this.cardMonth = '';
        this.cardYear = '';
        this.cardCvc = '';
        page.actionBarHidden = true;
    }
    PaymentComponent.prototype.ngOnInit = function () {
        this.companyName = appSettings.getString("companyName", "");
        this.companyType = appSettings.getString("companyType", "");
        this.firstName = appSettings.getString("firstName", "");
        this.lastName = appSettings.getString("lastName", "");
        this.uuid = appSettings.getString("uuid", "test");
        this.email = appSettings.getString("email", "");
        this.al1 = appSettings.getString("al1", "");
        this.al2 = appSettings.getString("al2", "");
        this.city = appSettings.getString("city", "");
        this.postal = appSettings.getString("postal", "");
        this.country = appSettings.getString("country", "");
        this.state = appSettings.getString("state", "");
        this.directors = appSettings.getString("directors", "");
        this.billing = appSettings.getString("billing", "");
        this.emoji = appSettings.getString("emoji", "");
        this.payment = parseInt(appSettings.getString("payment", 0)) + 595;
        this.page.addCss("#minicard {visibility: collapsed}");
        console.log(this.billing);
        if (this.billing != "") {
            this.billing = appSettings.getString("billing", "");
            this.billingfirstName = appSettings.getString("billingfirstName", "");
            this.billinglastName = appSettings.getString("billinglastName", "");
            this.billingemail = appSettings.getString("billingemail", "");
            this.billingal1 = appSettings.getString("billingal1", "");
            this.billingal2 = appSettings.getString("billingal2", "");
            this.billingcity = appSettings.getString("billingcity", "");
            this.billingpostal = appSettings.getString("billingpostal", "");
            this.billingcountry = appSettings.getString("billingcountry", "");
            this.billingemoji = appSettings.getString("billingemoji", "");
            this.billingstate = appSettings.getString("billingstate", "");
        }
        this.oldValueLength = 0;
        this.lastCardNumber = "";
        this.lastPosition = 0;
    };
    PaymentComponent.prototype.cardNumberChanged = function (value) {
        //console.log(value);
        //console.log(this.cardNr.nativeElement.android.getSelectionStart());
        //console.log(this.lastPosition - this.cardNr.nativeElement.android.getSelectionStart());
        //console.log(this.lastPosition, this.cardNr.nativeElement.android.getSelectionStart());
        var change = 0;
        console.log(this.lastPosition, this.cardNr.nativeElement.android.getSelectionStart());
        if (this.lastPosition > this.cardNr.nativeElement.android.getSelectionStart()) {
            change = 1;
        }
        if (value.length > 19) {
            this.cardNumber = this.lastCardNumber;
            this.cardNr.nativeElement.text = this.lastCardNumber;
        }
        else {
            if (value.length == 19) {
                this.owner.nativeElement.focus();
                this.lastCardNumber = value;
                this.owner.nativeElement.selectionStart = this.owner.nativeElement.text.length;
                this.owner.nativeElement.selectionEnd = this.owner.nativeElement.text.length;
                this.owner.nativeElement.android.setSelection(this.owner.nativeElement.text.length);
            } // else if (value.length % 5 == 4) {
            // 	this.cardNr.nativeElement.focus();
            // 	this.cardNr.nativeElement.text = value + " ";
            // 	this.cardNumber = this.cardNr.nativeElement.text;
            // 	this.cardNr.nativeElement.selectionStart = this.cardNr.nativeElement.text.length;
            // 	this.cardNr.nativeElement.selectionEnd = this.cardNr.nativeElement.text.length;
            // 	this.cardNr.nativeElement.android.setSelection(this.cardNr.nativeElement.text.length);
            // }
            var noSpace = value.replace(/\ /g, '');
            var withSpace = "";
            for (var i = 0; i < noSpace.length; i++) {
                if (i % 4 == 0 && i != 0) {
                    withSpace += " ";
                }
                withSpace += noSpace[i];
            }
            this.cardNr.nativeElement.text = withSpace;
            this.cardNumber = withSpace;
            var cursorPosition = this.cardNr.nativeElement.text.length;
            value = withSpace;
            this.cardNr.nativeElement.selectionStart = cursorPosition;
            this.cardNr.nativeElement.selectionEnd = cursorPosition;
            this.cardNr.nativeElement.android.setSelection(cursorPosition);
            this.lastPosition = this.cardNr.nativeElement.android.getSelectionStart();
            //Use native api's for cursor position
            // doesn't work when there is the same number multiple times
            // this.cardNr.nativeElement.android.getSelectionStart()
            // if (value.length > this.oldValueLength) {
            // 	for (let i = 0; i < this.oldValueLength; i++) {
            // 		if (this.lastCardNumber[i] != value[i]) {
            // 			cursorPosition = i + 1;
            // 			break;
            // 		}
            // 	}
            // 	console.log(cursorPosition);
            // 	this.cardNr.nativeElement.selectionStart = cursorPosition;
            // 	this.cardNr.nativeElement.selectionEnd = cursorPosition;
            // 	this.cardNr.nativeElement.android.setSelection(cursorPosition);
            // } else {
            // 	for (let i = 0; i < value.length; i++) {
            // 		if (this.lastCardNumber[i] != value[i]) {
            // 			cursorPosition = i + 1;
            // 			break;
            // 		}
            // 	}
            // }
            // this.oldValueLength = value.length;
            // this.lastCardNumber = value;
        }
    };
    PaymentComponent.prototype.dateChanged = function (value) {
        if (value.length == 2) {
            this.cardMonth = value;
            this.cy.nativeElement.focus();
        }
        if (value.length > 2) {
            this.cardMonth = value.substr(0, 2);
            this.cm.nativeElement.text = this.cardMonth;
            this.cy.nativeElement.focus();
            this.cy.nativeElement.text = value.substr(2, 1);
            this.cy.nativeElement.selectionStart = this.cy.nativeElement.text.length;
            this.cy.nativeElement.selectionEnd = this.cy.nativeElement.text.length;
        }
    };
    PaymentComponent.prototype.yearChanged = function (value) {
        if (value.length == 2) {
            this.cardYear = value;
            this.cvcId.nativeElement.focus();
        }
        if (value.length > 2) {
            this.cardYear = value.substr(0, 2);
            this.cy.nativeElement.text = this.cardYear;
            this.cvcId.nativeElement.focus();
            this.cvcId.nativeElement.selectionStart = this.cvcId.nativeElement.text.length;
            this.cvcId.nativeElement.selectionEnd = this.cvcId.nativeElement.text.length;
        }
        if (value.length == 0) {
            this.cm.nativeElement.focus();
            this.cm.nativeElement.selectionStart = this.cm.nativeElement.text.length;
            this.cm.nativeElement.selectionEnd = this.cm.nativeElement.text.length;
        }
    };
    PaymentComponent.prototype.cvcChanged = function (value) {
        if (value.length == 3) {
            this.cardCvc = value;
        }
        else if (value.length > 3) {
            value = value.substr(0, 3);
            this.cardCvc = value;
            this.cvcId.nativeElement.text = value;
        }
    };
    PaymentComponent.prototype.editBilling = function () {
        this.router.navigate(["/billing"]);
    };
    PaymentComponent.prototype.submit = function (args) {
        var _this = this;
        if (this.FirstCheckBox) {
            if (!this.FirstCheckBox.nativeElement.checked && this.billing == "") {
                this.router.navigate(["/billing"]);
            }
            else if (this.FirstCheckBox.nativeElement.checked) {
                var stripe = new nativescript_stripe_1.Stripe('pk_test_JAgczktWX8jchji0bgHIHjOe');
                var cc = new nativescript_stripe_1.Card(this.cardNumber.replace(/\ /g, ''), this.cardMonth, this.cardYear, this.cardCvc);
                stripe.createToken(cc.card, function (error, token) {
                    if (!error) {
                        _this.PaymentService.submitToken(token.getId(), _this.payment).subscribe(function (response) { return alert("Payment done"); }, function (error) { return (alert("there was an error, please try again")); });
                        _this.IncorporationService.submitBilling(_this.firstName, _this.lastName, _this.email, _this.al1, _this.al2, _this.city, _this.postal, _this.country, _this.state, _this.uuid, _this.emoji)
                            .subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
                        _this.IncorporationService.submitData(_this.firstName, _this.lastName, _this.email, _this.al1, _this.al2, _this.city, _this.postal, _this.country, _this.state, _this.directors, _this.uuid, _this.companyName, _this.companyType, _this.emoji)
                            .subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
                    }
                    else {
                        alert("incorect card data");
                    }
                });
            }
        }
        else {
            var stripe = new nativescript_stripe_1.Stripe('pk_test_JAgczktWX8jchji0bgHIHjOe');
            var cc = new nativescript_stripe_1.Card(this.cardNumber.replace(/\ /g, ''), this.cardMonth, this.cardYear, this.cardCvc);
            stripe.createToken(cc.card, function (error, token) {
                if (!error) {
                    _this.PaymentService.submitToken(token.getId(), _this.payment).subscribe(function (response) { return alert("Payment done"); }, function (error) { return (alert("there was an error, please try again")); });
                    _this.IncorporationService.submitBilling(_this.billingfirstName, _this.billinglastName, _this.billingemail, _this.billingal1, _this.billingal2, _this.billingcity, _this.billingpostal, _this.billingcountry, _this.billingstate, _this.uuid, _this.billingemoji)
                        .subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
                    _this.IncorporationService.submitData(_this.firstName, _this.lastName, _this.email, _this.al1, _this.al2, _this.city, _this.postal, _this.country, _this.state, _this.directors, _this.uuid, _this.companyName, _this.companyType, _this.emoji)
                        .subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
                }
                else {
                    alert("incorect card data");
                }
            });
        }
    };
    __decorate([
        core_1.ViewChild("card"),
        __metadata("design:type", core_1.ElementRef)
    ], PaymentComponent.prototype, "card", void 0);
    __decorate([
        core_1.ViewChild("owner"),
        __metadata("design:type", core_1.ElementRef)
    ], PaymentComponent.prototype, "owner", void 0);
    __decorate([
        core_1.ViewChild("cvc"),
        __metadata("design:type", core_1.ElementRef)
    ], PaymentComponent.prototype, "cvcId", void 0);
    __decorate([
        core_1.ViewChild("cardYearId"),
        __metadata("design:type", core_1.ElementRef)
    ], PaymentComponent.prototype, "cy", void 0);
    __decorate([
        core_1.ViewChild("cardMonthId"),
        __metadata("design:type", core_1.ElementRef)
    ], PaymentComponent.prototype, "cm", void 0);
    __decorate([
        core_1.ViewChild("fullcard"),
        __metadata("design:type", core_1.ElementRef)
    ], PaymentComponent.prototype, "fc", void 0);
    __decorate([
        core_1.ViewChild("minicard"),
        __metadata("design:type", core_1.ElementRef)
    ], PaymentComponent.prototype, "mc", void 0);
    __decorate([
        core_1.ViewChild("card1"),
        __metadata("design:type", core_1.ElementRef)
    ], PaymentComponent.prototype, "card1", void 0);
    __decorate([
        core_1.ViewChild("cardNr"),
        __metadata("design:type", core_1.ElementRef)
    ], PaymentComponent.prototype, "cardNr", void 0);
    __decorate([
        core_1.ViewChild("CB1"),
        __metadata("design:type", core_1.ElementRef)
    ], PaymentComponent.prototype, "FirstCheckBox", void 0);
    __decorate([
        core_1.ViewChild("dummy"),
        __metadata("design:type", core_1.ElementRef)
    ], PaymentComponent.prototype, "dummy", void 0);
    PaymentComponent = __decorate([
        core_1.Component({
            selector: "Payment",
            moduleId: module.id,
            templateUrl: "./payment.component.html",
            styleUrls: ['./payment.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, payment_service_1.PaymentService, incorporation_service_1.IncorporationService, router_1.Router])
    ], PaymentComponent);
    return PaymentComponent;
}());
exports.PaymentComponent = PaymentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXltZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSwwQ0FBeUM7QUFDekMsZ0NBQTZCO0FBRTdCLDJEQUFtRTtBQUVuRSw0RUFBeUU7QUFDekUsOEZBQTJGO0FBRTNGLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBU2xEO0lBd0RDLDBCQUFvQixJQUFVLEVBQVMsY0FBOEIsRUFBUyxvQkFBMEMsRUFBVSxNQUFjO1FBQTVILFNBQUksR0FBSixJQUFJLENBQU07UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBUyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWhEaEosZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFlBQU8sR0FBRyxFQUFFLENBQUM7UUE4Q1osSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLFNBQVMs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QUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQztrQ0FBUSxpQkFBVTttREFBQztJQUNwQjtRQUFqQixnQkFBUyxDQUFDLEtBQUssQ0FBQztrQ0FBUSxpQkFBVTttREFBQztJQUNYO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDO2tDQUFLLGlCQUFVO2dEQUFDO0lBQ2Q7UUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7a0NBQUssaUJBQVU7Z0RBQUM7SUFDbEI7UUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7a0NBQUssaUJBQVU7Z0RBQUM7SUFDZjtRQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQztrQ0FBSyxpQkFBVTtnREFBQztJQUNsQjtRQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQztrQ0FBUSxpQkFBVTttREFBQztJQUNqQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBUyxpQkFBVTtvREFBQztJQUN0QjtRQUFqQixnQkFBUyxDQUFDLEtBQUssQ0FBQztrQ0FBZ0IsaUJBQVU7MkRBQUM7SUFDeEI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVEsaUJBQVU7bURBQUM7SUF0RDFCLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3RCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdEMsQ0FBQzt5Q0F5RHlCLFdBQUksRUFBeUIsZ0NBQWMsRUFBK0IsNENBQW9CLEVBQWtCLGVBQU07T0F4RHBJLGdCQUFnQixDQTJSNUI7SUFBRCx1QkFBQztDQUFBLEFBM1JELElBMlJDO0FBM1JZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7Vmlld30gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBDcmVkaXRDYXJkVmlldywgQ2FyZCwgU3RyaXBlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXN0cmlwZSc7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9wYXltZW50L3BheW1lbnQuc2VydmljZSdcclxuaW1wb3J0IHsgSW5jb3Jwb3JhdGlvblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL2luY29ycG9yYXRpb24vaW5jb3Jwb3JhdGlvbi5zZXJ2aWNlJ1xyXG5cclxudmFyIGFwcFNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiUGF5bWVudFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHR0ZW1wbGF0ZVVybDogXCIuL3BheW1lbnQuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsnLi9wYXltZW50LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGF5bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdGNuMSA6bnVtYmVyO1xyXG5cdGNuMiA6bnVtYmVyO1xyXG5cdGNuMyA6bnVtYmVyO1xyXG5cdGNuNCA6bnVtYmVyO1xyXG5cdG9sZFZhbHVlTGVuZ3RoIDpudW1iZXI7XHJcblx0XHJcblx0Y2FyZE51bWJlciA9ICcnO1xyXG5cdGNhcmRNb250aCA9ICcnO1xyXG5cdGNhcmRZZWFyID0gJyc7XHJcblx0Y2FyZEN2YyA9ICcnO1xyXG5cclxuXHRmaXJzdE5hbWUgOnN0cmluZztcclxuXHRsYXN0TmFtZSA6c3RyaW5nO1xyXG5cdGVtYWlsIDpzdHJpbmc7XHJcblx0YWwxIDpzdHJpbmc7XHJcblx0YWwyIDpzdHJpbmc7XHJcblx0Y2l0eSA6c3RyaW5nO1xyXG5cdHBvc3RhbCA6c3RyaW5nO1xyXG5cdGNvdW50cnkgOnN0cmluZztcclxuXHRzdGF0ZSA6c3RyaW5nO1xyXG5cdGNvbXBhbnlOYW1lOiBzdHJpbmc7XHJcblx0Y29tcGFueVR5cGUgOnN0cmluZztcclxuXHRkaXJlY3RvcnMgOnN0cmluZztcclxuXHR1dWlkIDpzdHJpbmc7XHJcblx0cGF5bWVudCA6bnVtYmVyO1xyXG5cdGxhc3RQb3NpdGlvbiA6bnVtYmVyO1xyXG5cdGVtb2ppIDpzdHJpbmc7XHJcblx0YmlsbGluZyA6c3RyaW5nO1xyXG5cclxuXHRiaWxsaW5nZmlyc3ROYW1lIDpzdHJpbmc7XHJcblx0YmlsbGluZ2xhc3ROYW1lIDpzdHJpbmc7XHJcblx0YmlsbGluZ2VtYWlsIDpzdHJpbmc7XHJcblx0YmlsbGluZ2FsMSA6c3RyaW5nO1xyXG5cdGJpbGxpbmdhbDIgOnN0cmluZztcclxuXHRiaWxsaW5nY2l0eSA6c3RyaW5nO1xyXG5cdGJpbGxpbmdwb3N0YWwgOnN0cmluZztcclxuXHRiaWxsaW5nY291bnRyeSA6c3RyaW5nO1xyXG5cdGJpbGxpbmdlbW9qaSA6c3RyaW5nO1xyXG5cdGJpbGxpbmdzdGF0ZSA6c3RyaW5nO1xyXG5cclxuXHRsYXN0Q2FyZE51bWJlciA6c3RyaW5nO1xyXG5cclxuXHRAVmlld0NoaWxkKFwiY2FyZFwiKSBjYXJkOiBFbGVtZW50UmVmO1xyXG5cdEBWaWV3Q2hpbGQoXCJvd25lclwiKSBvd25lcjogRWxlbWVudFJlZjtcclxuXHRAVmlld0NoaWxkKFwiY3ZjXCIpIGN2Y0lkOiBFbGVtZW50UmVmO1xyXG5cdEBWaWV3Q2hpbGQoXCJjYXJkWWVhcklkXCIpIGN5OiBFbGVtZW50UmVmO1xyXG5cdEBWaWV3Q2hpbGQoXCJjYXJkTW9udGhJZFwiKSBjbTogRWxlbWVudFJlZjtcclxuXHRAVmlld0NoaWxkKFwiZnVsbGNhcmRcIikgZmM6IEVsZW1lbnRSZWY7XHJcblx0QFZpZXdDaGlsZChcIm1pbmljYXJkXCIpIG1jOiBFbGVtZW50UmVmO1xyXG5cdEBWaWV3Q2hpbGQoXCJjYXJkMVwiKSBjYXJkMTogRWxlbWVudFJlZjtcclxuXHRAVmlld0NoaWxkKFwiY2FyZE5yXCIpIGNhcmROcjogRWxlbWVudFJlZjtcclxuXHRAVmlld0NoaWxkKFwiQ0IxXCIpIEZpcnN0Q2hlY2tCb3g6IEVsZW1lbnRSZWY7XHJcblx0QFZpZXdDaGlsZChcImR1bW15XCIpIGR1bW15OiBFbGVtZW50UmVmO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHB1YmxpYyBQYXltZW50U2VydmljZTogUGF5bWVudFNlcnZpY2UsIHB1YmxpYyBJbmNvcnBvcmF0aW9uU2VydmljZTogSW5jb3Jwb3JhdGlvblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuXHRcdHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5jb21wYW55TmFtZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNvbXBhbnlOYW1lXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5jb21wYW55VHlwZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNvbXBhbnlUeXBlXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5maXJzdE5hbWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJmaXJzdE5hbWVcIiwgXCJcIik7XHJcblx0XHR0aGlzLmxhc3ROYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwibGFzdE5hbWVcIiwgXCJcIik7XHJcblx0XHR0aGlzLnV1aWQgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1dWlkXCIsIFwidGVzdFwiKTtcclxuXHRcdHRoaXMuZW1haWwgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJlbWFpbFwiLCBcIlwiKTtcclxuXHRcdHRoaXMuYWwxID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWwxXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5hbDIgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbDJcIiwgXCJcIik7XHJcblx0XHR0aGlzLmNpdHkgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjaXR5XCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5wb3N0YWwgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJwb3N0YWxcIiwgXCJcIik7XHJcblx0XHR0aGlzLmNvdW50cnkgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjb3VudHJ5XCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInN0YXRlXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5kaXJlY3RvcnMgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJkaXJlY3RvcnNcIiwgXCJcIik7XHJcblx0XHR0aGlzLmJpbGxpbmcgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJiaWxsaW5nXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5lbW9qaSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImVtb2ppXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5wYXltZW50ID0gcGFyc2VJbnQoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwicGF5bWVudFwiLCAwKSkgKyA1OTU7XHJcblx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiI21pbmljYXJkIHt2aXNpYmlsaXR5OiBjb2xsYXBzZWR9XCIpO1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy5iaWxsaW5nKTtcclxuXHJcblx0XHRpZiAodGhpcy5iaWxsaW5nICE9IFwiXCIpIHtcclxuXHRcdFx0dGhpcy5iaWxsaW5nID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYmlsbGluZ1wiLFwiXCIpXHJcblx0XHRcdHRoaXMuYmlsbGluZ2ZpcnN0TmFtZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImJpbGxpbmdmaXJzdE5hbWVcIiwgXCJcIik7XHJcblx0XHRcdHRoaXMuYmlsbGluZ2xhc3ROYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYmlsbGluZ2xhc3ROYW1lXCIsIFwiXCIpO1xyXG5cdFx0XHR0aGlzLmJpbGxpbmdlbWFpbCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImJpbGxpbmdlbWFpbFwiLCBcIlwiKTsgXHJcblx0XHRcdHRoaXMuYmlsbGluZ2FsMSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImJpbGxpbmdhbDFcIixcIlwiKTtcclxuXHRcdFx0dGhpcy5iaWxsaW5nYWwyID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYmlsbGluZ2FsMlwiLFwiXCIpO1xyXG5cdFx0XHR0aGlzLmJpbGxpbmdjaXR5ID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYmlsbGluZ2NpdHlcIiwgXCJcIik7XHJcblx0XHRcdHRoaXMuYmlsbGluZ3Bvc3RhbCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImJpbGxpbmdwb3N0YWxcIiwgXCJcIik7XHJcblx0XHRcdHRoaXMuYmlsbGluZ2NvdW50cnkgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJiaWxsaW5nY291bnRyeVwiLCBcIlwiKTtcclxuXHRcdFx0dGhpcy5iaWxsaW5nZW1vamkgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJiaWxsaW5nZW1vamlcIiwgXCJcIik7XHJcblx0XHRcdHRoaXMuYmlsbGluZ3N0YXRlID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYmlsbGluZ3N0YXRlXCIsIFwiXCIpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHR0aGlzLm9sZFZhbHVlTGVuZ3RoID0gMDtcclxuXHRcdHRoaXMubGFzdENhcmROdW1iZXIgPSBcIlwiO1xyXG5cdFx0dGhpcy5sYXN0UG9zaXRpb24gPSAwO1xyXG5cdH1cclxuXHJcblx0Y2FyZE51bWJlckNoYW5nZWQodmFsdWUpIHtcclxuXHRcdC8vY29uc29sZS5sb2codmFsdWUpO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyh0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LmFuZHJvaWQuZ2V0U2VsZWN0aW9uU3RhcnQoKSk7XHJcblx0XHQvL2NvbnNvbGUubG9nKHRoaXMubGFzdFBvc2l0aW9uIC0gdGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5hbmRyb2lkLmdldFNlbGVjdGlvblN0YXJ0KCkpO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyh0aGlzLmxhc3RQb3NpdGlvbiwgdGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5hbmRyb2lkLmdldFNlbGVjdGlvblN0YXJ0KCkpO1xyXG5cdFx0bGV0IGNoYW5nZSA9IDA7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLmxhc3RQb3NpdGlvbiwgdGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5hbmRyb2lkLmdldFNlbGVjdGlvblN0YXJ0KCkpO1xyXG5cdFx0aWYgKHRoaXMubGFzdFBvc2l0aW9uID4gdGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5hbmRyb2lkLmdldFNlbGVjdGlvblN0YXJ0KCkpIHtcclxuXHRcdFx0Y2hhbmdlID0gMTtcclxuXHRcdH1cclxuXHRcdGlmICggdmFsdWUubGVuZ3RoID4gMTkgKSB7XHJcblx0XHRcdHRoaXMuY2FyZE51bWJlciA9IHRoaXMubGFzdENhcmROdW1iZXJcclxuXHRcdFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC50ZXh0ID0gdGhpcy5sYXN0Q2FyZE51bWJlclxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHZhbHVlLmxlbmd0aCA9PSAxOSkge1xyXG5cdFx0XHRcdHRoaXMub3duZXIubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG5cdFx0XHRcdHRoaXMubGFzdENhcmROdW1iZXIgPSB2YWx1ZTtcclxuXHRcdFx0XHR0aGlzLm93bmVyLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLm93bmVyLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XHJcblx0XHRcdFx0dGhpcy5vd25lci5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCA9IHRoaXMub3duZXIubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aDtcclxuXHRcdFx0XHR0aGlzLm93bmVyLm5hdGl2ZUVsZW1lbnQuYW5kcm9pZC5zZXRTZWxlY3Rpb24odGhpcy5vd25lci5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoKTtcclxuXHRcdFx0fS8vIGVsc2UgaWYgKHZhbHVlLmxlbmd0aCAlIDUgPT0gNCkge1xyXG5cdFx0XHQvLyBcdHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuXHRcdFx0Ly8gXHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnRleHQgPSB2YWx1ZSArIFwiIFwiO1xyXG5cdFx0XHQvLyBcdHRoaXMuY2FyZE51bWJlciA9IHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQudGV4dDtcclxuXHRcdFx0Ly8gXHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aDtcclxuXHRcdFx0Ly8gXHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCA9IHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XHJcblx0XHRcdC8vIFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5hbmRyb2lkLnNldFNlbGVjdGlvbih0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoKTtcclxuXHRcdFx0Ly8gfVxyXG5cdFx0XHRsZXQgbm9TcGFjZSA9IHZhbHVlLnJlcGxhY2UoL1xcIC9nLCAnJyk7XHJcblx0XHRcdGxldCB3aXRoU3BhY2UgPSBcIlwiO1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5vU3BhY2UubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRpZiAoaSAlIDQgPT0gMCAmJiBpICE9IDApIHtcclxuXHRcdFx0XHRcdHdpdGhTcGFjZSArPSBcIiBcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0d2l0aFNwYWNlICs9IG5vU3BhY2VbaV07XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC50ZXh0ID0gd2l0aFNwYWNlO1xyXG5cdFx0XHR0aGlzLmNhcmROdW1iZXIgPSB3aXRoU3BhY2U7XHJcblx0XHRcdGxldCBjdXJzb3JQb3NpdGlvbiA9IHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XHJcblx0XHRcdHZhbHVlID0gd2l0aFNwYWNlO1xyXG5cclxuXHRcdFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IGN1cnNvclBvc2l0aW9uO1xyXG5cdFx0XHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCA9IGN1cnNvclBvc2l0aW9uO1xyXG5cdFx0XHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LmFuZHJvaWQuc2V0U2VsZWN0aW9uKGN1cnNvclBvc2l0aW9uKTtcdFxyXG5cclxuXHRcclxuXHRcdFx0dGhpcy5sYXN0UG9zaXRpb24gPSB0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LmFuZHJvaWQuZ2V0U2VsZWN0aW9uU3RhcnQoKTtcclxuXHJcblxyXG5cdFx0XHQvL1VzZSBuYXRpdmUgYXBpJ3MgZm9yIGN1cnNvciBwb3NpdGlvblxyXG5cdFx0XHQvLyBkb2Vzbid0IHdvcmsgd2hlbiB0aGVyZSBpcyB0aGUgc2FtZSBudW1iZXIgbXVsdGlwbGUgdGltZXNcclxuXHRcdFx0Ly8gdGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5hbmRyb2lkLmdldFNlbGVjdGlvblN0YXJ0KClcclxuXHRcdFx0Ly8gaWYgKHZhbHVlLmxlbmd0aCA+IHRoaXMub2xkVmFsdWVMZW5ndGgpIHtcclxuXHRcdFx0Ly8gXHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub2xkVmFsdWVMZW5ndGg7IGkrKykge1xyXG5cdFx0XHQvLyBcdFx0aWYgKHRoaXMubGFzdENhcmROdW1iZXJbaV0gIT0gdmFsdWVbaV0pIHtcclxuXHRcdFx0Ly8gXHRcdFx0Y3Vyc29yUG9zaXRpb24gPSBpICsgMTtcclxuXHRcdFx0Ly8gXHRcdFx0YnJlYWs7XHJcblx0XHRcdC8vIFx0XHR9XHJcblx0XHRcdC8vIFx0fVxyXG5cdFx0XHQvLyBcdGNvbnNvbGUubG9nKGN1cnNvclBvc2l0aW9uKTtcclxuXHRcdFx0Ly8gXHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gY3Vyc29yUG9zaXRpb247XHJcblx0XHRcdC8vIFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgPSBjdXJzb3JQb3NpdGlvbjtcclxuXHRcdFx0Ly8gXHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LmFuZHJvaWQuc2V0U2VsZWN0aW9uKGN1cnNvclBvc2l0aW9uKTtcclxuXHRcdFx0Ly8gfSBlbHNlIHtcclxuXHRcdFx0Ly8gXHRmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdC8vIFx0XHRpZiAodGhpcy5sYXN0Q2FyZE51bWJlcltpXSAhPSB2YWx1ZVtpXSkge1xyXG5cdFx0XHQvLyBcdFx0XHRjdXJzb3JQb3NpdGlvbiA9IGkgKyAxO1xyXG5cdFx0XHQvLyBcdFx0XHRicmVhaztcclxuXHRcdFx0Ly8gXHRcdH1cclxuXHRcdFx0Ly8gXHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdC8vIH1cclxuXHRcdFx0Ly8gdGhpcy5vbGRWYWx1ZUxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcclxuXHRcdFx0Ly8gdGhpcy5sYXN0Q2FyZE51bWJlciA9IHZhbHVlO1xyXG5cdFx0fVxyXG4gXHJcblx0fVxyXG5cclxuXHRkYXRlQ2hhbmdlZCh2YWx1ZSkge1xyXG5cdFx0aWYgKHZhbHVlLmxlbmd0aCA9PSAyKSB7XHJcblx0XHRcdHRoaXMuY2FyZE1vbnRoID0gdmFsdWU7XHJcblx0XHRcdHRoaXMuY3kubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZhbHVlLmxlbmd0aCA+IDIpIHtcclxuXHRcdFx0dGhpcy5jYXJkTW9udGggPSB2YWx1ZS5zdWJzdHIoMCwgMik7XHJcblx0XHRcdHRoaXMuY20ubmF0aXZlRWxlbWVudC50ZXh0ID0gdGhpcy5jYXJkTW9udGg7XHJcblx0XHRcdHRoaXMuY3kubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG5cdFx0XHR0aGlzLmN5Lm5hdGl2ZUVsZW1lbnQudGV4dCA9IHZhbHVlLnN1YnN0cigyLCAxKTtcclxuXHRcdFx0dGhpcy5jeS5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5jeS5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xyXG5cdFx0XHR0aGlzLmN5Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gdGhpcy5jeS5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0eWVhckNoYW5nZWQodmFsdWUpIHtcclxuXHRcdGlmICh2YWx1ZS5sZW5ndGggPT0gMikge1xyXG5cdFx0XHR0aGlzLmNhcmRZZWFyID0gdmFsdWU7XHJcblx0XHRcdHRoaXMuY3ZjSWQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZhbHVlLmxlbmd0aCA+IDIpIHtcclxuXHRcdFx0dGhpcy5jYXJkWWVhciA9IHZhbHVlLnN1YnN0cigwLCAyKTtcclxuXHRcdFx0dGhpcy5jeS5uYXRpdmVFbGVtZW50LnRleHQgPSB0aGlzLmNhcmRZZWFyO1xyXG5cdFx0XHR0aGlzLmN2Y0lkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuXHRcdFx0dGhpcy5jdmNJZC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5jdmNJZC5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xyXG5cdFx0XHR0aGlzLmN2Y0lkLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gdGhpcy5jdmNJZC5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZhbHVlLmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdHRoaXMuY20ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG5cdFx0XHR0aGlzLmNtLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLmNtLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XHJcblx0XHRcdHRoaXMuY20ubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgPSB0aGlzLmNtLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRcclxuXHRjdmNDaGFuZ2VkKHZhbHVlKSB7XHJcblx0XHRpZiAodmFsdWUubGVuZ3RoID09IDMpIHtcclxuXHRcdFx0dGhpcy5jYXJkQ3ZjID0gdmFsdWU7XHJcblx0XHR9IGVsc2UgaWYgKHZhbHVlLmxlbmd0aCA+IDMpIHtcclxuXHRcdFx0dmFsdWUgPSB2YWx1ZS5zdWJzdHIoMCwgMyk7XHJcblx0XHRcdHRoaXMuY2FyZEN2YyA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLmN2Y0lkLm5hdGl2ZUVsZW1lbnQudGV4dCA9IHZhbHVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZWRpdEJpbGxpbmcoKSB7XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYmlsbGluZ1wiXSk7XHJcblx0fVxyXG5cclxuXHJcblx0c3VibWl0KGFyZ3M6IEV2ZW50RGF0YSk6IHZvaWQge1xyXG5cclxuXHRcdGlmICh0aGlzLkZpcnN0Q2hlY2tCb3gpIHtcclxuXHRcdFx0aWYgKCF0aGlzLkZpcnN0Q2hlY2tCb3gubmF0aXZlRWxlbWVudC5jaGVja2VkICYmIHRoaXMuYmlsbGluZyA9PSBcIlwiKSB7XHJcblx0XHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2JpbGxpbmdcIl0pO1xyXG5cdFx0XHR9IFxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLkZpcnN0Q2hlY2tCb3gubmF0aXZlRWxlbWVudC5jaGVja2VkKSB7XHJcblx0XHRcdFx0Y29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZSgncGtfdGVzdF9KQWdjemt0V1g4amNoamkwYmdISUhqT2UnKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjb25zdCBjYzpDYXJkID0gbmV3IENhcmQodGhpcy5jYXJkTnVtYmVyLnJlcGxhY2UoL1xcIC9nLCAnJyksIHRoaXMuY2FyZE1vbnRoLCB0aGlzLmNhcmRZZWFyLCB0aGlzLmNhcmRDdmMpO1xyXG5cdFx0XHRcdFx0c3RyaXBlLmNyZWF0ZVRva2VuKGNjLmNhcmQsKGVycm9yLHRva2VuKT0+e1xyXG5cdFx0XHRcdFx0aWYgKCFlcnJvcikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLlBheW1lbnRTZXJ2aWNlLnN1Ym1pdFRva2VuKHRva2VuLmdldElkKCksIHRoaXMucGF5bWVudCkuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdFx0XHRyZXNwb25zZSA9PiBhbGVydChcIlBheW1lbnQgZG9uZVwiKSxcclxuXHRcdFx0XHRcdFx0ZXJyb3IgPT4gKGFsZXJ0KFwidGhlcmUgd2FzIGFuIGVycm9yLCBwbGVhc2UgdHJ5IGFnYWluXCIpKSk7XHRcclxuXHRcdFx0XHRcdFx0dGhpcy5JbmNvcnBvcmF0aW9uU2VydmljZS5zdWJtaXRCaWxsaW5nKHRoaXMuZmlyc3ROYW1lLCB0aGlzLmxhc3ROYW1lLCB0aGlzLmVtYWlsLCB0aGlzLmFsMSwgdGhpcy5hbDIsIHRoaXMuY2l0eSwgdGhpcy5wb3N0YWwsIHRoaXMuY291bnRyeSwgdGhpcy5zdGF0ZSwgdGhpcy51dWlkLCB0aGlzLmVtb2ppKVxyXG5cdFx0XHRcdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSxcclxuXHRcdFx0XHRcdFx0XHRlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0dGhpcy5JbmNvcnBvcmF0aW9uU2VydmljZS5zdWJtaXREYXRhKHRoaXMuZmlyc3ROYW1lLCB0aGlzLmxhc3ROYW1lLCB0aGlzLmVtYWlsLCB0aGlzLmFsMSwgdGhpcy5hbDIsIHRoaXMuY2l0eSwgdGhpcy5wb3N0YWwsIHRoaXMuY291bnRyeSwgdGhpcy5zdGF0ZSwgdGhpcy5kaXJlY3RvcnMsIHRoaXMudXVpZCwgdGhpcy5jb21wYW55TmFtZSwgdGhpcy5jb21wYW55VHlwZSwgdGhpcy5lbW9qaSlcclxuXHRcdFx0XHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHRcdFx0XHRyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSksXHJcblx0XHRcdFx0XHRcdFx0ZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRhbGVydChcImluY29yZWN0IGNhcmQgZGF0YVwiKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZSgncGtfdGVzdF9KQWdjemt0V1g4amNoamkwYmdISUhqT2UnKTtcclxuXHRcdFx0XHJcblx0XHRcdGNvbnN0IGNjOkNhcmQgPSBuZXcgQ2FyZCh0aGlzLmNhcmROdW1iZXIucmVwbGFjZSgvXFwgL2csICcnKSwgdGhpcy5jYXJkTW9udGgsIHRoaXMuY2FyZFllYXIsIHRoaXMuY2FyZEN2Yyk7XHJcblx0XHRcdFx0c3RyaXBlLmNyZWF0ZVRva2VuKGNjLmNhcmQsKGVycm9yLHRva2VuKT0+e1xyXG5cdFx0XHRcdFx0aWYgKCFlcnJvcikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLlBheW1lbnRTZXJ2aWNlLnN1Ym1pdFRva2VuKHRva2VuLmdldElkKCksIHRoaXMucGF5bWVudCkuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdFx0XHRyZXNwb25zZSA9PiBhbGVydChcIlBheW1lbnQgZG9uZVwiKSxcclxuXHRcdFx0XHRcdFx0ZXJyb3IgPT4gKGFsZXJ0KFwidGhlcmUgd2FzIGFuIGVycm9yLCBwbGVhc2UgdHJ5IGFnYWluXCIpKSlcclxuXHRcdFx0XHRcdFx0dGhpcy5JbmNvcnBvcmF0aW9uU2VydmljZS5zdWJtaXRCaWxsaW5nKHRoaXMuYmlsbGluZ2ZpcnN0TmFtZSwgdGhpcy5iaWxsaW5nbGFzdE5hbWUsIHRoaXMuYmlsbGluZ2VtYWlsLCB0aGlzLmJpbGxpbmdhbDEsIHRoaXMuYmlsbGluZ2FsMiwgdGhpcy5iaWxsaW5nY2l0eSwgdGhpcy5iaWxsaW5ncG9zdGFsLCB0aGlzLmJpbGxpbmdjb3VudHJ5LCB0aGlzLmJpbGxpbmdzdGF0ZSwgdGhpcy51dWlkLCB0aGlzLmJpbGxpbmdlbW9qaSlcclxuXHRcdFx0XHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHRcdFx0XHRyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSksXHJcblx0XHRcdFx0XHRcdFx0ZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdHRoaXMuSW5jb3Jwb3JhdGlvblNlcnZpY2Uuc3VibWl0RGF0YSh0aGlzLmZpcnN0TmFtZSwgdGhpcy5sYXN0TmFtZSwgdGhpcy5lbWFpbCwgdGhpcy5hbDEsIHRoaXMuYWwyLCB0aGlzLmNpdHksIHRoaXMucG9zdGFsLCB0aGlzLmNvdW50cnksIHRoaXMuc3RhdGUsIHRoaXMuZGlyZWN0b3JzLCB0aGlzLnV1aWQsIHRoaXMuY29tcGFueU5hbWUsIHRoaXMuY29tcGFueVR5cGUsIHRoaXMuZW1vamkpXHJcblx0XHRcdFx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpLFxyXG5cdFx0XHRcdFx0XHRcdGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0YWxlcnQoXCJpbmNvcmVjdCBjYXJkIGRhdGFcIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0=
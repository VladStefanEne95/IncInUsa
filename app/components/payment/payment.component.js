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
        // Init your component properties here.
        this.companyName = appSettings.getString("companyName", "");
        this.companyType = appSettings.getString("companyType", "");
        this.firstName = appSettings.getString("firstName", "");
        this.lastName = appSettings.getString("lastName", "");
        this.uuid = appSettings.getString("uuid", "test");
        this.email = appSettings.getString("email", "");
        this.al1 = appSettings.getString("al1", "");
        this.al2 = appSettings.getString("al2", "");
        this.city = appSettings.getString("city", "");
        this.postal = appSettings.getString("postal", 0);
        this.country = appSettings.getString("country", "");
        this.state = appSettings.getString("state", "");
        this.directors = appSettings.getString("directors", "");
        this.payment = parseInt(appSettings.getString("payment", 0)) + 595;
        this.page.addCss("#minicard {visibility: collapsed}");
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
            this.cvc.nativeElement.focus();
        }
        if (value.length > 2) {
            this.cardYear = value.substr(0, 2);
            this.cy.nativeElement.text = this.cardYear;
            this.cvc.nativeElement.focus();
            this.cvc.nativeElement.selectionStart = this.cvc.nativeElement.text.length;
            this.cvc.nativeElement.selectionEnd = this.cvc.nativeElement.text.length;
        }
        if (value.length == 0) {
            this.cm.nativeElement.focus();
            this.cm.nativeElement.selectionStart = this.cm.nativeElement.text.length;
            this.cm.nativeElement.selectionEnd = this.cm.nativeElement.text.length;
        }
    };
    PaymentComponent.prototype.submit = function (args) {
        //	let cardView = <CreditCardView>this.card.nativeElement;
        //	let card = cardView.card;
        var stripe = new nativescript_stripe_1.Stripe('pk_test_JAgczktWX8jchji0bgHIHjOe');
        var value = appSettings.getString("stringKey", "No string value");
        //	const cc:Card = new Card(this.cardNumber.replace(/\ /g, ''), this.cardMonth, this.cardYear, this.cardCvc);
        // stripe.createToken(cc.card,(error,token)=>{
        // if (!error) {
        // 	console.log(token.getId());
        // 	console.log(token.getCard());
        // 	this.PaymentService.submitToken(token.getId(), this.payment).subscribe(
        // 	response => alert("Payment done"),
        // 	error => (alert("there was an error, please try again")))	
        // } else {
        // 	alert("incorect card data");
        // }
        // });
        this.IncorporationService.submitData(this.firstName, this.lastName, this.email, this.al1, this.al2, this.city, this.postal, this.country, this.state, this.directors, this.uuid, this.companyName, this.companyType)
            .subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
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
    ], PaymentComponent.prototype, "cvc", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXltZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSwwQ0FBeUM7QUFDekMsZ0NBQTZCO0FBRTdCLDJEQUFtRTtBQUVuRSw0RUFBeUU7QUFDekUsOEZBQTJGO0FBRTNGLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBU2xEO0lBMENDLDBCQUFvQixJQUFVLEVBQVMsY0FBOEIsRUFBUyxvQkFBMEMsRUFBVSxNQUFjO1FBQTVILFNBQUksR0FBSixJQUFJLENBQU07UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBUyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWxDaEosZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFnQ1osSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDQyx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsSUFBSSxHQUFHLFdB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Z0NBQWMsRUFBK0IsNENBQW9CLEVBQWtCLGVBQU07T0ExQ3BJLGdCQUFnQixDQWtONUI7SUFBRCx1QkFBQztDQUFBLEFBbE5ELElBa05DO0FBbE5ZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7Vmlld30gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBDcmVkaXRDYXJkVmlldywgQ2FyZCwgU3RyaXBlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXN0cmlwZSc7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9wYXltZW50L3BheW1lbnQuc2VydmljZSdcclxuaW1wb3J0IHsgSW5jb3Jwb3JhdGlvblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL2luY29ycG9yYXRpb24vaW5jb3Jwb3JhdGlvbi5zZXJ2aWNlJ1xyXG5cclxudmFyIGFwcFNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiUGF5bWVudFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHR0ZW1wbGF0ZVVybDogXCIuL3BheW1lbnQuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsnLi9wYXltZW50LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGF5bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdGNuMSA6bnVtYmVyO1xyXG5cdGNuMiA6bnVtYmVyO1xyXG5cdGNuMyA6bnVtYmVyO1xyXG5cdGNuNCA6bnVtYmVyO1xyXG5cdG9sZFZhbHVlTGVuZ3RoIDpudW1iZXI7XHJcblx0XHJcblx0Y2FyZE51bWJlciA9ICcnO1xyXG5cdGNhcmRNb250aCA9ICcnO1xyXG5cdGNhcmRZZWFyID0gJyc7XHJcblx0Y2FyZEN2YyA9ICcnO1xyXG5cclxuXHRmaXJzdE5hbWUgOnN0cmluZztcclxuXHRsYXN0TmFtZSA6c3RyaW5nO1xyXG5cdGVtYWlsIDpzdHJpbmc7XHJcblx0YWwxIDpzdHJpbmc7XHJcblx0YWwyIDpzdHJpbmc7XHJcblx0Y2l0eSA6c3RyaW5nO1xyXG5cdHBvc3RhbCA6bnVtYmVyO1xyXG5cdGNvdW50cnkgOnN0cmluZztcclxuXHRzdGF0ZSA6c3RyaW5nO1xyXG5cdGNvbXBhbnlOYW1lOiBzdHJpbmc7XHJcblx0Y29tcGFueVR5cGUgOnN0cmluZztcclxuXHRkaXJlY3RvcnMgOnN0cmluZztcclxuXHR1dWlkIDpzdHJpbmc7XHJcblx0cGF5bWVudCA6bnVtYmVyO1xyXG5cdGxhc3RQb3NpdGlvbiA6bnVtYmVyO1xyXG5cclxuXHRsYXN0Q2FyZE51bWJlciA6c3RyaW5nO1xyXG5cclxuXHRAVmlld0NoaWxkKFwiY2FyZFwiKSBjYXJkOiBFbGVtZW50UmVmO1xyXG5cdEBWaWV3Q2hpbGQoXCJvd25lclwiKSBvd25lcjogRWxlbWVudFJlZjtcclxuXHRAVmlld0NoaWxkKFwiY3ZjXCIpIGN2YzogRWxlbWVudFJlZjtcclxuXHRAVmlld0NoaWxkKFwiY2FyZFllYXJJZFwiKSBjeTogRWxlbWVudFJlZjtcclxuXHRAVmlld0NoaWxkKFwiY2FyZE1vbnRoSWRcIikgY206IEVsZW1lbnRSZWY7XHJcblx0QFZpZXdDaGlsZChcImZ1bGxjYXJkXCIpIGZjOiBFbGVtZW50UmVmO1xyXG5cdEBWaWV3Q2hpbGQoXCJtaW5pY2FyZFwiKSBtYzogRWxlbWVudFJlZjtcclxuXHRAVmlld0NoaWxkKFwiY2FyZDFcIikgY2FyZDE6IEVsZW1lbnRSZWY7XHJcblx0QFZpZXdDaGlsZChcImNhcmROclwiKSBjYXJkTnI6IEVsZW1lbnRSZWY7XHJcblx0QFZpZXdDaGlsZChcIkNCMVwiKSBGaXJzdENoZWNrQm94OiBFbGVtZW50UmVmO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHB1YmxpYyBQYXltZW50U2VydmljZTogUGF5bWVudFNlcnZpY2UsIHB1YmxpYyBJbmNvcnBvcmF0aW9uU2VydmljZTogSW5jb3Jwb3JhdGlvblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuXHRcdHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0Ly8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcblx0XHR0aGlzLmNvbXBhbnlOYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY29tcGFueU5hbWVcIiwgXCJcIik7XHJcblx0XHR0aGlzLmNvbXBhbnlUeXBlID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY29tcGFueVR5cGVcIiwgXCJcIik7XHJcblx0XHR0aGlzLmZpcnN0TmFtZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImZpcnN0TmFtZVwiLCBcIlwiKTtcclxuXHRcdHRoaXMubGFzdE5hbWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJsYXN0TmFtZVwiLCBcIlwiKTtcclxuXHRcdHRoaXMudXVpZCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInV1aWRcIiwgXCJ0ZXN0XCIpO1xyXG5cdFx0dGhpcy5lbWFpbCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImVtYWlsXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5hbDEgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbDFcIiwgXCJcIik7XHJcblx0XHR0aGlzLmFsMiA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsMlwiLCBcIlwiKTtcclxuXHRcdHRoaXMuY2l0eSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNpdHlcIiwgXCJcIik7XHJcblx0XHR0aGlzLnBvc3RhbCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInBvc3RhbFwiLCAwKTtcclxuXHRcdHRoaXMuY291bnRyeSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNvdW50cnlcIiwgXCJcIik7XHJcblx0XHR0aGlzLnN0YXRlID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwic3RhdGVcIiwgXCJcIik7XHJcblx0XHR0aGlzLmRpcmVjdG9ycyA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImRpcmVjdG9yc1wiLCBcIlwiKTtcclxuXHRcdHRoaXMucGF5bWVudCA9IHBhcnNlSW50KGFwcFNldHRpbmdzLmdldFN0cmluZyhcInBheW1lbnRcIiwgMCkpICsgNTk1O1xyXG5cdFx0dGhpcy5wYWdlLmFkZENzcyhcIiNtaW5pY2FyZCB7dmlzaWJpbGl0eTogY29sbGFwc2VkfVwiKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5vbGRWYWx1ZUxlbmd0aCA9IDA7XHJcblx0XHR0aGlzLmxhc3RDYXJkTnVtYmVyID0gXCJcIjtcclxuXHRcdHRoaXMubGFzdFBvc2l0aW9uID0gMDtcclxuXHR9XHJcblxyXG5cdGNhcmROdW1iZXJDaGFuZ2VkKHZhbHVlKSB7XHJcblx0XHQvL2NvbnNvbGUubG9nKHZhbHVlKTtcclxuXHRcdC8vY29uc29sZS5sb2codGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5hbmRyb2lkLmdldFNlbGVjdGlvblN0YXJ0KCkpO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyh0aGlzLmxhc3RQb3NpdGlvbiAtIHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQuYW5kcm9pZC5nZXRTZWxlY3Rpb25TdGFydCgpKTtcclxuXHRcdC8vY29uc29sZS5sb2codGhpcy5sYXN0UG9zaXRpb24sIHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQuYW5kcm9pZC5nZXRTZWxlY3Rpb25TdGFydCgpKTtcclxuXHRcdGxldCBjaGFuZ2UgPSAwO1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy5sYXN0UG9zaXRpb24sIHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQuYW5kcm9pZC5nZXRTZWxlY3Rpb25TdGFydCgpKTtcclxuXHRcdGlmICh0aGlzLmxhc3RQb3NpdGlvbiA+IHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQuYW5kcm9pZC5nZXRTZWxlY3Rpb25TdGFydCgpKSB7XHJcblx0XHRcdGNoYW5nZSA9IDE7XHJcblx0XHR9XHJcblx0XHRpZiAoIHZhbHVlLmxlbmd0aCA+IDE5ICkge1xyXG5cdFx0XHR0aGlzLmNhcmROdW1iZXIgPSB0aGlzLmxhc3RDYXJkTnVtYmVyXHJcblx0XHRcdHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQudGV4dCA9IHRoaXMubGFzdENhcmROdW1iZXJcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh2YWx1ZS5sZW5ndGggPT0gMTkpIHtcclxuXHRcdFx0XHR0aGlzLm93bmVyLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuXHRcdFx0XHR0aGlzLmxhc3RDYXJkTnVtYmVyID0gdmFsdWU7XHJcblx0XHRcdFx0dGhpcy5vd25lci5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5vd25lci5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xyXG5cdFx0XHRcdHRoaXMub3duZXIubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgPSB0aGlzLm93bmVyLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XHJcblx0XHRcdFx0dGhpcy5vd25lci5uYXRpdmVFbGVtZW50LmFuZHJvaWQuc2V0U2VsZWN0aW9uKHRoaXMub3duZXIubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aCk7XHJcblx0XHRcdH0vLyBlbHNlIGlmICh2YWx1ZS5sZW5ndGggJSA1ID09IDQpIHtcclxuXHRcdFx0Ly8gXHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcblx0XHRcdC8vIFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC50ZXh0ID0gdmFsdWUgKyBcIiBcIjtcclxuXHRcdFx0Ly8gXHR0aGlzLmNhcmROdW1iZXIgPSB0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnRleHQ7XHJcblx0XHRcdC8vIFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XHJcblx0XHRcdC8vIFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgPSB0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xyXG5cdFx0XHQvLyBcdHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQuYW5kcm9pZC5zZXRTZWxlY3Rpb24odGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aCk7XHJcblx0XHRcdC8vIH1cclxuXHRcdFx0bGV0IG5vU3BhY2UgPSB2YWx1ZS5yZXBsYWNlKC9cXCAvZywgJycpO1xyXG5cdFx0XHRsZXQgd2l0aFNwYWNlID0gXCJcIjtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBub1NwYWNlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0aWYgKGkgJSA0ID09IDAgJiYgaSAhPSAwKSB7XHJcblx0XHRcdFx0XHR3aXRoU3BhY2UgKz0gXCIgXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHdpdGhTcGFjZSArPSBub1NwYWNlW2ldO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQudGV4dCA9IHdpdGhTcGFjZTtcclxuXHRcdFx0dGhpcy5jYXJkTnVtYmVyID0gd2l0aFNwYWNlO1xyXG5cdFx0XHRsZXQgY3Vyc29yUG9zaXRpb24gPSB0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xyXG5cdFx0XHR2YWx1ZSA9IHdpdGhTcGFjZTtcclxuXHJcblx0XHRcdHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBjdXJzb3JQb3NpdGlvbjtcclxuXHRcdFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgPSBjdXJzb3JQb3NpdGlvbjtcclxuXHRcdFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5hbmRyb2lkLnNldFNlbGVjdGlvbihjdXJzb3JQb3NpdGlvbik7XHRcclxuXHJcblx0XHJcblx0XHRcdHRoaXMubGFzdFBvc2l0aW9uID0gdGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5hbmRyb2lkLmdldFNlbGVjdGlvblN0YXJ0KCk7XHJcblxyXG5cclxuXHRcdFx0Ly9Vc2UgbmF0aXZlIGFwaSdzIGZvciBjdXJzb3IgcG9zaXRpb25cclxuXHRcdFx0Ly8gZG9lc24ndCB3b3JrIHdoZW4gdGhlcmUgaXMgdGhlIHNhbWUgbnVtYmVyIG11bHRpcGxlIHRpbWVzXHJcblx0XHRcdC8vIHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQuYW5kcm9pZC5nZXRTZWxlY3Rpb25TdGFydCgpXHJcblx0XHRcdC8vIGlmICh2YWx1ZS5sZW5ndGggPiB0aGlzLm9sZFZhbHVlTGVuZ3RoKSB7XHJcblx0XHRcdC8vIFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9sZFZhbHVlTGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Ly8gXHRcdGlmICh0aGlzLmxhc3RDYXJkTnVtYmVyW2ldICE9IHZhbHVlW2ldKSB7XHJcblx0XHRcdC8vIFx0XHRcdGN1cnNvclBvc2l0aW9uID0gaSArIDE7XHJcblx0XHRcdC8vIFx0XHRcdGJyZWFrO1xyXG5cdFx0XHQvLyBcdFx0fVxyXG5cdFx0XHQvLyBcdH1cclxuXHRcdFx0Ly8gXHRjb25zb2xlLmxvZyhjdXJzb3JQb3NpdGlvbik7XHJcblx0XHRcdC8vIFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IGN1cnNvclBvc2l0aW9uO1xyXG5cdFx0XHQvLyBcdHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gY3Vyc29yUG9zaXRpb247XHJcblx0XHRcdC8vIFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5hbmRyb2lkLnNldFNlbGVjdGlvbihjdXJzb3JQb3NpdGlvbik7XHJcblx0XHRcdC8vIH0gZWxzZSB7XHJcblx0XHRcdC8vIFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHQvLyBcdFx0aWYgKHRoaXMubGFzdENhcmROdW1iZXJbaV0gIT0gdmFsdWVbaV0pIHtcclxuXHRcdFx0Ly8gXHRcdFx0Y3Vyc29yUG9zaXRpb24gPSBpICsgMTtcclxuXHRcdFx0Ly8gXHRcdFx0YnJlYWs7XHJcblx0XHRcdC8vIFx0XHR9XHJcblx0XHRcdC8vIFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHQvLyB9XHJcblx0XHRcdC8vIHRoaXMub2xkVmFsdWVMZW5ndGggPSB2YWx1ZS5sZW5ndGg7XHJcblx0XHRcdC8vIHRoaXMubGFzdENhcmROdW1iZXIgPSB2YWx1ZTtcclxuXHRcdH1cclxuIFxyXG5cdH1cclxuXHJcblx0ZGF0ZUNoYW5nZWQodmFsdWUpIHtcclxuXHRcdGlmICh2YWx1ZS5sZW5ndGggPT0gMikge1xyXG5cdFx0XHR0aGlzLmNhcmRNb250aCA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLmN5Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuXHRcdH1cclxuXHRcdGlmICh2YWx1ZS5sZW5ndGggPiAyKSB7XHJcblx0XHRcdHRoaXMuY2FyZE1vbnRoID0gdmFsdWUuc3Vic3RyKDAsIDIpO1xyXG5cdFx0XHR0aGlzLmNtLm5hdGl2ZUVsZW1lbnQudGV4dCA9IHRoaXMuY2FyZE1vbnRoO1xyXG5cdFx0XHR0aGlzLmN5Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuXHRcdFx0dGhpcy5jeS5uYXRpdmVFbGVtZW50LnRleHQgPSB2YWx1ZS5zdWJzdHIoMiwgMSk7XHJcblx0XHRcdHRoaXMuY3kubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHRoaXMuY3kubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aDtcclxuXHRcdFx0dGhpcy5jeS5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCA9IHRoaXMuY3kubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHllYXJDaGFuZ2VkKHZhbHVlKSB7XHJcblx0XHRpZiAodmFsdWUubGVuZ3RoID09IDIpIHtcclxuXHRcdFx0dGhpcy5jYXJkWWVhciA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLmN2Yy5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcblx0XHR9XHJcblx0XHRpZiAodmFsdWUubGVuZ3RoID4gMikge1xyXG5cdFx0XHR0aGlzLmNhcmRZZWFyID0gdmFsdWUuc3Vic3RyKDAsIDIpO1xyXG5cdFx0XHR0aGlzLmN5Lm5hdGl2ZUVsZW1lbnQudGV4dCA9IHRoaXMuY2FyZFllYXI7XHJcblx0XHRcdHRoaXMuY3ZjLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuXHRcdFx0dGhpcy5jdmMubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHRoaXMuY3ZjLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XHJcblx0XHRcdHRoaXMuY3ZjLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gdGhpcy5jdmMubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aDtcclxuXHRcdH1cclxuXHRcdGlmICh2YWx1ZS5sZW5ndGggPT0gMCkge1xyXG5cdFx0XHR0aGlzLmNtLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuXHRcdFx0dGhpcy5jbS5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5jbS5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xyXG5cdFx0XHR0aGlzLmNtLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gdGhpcy5jbS5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHN1Ym1pdChhcmdzOiBFdmVudERhdGEpOiB2b2lkIHtcclxuXHJcblx0Ly9cdGxldCBjYXJkVmlldyA9IDxDcmVkaXRDYXJkVmlldz50aGlzLmNhcmQubmF0aXZlRWxlbWVudDtcclxuXHQvL1x0bGV0IGNhcmQgPSBjYXJkVmlldy5jYXJkO1xyXG5cdFx0Y29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZSgncGtfdGVzdF9KQWdjemt0V1g4amNoamkwYmdISUhqT2UnKTtcclxuXHRcdHZhciB2YWx1ZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInN0cmluZ0tleVwiLCBcIk5vIHN0cmluZyB2YWx1ZVwiKTtcclxuXHRcdFxyXG5cclxuXHJcblx0Ly9cdGNvbnN0IGNjOkNhcmQgPSBuZXcgQ2FyZCh0aGlzLmNhcmROdW1iZXIucmVwbGFjZSgvXFwgL2csICcnKSwgdGhpcy5jYXJkTW9udGgsIHRoaXMuY2FyZFllYXIsIHRoaXMuY2FyZEN2Yyk7XHJcblx0XHRcdC8vIHN0cmlwZS5jcmVhdGVUb2tlbihjYy5jYXJkLChlcnJvcix0b2tlbik9PntcclxuXHRcdFx0Ly8gaWYgKCFlcnJvcikge1xyXG5cdFx0XHQvLyBcdGNvbnNvbGUubG9nKHRva2VuLmdldElkKCkpO1xyXG5cdFx0XHQvLyBcdGNvbnNvbGUubG9nKHRva2VuLmdldENhcmQoKSk7XHJcblx0XHRcdC8vIFx0dGhpcy5QYXltZW50U2VydmljZS5zdWJtaXRUb2tlbih0b2tlbi5nZXRJZCgpLCB0aGlzLnBheW1lbnQpLnN1YnNjcmliZShcclxuXHRcdFx0Ly8gXHRyZXNwb25zZSA9PiBhbGVydChcIlBheW1lbnQgZG9uZVwiKSxcclxuXHRcdFx0Ly8gXHRlcnJvciA9PiAoYWxlcnQoXCJ0aGVyZSB3YXMgYW4gZXJyb3IsIHBsZWFzZSB0cnkgYWdhaW5cIikpKVx0XHJcblxyXG5cdFx0XHQvLyB9IGVsc2Uge1xyXG5cdFx0XHQvLyBcdGFsZXJ0KFwiaW5jb3JlY3QgY2FyZCBkYXRhXCIpO1xyXG5cdFx0XHQvLyB9XHJcblx0XHRcdC8vIH0pO1xyXG5cdFx0XHR0aGlzLkluY29ycG9yYXRpb25TZXJ2aWNlLnN1Ym1pdERhdGEodGhpcy5maXJzdE5hbWUsIHRoaXMubGFzdE5hbWUsIHRoaXMuZW1haWwsIHRoaXMuYWwxLCB0aGlzLmFsMiwgdGhpcy5jaXR5LCB0aGlzLnBvc3RhbCwgdGhpcy5jb3VudHJ5LCB0aGlzLnN0YXRlLCB0aGlzLmRpcmVjdG9ycywgdGhpcy51dWlkLCB0aGlzLmNvbXBhbnlOYW1lLCB0aGlzLmNvbXBhbnlUeXBlKVxyXG5cdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSxcclxuXHRcdFx0XHRlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuXHRcdFx0KTtcclxuXHR9XHJcbn1cclxuIl19
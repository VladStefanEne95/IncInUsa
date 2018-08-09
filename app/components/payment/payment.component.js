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
        this.page.addCss("#minicard {visibility: collapsed}");
        this.oldValueLength = 0;
        this.lastCardNumber = "";
    };
    PaymentComponent.prototype.cardNumberChanged = function (value) {
        //console.log(value);
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
        // 	this.PaymentService.submitToken(token.getId()).subscribe(
        // 	response => alert("Payment done"),
        // 	error => (alert("there was an error, please try again")))	
        // } else {
        // 	alert("incorect card data");
        // }
        // });
        this.IncorporationService.submitData(this.firstName, this.lastName, this.email, this.al1, this.al2, this.city, this.postal, this.country, this.state, this.directors, this.uuid)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXltZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSwwQ0FBeUM7QUFDekMsZ0NBQTZCO0FBRTdCLDJEQUFtRTtBQUVuRSw0RUFBeUU7QUFDekUsOEZBQTJGO0FBQzNGLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBU2xEO0lBd0NDLDBCQUFvQixJQUFVLEVBQVMsY0FBOEIsRUFBUyxvQkFBMEMsRUFBVSxNQUFjO1FBQTVILFNBQUksR0FBSixJQUFJLENBQU07UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBUyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWhDaEosZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFlBQU8sR0FBRyxFQUFFLENBQUM7UUE4QlosSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDQyx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsSUFBSSxHQUFHLFdB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QUM7SUFDbEI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVEsaUJBQVU7bURBQUM7SUFDakI7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVMsaUJBQVU7b0RBQUM7SUFDdEI7UUFBakIsZ0JBQVMsQ0FBQyxLQUFLLENBQUM7a0NBQWdCLGlCQUFVOzJEQUFDO0lBdENoQyxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN0QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3RDLENBQUM7eUNBeUN5QixXQUFJLEVBQXlCLGdDQUFjLEVBQStCLDRDQUFvQixFQUFrQixlQUFNO09BeENwSSxnQkFBZ0IsQ0FpTTVCO0lBQUQsdUJBQUM7Q0FBQSxBQWpNRCxJQWlNQztBQWpNWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQge1ZpZXd9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IENyZWRpdENhcmRWaWV3LCBDYXJkLCBTdHJpcGUgfSBmcm9tICduYXRpdmVzY3JpcHQtc3RyaXBlJztcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYXltZW50U2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvcGF5bWVudC9wYXltZW50LnNlcnZpY2UnXG5pbXBvcnQgeyBJbmNvcnBvcmF0aW9uU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvaW5jb3Jwb3JhdGlvbi9pbmNvcnBvcmF0aW9uLnNlcnZpY2UnXG52YXIgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiUGF5bWVudFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiBcIi4vcGF5bWVudC5jb21wb25lbnQuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFsnLi9wYXltZW50LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRjbjEgOm51bWJlcjtcblx0Y24yIDpudW1iZXI7XG5cdGNuMyA6bnVtYmVyO1xuXHRjbjQgOm51bWJlcjtcblx0b2xkVmFsdWVMZW5ndGggOm51bWJlcjtcblx0XG5cdGNhcmROdW1iZXIgPSAnJztcblx0Y2FyZE1vbnRoID0gJyc7XG5cdGNhcmRZZWFyID0gJyc7XG5cdGNhcmRDdmMgPSAnJztcblxuXHRmaXJzdE5hbWUgOnN0cmluZztcblx0bGFzdE5hbWUgOnN0cmluZztcblx0ZW1haWwgOnN0cmluZztcblx0YWwxIDpzdHJpbmc7XG5cdGFsMiA6c3RyaW5nO1xuXHRjaXR5IDpzdHJpbmc7XG5cdHBvc3RhbCA6bnVtYmVyO1xuXHRjb3VudHJ5IDpzdHJpbmc7XG5cdHN0YXRlIDpzdHJpbmc7XG5cdGNvbXBhbnlOYW1lOiBzdHJpbmc7XG5cdGNvbXBhbnlUeXBlIDpzdHJpbmc7XG5cdGRpcmVjdG9ycyA6c3RyaW5nO1xuXHR1dWlkIDpzdHJpbmc7XG5cblx0bGFzdENhcmROdW1iZXIgOnN0cmluZztcblxuXHRAVmlld0NoaWxkKFwiY2FyZFwiKSBjYXJkOiBFbGVtZW50UmVmO1xuXHRAVmlld0NoaWxkKFwib3duZXJcIikgb3duZXI6IEVsZW1lbnRSZWY7XG5cdEBWaWV3Q2hpbGQoXCJjdmNcIikgY3ZjOiBFbGVtZW50UmVmO1xuXHRAVmlld0NoaWxkKFwiY2FyZFllYXJJZFwiKSBjeTogRWxlbWVudFJlZjtcblx0QFZpZXdDaGlsZChcImNhcmRNb250aElkXCIpIGNtOiBFbGVtZW50UmVmO1xuXHRAVmlld0NoaWxkKFwiZnVsbGNhcmRcIikgZmM6IEVsZW1lbnRSZWY7XG5cdEBWaWV3Q2hpbGQoXCJtaW5pY2FyZFwiKSBtYzogRWxlbWVudFJlZjtcblx0QFZpZXdDaGlsZChcImNhcmQxXCIpIGNhcmQxOiBFbGVtZW50UmVmO1xuXHRAVmlld0NoaWxkKFwiY2FyZE5yXCIpIGNhcmROcjogRWxlbWVudFJlZjtcblx0QFZpZXdDaGlsZChcIkNCMVwiKSBGaXJzdENoZWNrQm94OiBFbGVtZW50UmVmO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHVibGljIFBheW1lbnRTZXJ2aWNlOiBQYXltZW50U2VydmljZSwgcHVibGljIEluY29ycG9yYXRpb25TZXJ2aWNlOiBJbmNvcnBvcmF0aW9uU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuXHRcdHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuXHRcdHRoaXMuY29tcGFueU5hbWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjb21wYW55TmFtZVwiLCBcIlwiKTtcblx0XHR0aGlzLmNvbXBhbnlUeXBlID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY29tcGFueVR5cGVcIiwgXCJcIik7XG5cdFx0dGhpcy5maXJzdE5hbWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJmaXJzdE5hbWVcIiwgXCJcIik7XG5cdFx0dGhpcy5sYXN0TmFtZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImxhc3ROYW1lXCIsIFwiXCIpO1xuXHRcdHRoaXMudXVpZCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInV1aWRcIiwgXCJ0ZXN0XCIpO1xuXHRcdHRoaXMuZW1haWwgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJlbWFpbFwiLCBcIlwiKTtcblx0XHR0aGlzLmFsMSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsMVwiLCBcIlwiKTtcblx0XHR0aGlzLmFsMiA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsMlwiLCBcIlwiKTtcblx0XHR0aGlzLmNpdHkgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjaXR5XCIsIFwiXCIpO1xuXHRcdHRoaXMucG9zdGFsID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwicG9zdGFsXCIsIDApO1xuXHRcdHRoaXMuY291bnRyeSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNvdW50cnlcIiwgXCJcIik7XG5cdFx0dGhpcy5zdGF0ZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInN0YXRlXCIsIFwiXCIpO1xuXHRcdHRoaXMuZGlyZWN0b3JzID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiZGlyZWN0b3JzXCIsIFwiXCIpO1xuXHRcdHRoaXMucGFnZS5hZGRDc3MoXCIjbWluaWNhcmQge3Zpc2liaWxpdHk6IGNvbGxhcHNlZH1cIik7XG5cdFx0dGhpcy5vbGRWYWx1ZUxlbmd0aCA9IDA7XG5cdFx0dGhpcy5sYXN0Q2FyZE51bWJlciA9IFwiXCI7XG5cdH1cblxuXHRjYXJkTnVtYmVyQ2hhbmdlZCh2YWx1ZSkge1xuXHRcdC8vY29uc29sZS5sb2codmFsdWUpO1xuXHRcdGlmICggdmFsdWUubGVuZ3RoID4gMTkgKSB7XG5cdFx0XHR0aGlzLmNhcmROdW1iZXIgPSB0aGlzLmxhc3RDYXJkTnVtYmVyXG5cdFx0XHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnRleHQgPSB0aGlzLmxhc3RDYXJkTnVtYmVyXG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh2YWx1ZS5sZW5ndGggPT0gMTkpIHtcblx0XHRcdFx0dGhpcy5vd25lci5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG5cdFx0XHRcdHRoaXMubGFzdENhcmROdW1iZXIgPSB2YWx1ZTtcblx0XHRcdFx0dGhpcy5vd25lci5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5vd25lci5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xuXHRcdFx0XHR0aGlzLm93bmVyLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gdGhpcy5vd25lci5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xuXHRcdFx0XHR0aGlzLm93bmVyLm5hdGl2ZUVsZW1lbnQuYW5kcm9pZC5zZXRTZWxlY3Rpb24odGhpcy5vd25lci5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoKTtcblx0XHRcdH0vLyBlbHNlIGlmICh2YWx1ZS5sZW5ndGggJSA1ID09IDQpIHtcblx0XHRcdC8vIFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuXHRcdFx0Ly8gXHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnRleHQgPSB2YWx1ZSArIFwiIFwiO1xuXHRcdFx0Ly8gXHR0aGlzLmNhcmROdW1iZXIgPSB0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnRleHQ7XG5cdFx0XHQvLyBcdHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xuXHRcdFx0Ly8gXHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCA9IHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XG5cdFx0XHQvLyBcdHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQuYW5kcm9pZC5zZXRTZWxlY3Rpb24odGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aCk7XG5cdFx0XHQvLyB9XG5cdFx0XHRsZXQgbm9TcGFjZSA9IHZhbHVlLnJlcGxhY2UoL1xcIC9nLCAnJyk7XG5cdFx0XHRsZXQgd2l0aFNwYWNlID0gXCJcIjtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbm9TcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoaSAlIDQgPT0gMCAmJiBpICE9IDApIHtcblx0XHRcdFx0XHR3aXRoU3BhY2UgKz0gXCIgXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0d2l0aFNwYWNlICs9IG5vU3BhY2VbaV07XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnRleHQgPSB3aXRoU3BhY2U7XG5cdFx0XHR0aGlzLmNhcmROdW1iZXIgPSB3aXRoU3BhY2U7XG5cdFx0XHRsZXQgY3Vyc29yUG9zaXRpb24gPSB0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xuXHRcdFx0dmFsdWUgPSB3aXRoU3BhY2U7XG5cdFx0XHRcblx0XHRcdHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBjdXJzb3JQb3NpdGlvbjtcblx0XHRcdHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gY3Vyc29yUG9zaXRpb247XG5cdFx0XHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LmFuZHJvaWQuc2V0U2VsZWN0aW9uKGN1cnNvclBvc2l0aW9uKTtcblxuXHRcdFx0Ly9Vc2UgbmF0aXZlIGFwaSdzIGZvciBjdXJzb3IgcG9zaXRpb25cblx0XHRcdC8vIGRvZXNuJ3Qgd29yayB3aGVuIHRoZXJlIGlzIHRoZSBzYW1lIG51bWJlciBtdWx0aXBsZSB0aW1lc1xuXHRcdFx0Ly8gdGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5hbmRyb2lkLmdldFNlbGVjdGlvblN0YXJ0KClcblx0XHRcdC8vIGlmICh2YWx1ZS5sZW5ndGggPiB0aGlzLm9sZFZhbHVlTGVuZ3RoKSB7XG5cdFx0XHQvLyBcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vbGRWYWx1ZUxlbmd0aDsgaSsrKSB7XG5cdFx0XHQvLyBcdFx0aWYgKHRoaXMubGFzdENhcmROdW1iZXJbaV0gIT0gdmFsdWVbaV0pIHtcblx0XHRcdC8vIFx0XHRcdGN1cnNvclBvc2l0aW9uID0gaSArIDE7XG5cdFx0XHQvLyBcdFx0XHRicmVhaztcblx0XHRcdC8vIFx0XHR9XG5cdFx0XHQvLyBcdH1cblx0XHRcdC8vIFx0Y29uc29sZS5sb2coY3Vyc29yUG9zaXRpb24pO1xuXHRcdFx0Ly8gXHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gY3Vyc29yUG9zaXRpb247XG5cdFx0XHQvLyBcdHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gY3Vyc29yUG9zaXRpb247XG5cdFx0XHQvLyBcdHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQuYW5kcm9pZC5zZXRTZWxlY3Rpb24oY3Vyc29yUG9zaXRpb24pO1xuXHRcdFx0Ly8gfSBlbHNlIHtcblx0XHRcdC8vIFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0Ly8gXHRcdGlmICh0aGlzLmxhc3RDYXJkTnVtYmVyW2ldICE9IHZhbHVlW2ldKSB7XG5cdFx0XHQvLyBcdFx0XHRjdXJzb3JQb3NpdGlvbiA9IGkgKyAxO1xuXHRcdFx0Ly8gXHRcdFx0YnJlYWs7XG5cdFx0XHQvLyBcdFx0fVxuXHRcdFx0Ly8gXHR9XG5cdFx0XHRcdFxuXHRcdFx0Ly8gfVxuXHRcdFx0Ly8gdGhpcy5vbGRWYWx1ZUxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcblx0XHRcdC8vIHRoaXMubGFzdENhcmROdW1iZXIgPSB2YWx1ZTtcblx0XHR9XG4gXG5cdH1cblxuXHRkYXRlQ2hhbmdlZCh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZS5sZW5ndGggPT0gMikge1xuXHRcdFx0dGhpcy5jYXJkTW9udGggPSB2YWx1ZTtcblx0XHRcdHRoaXMuY3kubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuXHRcdH1cblx0XHRpZiAodmFsdWUubGVuZ3RoID4gMikge1xuXHRcdFx0dGhpcy5jYXJkTW9udGggPSB2YWx1ZS5zdWJzdHIoMCwgMik7XG5cdFx0XHR0aGlzLmNtLm5hdGl2ZUVsZW1lbnQudGV4dCA9IHRoaXMuY2FyZE1vbnRoO1xuXHRcdFx0dGhpcy5jeS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG5cdFx0XHR0aGlzLmN5Lm5hdGl2ZUVsZW1lbnQudGV4dCA9IHZhbHVlLnN1YnN0cigyLCAxKTtcblx0XHRcdHRoaXMuY3kubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHRoaXMuY3kubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aDtcblx0XHRcdHRoaXMuY3kubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgPSB0aGlzLmN5Lm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XG5cdFx0fVxuXHR9XG5cblx0eWVhckNoYW5nZWQodmFsdWUpIHtcblx0XHRpZiAodmFsdWUubGVuZ3RoID09IDIpIHtcblx0XHRcdHRoaXMuY2FyZFllYXIgPSB2YWx1ZTtcblx0XHRcdHRoaXMuY3ZjLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcblx0XHR9XG5cdFx0aWYgKHZhbHVlLmxlbmd0aCA+IDIpIHtcblx0XHRcdHRoaXMuY2FyZFllYXIgPSB2YWx1ZS5zdWJzdHIoMCwgMik7XG5cdFx0XHR0aGlzLmN5Lm5hdGl2ZUVsZW1lbnQudGV4dCA9IHRoaXMuY2FyZFllYXI7XG5cdFx0XHR0aGlzLmN2Yy5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG5cdFx0XHR0aGlzLmN2Yy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5jdmMubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aDtcblx0XHRcdHRoaXMuY3ZjLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gdGhpcy5jdmMubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aDtcblx0XHR9XG5cdFx0aWYgKHZhbHVlLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHR0aGlzLmNtLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcblx0XHRcdHRoaXMuY20ubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHRoaXMuY20ubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aDtcblx0XHRcdHRoaXMuY20ubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgPSB0aGlzLmNtLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XG5cdFx0fVxuXHR9XG5cblxuXHRzdWJtaXQoYXJnczogRXZlbnREYXRhKTogdm9pZCB7XG5cblx0Ly9cdGxldCBjYXJkVmlldyA9IDxDcmVkaXRDYXJkVmlldz50aGlzLmNhcmQubmF0aXZlRWxlbWVudDtcblx0Ly9cdGxldCBjYXJkID0gY2FyZFZpZXcuY2FyZDtcblx0XHRjb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlKCdwa190ZXN0X0pBZ2N6a3RXWDhqY2hqaTBiZ0hJSGpPZScpO1xuXHRcdHZhciB2YWx1ZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInN0cmluZ0tleVwiLCBcIk5vIHN0cmluZyB2YWx1ZVwiKTtcblx0XHRcblxuXG5cdC8vXHRjb25zdCBjYzpDYXJkID0gbmV3IENhcmQodGhpcy5jYXJkTnVtYmVyLnJlcGxhY2UoL1xcIC9nLCAnJyksIHRoaXMuY2FyZE1vbnRoLCB0aGlzLmNhcmRZZWFyLCB0aGlzLmNhcmRDdmMpO1xuXHRcdFx0Ly8gc3RyaXBlLmNyZWF0ZVRva2VuKGNjLmNhcmQsKGVycm9yLHRva2VuKT0+e1xuXHRcdFx0Ly8gaWYgKCFlcnJvcikge1xuXHRcdFx0Ly8gXHRjb25zb2xlLmxvZyh0b2tlbi5nZXRJZCgpKTtcblx0XHRcdC8vIFx0Y29uc29sZS5sb2codG9rZW4uZ2V0Q2FyZCgpKTtcblx0XHRcdC8vIFx0dGhpcy5QYXltZW50U2VydmljZS5zdWJtaXRUb2tlbih0b2tlbi5nZXRJZCgpKS5zdWJzY3JpYmUoXG5cdFx0XHQvLyBcdHJlc3BvbnNlID0+IGFsZXJ0KFwiUGF5bWVudCBkb25lXCIpLFxuXHRcdFx0Ly8gXHRlcnJvciA9PiAoYWxlcnQoXCJ0aGVyZSB3YXMgYW4gZXJyb3IsIHBsZWFzZSB0cnkgYWdhaW5cIikpKVx0XG5cblx0XHRcdC8vIH0gZWxzZSB7XG5cdFx0XHQvLyBcdGFsZXJ0KFwiaW5jb3JlY3QgY2FyZCBkYXRhXCIpO1xuXHRcdFx0Ly8gfVxuXHRcdFx0Ly8gfSk7XG5cdFx0XHR0aGlzLkluY29ycG9yYXRpb25TZXJ2aWNlLnN1Ym1pdERhdGEodGhpcy5maXJzdE5hbWUsIHRoaXMubGFzdE5hbWUsIHRoaXMuZW1haWwsIHRoaXMuYWwxLCB0aGlzLmFsMiwgdGhpcy5jaXR5LCB0aGlzLnBvc3RhbCwgdGhpcy5jb3VudHJ5LCB0aGlzLnN0YXRlLCB0aGlzLmRpcmVjdG9ycywgdGhpcy51dWlkKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0cmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpLFxuXHRcdFx0XHRlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcblx0XHRcdCk7XG5cdH1cbn1cbiJdfQ==
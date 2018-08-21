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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXltZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSwwQ0FBeUM7QUFDekMsZ0NBQTZCO0FBRTdCLDJEQUFtRTtBQUVuRSw0RUFBeUU7QUFDekUsOEZBQTJGO0FBQzNGLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBU2xEO0lBeUNDLDBCQUFvQixJQUFVLEVBQVMsY0FBOEIsRUFBUyxvQkFBMEMsRUFBVSxNQUFjO1FBQTVILFNBQUksR0FBSixJQUFJLENBQU07UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBUyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWpDaEosZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFlBQU8sR0FBRyxFQUFFLENBQUM7UUErQlosSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDQyx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsSUFBSSxHQUFHLFdB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QkFBUyxDQUFDLGFBQWEsQ0FBQztrQ0FBSyxpQkFBVTtnREFBQztJQUNsQjtRQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQztrQ0FBSyxpQkFBVTtnREFBQztJQUNmO1FBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDO2tDQUFLLGlCQUFVO2dEQUFDO0lBQ2xCO1FBQW5CLGdCQUFTLENBQUMsT0FBTyxDQUFDO2tDQUFRLGlCQUFVO21EQUFDO0lBQ2pCO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFTLGlCQUFVO29EQUFDO0lBQ3RCO1FBQWpCLGdCQUFTLENBQUMsS0FBSyxDQUFDO2tDQUFnQixpQkFBVTsyREFBQztJQXZDaEMsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDdEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN0QyxDQUFDO3lDQTBDeUIsV0FBSSxFQUF5QixnQ0FBYyxFQUErQiw0Q0FBb0IsRUFBa0IsZUFBTTtPQXpDcEksZ0JBQWdCLENBb001QjtJQUFELHVCQUFDO0NBQUEsQUFwTUQsSUFvTUM7QUFwTVksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtWaWV3fSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCB7IENyZWRpdENhcmRWaWV3LCBDYXJkLCBTdHJpcGUgfSBmcm9tICduYXRpdmVzY3JpcHQtc3RyaXBlJztcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL3BheW1lbnQvcGF5bWVudC5zZXJ2aWNlJ1xyXG5pbXBvcnQgeyBJbmNvcnBvcmF0aW9uU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvaW5jb3Jwb3JhdGlvbi9pbmNvcnBvcmF0aW9uLnNlcnZpY2UnXHJcbnZhciBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlBheW1lbnRcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9wYXltZW50LmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbJy4vcGF5bWVudC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBheW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHRjbjEgOm51bWJlcjtcclxuXHRjbjIgOm51bWJlcjtcclxuXHRjbjMgOm51bWJlcjtcclxuXHRjbjQgOm51bWJlcjtcclxuXHRvbGRWYWx1ZUxlbmd0aCA6bnVtYmVyO1xyXG5cdFxyXG5cdGNhcmROdW1iZXIgPSAnJztcclxuXHRjYXJkTW9udGggPSAnJztcclxuXHRjYXJkWWVhciA9ICcnO1xyXG5cdGNhcmRDdmMgPSAnJztcclxuXHJcblx0Zmlyc3ROYW1lIDpzdHJpbmc7XHJcblx0bGFzdE5hbWUgOnN0cmluZztcclxuXHRlbWFpbCA6c3RyaW5nO1xyXG5cdGFsMSA6c3RyaW5nO1xyXG5cdGFsMiA6c3RyaW5nO1xyXG5cdGNpdHkgOnN0cmluZztcclxuXHRwb3N0YWwgOm51bWJlcjtcclxuXHRjb3VudHJ5IDpzdHJpbmc7XHJcblx0c3RhdGUgOnN0cmluZztcclxuXHRjb21wYW55TmFtZTogc3RyaW5nO1xyXG5cdGNvbXBhbnlUeXBlIDpzdHJpbmc7XHJcblx0ZGlyZWN0b3JzIDpzdHJpbmc7XHJcblx0dXVpZCA6c3RyaW5nO1xyXG5cdHBheW1lbnQgOm51bWJlcjtcclxuXHJcblx0bGFzdENhcmROdW1iZXIgOnN0cmluZztcclxuXHJcblx0QFZpZXdDaGlsZChcImNhcmRcIikgY2FyZDogRWxlbWVudFJlZjtcclxuXHRAVmlld0NoaWxkKFwib3duZXJcIikgb3duZXI6IEVsZW1lbnRSZWY7XHJcblx0QFZpZXdDaGlsZChcImN2Y1wiKSBjdmM6IEVsZW1lbnRSZWY7XHJcblx0QFZpZXdDaGlsZChcImNhcmRZZWFySWRcIikgY3k6IEVsZW1lbnRSZWY7XHJcblx0QFZpZXdDaGlsZChcImNhcmRNb250aElkXCIpIGNtOiBFbGVtZW50UmVmO1xyXG5cdEBWaWV3Q2hpbGQoXCJmdWxsY2FyZFwiKSBmYzogRWxlbWVudFJlZjtcclxuXHRAVmlld0NoaWxkKFwibWluaWNhcmRcIikgbWM6IEVsZW1lbnRSZWY7XHJcblx0QFZpZXdDaGlsZChcImNhcmQxXCIpIGNhcmQxOiBFbGVtZW50UmVmO1xyXG5cdEBWaWV3Q2hpbGQoXCJjYXJkTnJcIikgY2FyZE5yOiBFbGVtZW50UmVmO1xyXG5cdEBWaWV3Q2hpbGQoXCJDQjFcIikgRmlyc3RDaGVja0JveDogRWxlbWVudFJlZjtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwdWJsaWMgUGF5bWVudFNlcnZpY2U6IFBheW1lbnRTZXJ2aWNlLCBwdWJsaWMgSW5jb3Jwb3JhdGlvblNlcnZpY2U6IEluY29ycG9yYXRpb25TZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHRcdC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG5cdFx0dGhpcy5jb21wYW55TmFtZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNvbXBhbnlOYW1lXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5jb21wYW55VHlwZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNvbXBhbnlUeXBlXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5maXJzdE5hbWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJmaXJzdE5hbWVcIiwgXCJcIik7XHJcblx0XHR0aGlzLmxhc3ROYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwibGFzdE5hbWVcIiwgXCJcIik7XHJcblx0XHR0aGlzLnV1aWQgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1dWlkXCIsIFwidGVzdFwiKTtcclxuXHRcdHRoaXMuZW1haWwgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJlbWFpbFwiLCBcIlwiKTtcclxuXHRcdHRoaXMuYWwxID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWwxXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5hbDIgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbDJcIiwgXCJcIik7XHJcblx0XHR0aGlzLmNpdHkgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjaXR5XCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5wb3N0YWwgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJwb3N0YWxcIiwgMCk7XHJcblx0XHR0aGlzLmNvdW50cnkgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjb3VudHJ5XCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInN0YXRlXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5kaXJlY3RvcnMgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJkaXJlY3RvcnNcIiwgXCJcIik7XHJcblx0XHR0aGlzLnBheW1lbnQgPSBwYXJzZUludChhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJwYXltZW50XCIsIDApKSArIDU5NTtcclxuXHRcdHRoaXMucGFnZS5hZGRDc3MoXCIjbWluaWNhcmQge3Zpc2liaWxpdHk6IGNvbGxhcHNlZH1cIik7XHJcblx0XHRcclxuXHRcdHRoaXMub2xkVmFsdWVMZW5ndGggPSAwO1xyXG5cdFx0dGhpcy5sYXN0Q2FyZE51bWJlciA9IFwiXCI7XHJcblx0fVxyXG5cclxuXHRjYXJkTnVtYmVyQ2hhbmdlZCh2YWx1ZSkge1xyXG5cdFx0Ly9jb25zb2xlLmxvZyh2YWx1ZSk7XHJcblx0XHRpZiAoIHZhbHVlLmxlbmd0aCA+IDE5ICkge1xyXG5cdFx0XHR0aGlzLmNhcmROdW1iZXIgPSB0aGlzLmxhc3RDYXJkTnVtYmVyXHJcblx0XHRcdHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQudGV4dCA9IHRoaXMubGFzdENhcmROdW1iZXJcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh2YWx1ZS5sZW5ndGggPT0gMTkpIHtcclxuXHRcdFx0XHR0aGlzLm93bmVyLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuXHRcdFx0XHR0aGlzLmxhc3RDYXJkTnVtYmVyID0gdmFsdWU7XHJcblx0XHRcdFx0dGhpcy5vd25lci5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5vd25lci5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xyXG5cdFx0XHRcdHRoaXMub3duZXIubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgPSB0aGlzLm93bmVyLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XHJcblx0XHRcdFx0dGhpcy5vd25lci5uYXRpdmVFbGVtZW50LmFuZHJvaWQuc2V0U2VsZWN0aW9uKHRoaXMub3duZXIubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aCk7XHJcblx0XHRcdH0vLyBlbHNlIGlmICh2YWx1ZS5sZW5ndGggJSA1ID09IDQpIHtcclxuXHRcdFx0Ly8gXHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcblx0XHRcdC8vIFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC50ZXh0ID0gdmFsdWUgKyBcIiBcIjtcclxuXHRcdFx0Ly8gXHR0aGlzLmNhcmROdW1iZXIgPSB0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnRleHQ7XHJcblx0XHRcdC8vIFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XHJcblx0XHRcdC8vIFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgPSB0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xyXG5cdFx0XHQvLyBcdHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQuYW5kcm9pZC5zZXRTZWxlY3Rpb24odGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aCk7XHJcblx0XHRcdC8vIH1cclxuXHRcdFx0bGV0IG5vU3BhY2UgPSB2YWx1ZS5yZXBsYWNlKC9cXCAvZywgJycpO1xyXG5cdFx0XHRsZXQgd2l0aFNwYWNlID0gXCJcIjtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBub1NwYWNlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0aWYgKGkgJSA0ID09IDAgJiYgaSAhPSAwKSB7XHJcblx0XHRcdFx0XHR3aXRoU3BhY2UgKz0gXCIgXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHdpdGhTcGFjZSArPSBub1NwYWNlW2ldO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQudGV4dCA9IHdpdGhTcGFjZTtcclxuXHRcdFx0dGhpcy5jYXJkTnVtYmVyID0gd2l0aFNwYWNlO1xyXG5cdFx0XHRsZXQgY3Vyc29yUG9zaXRpb24gPSB0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xyXG5cdFx0XHR2YWx1ZSA9IHdpdGhTcGFjZTtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBjdXJzb3JQb3NpdGlvbjtcclxuXHRcdFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgPSBjdXJzb3JQb3NpdGlvbjtcclxuXHRcdFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5hbmRyb2lkLnNldFNlbGVjdGlvbihjdXJzb3JQb3NpdGlvbik7XHJcblxyXG5cdFx0XHQvL1VzZSBuYXRpdmUgYXBpJ3MgZm9yIGN1cnNvciBwb3NpdGlvblxyXG5cdFx0XHQvLyBkb2Vzbid0IHdvcmsgd2hlbiB0aGVyZSBpcyB0aGUgc2FtZSBudW1iZXIgbXVsdGlwbGUgdGltZXNcclxuXHRcdFx0Ly8gdGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5hbmRyb2lkLmdldFNlbGVjdGlvblN0YXJ0KClcclxuXHRcdFx0Ly8gaWYgKHZhbHVlLmxlbmd0aCA+IHRoaXMub2xkVmFsdWVMZW5ndGgpIHtcclxuXHRcdFx0Ly8gXHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub2xkVmFsdWVMZW5ndGg7IGkrKykge1xyXG5cdFx0XHQvLyBcdFx0aWYgKHRoaXMubGFzdENhcmROdW1iZXJbaV0gIT0gdmFsdWVbaV0pIHtcclxuXHRcdFx0Ly8gXHRcdFx0Y3Vyc29yUG9zaXRpb24gPSBpICsgMTtcclxuXHRcdFx0Ly8gXHRcdFx0YnJlYWs7XHJcblx0XHRcdC8vIFx0XHR9XHJcblx0XHRcdC8vIFx0fVxyXG5cdFx0XHQvLyBcdGNvbnNvbGUubG9nKGN1cnNvclBvc2l0aW9uKTtcclxuXHRcdFx0Ly8gXHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gY3Vyc29yUG9zaXRpb247XHJcblx0XHRcdC8vIFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgPSBjdXJzb3JQb3NpdGlvbjtcclxuXHRcdFx0Ly8gXHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LmFuZHJvaWQuc2V0U2VsZWN0aW9uKGN1cnNvclBvc2l0aW9uKTtcclxuXHRcdFx0Ly8gfSBlbHNlIHtcclxuXHRcdFx0Ly8gXHRmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdC8vIFx0XHRpZiAodGhpcy5sYXN0Q2FyZE51bWJlcltpXSAhPSB2YWx1ZVtpXSkge1xyXG5cdFx0XHQvLyBcdFx0XHRjdXJzb3JQb3NpdGlvbiA9IGkgKyAxO1xyXG5cdFx0XHQvLyBcdFx0XHRicmVhaztcclxuXHRcdFx0Ly8gXHRcdH1cclxuXHRcdFx0Ly8gXHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdC8vIH1cclxuXHRcdFx0Ly8gdGhpcy5vbGRWYWx1ZUxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcclxuXHRcdFx0Ly8gdGhpcy5sYXN0Q2FyZE51bWJlciA9IHZhbHVlO1xyXG5cdFx0fVxyXG4gXHJcblx0fVxyXG5cclxuXHRkYXRlQ2hhbmdlZCh2YWx1ZSkge1xyXG5cdFx0aWYgKHZhbHVlLmxlbmd0aCA9PSAyKSB7XHJcblx0XHRcdHRoaXMuY2FyZE1vbnRoID0gdmFsdWU7XHJcblx0XHRcdHRoaXMuY3kubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZhbHVlLmxlbmd0aCA+IDIpIHtcclxuXHRcdFx0dGhpcy5jYXJkTW9udGggPSB2YWx1ZS5zdWJzdHIoMCwgMik7XHJcblx0XHRcdHRoaXMuY20ubmF0aXZlRWxlbWVudC50ZXh0ID0gdGhpcy5jYXJkTW9udGg7XHJcblx0XHRcdHRoaXMuY3kubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG5cdFx0XHR0aGlzLmN5Lm5hdGl2ZUVsZW1lbnQudGV4dCA9IHZhbHVlLnN1YnN0cigyLCAxKTtcclxuXHRcdFx0dGhpcy5jeS5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5jeS5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xyXG5cdFx0XHR0aGlzLmN5Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gdGhpcy5jeS5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0eWVhckNoYW5nZWQodmFsdWUpIHtcclxuXHRcdGlmICh2YWx1ZS5sZW5ndGggPT0gMikge1xyXG5cdFx0XHR0aGlzLmNhcmRZZWFyID0gdmFsdWU7XHJcblx0XHRcdHRoaXMuY3ZjLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuXHRcdH1cclxuXHRcdGlmICh2YWx1ZS5sZW5ndGggPiAyKSB7XHJcblx0XHRcdHRoaXMuY2FyZFllYXIgPSB2YWx1ZS5zdWJzdHIoMCwgMik7XHJcblx0XHRcdHRoaXMuY3kubmF0aXZlRWxlbWVudC50ZXh0ID0gdGhpcy5jYXJkWWVhcjtcclxuXHRcdFx0dGhpcy5jdmMubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG5cdFx0XHR0aGlzLmN2Yy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5jdmMubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aDtcclxuXHRcdFx0dGhpcy5jdmMubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgPSB0aGlzLmN2Yy5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZhbHVlLmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdHRoaXMuY20ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG5cdFx0XHR0aGlzLmNtLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLmNtLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XHJcblx0XHRcdHRoaXMuY20ubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgPSB0aGlzLmNtLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0c3VibWl0KGFyZ3M6IEV2ZW50RGF0YSk6IHZvaWQge1xyXG5cclxuXHQvL1x0bGV0IGNhcmRWaWV3ID0gPENyZWRpdENhcmRWaWV3PnRoaXMuY2FyZC5uYXRpdmVFbGVtZW50O1xyXG5cdC8vXHRsZXQgY2FyZCA9IGNhcmRWaWV3LmNhcmQ7XHJcblx0XHRjb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlKCdwa190ZXN0X0pBZ2N6a3RXWDhqY2hqaTBiZ0hJSGpPZScpO1xyXG5cdFx0dmFyIHZhbHVlID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwic3RyaW5nS2V5XCIsIFwiTm8gc3RyaW5nIHZhbHVlXCIpO1xyXG5cdFx0XHJcblxyXG5cclxuXHQvL1x0Y29uc3QgY2M6Q2FyZCA9IG5ldyBDYXJkKHRoaXMuY2FyZE51bWJlci5yZXBsYWNlKC9cXCAvZywgJycpLCB0aGlzLmNhcmRNb250aCwgdGhpcy5jYXJkWWVhciwgdGhpcy5jYXJkQ3ZjKTtcclxuXHRcdFx0Ly8gc3RyaXBlLmNyZWF0ZVRva2VuKGNjLmNhcmQsKGVycm9yLHRva2VuKT0+e1xyXG5cdFx0XHQvLyBpZiAoIWVycm9yKSB7XHJcblx0XHRcdC8vIFx0Y29uc29sZS5sb2codG9rZW4uZ2V0SWQoKSk7XHJcblx0XHRcdC8vIFx0Y29uc29sZS5sb2codG9rZW4uZ2V0Q2FyZCgpKTtcclxuXHRcdFx0Ly8gXHR0aGlzLlBheW1lbnRTZXJ2aWNlLnN1Ym1pdFRva2VuKHRva2VuLmdldElkKCksIHRoaXMucGF5bWVudCkuc3Vic2NyaWJlKFxyXG5cdFx0XHQvLyBcdHJlc3BvbnNlID0+IGFsZXJ0KFwiUGF5bWVudCBkb25lXCIpLFxyXG5cdFx0XHQvLyBcdGVycm9yID0+IChhbGVydChcInRoZXJlIHdhcyBhbiBlcnJvciwgcGxlYXNlIHRyeSBhZ2FpblwiKSkpXHRcclxuXHJcblx0XHRcdC8vIH0gZWxzZSB7XHJcblx0XHRcdC8vIFx0YWxlcnQoXCJpbmNvcmVjdCBjYXJkIGRhdGFcIik7XHJcblx0XHRcdC8vIH1cclxuXHRcdFx0Ly8gfSk7XHJcblx0XHRcdHRoaXMuSW5jb3Jwb3JhdGlvblNlcnZpY2Uuc3VibWl0RGF0YSh0aGlzLmZpcnN0TmFtZSwgdGhpcy5sYXN0TmFtZSwgdGhpcy5lbWFpbCwgdGhpcy5hbDEsIHRoaXMuYWwyLCB0aGlzLmNpdHksIHRoaXMucG9zdGFsLCB0aGlzLmNvdW50cnksIHRoaXMuc3RhdGUsIHRoaXMuZGlyZWN0b3JzLCB0aGlzLnV1aWQsIHRoaXMuY29tcGFueU5hbWUsIHRoaXMuY29tcGFueVR5cGUpXHJcblx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdFx0cmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpLFxyXG5cdFx0XHRcdGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdFx0XHQpO1xyXG5cdH1cclxufVxyXG4iXX0=
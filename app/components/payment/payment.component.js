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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXltZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSwwQ0FBeUM7QUFDekMsZ0NBQTZCO0FBRTdCLDJEQUFtRTtBQUVuRSw0RUFBeUU7QUFDekUsOEZBQTJGO0FBQzNGLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBU2xEO0lBd0NDLDBCQUFvQixJQUFVLEVBQVMsY0FBOEIsRUFBUyxvQkFBMEMsRUFBVSxNQUFjO1FBQTVILFNBQUksR0FBSixJQUFJLENBQU07UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBUyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWhDaEosZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFlBQU8sR0FBRyxFQUFFLENBQUM7UUE4QlosSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDQyx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsSUFBSSxHQUFHLFdB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QXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDO2tDQUFLLGlCQUFVO2dEQUFDO0lBQ2xCO1FBQW5CLGdCQUFTLENBQUMsT0FBTyxDQUFDO2tDQUFRLGlCQUFVO21EQUFDO0lBQ2pCO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFTLGlCQUFVO29EQUFDO0lBQ3RCO1FBQWpCLGdCQUFTLENBQUMsS0FBSyxDQUFDO2tDQUFnQixpQkFBVTsyREFBQztJQXRDaEMsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDdEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN0QyxDQUFDO3lDQXlDeUIsV0FBSSxFQUF5QixnQ0FBYyxFQUErQiw0Q0FBb0IsRUFBa0IsZUFBTTtPQXhDcEksZ0JBQWdCLENBaU01QjtJQUFELHVCQUFDO0NBQUEsQUFqTUQsSUFpTUM7QUFqTVksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHtWaWV3fSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBDcmVkaXRDYXJkVmlldywgQ2FyZCwgU3RyaXBlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXN0cmlwZSc7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL3BheW1lbnQvcGF5bWVudC5zZXJ2aWNlJ1xuaW1wb3J0IHsgSW5jb3Jwb3JhdGlvblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL2luY29ycG9yYXRpb24vaW5jb3Jwb3JhdGlvbi5zZXJ2aWNlJ1xudmFyIGFwcFNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlBheW1lbnRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHR0ZW1wbGF0ZVVybDogXCIuL3BheW1lbnQuY29tcG9uZW50Lmh0bWxcIixcblx0c3R5bGVVcmxzOiBbJy4vcGF5bWVudC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y24xIDpudW1iZXI7XG5cdGNuMiA6bnVtYmVyO1xuXHRjbjMgOm51bWJlcjtcblx0Y240IDpudW1iZXI7XG5cdG9sZFZhbHVlTGVuZ3RoIDpudW1iZXI7XG5cdFxuXHRjYXJkTnVtYmVyID0gJyc7XG5cdGNhcmRNb250aCA9ICcnO1xuXHRjYXJkWWVhciA9ICcnO1xuXHRjYXJkQ3ZjID0gJyc7XG5cblx0Zmlyc3ROYW1lIDpzdHJpbmc7XG5cdGxhc3ROYW1lIDpzdHJpbmc7XG5cdGVtYWlsIDpzdHJpbmc7XG5cdGFsMSA6c3RyaW5nO1xuXHRhbDIgOnN0cmluZztcblx0Y2l0eSA6c3RyaW5nO1xuXHRwb3N0YWwgOm51bWJlcjtcblx0Y291bnRyeSA6c3RyaW5nO1xuXHRzdGF0ZSA6c3RyaW5nO1xuXHRjb21wYW55TmFtZTogc3RyaW5nO1xuXHRjb21wYW55VHlwZSA6c3RyaW5nO1xuXHRkaXJlY3RvcnMgOnN0cmluZztcblx0dXVpZCA6c3RyaW5nO1xuXG5cdGxhc3RDYXJkTnVtYmVyIDpzdHJpbmc7XG5cblx0QFZpZXdDaGlsZChcImNhcmRcIikgY2FyZDogRWxlbWVudFJlZjtcblx0QFZpZXdDaGlsZChcIm93bmVyXCIpIG93bmVyOiBFbGVtZW50UmVmO1xuXHRAVmlld0NoaWxkKFwiY3ZjXCIpIGN2YzogRWxlbWVudFJlZjtcblx0QFZpZXdDaGlsZChcImNhcmRZZWFySWRcIikgY3k6IEVsZW1lbnRSZWY7XG5cdEBWaWV3Q2hpbGQoXCJjYXJkTW9udGhJZFwiKSBjbTogRWxlbWVudFJlZjtcblx0QFZpZXdDaGlsZChcImZ1bGxjYXJkXCIpIGZjOiBFbGVtZW50UmVmO1xuXHRAVmlld0NoaWxkKFwibWluaWNhcmRcIikgbWM6IEVsZW1lbnRSZWY7XG5cdEBWaWV3Q2hpbGQoXCJjYXJkMVwiKSBjYXJkMTogRWxlbWVudFJlZjtcblx0QFZpZXdDaGlsZChcImNhcmROclwiKSBjYXJkTnI6IEVsZW1lbnRSZWY7XG5cdEBWaWV3Q2hpbGQoXCJDQjFcIikgRmlyc3RDaGVja0JveDogRWxlbWVudFJlZjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHB1YmxpYyBQYXltZW50U2VydmljZTogUGF5bWVudFNlcnZpY2UsIHB1YmxpYyBJbmNvcnBvcmF0aW9uU2VydmljZTogSW5jb3Jwb3JhdGlvblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHQvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cblx0XHR0aGlzLmNvbXBhbnlOYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY29tcGFueU5hbWVcIiwgXCJcIik7XG5cdFx0dGhpcy5jb21wYW55VHlwZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNvbXBhbnlUeXBlXCIsIFwiXCIpO1xuXHRcdHRoaXMuZmlyc3ROYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiZmlyc3ROYW1lXCIsIFwiXCIpO1xuXHRcdHRoaXMubGFzdE5hbWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJsYXN0TmFtZVwiLCBcIlwiKTtcblx0XHR0aGlzLnV1aWQgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1dWlkXCIsIFwidGVzdFwiKTtcblx0XHR0aGlzLmVtYWlsID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiZW1haWxcIiwgXCJcIik7XG5cdFx0dGhpcy5hbDEgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbDFcIiwgXCJcIik7XG5cdFx0dGhpcy5hbDIgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbDJcIiwgXCJcIik7XG5cdFx0dGhpcy5jaXR5ID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY2l0eVwiLCBcIlwiKTtcblx0XHR0aGlzLnBvc3RhbCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInBvc3RhbFwiLCAwKTtcblx0XHR0aGlzLmNvdW50cnkgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjb3VudHJ5XCIsIFwiXCIpO1xuXHRcdHRoaXMuc3RhdGUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJzdGF0ZVwiLCBcIlwiKTtcblx0XHR0aGlzLmRpcmVjdG9ycyA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImRpcmVjdG9yc1wiLCBcIlwiKTtcblx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiI21pbmljYXJkIHt2aXNpYmlsaXR5OiBjb2xsYXBzZWR9XCIpO1xuXHRcdHRoaXMub2xkVmFsdWVMZW5ndGggPSAwO1xuXHRcdHRoaXMubGFzdENhcmROdW1iZXIgPSBcIlwiO1xuXHR9XG5cblx0Y2FyZE51bWJlckNoYW5nZWQodmFsdWUpIHtcblx0XHQvL2NvbnNvbGUubG9nKHZhbHVlKTtcblx0XHRpZiAoIHZhbHVlLmxlbmd0aCA+IDE5ICkge1xuXHRcdFx0dGhpcy5jYXJkTnVtYmVyID0gdGhpcy5sYXN0Q2FyZE51bWJlclxuXHRcdFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC50ZXh0ID0gdGhpcy5sYXN0Q2FyZE51bWJlclxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodmFsdWUubGVuZ3RoID09IDE5KSB7XG5cdFx0XHRcdHRoaXMub3duZXIubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuXHRcdFx0XHR0aGlzLmxhc3RDYXJkTnVtYmVyID0gdmFsdWU7XG5cdFx0XHRcdHRoaXMub3duZXIubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHRoaXMub3duZXIubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aDtcblx0XHRcdFx0dGhpcy5vd25lci5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCA9IHRoaXMub3duZXIubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aDtcblx0XHRcdFx0dGhpcy5vd25lci5uYXRpdmVFbGVtZW50LmFuZHJvaWQuc2V0U2VsZWN0aW9uKHRoaXMub3duZXIubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aCk7XG5cdFx0XHR9Ly8gZWxzZSBpZiAodmFsdWUubGVuZ3RoICUgNSA9PSA0KSB7XG5cdFx0XHQvLyBcdHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcblx0XHRcdC8vIFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC50ZXh0ID0gdmFsdWUgKyBcIiBcIjtcblx0XHRcdC8vIFx0dGhpcy5jYXJkTnVtYmVyID0gdGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC50ZXh0O1xuXHRcdFx0Ly8gXHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aDtcblx0XHRcdC8vIFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgPSB0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xuXHRcdFx0Ly8gXHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LmFuZHJvaWQuc2V0U2VsZWN0aW9uKHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGgpO1xuXHRcdFx0Ly8gfVxuXHRcdFx0bGV0IG5vU3BhY2UgPSB2YWx1ZS5yZXBsYWNlKC9cXCAvZywgJycpO1xuXHRcdFx0bGV0IHdpdGhTcGFjZSA9IFwiXCI7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5vU3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKGkgJSA0ID09IDAgJiYgaSAhPSAwKSB7XG5cdFx0XHRcdFx0d2l0aFNwYWNlICs9IFwiIFwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHdpdGhTcGFjZSArPSBub1NwYWNlW2ldO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC50ZXh0ID0gd2l0aFNwYWNlO1xuXHRcdFx0dGhpcy5jYXJkTnVtYmVyID0gd2l0aFNwYWNlO1xuXHRcdFx0bGV0IGN1cnNvclBvc2l0aW9uID0gdGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aDtcblx0XHRcdHZhbHVlID0gd2l0aFNwYWNlO1xuXHRcdFx0XG5cdFx0XHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gY3Vyc29yUG9zaXRpb247XG5cdFx0XHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCA9IGN1cnNvclBvc2l0aW9uO1xuXHRcdFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5hbmRyb2lkLnNldFNlbGVjdGlvbihjdXJzb3JQb3NpdGlvbik7XG5cblx0XHRcdC8vVXNlIG5hdGl2ZSBhcGkncyBmb3IgY3Vyc29yIHBvc2l0aW9uXG5cdFx0XHQvLyBkb2Vzbid0IHdvcmsgd2hlbiB0aGVyZSBpcyB0aGUgc2FtZSBudW1iZXIgbXVsdGlwbGUgdGltZXNcblx0XHRcdC8vIHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQuYW5kcm9pZC5nZXRTZWxlY3Rpb25TdGFydCgpXG5cdFx0XHQvLyBpZiAodmFsdWUubGVuZ3RoID4gdGhpcy5vbGRWYWx1ZUxlbmd0aCkge1xuXHRcdFx0Ly8gXHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub2xkVmFsdWVMZW5ndGg7IGkrKykge1xuXHRcdFx0Ly8gXHRcdGlmICh0aGlzLmxhc3RDYXJkTnVtYmVyW2ldICE9IHZhbHVlW2ldKSB7XG5cdFx0XHQvLyBcdFx0XHRjdXJzb3JQb3NpdGlvbiA9IGkgKyAxO1xuXHRcdFx0Ly8gXHRcdFx0YnJlYWs7XG5cdFx0XHQvLyBcdFx0fVxuXHRcdFx0Ly8gXHR9XG5cdFx0XHQvLyBcdGNvbnNvbGUubG9nKGN1cnNvclBvc2l0aW9uKTtcblx0XHRcdC8vIFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IGN1cnNvclBvc2l0aW9uO1xuXHRcdFx0Ly8gXHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCA9IGN1cnNvclBvc2l0aW9uO1xuXHRcdFx0Ly8gXHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LmFuZHJvaWQuc2V0U2VsZWN0aW9uKGN1cnNvclBvc2l0aW9uKTtcblx0XHRcdC8vIH0gZWxzZSB7XG5cdFx0XHQvLyBcdGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdC8vIFx0XHRpZiAodGhpcy5sYXN0Q2FyZE51bWJlcltpXSAhPSB2YWx1ZVtpXSkge1xuXHRcdFx0Ly8gXHRcdFx0Y3Vyc29yUG9zaXRpb24gPSBpICsgMTtcblx0XHRcdC8vIFx0XHRcdGJyZWFrO1xuXHRcdFx0Ly8gXHRcdH1cblx0XHRcdC8vIFx0fVxuXHRcdFx0XHRcblx0XHRcdC8vIH1cblx0XHRcdC8vIHRoaXMub2xkVmFsdWVMZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG5cdFx0XHQvLyB0aGlzLmxhc3RDYXJkTnVtYmVyID0gdmFsdWU7XG5cdFx0fVxuIFxuXHR9XG5cblx0ZGF0ZUNoYW5nZWQodmFsdWUpIHtcblx0XHRpZiAodmFsdWUubGVuZ3RoID09IDIpIHtcblx0XHRcdHRoaXMuY2FyZE1vbnRoID0gdmFsdWU7XG5cdFx0XHR0aGlzLmN5Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcblx0XHR9XG5cdFx0aWYgKHZhbHVlLmxlbmd0aCA+IDIpIHtcblx0XHRcdHRoaXMuY2FyZE1vbnRoID0gdmFsdWUuc3Vic3RyKDAsIDIpO1xuXHRcdFx0dGhpcy5jbS5uYXRpdmVFbGVtZW50LnRleHQgPSB0aGlzLmNhcmRNb250aDtcblx0XHRcdHRoaXMuY3kubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuXHRcdFx0dGhpcy5jeS5uYXRpdmVFbGVtZW50LnRleHQgPSB2YWx1ZS5zdWJzdHIoMiwgMSk7XG5cdFx0XHR0aGlzLmN5Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLmN5Lm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XG5cdFx0XHR0aGlzLmN5Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gdGhpcy5jeS5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xuXHRcdH1cblx0fVxuXG5cdHllYXJDaGFuZ2VkKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlLmxlbmd0aCA9PSAyKSB7XG5cdFx0XHR0aGlzLmNhcmRZZWFyID0gdmFsdWU7XG5cdFx0XHR0aGlzLmN2Yy5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG5cdFx0fVxuXHRcdGlmICh2YWx1ZS5sZW5ndGggPiAyKSB7XG5cdFx0XHR0aGlzLmNhcmRZZWFyID0gdmFsdWUuc3Vic3RyKDAsIDIpO1xuXHRcdFx0dGhpcy5jeS5uYXRpdmVFbGVtZW50LnRleHQgPSB0aGlzLmNhcmRZZWFyO1xuXHRcdFx0dGhpcy5jdmMubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuXHRcdFx0dGhpcy5jdmMubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHRoaXMuY3ZjLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XG5cdFx0XHR0aGlzLmN2Yy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCA9IHRoaXMuY3ZjLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XG5cdFx0fVxuXHRcdGlmICh2YWx1ZS5sZW5ndGggPT0gMCkge1xuXHRcdFx0dGhpcy5jbS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG5cdFx0XHR0aGlzLmNtLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLmNtLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XG5cdFx0XHR0aGlzLmNtLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gdGhpcy5jbS5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xuXHRcdH1cblx0fVxuXG5cblx0c3VibWl0KGFyZ3M6IEV2ZW50RGF0YSk6IHZvaWQge1xuXG5cdC8vXHRsZXQgY2FyZFZpZXcgPSA8Q3JlZGl0Q2FyZFZpZXc+dGhpcy5jYXJkLm5hdGl2ZUVsZW1lbnQ7XG5cdC8vXHRsZXQgY2FyZCA9IGNhcmRWaWV3LmNhcmQ7XG5cdFx0Y29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZSgncGtfdGVzdF9KQWdjemt0V1g4amNoamkwYmdISUhqT2UnKTtcblx0XHR2YXIgdmFsdWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJzdHJpbmdLZXlcIiwgXCJObyBzdHJpbmcgdmFsdWVcIik7XG5cdFx0XG5cblxuXHQvL1x0Y29uc3QgY2M6Q2FyZCA9IG5ldyBDYXJkKHRoaXMuY2FyZE51bWJlci5yZXBsYWNlKC9cXCAvZywgJycpLCB0aGlzLmNhcmRNb250aCwgdGhpcy5jYXJkWWVhciwgdGhpcy5jYXJkQ3ZjKTtcblx0XHRcdC8vIHN0cmlwZS5jcmVhdGVUb2tlbihjYy5jYXJkLChlcnJvcix0b2tlbik9Pntcblx0XHRcdC8vIGlmICghZXJyb3IpIHtcblx0XHRcdC8vIFx0Y29uc29sZS5sb2codG9rZW4uZ2V0SWQoKSk7XG5cdFx0XHQvLyBcdGNvbnNvbGUubG9nKHRva2VuLmdldENhcmQoKSk7XG5cdFx0XHQvLyBcdHRoaXMuUGF5bWVudFNlcnZpY2Uuc3VibWl0VG9rZW4odG9rZW4uZ2V0SWQoKSkuc3Vic2NyaWJlKFxuXHRcdFx0Ly8gXHRyZXNwb25zZSA9PiBhbGVydChcIlBheW1lbnQgZG9uZVwiKSxcblx0XHRcdC8vIFx0ZXJyb3IgPT4gKGFsZXJ0KFwidGhlcmUgd2FzIGFuIGVycm9yLCBwbGVhc2UgdHJ5IGFnYWluXCIpKSlcdFxuXG5cdFx0XHQvLyB9IGVsc2Uge1xuXHRcdFx0Ly8gXHRhbGVydChcImluY29yZWN0IGNhcmQgZGF0YVwiKTtcblx0XHRcdC8vIH1cblx0XHRcdC8vIH0pO1xuXHRcdFx0dGhpcy5JbmNvcnBvcmF0aW9uU2VydmljZS5zdWJtaXREYXRhKHRoaXMuZmlyc3ROYW1lLCB0aGlzLmxhc3ROYW1lLCB0aGlzLmVtYWlsLCB0aGlzLmFsMSwgdGhpcy5hbDIsIHRoaXMuY2l0eSwgdGhpcy5wb3N0YWwsIHRoaXMuY291bnRyeSwgdGhpcy5zdGF0ZSwgdGhpcy5kaXJlY3RvcnMsIHRoaXMudXVpZCwgdGhpcy5jb21wYW55TmFtZSwgdGhpcy5jb21wYW55VHlwZSlcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSxcblx0XHRcdFx0ZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG5cdFx0XHQpO1xuXHR9XG59XG4iXX0=
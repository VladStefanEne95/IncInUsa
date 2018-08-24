"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
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
        // if (this.FirstCheckBox) {
        // 	if (!this.FirstCheckBox.nativeElement.checked && this.billing == "") {
        // 		this.router.navigate(["/billing"]);
        // 	} 
        // 	else if (this.FirstCheckBox.nativeElement.checked) {
        // 		const stripe = new Stripe('pk_test_JAgczktWX8jchji0bgHIHjOe');
        // 		const cc:Card = new Card(this.cardNumber.replace(/\ /g, ''), this.cardMonth, this.cardYear, this.cardCvc);
        // 			stripe.createToken(cc.card,(error,token)=>{
        // 			if (!error) {
        // 				this.PaymentService.submitToken(token.getId(), this.payment).subscribe(
        // 				response => alert("Payment done"),
        // 				error => (alert("there was an error, please try again")));	
        // 				this.IncorporationService.submitBilling(this.firstName, this.lastName, this.email, this.al1, this.al2, this.city, this.postal, this.country, this.state, this.uuid, this.emoji)
        // 				.subscribe(
        // 					response => console.log(response),
        // 					error => console.log(error)
        // 				);
        // 				this.IncorporationService.submitData(this.firstName, this.lastName, this.email, this.al1, this.al2, this.city, this.postal, this.country, this.state, this.directors, this.uuid, this.companyName, this.companyType, this.emoji)
        // 				.subscribe(
        // 					response => console.log(response),
        // 					error => console.log(error)
        // 				);
        // 			} else {
        // 				alert("incorect card data");
        // 			}
        // 		});
        // 	}
        // } else {
        // 	const stripe = new Stripe('pk_test_JAgczktWX8jchji0bgHIHjOe');
        // 	const cc:Card = new Card(this.cardNumber.replace(/\ /g, ''), this.cardMonth, this.cardYear, this.cardCvc);
        // 		stripe.createToken(cc.card,(error,token)=>{
        // 			if (!error) {
        // 				this.PaymentService.submitToken(token.getId(), this.payment).subscribe(
        // 				response => alert("Payment done"),
        // 				error => (alert("there was an error, please try again")))
        // 				this.IncorporationService.submitBilling(this.billingfirstName, this.billinglastName, this.billingemail, this.billingal1, this.billingal2, this.billingcity, this.billingpostal, this.billingcountry, this.billingstate, this.uuid, this.billingemoji)
        // 				.subscribe(
        // 					response => console.log(response),
        // 					error => console.log(error)
        // 				);
        // 				this.IncorporationService.submitData(this.firstName, this.lastName, this.email, this.al1, this.al2, this.city, this.postal, this.country, this.state, this.directors, this.uuid, this.companyName, this.companyType, this.emoji)
        // 				.subscribe(
        // 					response => console.log(response),
        // 					error => console.log(error)
        // 				);
        // 			} else {
        // 				alert("incorect card data");
        // 			}
        // 		});
        // }
        this.IncorporationService.submitData(this.firstName, this.lastName, this.email, this.al1, this.al2, this.city, this.postal, this.country, this.state, this.directors, this.uuid, this.companyName, this.companyType, this.emoji)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXltZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSwwQ0FBeUM7QUFDekMsZ0NBQTZCO0FBSTdCLDRFQUF5RTtBQUN6RSw4RkFBMkY7QUFFM0YsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFTbEQ7SUF3REMsMEJBQW9CLElBQVUsRUFBUyxjQUE4QixFQUFTLG9CQUEwQyxFQUFVLE1BQWM7UUFBNUgsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFTLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFTLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBaERoSixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQThDWixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFMUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUMsRUFBRSxDQUFDLENBQUE7WUFDbEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBQyxFQUFFLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELENBQUM7UUFFRCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsNENBQWlCLEdBQWpCLFVBQWtCLEtBQUs7UUFDdEIscUJBQXFCO1FBQ3JCLHFFQUFxRTtRQUNyRSx5RkFBeUY7UUFDekYsd0ZBQXdGO1FBQ3hGLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1FBQ3RGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9FLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDWixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQTtZQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQTtRQUNyRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztnQkFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQy9FLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUM3RSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyRixDQUFDLENBQUEsb0NBQW9DO1lBQ3JDLHNDQUFzQztZQUN0QyxpREFBaUQ7WUFDakQscURBQXFEO1lBQ3JELHFGQUFxRjtZQUNyRixtRkFBbUY7WUFDbkYsMEZBQTBGO1lBQzFGLElBQUk7WUFDSixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN2QyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDbkIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxQixTQUFTLElBQUksR0FBRyxDQUFDO2dCQUNsQixDQUFDO2dCQUNELFNBQVMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsQ0FBQztZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7WUFDM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDNUIsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMzRCxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBRWxCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7WUFDMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLGNBQWMsQ0FBQztZQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRy9ELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFHMUUsc0NBQXNDO1lBQ3RDLDREQUE0RDtZQUM1RCx3REFBd0Q7WUFDeEQsNENBQTRDO1lBQzVDLG1EQUFtRDtZQUNuRCw4Q0FBOEM7WUFDOUMsNkJBQTZCO1lBQzdCLFlBQVk7WUFDWixNQUFNO1lBQ04sS0FBSztZQUNMLGdDQUFnQztZQUNoQyw4REFBOEQ7WUFDOUQsNERBQTREO1lBQzVELG1FQUFtRTtZQUNuRSxXQUFXO1lBQ1gsNENBQTRDO1lBQzVDLDhDQUE4QztZQUM5Qyw2QkFBNkI7WUFDN0IsWUFBWTtZQUNaLE1BQU07WUFDTixLQUFLO1lBRUwsSUFBSTtZQUNKLHNDQUFzQztZQUN0QywrQkFBK0I7UUFDaEMsQ0FBQztJQUVGLENBQUM7SUFFRCxzQ0FBVyxHQUFYLFVBQVksS0FBSztRQUNoQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0IsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzVDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN6RSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN4RSxDQUFDO0lBQ0YsQ0FBQztJQUVELHNDQUFXLEdBQVgsVUFBWSxLQUFLO1FBQ2hCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDL0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDOUUsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN6RSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN4RSxDQUFDO0lBQ0YsQ0FBQztJQUdELHFDQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ2YsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLENBQUM7SUFDRixDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBR0QsaUNBQU0sR0FBTixVQUFPLElBQWU7UUFFckIsNEJBQTRCO1FBQzVCLDBFQUEwRTtRQUMxRSx3Q0FBd0M7UUFDeEMsTUFBTTtRQUNOLHdEQUF3RDtRQUN4RCxtRUFBbUU7UUFFbkUsK0dBQStHO1FBQy9HLGlEQUFpRDtRQUNqRCxtQkFBbUI7UUFDbkIsOEVBQThFO1FBQzlFLHlDQUF5QztRQUN6QyxrRUFBa0U7UUFDbEUsc0xBQXNMO1FBQ3RMLGtCQUFrQjtRQUNsQiwwQ0FBMEM7UUFDMUMsbUNBQW1DO1FBQ25DLFNBQVM7UUFDVCx1T0FBdU87UUFDdk8sa0JBQWtCO1FBQ2xCLDBDQUEwQztRQUMxQyxtQ0FBbUM7UUFDbkMsU0FBUztRQUNULGNBQWM7UUFDZCxtQ0FBbUM7UUFDbkMsT0FBTztRQUNQLFFBQVE7UUFDUixLQUFLO1FBQ0wsV0FBVztRQUNYLGtFQUFrRTtRQUVsRSw4R0FBOEc7UUFDOUcsZ0RBQWdEO1FBQ2hELG1CQUFtQjtRQUNuQiw4RUFBOEU7UUFDOUUseUNBQXlDO1FBQ3pDLGdFQUFnRTtRQUNoRSw0UEFBNFA7UUFDNVAsa0JBQWtCO1FBQ2xCLDBDQUEwQztRQUMxQyxtQ0FBbUM7UUFDbkMsU0FBUztRQUNULHVPQUF1TztRQUN2TyxrQkFBa0I7UUFDbEIsMENBQTBDO1FBQzFDLG1DQUFtQztRQUNuQyxTQUFTO1FBQ1QsY0FBYztRQUNkLG1DQUFtQztRQUNuQyxPQUFPO1FBQ1AsUUFBUTtRQUVSLElBQUk7UUFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNqTyxTQUFTLENBQ1QsVUFBQSxRQUFRLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFyQixDQUFxQixFQUNqQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzNCLENBQUM7SUFDUCxDQUFDO0lBblBrQjtRQUFsQixnQkFBUyxDQUFDLE1BQU0sQ0FBQztrQ0FBTyxpQkFBVTtrREFBQztJQUNoQjtRQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQztrQ0FBUSxpQkFBVTttREFBQztJQUNwQjtRQUFqQixnQkFBUyxDQUFDLEtBQUssQ0FBQztrQ0FBUSxpQkFBVTttREFBQztJQUNYO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDO2tDQUFLLGlCQUFVO2dEQUFDO0lBQ2Q7UUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7a0NBQUssaUJBQVU7Z0RBQUM7SUFDbEI7UUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7a0NBQUssaUJBQVU7Z0RBQUM7SUFDZjtRQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQztrQ0FBSyxpQkFBVTtnREFBQztJQUNsQjtRQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQztrQ0FBUSxpQkFBVTttREFBQztJQUNqQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBUyxpQkFBVTtvREFBQztJQUN0QjtRQUFqQixnQkFBUyxDQUFDLEtBQUssQ0FBQztrQ0FBZ0IsaUJBQVU7MkRBQUM7SUFDeEI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVEsaUJBQVU7bURBQUM7SUF0RDFCLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3RCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdEMsQ0FBQzt5Q0F5RHlCLFdBQUksRUFBeUIsZ0NBQWMsRUFBK0IsNENBQW9CLEVBQWtCLGVBQU07T0F4RHBJLGdCQUFnQixDQWdTNUI7SUFBRCx1QkFBQztDQUFBLEFBaFNELElBZ1NDO0FBaFNZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7Vmlld30gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBDcmVkaXRDYXJkVmlldywgQ2FyZCwgU3RyaXBlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXN0cmlwZSc7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9wYXltZW50L3BheW1lbnQuc2VydmljZSdcclxuaW1wb3J0IHsgSW5jb3Jwb3JhdGlvblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL2luY29ycG9yYXRpb24vaW5jb3Jwb3JhdGlvbi5zZXJ2aWNlJ1xyXG5cclxudmFyIGFwcFNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiUGF5bWVudFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHR0ZW1wbGF0ZVVybDogXCIuL3BheW1lbnQuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsnLi9wYXltZW50LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGF5bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdGNuMSA6bnVtYmVyO1xyXG5cdGNuMiA6bnVtYmVyO1xyXG5cdGNuMyA6bnVtYmVyO1xyXG5cdGNuNCA6bnVtYmVyO1xyXG5cdG9sZFZhbHVlTGVuZ3RoIDpudW1iZXI7XHJcblx0XHJcblx0Y2FyZE51bWJlciA9ICcnO1xyXG5cdGNhcmRNb250aCA9ICcnO1xyXG5cdGNhcmRZZWFyID0gJyc7XHJcblx0Y2FyZEN2YyA9ICcnO1xyXG5cclxuXHRmaXJzdE5hbWUgOnN0cmluZztcclxuXHRsYXN0TmFtZSA6c3RyaW5nO1xyXG5cdGVtYWlsIDpzdHJpbmc7XHJcblx0YWwxIDpzdHJpbmc7XHJcblx0YWwyIDpzdHJpbmc7XHJcblx0Y2l0eSA6c3RyaW5nO1xyXG5cdHBvc3RhbCA6c3RyaW5nO1xyXG5cdGNvdW50cnkgOnN0cmluZztcclxuXHRzdGF0ZSA6c3RyaW5nO1xyXG5cdGNvbXBhbnlOYW1lOiBzdHJpbmc7XHJcblx0Y29tcGFueVR5cGUgOnN0cmluZztcclxuXHRkaXJlY3RvcnMgOnN0cmluZztcclxuXHR1dWlkIDpzdHJpbmc7XHJcblx0cGF5bWVudCA6bnVtYmVyO1xyXG5cdGxhc3RQb3NpdGlvbiA6bnVtYmVyO1xyXG5cdGVtb2ppIDpzdHJpbmc7XHJcblx0YmlsbGluZyA6c3RyaW5nO1xyXG5cclxuXHRiaWxsaW5nZmlyc3ROYW1lIDpzdHJpbmc7XHJcblx0YmlsbGluZ2xhc3ROYW1lIDpzdHJpbmc7XHJcblx0YmlsbGluZ2VtYWlsIDpzdHJpbmc7XHJcblx0YmlsbGluZ2FsMSA6c3RyaW5nO1xyXG5cdGJpbGxpbmdhbDIgOnN0cmluZztcclxuXHRiaWxsaW5nY2l0eSA6c3RyaW5nO1xyXG5cdGJpbGxpbmdwb3N0YWwgOnN0cmluZztcclxuXHRiaWxsaW5nY291bnRyeSA6c3RyaW5nO1xyXG5cdGJpbGxpbmdlbW9qaSA6c3RyaW5nO1xyXG5cdGJpbGxpbmdzdGF0ZSA6c3RyaW5nO1xyXG5cclxuXHRsYXN0Q2FyZE51bWJlciA6c3RyaW5nO1xyXG5cclxuXHRAVmlld0NoaWxkKFwiY2FyZFwiKSBjYXJkOiBFbGVtZW50UmVmO1xyXG5cdEBWaWV3Q2hpbGQoXCJvd25lclwiKSBvd25lcjogRWxlbWVudFJlZjtcclxuXHRAVmlld0NoaWxkKFwiY3ZjXCIpIGN2Y0lkOiBFbGVtZW50UmVmO1xyXG5cdEBWaWV3Q2hpbGQoXCJjYXJkWWVhcklkXCIpIGN5OiBFbGVtZW50UmVmO1xyXG5cdEBWaWV3Q2hpbGQoXCJjYXJkTW9udGhJZFwiKSBjbTogRWxlbWVudFJlZjtcclxuXHRAVmlld0NoaWxkKFwiZnVsbGNhcmRcIikgZmM6IEVsZW1lbnRSZWY7XHJcblx0QFZpZXdDaGlsZChcIm1pbmljYXJkXCIpIG1jOiBFbGVtZW50UmVmO1xyXG5cdEBWaWV3Q2hpbGQoXCJjYXJkMVwiKSBjYXJkMTogRWxlbWVudFJlZjtcclxuXHRAVmlld0NoaWxkKFwiY2FyZE5yXCIpIGNhcmROcjogRWxlbWVudFJlZjtcclxuXHRAVmlld0NoaWxkKFwiQ0IxXCIpIEZpcnN0Q2hlY2tCb3g6IEVsZW1lbnRSZWY7XHJcblx0QFZpZXdDaGlsZChcImR1bW15XCIpIGR1bW15OiBFbGVtZW50UmVmO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHB1YmxpYyBQYXltZW50U2VydmljZTogUGF5bWVudFNlcnZpY2UsIHB1YmxpYyBJbmNvcnBvcmF0aW9uU2VydmljZTogSW5jb3Jwb3JhdGlvblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuXHRcdHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5jb21wYW55TmFtZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNvbXBhbnlOYW1lXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5jb21wYW55VHlwZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNvbXBhbnlUeXBlXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5maXJzdE5hbWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJmaXJzdE5hbWVcIiwgXCJcIik7XHJcblx0XHR0aGlzLmxhc3ROYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwibGFzdE5hbWVcIiwgXCJcIik7XHJcblx0XHR0aGlzLnV1aWQgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1dWlkXCIsIFwidGVzdFwiKTtcclxuXHRcdHRoaXMuZW1haWwgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJlbWFpbFwiLCBcIlwiKTtcclxuXHRcdHRoaXMuYWwxID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWwxXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5hbDIgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbDJcIiwgXCJcIik7XHJcblx0XHR0aGlzLmNpdHkgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjaXR5XCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5wb3N0YWwgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJwb3N0YWxcIiwgXCJcIik7XHJcblx0XHR0aGlzLmNvdW50cnkgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjb3VudHJ5XCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInN0YXRlXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5kaXJlY3RvcnMgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJkaXJlY3RvcnNcIiwgXCJcIik7XHJcblx0XHR0aGlzLmJpbGxpbmcgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJiaWxsaW5nXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5lbW9qaSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImVtb2ppXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5wYXltZW50ID0gcGFyc2VJbnQoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwicGF5bWVudFwiLCAwKSkgKyA1OTU7XHJcblx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiI21pbmljYXJkIHt2aXNpYmlsaXR5OiBjb2xsYXBzZWR9XCIpO1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy5iaWxsaW5nKTtcclxuXHJcblx0XHRpZiAodGhpcy5iaWxsaW5nICE9IFwiXCIpIHtcclxuXHRcdFx0dGhpcy5iaWxsaW5nID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYmlsbGluZ1wiLFwiXCIpXHJcblx0XHRcdHRoaXMuYmlsbGluZ2ZpcnN0TmFtZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImJpbGxpbmdmaXJzdE5hbWVcIiwgXCJcIik7XHJcblx0XHRcdHRoaXMuYmlsbGluZ2xhc3ROYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYmlsbGluZ2xhc3ROYW1lXCIsIFwiXCIpO1xyXG5cdFx0XHR0aGlzLmJpbGxpbmdlbWFpbCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImJpbGxpbmdlbWFpbFwiLCBcIlwiKTsgXHJcblx0XHRcdHRoaXMuYmlsbGluZ2FsMSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImJpbGxpbmdhbDFcIixcIlwiKTtcclxuXHRcdFx0dGhpcy5iaWxsaW5nYWwyID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYmlsbGluZ2FsMlwiLFwiXCIpO1xyXG5cdFx0XHR0aGlzLmJpbGxpbmdjaXR5ID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYmlsbGluZ2NpdHlcIiwgXCJcIik7XHJcblx0XHRcdHRoaXMuYmlsbGluZ3Bvc3RhbCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImJpbGxpbmdwb3N0YWxcIiwgXCJcIik7XHJcblx0XHRcdHRoaXMuYmlsbGluZ2NvdW50cnkgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJiaWxsaW5nY291bnRyeVwiLCBcIlwiKTtcclxuXHRcdFx0dGhpcy5iaWxsaW5nZW1vamkgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJiaWxsaW5nZW1vamlcIiwgXCJcIik7XHJcblx0XHRcdHRoaXMuYmlsbGluZ3N0YXRlID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYmlsbGluZ3N0YXRlXCIsIFwiXCIpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHR0aGlzLm9sZFZhbHVlTGVuZ3RoID0gMDtcclxuXHRcdHRoaXMubGFzdENhcmROdW1iZXIgPSBcIlwiO1xyXG5cdFx0dGhpcy5sYXN0UG9zaXRpb24gPSAwO1xyXG5cdH1cclxuXHJcblx0Y2FyZE51bWJlckNoYW5nZWQodmFsdWUpIHtcclxuXHRcdC8vY29uc29sZS5sb2codmFsdWUpO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyh0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LmFuZHJvaWQuZ2V0U2VsZWN0aW9uU3RhcnQoKSk7XHJcblx0XHQvL2NvbnNvbGUubG9nKHRoaXMubGFzdFBvc2l0aW9uIC0gdGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5hbmRyb2lkLmdldFNlbGVjdGlvblN0YXJ0KCkpO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyh0aGlzLmxhc3RQb3NpdGlvbiwgdGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5hbmRyb2lkLmdldFNlbGVjdGlvblN0YXJ0KCkpO1xyXG5cdFx0bGV0IGNoYW5nZSA9IDA7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLmxhc3RQb3NpdGlvbiwgdGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5hbmRyb2lkLmdldFNlbGVjdGlvblN0YXJ0KCkpO1xyXG5cdFx0aWYgKHRoaXMubGFzdFBvc2l0aW9uID4gdGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5hbmRyb2lkLmdldFNlbGVjdGlvblN0YXJ0KCkpIHtcclxuXHRcdFx0Y2hhbmdlID0gMTtcclxuXHRcdH1cclxuXHRcdGlmICggdmFsdWUubGVuZ3RoID4gMTkgKSB7XHJcblx0XHRcdHRoaXMuY2FyZE51bWJlciA9IHRoaXMubGFzdENhcmROdW1iZXJcclxuXHRcdFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC50ZXh0ID0gdGhpcy5sYXN0Q2FyZE51bWJlclxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHZhbHVlLmxlbmd0aCA9PSAxOSkge1xyXG5cdFx0XHRcdHRoaXMub3duZXIubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG5cdFx0XHRcdHRoaXMubGFzdENhcmROdW1iZXIgPSB2YWx1ZTtcclxuXHRcdFx0XHR0aGlzLm93bmVyLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLm93bmVyLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XHJcblx0XHRcdFx0dGhpcy5vd25lci5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCA9IHRoaXMub3duZXIubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aDtcclxuXHRcdFx0XHR0aGlzLm93bmVyLm5hdGl2ZUVsZW1lbnQuYW5kcm9pZC5zZXRTZWxlY3Rpb24odGhpcy5vd25lci5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoKTtcclxuXHRcdFx0fS8vIGVsc2UgaWYgKHZhbHVlLmxlbmd0aCAlIDUgPT0gNCkge1xyXG5cdFx0XHQvLyBcdHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuXHRcdFx0Ly8gXHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnRleHQgPSB2YWx1ZSArIFwiIFwiO1xyXG5cdFx0XHQvLyBcdHRoaXMuY2FyZE51bWJlciA9IHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQudGV4dDtcclxuXHRcdFx0Ly8gXHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aDtcclxuXHRcdFx0Ly8gXHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCA9IHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XHJcblx0XHRcdC8vIFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5hbmRyb2lkLnNldFNlbGVjdGlvbih0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoKTtcclxuXHRcdFx0Ly8gfVxyXG5cdFx0XHRsZXQgbm9TcGFjZSA9IHZhbHVlLnJlcGxhY2UoL1xcIC9nLCAnJyk7XHJcblx0XHRcdGxldCB3aXRoU3BhY2UgPSBcIlwiO1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5vU3BhY2UubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRpZiAoaSAlIDQgPT0gMCAmJiBpICE9IDApIHtcclxuXHRcdFx0XHRcdHdpdGhTcGFjZSArPSBcIiBcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0d2l0aFNwYWNlICs9IG5vU3BhY2VbaV07XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC50ZXh0ID0gd2l0aFNwYWNlO1xyXG5cdFx0XHR0aGlzLmNhcmROdW1iZXIgPSB3aXRoU3BhY2U7XHJcblx0XHRcdGxldCBjdXJzb3JQb3NpdGlvbiA9IHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XHJcblx0XHRcdHZhbHVlID0gd2l0aFNwYWNlO1xyXG5cclxuXHRcdFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IGN1cnNvclBvc2l0aW9uO1xyXG5cdFx0XHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCA9IGN1cnNvclBvc2l0aW9uO1xyXG5cdFx0XHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LmFuZHJvaWQuc2V0U2VsZWN0aW9uKGN1cnNvclBvc2l0aW9uKTtcdFxyXG5cclxuXHRcclxuXHRcdFx0dGhpcy5sYXN0UG9zaXRpb24gPSB0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LmFuZHJvaWQuZ2V0U2VsZWN0aW9uU3RhcnQoKTtcclxuXHJcblxyXG5cdFx0XHQvL1VzZSBuYXRpdmUgYXBpJ3MgZm9yIGN1cnNvciBwb3NpdGlvblxyXG5cdFx0XHQvLyBkb2Vzbid0IHdvcmsgd2hlbiB0aGVyZSBpcyB0aGUgc2FtZSBudW1iZXIgbXVsdGlwbGUgdGltZXNcclxuXHRcdFx0Ly8gdGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5hbmRyb2lkLmdldFNlbGVjdGlvblN0YXJ0KClcclxuXHRcdFx0Ly8gaWYgKHZhbHVlLmxlbmd0aCA+IHRoaXMub2xkVmFsdWVMZW5ndGgpIHtcclxuXHRcdFx0Ly8gXHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub2xkVmFsdWVMZW5ndGg7IGkrKykge1xyXG5cdFx0XHQvLyBcdFx0aWYgKHRoaXMubGFzdENhcmROdW1iZXJbaV0gIT0gdmFsdWVbaV0pIHtcclxuXHRcdFx0Ly8gXHRcdFx0Y3Vyc29yUG9zaXRpb24gPSBpICsgMTtcclxuXHRcdFx0Ly8gXHRcdFx0YnJlYWs7XHJcblx0XHRcdC8vIFx0XHR9XHJcblx0XHRcdC8vIFx0fVxyXG5cdFx0XHQvLyBcdGNvbnNvbGUubG9nKGN1cnNvclBvc2l0aW9uKTtcclxuXHRcdFx0Ly8gXHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gY3Vyc29yUG9zaXRpb247XHJcblx0XHRcdC8vIFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgPSBjdXJzb3JQb3NpdGlvbjtcclxuXHRcdFx0Ly8gXHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LmFuZHJvaWQuc2V0U2VsZWN0aW9uKGN1cnNvclBvc2l0aW9uKTtcclxuXHRcdFx0Ly8gfSBlbHNlIHtcclxuXHRcdFx0Ly8gXHRmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdC8vIFx0XHRpZiAodGhpcy5sYXN0Q2FyZE51bWJlcltpXSAhPSB2YWx1ZVtpXSkge1xyXG5cdFx0XHQvLyBcdFx0XHRjdXJzb3JQb3NpdGlvbiA9IGkgKyAxO1xyXG5cdFx0XHQvLyBcdFx0XHRicmVhaztcclxuXHRcdFx0Ly8gXHRcdH1cclxuXHRcdFx0Ly8gXHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdC8vIH1cclxuXHRcdFx0Ly8gdGhpcy5vbGRWYWx1ZUxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcclxuXHRcdFx0Ly8gdGhpcy5sYXN0Q2FyZE51bWJlciA9IHZhbHVlO1xyXG5cdFx0fVxyXG4gXHJcblx0fVxyXG5cclxuXHRkYXRlQ2hhbmdlZCh2YWx1ZSkge1xyXG5cdFx0aWYgKHZhbHVlLmxlbmd0aCA9PSAyKSB7XHJcblx0XHRcdHRoaXMuY2FyZE1vbnRoID0gdmFsdWU7XHJcblx0XHRcdHRoaXMuY3kubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZhbHVlLmxlbmd0aCA+IDIpIHtcclxuXHRcdFx0dGhpcy5jYXJkTW9udGggPSB2YWx1ZS5zdWJzdHIoMCwgMik7XHJcblx0XHRcdHRoaXMuY20ubmF0aXZlRWxlbWVudC50ZXh0ID0gdGhpcy5jYXJkTW9udGg7XHJcblx0XHRcdHRoaXMuY3kubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG5cdFx0XHR0aGlzLmN5Lm5hdGl2ZUVsZW1lbnQudGV4dCA9IHZhbHVlLnN1YnN0cigyLCAxKTtcclxuXHRcdFx0dGhpcy5jeS5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5jeS5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xyXG5cdFx0XHR0aGlzLmN5Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gdGhpcy5jeS5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0eWVhckNoYW5nZWQodmFsdWUpIHtcclxuXHRcdGlmICh2YWx1ZS5sZW5ndGggPT0gMikge1xyXG5cdFx0XHR0aGlzLmNhcmRZZWFyID0gdmFsdWU7XHJcblx0XHRcdHRoaXMuY3ZjSWQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZhbHVlLmxlbmd0aCA+IDIpIHtcclxuXHRcdFx0dGhpcy5jYXJkWWVhciA9IHZhbHVlLnN1YnN0cigwLCAyKTtcclxuXHRcdFx0dGhpcy5jeS5uYXRpdmVFbGVtZW50LnRleHQgPSB0aGlzLmNhcmRZZWFyO1xyXG5cdFx0XHR0aGlzLmN2Y0lkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuXHRcdFx0dGhpcy5jdmNJZC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5jdmNJZC5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xyXG5cdFx0XHR0aGlzLmN2Y0lkLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gdGhpcy5jdmNJZC5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZhbHVlLmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdHRoaXMuY20ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG5cdFx0XHR0aGlzLmNtLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLmNtLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XHJcblx0XHRcdHRoaXMuY20ubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgPSB0aGlzLmNtLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRcclxuXHRjdmNDaGFuZ2VkKHZhbHVlKSB7XHJcblx0XHRpZiAodmFsdWUubGVuZ3RoID09IDMpIHtcclxuXHRcdFx0dGhpcy5jYXJkQ3ZjID0gdmFsdWU7XHJcblx0XHR9IGVsc2UgaWYgKHZhbHVlLmxlbmd0aCA+IDMpIHtcclxuXHRcdFx0dmFsdWUgPSB2YWx1ZS5zdWJzdHIoMCwgMyk7XHJcblx0XHRcdHRoaXMuY2FyZEN2YyA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLmN2Y0lkLm5hdGl2ZUVsZW1lbnQudGV4dCA9IHZhbHVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZWRpdEJpbGxpbmcoKSB7XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYmlsbGluZ1wiXSk7XHJcblx0fVxyXG5cclxuXHJcblx0c3VibWl0KGFyZ3M6IEV2ZW50RGF0YSk6IHZvaWQge1xyXG5cclxuXHRcdC8vIGlmICh0aGlzLkZpcnN0Q2hlY2tCb3gpIHtcclxuXHRcdC8vIFx0aWYgKCF0aGlzLkZpcnN0Q2hlY2tCb3gubmF0aXZlRWxlbWVudC5jaGVja2VkICYmIHRoaXMuYmlsbGluZyA9PSBcIlwiKSB7XHJcblx0XHQvLyBcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2JpbGxpbmdcIl0pO1xyXG5cdFx0Ly8gXHR9IFxyXG5cdFx0Ly8gXHRlbHNlIGlmICh0aGlzLkZpcnN0Q2hlY2tCb3gubmF0aXZlRWxlbWVudC5jaGVja2VkKSB7XHJcblx0XHQvLyBcdFx0Y29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZSgncGtfdGVzdF9KQWdjemt0V1g4amNoamkwYmdISUhqT2UnKTtcclxuXHRcdFx0XHRcclxuXHRcdC8vIFx0XHRjb25zdCBjYzpDYXJkID0gbmV3IENhcmQodGhpcy5jYXJkTnVtYmVyLnJlcGxhY2UoL1xcIC9nLCAnJyksIHRoaXMuY2FyZE1vbnRoLCB0aGlzLmNhcmRZZWFyLCB0aGlzLmNhcmRDdmMpO1xyXG5cdFx0Ly8gXHRcdFx0c3RyaXBlLmNyZWF0ZVRva2VuKGNjLmNhcmQsKGVycm9yLHRva2VuKT0+e1xyXG5cdFx0Ly8gXHRcdFx0aWYgKCFlcnJvcikge1xyXG5cdFx0Ly8gXHRcdFx0XHR0aGlzLlBheW1lbnRTZXJ2aWNlLnN1Ym1pdFRva2VuKHRva2VuLmdldElkKCksIHRoaXMucGF5bWVudCkuc3Vic2NyaWJlKFxyXG5cdFx0Ly8gXHRcdFx0XHRyZXNwb25zZSA9PiBhbGVydChcIlBheW1lbnQgZG9uZVwiKSxcclxuXHRcdC8vIFx0XHRcdFx0ZXJyb3IgPT4gKGFsZXJ0KFwidGhlcmUgd2FzIGFuIGVycm9yLCBwbGVhc2UgdHJ5IGFnYWluXCIpKSk7XHRcclxuXHRcdC8vIFx0XHRcdFx0dGhpcy5JbmNvcnBvcmF0aW9uU2VydmljZS5zdWJtaXRCaWxsaW5nKHRoaXMuZmlyc3ROYW1lLCB0aGlzLmxhc3ROYW1lLCB0aGlzLmVtYWlsLCB0aGlzLmFsMSwgdGhpcy5hbDIsIHRoaXMuY2l0eSwgdGhpcy5wb3N0YWwsIHRoaXMuY291bnRyeSwgdGhpcy5zdGF0ZSwgdGhpcy51dWlkLCB0aGlzLmVtb2ppKVxyXG5cdFx0Ly8gXHRcdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0Ly8gXHRcdFx0XHRcdHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSxcclxuXHRcdC8vIFx0XHRcdFx0XHRlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuXHRcdC8vIFx0XHRcdFx0KTtcclxuXHRcdC8vIFx0XHRcdFx0dGhpcy5JbmNvcnBvcmF0aW9uU2VydmljZS5zdWJtaXREYXRhKHRoaXMuZmlyc3ROYW1lLCB0aGlzLmxhc3ROYW1lLCB0aGlzLmVtYWlsLCB0aGlzLmFsMSwgdGhpcy5hbDIsIHRoaXMuY2l0eSwgdGhpcy5wb3N0YWwsIHRoaXMuY291bnRyeSwgdGhpcy5zdGF0ZSwgdGhpcy5kaXJlY3RvcnMsIHRoaXMudXVpZCwgdGhpcy5jb21wYW55TmFtZSwgdGhpcy5jb21wYW55VHlwZSwgdGhpcy5lbW9qaSlcclxuXHRcdC8vIFx0XHRcdFx0LnN1YnNjcmliZShcclxuXHRcdC8vIFx0XHRcdFx0XHRyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSksXHJcblx0XHQvLyBcdFx0XHRcdFx0ZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcblx0XHQvLyBcdFx0XHRcdCk7XHJcblx0XHQvLyBcdFx0XHR9IGVsc2Uge1xyXG5cdFx0Ly8gXHRcdFx0XHRhbGVydChcImluY29yZWN0IGNhcmQgZGF0YVwiKTtcclxuXHRcdC8vIFx0XHRcdH1cclxuXHRcdC8vIFx0XHR9KTtcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gfSBlbHNlIHtcclxuXHRcdC8vIFx0Y29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZSgncGtfdGVzdF9KQWdjemt0V1g4amNoamkwYmdISUhqT2UnKTtcclxuXHRcdFx0XHJcblx0XHQvLyBcdGNvbnN0IGNjOkNhcmQgPSBuZXcgQ2FyZCh0aGlzLmNhcmROdW1iZXIucmVwbGFjZSgvXFwgL2csICcnKSwgdGhpcy5jYXJkTW9udGgsIHRoaXMuY2FyZFllYXIsIHRoaXMuY2FyZEN2Yyk7XHJcblx0XHQvLyBcdFx0c3RyaXBlLmNyZWF0ZVRva2VuKGNjLmNhcmQsKGVycm9yLHRva2VuKT0+e1xyXG5cdFx0Ly8gXHRcdFx0aWYgKCFlcnJvcikge1xyXG5cdFx0Ly8gXHRcdFx0XHR0aGlzLlBheW1lbnRTZXJ2aWNlLnN1Ym1pdFRva2VuKHRva2VuLmdldElkKCksIHRoaXMucGF5bWVudCkuc3Vic2NyaWJlKFxyXG5cdFx0Ly8gXHRcdFx0XHRyZXNwb25zZSA9PiBhbGVydChcIlBheW1lbnQgZG9uZVwiKSxcclxuXHRcdC8vIFx0XHRcdFx0ZXJyb3IgPT4gKGFsZXJ0KFwidGhlcmUgd2FzIGFuIGVycm9yLCBwbGVhc2UgdHJ5IGFnYWluXCIpKSlcclxuXHRcdC8vIFx0XHRcdFx0dGhpcy5JbmNvcnBvcmF0aW9uU2VydmljZS5zdWJtaXRCaWxsaW5nKHRoaXMuYmlsbGluZ2ZpcnN0TmFtZSwgdGhpcy5iaWxsaW5nbGFzdE5hbWUsIHRoaXMuYmlsbGluZ2VtYWlsLCB0aGlzLmJpbGxpbmdhbDEsIHRoaXMuYmlsbGluZ2FsMiwgdGhpcy5iaWxsaW5nY2l0eSwgdGhpcy5iaWxsaW5ncG9zdGFsLCB0aGlzLmJpbGxpbmdjb3VudHJ5LCB0aGlzLmJpbGxpbmdzdGF0ZSwgdGhpcy51dWlkLCB0aGlzLmJpbGxpbmdlbW9qaSlcclxuXHRcdC8vIFx0XHRcdFx0LnN1YnNjcmliZShcclxuXHRcdC8vIFx0XHRcdFx0XHRyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSksXHJcblx0XHQvLyBcdFx0XHRcdFx0ZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcblx0XHQvLyBcdFx0XHRcdCk7XHJcblx0XHQvLyBcdFx0XHRcdHRoaXMuSW5jb3Jwb3JhdGlvblNlcnZpY2Uuc3VibWl0RGF0YSh0aGlzLmZpcnN0TmFtZSwgdGhpcy5sYXN0TmFtZSwgdGhpcy5lbWFpbCwgdGhpcy5hbDEsIHRoaXMuYWwyLCB0aGlzLmNpdHksIHRoaXMucG9zdGFsLCB0aGlzLmNvdW50cnksIHRoaXMuc3RhdGUsIHRoaXMuZGlyZWN0b3JzLCB0aGlzLnV1aWQsIHRoaXMuY29tcGFueU5hbWUsIHRoaXMuY29tcGFueVR5cGUsIHRoaXMuZW1vamkpXHJcblx0XHQvLyBcdFx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHQvLyBcdFx0XHRcdFx0cmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpLFxyXG5cdFx0Ly8gXHRcdFx0XHRcdGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdFx0Ly8gXHRcdFx0XHQpO1xyXG5cdFx0Ly8gXHRcdFx0fSBlbHNlIHtcclxuXHRcdC8vIFx0XHRcdFx0YWxlcnQoXCJpbmNvcmVjdCBjYXJkIGRhdGFcIik7XHJcblx0XHQvLyBcdFx0XHR9XHJcblx0XHQvLyBcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0Ly8gfVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5JbmNvcnBvcmF0aW9uU2VydmljZS5zdWJtaXREYXRhKHRoaXMuZmlyc3ROYW1lLCB0aGlzLmxhc3ROYW1lLCB0aGlzLmVtYWlsLCB0aGlzLmFsMSwgdGhpcy5hbDIsIHRoaXMuY2l0eSwgdGhpcy5wb3N0YWwsIHRoaXMuY291bnRyeSwgdGhpcy5zdGF0ZSwgdGhpcy5kaXJlY3RvcnMsIHRoaXMudXVpZCwgdGhpcy5jb21wYW55TmFtZSwgdGhpcy5jb21wYW55VHlwZSwgdGhpcy5lbW9qaSlcclxuXHRcdFx0XHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHRcdFx0XHRyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSksXHJcblx0XHRcdFx0XHRcdFx0ZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcblx0XHRcdFx0XHRcdCk7XHJcblx0fVxyXG59XHJcbiJdfQ==
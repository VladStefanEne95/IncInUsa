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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXltZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSwwQ0FBeUM7QUFDekMsZ0NBQTZCO0FBRTdCLDJEQUFtRTtBQUVuRSw0RUFBeUU7QUFDekUsOEZBQTJGO0FBRTNGLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBU2xEO0lBeUNDLDBCQUFvQixJQUFVLEVBQVMsY0FBOEIsRUFBUyxvQkFBMEMsRUFBVSxNQUFjO1FBQTVILFNBQUksR0FBSixJQUFJLENBQU07UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBUyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWpDaEosZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFlBQU8sR0FBRyxFQUFFLENBQUM7UUErQlosSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDQyx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsSUFBSSxHQUFHLFdB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QkFBUyxDQUFDLGFBQWEsQ0FBQztrQ0FBSyxpQkFBVTtnREFBQztJQUNsQjtRQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQztrQ0FBSyxpQkFBVTtnREFBQztJQUNmO1FBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDO2tDQUFLLGlCQUFVO2dEQUFDO0lBQ2xCO1FBQW5CLGdCQUFTLENBQUMsT0FBTyxDQUFDO2tDQUFRLGlCQUFVO21EQUFDO0lBQ2pCO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFTLGlCQUFVO29EQUFDO0lBQ3RCO1FBQWpCLGdCQUFTLENBQUMsS0FBSyxDQUFDO2tDQUFnQixpQkFBVTsyREFBQztJQXZDaEMsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDdEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN0QyxDQUFDO3lDQTBDeUIsV0FBSSxFQUF5QixnQ0FBYyxFQUErQiw0Q0FBb0IsRUFBa0IsZUFBTTtPQXpDcEksZ0JBQWdCLENBb001QjtJQUFELHVCQUFDO0NBQUEsQUFwTUQsSUFvTUM7QUFwTVksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtWaWV3fSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCB7IENyZWRpdENhcmRWaWV3LCBDYXJkLCBTdHJpcGUgfSBmcm9tICduYXRpdmVzY3JpcHQtc3RyaXBlJztcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL3BheW1lbnQvcGF5bWVudC5zZXJ2aWNlJ1xyXG5pbXBvcnQgeyBJbmNvcnBvcmF0aW9uU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvaW5jb3Jwb3JhdGlvbi9pbmNvcnBvcmF0aW9uLnNlcnZpY2UnXHJcblxyXG52YXIgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJQYXltZW50XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vcGF5bWVudC5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWycuL3BheW1lbnQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXltZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblx0Y24xIDpudW1iZXI7XHJcblx0Y24yIDpudW1iZXI7XHJcblx0Y24zIDpudW1iZXI7XHJcblx0Y240IDpudW1iZXI7XHJcblx0b2xkVmFsdWVMZW5ndGggOm51bWJlcjtcclxuXHRcclxuXHRjYXJkTnVtYmVyID0gJyc7XHJcblx0Y2FyZE1vbnRoID0gJyc7XHJcblx0Y2FyZFllYXIgPSAnJztcclxuXHRjYXJkQ3ZjID0gJyc7XHJcblxyXG5cdGZpcnN0TmFtZSA6c3RyaW5nO1xyXG5cdGxhc3ROYW1lIDpzdHJpbmc7XHJcblx0ZW1haWwgOnN0cmluZztcclxuXHRhbDEgOnN0cmluZztcclxuXHRhbDIgOnN0cmluZztcclxuXHRjaXR5IDpzdHJpbmc7XHJcblx0cG9zdGFsIDpudW1iZXI7XHJcblx0Y291bnRyeSA6c3RyaW5nO1xyXG5cdHN0YXRlIDpzdHJpbmc7XHJcblx0Y29tcGFueU5hbWU6IHN0cmluZztcclxuXHRjb21wYW55VHlwZSA6c3RyaW5nO1xyXG5cdGRpcmVjdG9ycyA6c3RyaW5nO1xyXG5cdHV1aWQgOnN0cmluZztcclxuXHRwYXltZW50IDpudW1iZXI7XHJcblxyXG5cdGxhc3RDYXJkTnVtYmVyIDpzdHJpbmc7XHJcblxyXG5cdEBWaWV3Q2hpbGQoXCJjYXJkXCIpIGNhcmQ6IEVsZW1lbnRSZWY7XHJcblx0QFZpZXdDaGlsZChcIm93bmVyXCIpIG93bmVyOiBFbGVtZW50UmVmO1xyXG5cdEBWaWV3Q2hpbGQoXCJjdmNcIikgY3ZjOiBFbGVtZW50UmVmO1xyXG5cdEBWaWV3Q2hpbGQoXCJjYXJkWWVhcklkXCIpIGN5OiBFbGVtZW50UmVmO1xyXG5cdEBWaWV3Q2hpbGQoXCJjYXJkTW9udGhJZFwiKSBjbTogRWxlbWVudFJlZjtcclxuXHRAVmlld0NoaWxkKFwiZnVsbGNhcmRcIikgZmM6IEVsZW1lbnRSZWY7XHJcblx0QFZpZXdDaGlsZChcIm1pbmljYXJkXCIpIG1jOiBFbGVtZW50UmVmO1xyXG5cdEBWaWV3Q2hpbGQoXCJjYXJkMVwiKSBjYXJkMTogRWxlbWVudFJlZjtcclxuXHRAVmlld0NoaWxkKFwiY2FyZE5yXCIpIGNhcmROcjogRWxlbWVudFJlZjtcclxuXHRAVmlld0NoaWxkKFwiQ0IxXCIpIEZpcnN0Q2hlY2tCb3g6IEVsZW1lbnRSZWY7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHVibGljIFBheW1lbnRTZXJ2aWNlOiBQYXltZW50U2VydmljZSwgcHVibGljIEluY29ycG9yYXRpb25TZXJ2aWNlOiBJbmNvcnBvcmF0aW9uU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG5cdFx0cGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKTogdm9pZCB7XHJcblx0XHQvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuXHRcdHRoaXMuY29tcGFueU5hbWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjb21wYW55TmFtZVwiLCBcIlwiKTtcclxuXHRcdHRoaXMuY29tcGFueVR5cGUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjb21wYW55VHlwZVwiLCBcIlwiKTtcclxuXHRcdHRoaXMuZmlyc3ROYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiZmlyc3ROYW1lXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5sYXN0TmFtZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImxhc3ROYW1lXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy51dWlkID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidXVpZFwiLCBcInRlc3RcIik7XHJcblx0XHR0aGlzLmVtYWlsID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiZW1haWxcIiwgXCJcIik7XHJcblx0XHR0aGlzLmFsMSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsMVwiLCBcIlwiKTtcclxuXHRcdHRoaXMuYWwyID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWwyXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5jaXR5ID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY2l0eVwiLCBcIlwiKTtcclxuXHRcdHRoaXMucG9zdGFsID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwicG9zdGFsXCIsIDApO1xyXG5cdFx0dGhpcy5jb3VudHJ5ID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiY291bnRyeVwiLCBcIlwiKTtcclxuXHRcdHRoaXMuc3RhdGUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJzdGF0ZVwiLCBcIlwiKTtcclxuXHRcdHRoaXMuZGlyZWN0b3JzID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiZGlyZWN0b3JzXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5wYXltZW50ID0gcGFyc2VJbnQoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwicGF5bWVudFwiLCAwKSkgKyA1OTU7XHJcblx0XHR0aGlzLnBhZ2UuYWRkQ3NzKFwiI21pbmljYXJkIHt2aXNpYmlsaXR5OiBjb2xsYXBzZWR9XCIpO1xyXG5cdFx0XHJcblx0XHR0aGlzLm9sZFZhbHVlTGVuZ3RoID0gMDtcclxuXHRcdHRoaXMubGFzdENhcmROdW1iZXIgPSBcIlwiO1xyXG5cdH1cclxuXHJcblx0Y2FyZE51bWJlckNoYW5nZWQodmFsdWUpIHtcclxuXHRcdC8vY29uc29sZS5sb2codmFsdWUpO1xyXG5cdFx0aWYgKCB2YWx1ZS5sZW5ndGggPiAxOSApIHtcclxuXHRcdFx0dGhpcy5jYXJkTnVtYmVyID0gdGhpcy5sYXN0Q2FyZE51bWJlclxyXG5cdFx0XHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnRleHQgPSB0aGlzLmxhc3RDYXJkTnVtYmVyXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodmFsdWUubGVuZ3RoID09IDE5KSB7XHJcblx0XHRcdFx0dGhpcy5vd25lci5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcblx0XHRcdFx0dGhpcy5sYXN0Q2FyZE51bWJlciA9IHZhbHVlO1xyXG5cdFx0XHRcdHRoaXMub3duZXIubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHRoaXMub3duZXIubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aDtcclxuXHRcdFx0XHR0aGlzLm93bmVyLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gdGhpcy5vd25lci5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xyXG5cdFx0XHRcdHRoaXMub3duZXIubmF0aXZlRWxlbWVudC5hbmRyb2lkLnNldFNlbGVjdGlvbih0aGlzLm93bmVyLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGgpO1xyXG5cdFx0XHR9Ly8gZWxzZSBpZiAodmFsdWUubGVuZ3RoICUgNSA9PSA0KSB7XHJcblx0XHRcdC8vIFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG5cdFx0XHQvLyBcdHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQudGV4dCA9IHZhbHVlICsgXCIgXCI7XHJcblx0XHRcdC8vIFx0dGhpcy5jYXJkTnVtYmVyID0gdGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC50ZXh0O1xyXG5cdFx0XHQvLyBcdHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xyXG5cdFx0XHQvLyBcdHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gdGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aDtcclxuXHRcdFx0Ly8gXHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LmFuZHJvaWQuc2V0U2VsZWN0aW9uKHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGgpO1xyXG5cdFx0XHQvLyB9XHJcblx0XHRcdGxldCBub1NwYWNlID0gdmFsdWUucmVwbGFjZSgvXFwgL2csICcnKTtcclxuXHRcdFx0bGV0IHdpdGhTcGFjZSA9IFwiXCI7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbm9TcGFjZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGlmIChpICUgNCA9PSAwICYmIGkgIT0gMCkge1xyXG5cdFx0XHRcdFx0d2l0aFNwYWNlICs9IFwiIFwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR3aXRoU3BhY2UgKz0gbm9TcGFjZVtpXTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnRleHQgPSB3aXRoU3BhY2U7XHJcblx0XHRcdHRoaXMuY2FyZE51bWJlciA9IHdpdGhTcGFjZTtcclxuXHRcdFx0bGV0IGN1cnNvclBvc2l0aW9uID0gdGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aDtcclxuXHRcdFx0dmFsdWUgPSB3aXRoU3BhY2U7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLmNhcmROci5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gY3Vyc29yUG9zaXRpb247XHJcblx0XHRcdHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gY3Vyc29yUG9zaXRpb247XHJcblx0XHRcdHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQuYW5kcm9pZC5zZXRTZWxlY3Rpb24oY3Vyc29yUG9zaXRpb24pO1xyXG5cclxuXHRcdFx0Ly9Vc2UgbmF0aXZlIGFwaSdzIGZvciBjdXJzb3IgcG9zaXRpb25cclxuXHRcdFx0Ly8gZG9lc24ndCB3b3JrIHdoZW4gdGhlcmUgaXMgdGhlIHNhbWUgbnVtYmVyIG11bHRpcGxlIHRpbWVzXHJcblx0XHRcdC8vIHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQuYW5kcm9pZC5nZXRTZWxlY3Rpb25TdGFydCgpXHJcblx0XHRcdC8vIGlmICh2YWx1ZS5sZW5ndGggPiB0aGlzLm9sZFZhbHVlTGVuZ3RoKSB7XHJcblx0XHRcdC8vIFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9sZFZhbHVlTGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Ly8gXHRcdGlmICh0aGlzLmxhc3RDYXJkTnVtYmVyW2ldICE9IHZhbHVlW2ldKSB7XHJcblx0XHRcdC8vIFx0XHRcdGN1cnNvclBvc2l0aW9uID0gaSArIDE7XHJcblx0XHRcdC8vIFx0XHRcdGJyZWFrO1xyXG5cdFx0XHQvLyBcdFx0fVxyXG5cdFx0XHQvLyBcdH1cclxuXHRcdFx0Ly8gXHRjb25zb2xlLmxvZyhjdXJzb3JQb3NpdGlvbik7XHJcblx0XHRcdC8vIFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IGN1cnNvclBvc2l0aW9uO1xyXG5cdFx0XHQvLyBcdHRoaXMuY2FyZE5yLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gY3Vyc29yUG9zaXRpb247XHJcblx0XHRcdC8vIFx0dGhpcy5jYXJkTnIubmF0aXZlRWxlbWVudC5hbmRyb2lkLnNldFNlbGVjdGlvbihjdXJzb3JQb3NpdGlvbik7XHJcblx0XHRcdC8vIH0gZWxzZSB7XHJcblx0XHRcdC8vIFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHQvLyBcdFx0aWYgKHRoaXMubGFzdENhcmROdW1iZXJbaV0gIT0gdmFsdWVbaV0pIHtcclxuXHRcdFx0Ly8gXHRcdFx0Y3Vyc29yUG9zaXRpb24gPSBpICsgMTtcclxuXHRcdFx0Ly8gXHRcdFx0YnJlYWs7XHJcblx0XHRcdC8vIFx0XHR9XHJcblx0XHRcdC8vIFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHQvLyB9XHJcblx0XHRcdC8vIHRoaXMub2xkVmFsdWVMZW5ndGggPSB2YWx1ZS5sZW5ndGg7XHJcblx0XHRcdC8vIHRoaXMubGFzdENhcmROdW1iZXIgPSB2YWx1ZTtcclxuXHRcdH1cclxuIFxyXG5cdH1cclxuXHJcblx0ZGF0ZUNoYW5nZWQodmFsdWUpIHtcclxuXHRcdGlmICh2YWx1ZS5sZW5ndGggPT0gMikge1xyXG5cdFx0XHR0aGlzLmNhcmRNb250aCA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLmN5Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuXHRcdH1cclxuXHRcdGlmICh2YWx1ZS5sZW5ndGggPiAyKSB7XHJcblx0XHRcdHRoaXMuY2FyZE1vbnRoID0gdmFsdWUuc3Vic3RyKDAsIDIpO1xyXG5cdFx0XHR0aGlzLmNtLm5hdGl2ZUVsZW1lbnQudGV4dCA9IHRoaXMuY2FyZE1vbnRoO1xyXG5cdFx0XHR0aGlzLmN5Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuXHRcdFx0dGhpcy5jeS5uYXRpdmVFbGVtZW50LnRleHQgPSB2YWx1ZS5zdWJzdHIoMiwgMSk7XHJcblx0XHRcdHRoaXMuY3kubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHRoaXMuY3kubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aDtcclxuXHRcdFx0dGhpcy5jeS5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCA9IHRoaXMuY3kubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHllYXJDaGFuZ2VkKHZhbHVlKSB7XHJcblx0XHRpZiAodmFsdWUubGVuZ3RoID09IDIpIHtcclxuXHRcdFx0dGhpcy5jYXJkWWVhciA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLmN2Yy5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcblx0XHR9XHJcblx0XHRpZiAodmFsdWUubGVuZ3RoID4gMikge1xyXG5cdFx0XHR0aGlzLmNhcmRZZWFyID0gdmFsdWUuc3Vic3RyKDAsIDIpO1xyXG5cdFx0XHR0aGlzLmN5Lm5hdGl2ZUVsZW1lbnQudGV4dCA9IHRoaXMuY2FyZFllYXI7XHJcblx0XHRcdHRoaXMuY3ZjLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuXHRcdFx0dGhpcy5jdmMubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHRoaXMuY3ZjLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XHJcblx0XHRcdHRoaXMuY3ZjLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gdGhpcy5jdmMubmF0aXZlRWxlbWVudC50ZXh0Lmxlbmd0aDtcclxuXHRcdH1cclxuXHRcdGlmICh2YWx1ZS5sZW5ndGggPT0gMCkge1xyXG5cdFx0XHR0aGlzLmNtLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuXHRcdFx0dGhpcy5jbS5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5jbS5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xyXG5cdFx0XHR0aGlzLmNtLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gdGhpcy5jbS5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHN1Ym1pdChhcmdzOiBFdmVudERhdGEpOiB2b2lkIHtcclxuXHJcblx0Ly9cdGxldCBjYXJkVmlldyA9IDxDcmVkaXRDYXJkVmlldz50aGlzLmNhcmQubmF0aXZlRWxlbWVudDtcclxuXHQvL1x0bGV0IGNhcmQgPSBjYXJkVmlldy5jYXJkO1xyXG5cdFx0Y29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZSgncGtfdGVzdF9KQWdjemt0V1g4amNoamkwYmdISUhqT2UnKTtcclxuXHRcdHZhciB2YWx1ZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInN0cmluZ0tleVwiLCBcIk5vIHN0cmluZyB2YWx1ZVwiKTtcclxuXHRcdFxyXG5cclxuXHJcblx0Ly9cdGNvbnN0IGNjOkNhcmQgPSBuZXcgQ2FyZCh0aGlzLmNhcmROdW1iZXIucmVwbGFjZSgvXFwgL2csICcnKSwgdGhpcy5jYXJkTW9udGgsIHRoaXMuY2FyZFllYXIsIHRoaXMuY2FyZEN2Yyk7XHJcblx0XHRcdC8vIHN0cmlwZS5jcmVhdGVUb2tlbihjYy5jYXJkLChlcnJvcix0b2tlbik9PntcclxuXHRcdFx0Ly8gaWYgKCFlcnJvcikge1xyXG5cdFx0XHQvLyBcdGNvbnNvbGUubG9nKHRva2VuLmdldElkKCkpO1xyXG5cdFx0XHQvLyBcdGNvbnNvbGUubG9nKHRva2VuLmdldENhcmQoKSk7XHJcblx0XHRcdC8vIFx0dGhpcy5QYXltZW50U2VydmljZS5zdWJtaXRUb2tlbih0b2tlbi5nZXRJZCgpLCB0aGlzLnBheW1lbnQpLnN1YnNjcmliZShcclxuXHRcdFx0Ly8gXHRyZXNwb25zZSA9PiBhbGVydChcIlBheW1lbnQgZG9uZVwiKSxcclxuXHRcdFx0Ly8gXHRlcnJvciA9PiAoYWxlcnQoXCJ0aGVyZSB3YXMgYW4gZXJyb3IsIHBsZWFzZSB0cnkgYWdhaW5cIikpKVx0XHJcblxyXG5cdFx0XHQvLyB9IGVsc2Uge1xyXG5cdFx0XHQvLyBcdGFsZXJ0KFwiaW5jb3JlY3QgY2FyZCBkYXRhXCIpO1xyXG5cdFx0XHQvLyB9XHJcblx0XHRcdC8vIH0pO1xyXG5cdFx0XHR0aGlzLkluY29ycG9yYXRpb25TZXJ2aWNlLnN1Ym1pdERhdGEodGhpcy5maXJzdE5hbWUsIHRoaXMubGFzdE5hbWUsIHRoaXMuZW1haWwsIHRoaXMuYWwxLCB0aGlzLmFsMiwgdGhpcy5jaXR5LCB0aGlzLnBvc3RhbCwgdGhpcy5jb3VudHJ5LCB0aGlzLnN0YXRlLCB0aGlzLmRpcmVjdG9ycywgdGhpcy51dWlkLCB0aGlzLmNvbXBhbnlOYW1lLCB0aGlzLmNvbXBhbnlUeXBlKVxyXG5cdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSxcclxuXHRcdFx0XHRlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuXHRcdFx0KTtcclxuXHR9XHJcbn1cclxuIl19
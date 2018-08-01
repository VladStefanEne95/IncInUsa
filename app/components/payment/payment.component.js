"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var nativescript_stripe_1 = require("nativescript-stripe");
var payment_service_1 = require("./../../services/payment/payment.service");
var appSettings = require("application-settings");
var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(page, PaymentService, router) {
        this.PaymentService = PaymentService;
        this.router = router;
        this.cardNumber = '';
        this.cardMonth = '';
        this.cardYear = '';
        this.cardCvc = '';
        page.actionBarHidden = true;
    }
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
            this.cy.nativeElement.selectionStart = this.cy.nativeElement.text.length;
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
    PaymentComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        this.firstName = appSettings.getString("firstName", "");
        this.lastName = appSettings.getString("lastName", "");
    };
    PaymentComponent.prototype.submit = function (args) {
        var _this = this;
        //	let cardView = <CreditCardView>this.card.nativeElement;
        //	let card = cardView.card;
        var stripe = new nativescript_stripe_1.Stripe('pk_test_JAgczktWX8jchji0bgHIHjOe');
        var value = appSettings.getString("stringKey", "No string value"); // Reading
        // will return "No string value" if there is no value for "stringKey"
        console.log(value);
        console.log(this.cardNumber);
        console.log(this.cardMonth);
        console.log(this.cardYear);
        console.log(this.cardCvc);
        var cc = new nativescript_stripe_1.Card(this.cardNumber, this.cardMonth, this.cardYear, this.cardCvc);
        stripe.createToken(cc.card, function (error, token) {
            if (!error) {
                console.log(token.getId());
                console.log(token.getCard());
                _this.PaymentService.submitToken(token.getId()).subscribe(function (response) { return alert("Payment done"); }, function (error) { return (alert("there was an error, please try again")); });
            }
            else {
                alert("incorect card data");
            }
        });
    };
    __decorate([
        core_1.ViewChild("card"),
        __metadata("design:type", core_1.ElementRef)
    ], PaymentComponent.prototype, "card", void 0);
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
        __metadata("design:paramtypes", [page_1.Page, payment_service_1.PaymentService, router_1.Router])
    ], PaymentComponent);
    return PaymentComponent;
}());
exports.PaymentComponent = PaymentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXltZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSwwQ0FBeUM7QUFDekMsZ0NBQTZCO0FBRTdCLDJEQUFtRTtBQUVuRSw0RUFBeUU7QUFDekUsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFTbEQ7SUFjQywwQkFBWSxJQUFVLEVBQVEsY0FBOEIsRUFBVSxNQUFjO1FBQXRELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFacEYsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFVWixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRUQsc0NBQVcsR0FBWCxVQUFZLEtBQUs7UUFDaEIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9CLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUM1QyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDekUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDMUUsQ0FBQztJQUNGLENBQUM7SUFFRCxzQ0FBVyxHQUFYLFVBQVksS0FBSztRQUNoQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDaEMsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzNDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzNFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzFFLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDekUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDeEUsQ0FBQztJQUNGLENBQUM7SUFFRSxtQ0FBUSxHQUFSO1FBQ0YsdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLElBQWU7UUFBdEIsaUJBMkJDO1FBekJELDBEQUEwRDtRQUMxRCw0QkFBNEI7UUFDM0IsSUFBTSxNQUFNLEdBQUcsSUFBSSw0QkFBTSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFDN0UscUVBQXFFO1FBRXJFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFckIsSUFBTSxFQUFFLEdBQVEsSUFBSSwwQkFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxRixNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUMsVUFBQyxLQUFLLEVBQUMsS0FBSztZQUNyQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDN0IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsU0FBUyxDQUN4RCxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBckIsQ0FBcUIsRUFDakMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLEVBQS9DLENBQStDLENBQUMsQ0FBQTtZQUV4RCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ1QsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDM0IsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQTdFa0I7UUFBbEIsZ0JBQVMsQ0FBQyxNQUFNLENBQUM7a0NBQU8saUJBQVU7a0RBQUM7SUFDbEI7UUFBakIsZ0JBQVMsQ0FBQyxLQUFLLENBQUM7a0NBQU0saUJBQVU7aURBQUM7SUFDVDtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBSyxpQkFBVTtnREFBQztJQUNkO1FBQXpCLGdCQUFTLENBQUMsYUFBYSxDQUFDO2tDQUFLLGlCQUFVO2dEQUFDO0lBQ3ZCO1FBQWpCLGdCQUFTLENBQUMsS0FBSyxDQUFDO2tDQUFnQixpQkFBVTsyREFBQztJQVpoQyxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN0QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3RDLENBQUM7eUNBZWlCLFdBQUksRUFBd0IsZ0NBQWMsRUFBa0IsZUFBTTtPQWR4RSxnQkFBZ0IsQ0FzRjVCO0lBQUQsdUJBQUM7Q0FBQSxBQXRGRCxJQXNGQztBQXRGWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQge1ZpZXd9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IENyZWRpdENhcmRWaWV3LCBDYXJkLCBTdHJpcGUgfSBmcm9tICduYXRpdmVzY3JpcHQtc3RyaXBlJztcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYXltZW50U2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvcGF5bWVudC9wYXltZW50LnNlcnZpY2UnXG52YXIgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiUGF5bWVudFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiBcIi4vcGF5bWVudC5jb21wb25lbnQuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFsnLi9wYXltZW50LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRjYXJkTnVtYmVyID0gJyc7XG5cdGNhcmRNb250aCA9ICcnO1xuXHRjYXJkWWVhciA9ICcnO1xuXHRjYXJkQ3ZjID0gJyc7XG5cdGZpcnN0TmFtZSA6c3RyaW5nO1xuXHRsYXN0TmFtZSA6c3RyaW5nO1xuXHRAVmlld0NoaWxkKFwiY2FyZFwiKSBjYXJkOiBFbGVtZW50UmVmO1xuXHRAVmlld0NoaWxkKFwiY3ZjXCIpIGN2YzogRWxlbWVudFJlZjtcblx0QFZpZXdDaGlsZChcImNhcmRZZWFySWRcIikgY3k6IEVsZW1lbnRSZWY7XG5cdEBWaWV3Q2hpbGQoXCJjYXJkTW9udGhJZFwiKSBjbTogRWxlbWVudFJlZjtcblx0QFZpZXdDaGlsZChcIkNCMVwiKSBGaXJzdENoZWNrQm94OiBFbGVtZW50UmVmO1xuXG5cdGNvbnN0cnVjdG9yKHBhZ2U6IFBhZ2UscHVibGljIFBheW1lbnRTZXJ2aWNlOiBQYXltZW50U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuXHRcdHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcblx0fVxuXG5cdGRhdGVDaGFuZ2VkKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlLmxlbmd0aCA9PSAyKSB7XG5cdFx0XHR0aGlzLmNhcmRNb250aCA9IHZhbHVlO1xuXHRcdFx0dGhpcy5jeS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG5cdFx0fVxuXHRcdGlmICh2YWx1ZS5sZW5ndGggPiAyKSB7XG5cdFx0XHR0aGlzLmNhcmRNb250aCA9IHZhbHVlLnN1YnN0cigwLCAyKTtcblx0XHRcdHRoaXMuY20ubmF0aXZlRWxlbWVudC50ZXh0ID0gdGhpcy5jYXJkTW9udGg7XG5cdFx0XHR0aGlzLmN5Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcblx0XHRcdHRoaXMuY3kubmF0aXZlRWxlbWVudC50ZXh0ID0gdmFsdWUuc3Vic3RyKDIsIDEpO1xuXHRcdFx0dGhpcy5jeS5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5jeS5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xuXHRcdFx0dGhpcy5jeS5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5jeS5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xuXHRcdH1cblx0fVxuXG5cdHllYXJDaGFuZ2VkKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlLmxlbmd0aCA9PSAyKSB7XG5cdFx0XHR0aGlzLmNhcmRZZWFyID0gdmFsdWU7XG5cdFx0XHR0aGlzLmN2Yy5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG5cdFx0fVxuXHRcdGlmICh2YWx1ZS5sZW5ndGggPiAyKSB7XG5cdFx0XHR0aGlzLmNhcmRZZWFyID0gdmFsdWUuc3Vic3RyKDAsIDIpO1xuXHRcdFx0dGhpcy5jeS5uYXRpdmVFbGVtZW50LnRleHQgPSB0aGlzLmNhcmRZZWFyO1xuXHRcdFx0dGhpcy5jdmMubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuXHRcdFx0dGhpcy5jdmMubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHRoaXMuY3ZjLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XG5cdFx0XHR0aGlzLmN2Yy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCA9IHRoaXMuY3ZjLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XG5cdFx0fVxuXHRcdGlmICh2YWx1ZS5sZW5ndGggPT0gMCkge1xuXHRcdFx0dGhpcy5jbS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG5cdFx0XHR0aGlzLmNtLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLmNtLm5hdGl2ZUVsZW1lbnQudGV4dC5sZW5ndGg7XG5cdFx0XHR0aGlzLmNtLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gdGhpcy5jbS5uYXRpdmVFbGVtZW50LnRleHQubGVuZ3RoO1xuXHRcdH1cblx0fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cdFx0Ly8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG5cdFx0dGhpcy5maXJzdE5hbWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJmaXJzdE5hbWVcIiwgXCJcIik7XG5cdFx0dGhpcy5sYXN0TmFtZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImxhc3ROYW1lXCIsIFwiXCIpO1xuXHR9XG5cblx0c3VibWl0KGFyZ3M6IEV2ZW50RGF0YSk6IHZvaWQge1xuXG5cdC8vXHRsZXQgY2FyZFZpZXcgPSA8Q3JlZGl0Q2FyZFZpZXc+dGhpcy5jYXJkLm5hdGl2ZUVsZW1lbnQ7XG5cdC8vXHRsZXQgY2FyZCA9IGNhcmRWaWV3LmNhcmQ7XG5cdFx0Y29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZSgncGtfdGVzdF9KQWdjemt0V1g4amNoamkwYmdISUhqT2UnKTtcblx0XHR2YXIgdmFsdWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJzdHJpbmdLZXlcIiwgXCJObyBzdHJpbmcgdmFsdWVcIik7IC8vIFJlYWRpbmdcblx0XHQvLyB3aWxsIHJldHVybiBcIk5vIHN0cmluZyB2YWx1ZVwiIGlmIHRoZXJlIGlzIG5vIHZhbHVlIGZvciBcInN0cmluZ0tleVwiXG5cdFx0XG5cdFx0Y29uc29sZS5sb2codmFsdWUpXG5cdFx0Y29uc29sZS5sb2codGhpcy5jYXJkTnVtYmVyKTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLmNhcmRNb250aCk7XG5cdFx0Y29uc29sZS5sb2codGhpcy5jYXJkWWVhcik7XG5cdFx0Y29uc29sZS5sb2codGhpcy5jYXJkQ3ZjKTtcblxuIFx0XHQgICAgY29uc3QgY2M6Q2FyZCA9IG5ldyBDYXJkKHRoaXMuY2FyZE51bWJlciwgdGhpcy5jYXJkTW9udGgsIHRoaXMuY2FyZFllYXIsIHRoaXMuY2FyZEN2Yyk7XG5cdFx0XHQgc3RyaXBlLmNyZWF0ZVRva2VuKGNjLmNhcmQsKGVycm9yLHRva2VuKT0+e1xuXHRcdFx0ICAgaWYgKCFlcnJvcikge1xuXHRcdFx0XHQgY29uc29sZS5sb2codG9rZW4uZ2V0SWQoKSk7XG5cdFx0XHRcdCBjb25zb2xlLmxvZyh0b2tlbi5nZXRDYXJkKCkpO1xuXHRcdFx0XHQgdGhpcy5QYXltZW50U2VydmljZS5zdWJtaXRUb2tlbih0b2tlbi5nZXRJZCgpKS5zdWJzY3JpYmUoXG5cdFx0XHRcdFx0cmVzcG9uc2UgPT4gYWxlcnQoXCJQYXltZW50IGRvbmVcIiksXG5cdFx0XHRcdFx0ZXJyb3IgPT4gKGFsZXJ0KFwidGhlcmUgd2FzIGFuIGVycm9yLCBwbGVhc2UgdHJ5IGFnYWluXCIpKSlcdFxuXG5cdFx0XHQgICB9IGVsc2Uge1xuXHRcdFx0XHQgYWxlcnQoXCJpbmNvcmVjdCBjYXJkIGRhdGFcIik7XG5cdFx0XHQgICB9XG5cdFx0XHQgfSk7XG5cdH1cbn1cbiJdfQ==
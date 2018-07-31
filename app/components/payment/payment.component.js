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
        //page.actionBarHidden = true;
    }
    PaymentComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
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
    PaymentComponent = __decorate([
        core_1.Component({
            selector: "Payment",
            moduleId: module.id,
            templateUrl: "./payment.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page, payment_service_1.PaymentService, router_1.Router])
    ], PaymentComponent);
    return PaymentComponent;
}());
exports.PaymentComponent = PaymentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXltZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSwwQ0FBeUM7QUFDekMsZ0NBQTZCO0FBRTdCLDJEQUFtRTtBQUVuRSw0RUFBeUU7QUFDekUsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFRbEQ7SUFPQywwQkFBWSxJQUFVLEVBQVEsY0FBOEIsRUFBVSxNQUFjO1FBQXRELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFMcEYsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFHWiw4QkFBOEI7SUFDL0IsQ0FBQztJQUVFLG1DQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDOUMsQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBTyxJQUFlO1FBQXRCLGlCQTJCQztRQXpCRCwwREFBMEQ7UUFDMUQsNEJBQTRCO1FBQzNCLElBQU0sTUFBTSxHQUFHLElBQUksNEJBQU0sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBQzlELElBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxVQUFVO1FBQzdFLHFFQUFxRTtRQUVyRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJCLElBQU0sRUFBRSxHQUFRLElBQUksMEJBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUYsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFDLFVBQUMsS0FBSyxFQUFDLEtBQUs7WUFDckMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDeEQsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQXJCLENBQXFCLEVBQ2pDLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxFQUEvQyxDQUErQyxDQUFDLENBQUE7WUFFeEQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNULEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQzNCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFwQ2tCO1FBQWxCLGdCQUFTLENBQUMsTUFBTSxDQUFDO2tDQUFPLGlCQUFVO2tEQUFDO0lBTnhCLGdCQUFnQjtRQUw1QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7U0FDMUMsQ0FBQzt5Q0FRaUIsV0FBSSxFQUF3QixnQ0FBYyxFQUFrQixlQUFNO09BUHhFLGdCQUFnQixDQTJDNUI7SUFBRCx1QkFBQztDQUFBLEFBM0NELElBMkNDO0FBM0NZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7Vmlld30gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgQ3JlZGl0Q2FyZFZpZXcsIENhcmQsIFN0cmlwZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1zdHJpcGUnO1xuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9wYXltZW50L3BheW1lbnQuc2VydmljZSdcbnZhciBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJQYXltZW50XCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BheW1lbnQuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRjYXJkTnVtYmVyID0gJyc7XG5cdGNhcmRNb250aCA9ICcnO1xuXHRjYXJkWWVhciA9ICcnO1xuXHRjYXJkQ3ZjID0gJyc7XG5cdEBWaWV3Q2hpbGQoXCJjYXJkXCIpIGNhcmQ6IEVsZW1lbnRSZWY7XG5cdGNvbnN0cnVjdG9yKHBhZ2U6IFBhZ2UscHVibGljIFBheW1lbnRTZXJ2aWNlOiBQYXltZW50U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuXHRcdC8vcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuXHR9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG5cdH1cblxuXHRzdWJtaXQoYXJnczogRXZlbnREYXRhKTogdm9pZCB7XG5cblx0Ly9cdGxldCBjYXJkVmlldyA9IDxDcmVkaXRDYXJkVmlldz50aGlzLmNhcmQubmF0aXZlRWxlbWVudDtcblx0Ly9cdGxldCBjYXJkID0gY2FyZFZpZXcuY2FyZDtcblx0XHRjb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlKCdwa190ZXN0X0pBZ2N6a3RXWDhqY2hqaTBiZ0hJSGpPZScpO1xuXHRcdHZhciB2YWx1ZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInN0cmluZ0tleVwiLCBcIk5vIHN0cmluZyB2YWx1ZVwiKTsgLy8gUmVhZGluZ1xuXHRcdC8vIHdpbGwgcmV0dXJuIFwiTm8gc3RyaW5nIHZhbHVlXCIgaWYgdGhlcmUgaXMgbm8gdmFsdWUgZm9yIFwic3RyaW5nS2V5XCJcblx0XHRcblx0XHRjb25zb2xlLmxvZyh2YWx1ZSlcblx0XHRjb25zb2xlLmxvZyh0aGlzLmNhcmROdW1iZXIpO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuY2FyZE1vbnRoKTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLmNhcmRZZWFyKTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLmNhcmRDdmMpO1xuXG4gXHRcdCAgICBjb25zdCBjYzpDYXJkID0gbmV3IENhcmQodGhpcy5jYXJkTnVtYmVyLCB0aGlzLmNhcmRNb250aCwgdGhpcy5jYXJkWWVhciwgdGhpcy5jYXJkQ3ZjKTtcblx0XHRcdCBzdHJpcGUuY3JlYXRlVG9rZW4oY2MuY2FyZCwoZXJyb3IsdG9rZW4pPT57XG5cdFx0XHQgICBpZiAoIWVycm9yKSB7XG5cdFx0XHRcdCBjb25zb2xlLmxvZyh0b2tlbi5nZXRJZCgpKTtcblx0XHRcdFx0IGNvbnNvbGUubG9nKHRva2VuLmdldENhcmQoKSk7XG5cdFx0XHRcdCB0aGlzLlBheW1lbnRTZXJ2aWNlLnN1Ym1pdFRva2VuKHRva2VuLmdldElkKCkpLnN1YnNjcmliZShcblx0XHRcdFx0XHRyZXNwb25zZSA9PiBhbGVydChcIlBheW1lbnQgZG9uZVwiKSxcblx0XHRcdFx0XHRlcnJvciA9PiAoYWxlcnQoXCJ0aGVyZSB3YXMgYW4gZXJyb3IsIHBsZWFzZSB0cnkgYWdhaW5cIikpKVx0XG5cblx0XHRcdCAgIH0gZWxzZSB7XG5cdFx0XHRcdCBhbGVydChcImluY29yZWN0IGNhcmQgZGF0YVwiKTtcblx0XHRcdCAgIH1cblx0XHRcdCB9KTtcblx0fVxufVxuIl19
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
        }
        if (value.length == 0)
            this.cm.nativeElement.focus();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXltZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSwwQ0FBeUM7QUFDekMsZ0NBQTZCO0FBRTdCLDJEQUFtRTtBQUVuRSw0RUFBeUU7QUFDekUsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFTbEQ7SUFjQywwQkFBWSxJQUFVLEVBQVEsY0FBOEIsRUFBVSxNQUFjO1FBQXRELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFacEYsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFVWixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRUQsc0NBQVcsR0FBWCxVQUFZLEtBQUs7UUFDaEIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9CLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUM1QyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVB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S0FBSyxJQUFJLE9BQUEsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxFQUEvQyxDQUErQyxDQUFDLENBQUE7WUFFeEQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNULEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQzNCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUF0RWtCO1FBQWxCLGdCQUFTLENBQUMsTUFBTSxDQUFDO2tDQUFPLGlCQUFVO2tEQUFDO0lBQ2xCO1FBQWpCLGdCQUFTLENBQUMsS0FBSyxDQUFDO2tDQUFNLGlCQUFVO2lEQUFDO0lBQ1Q7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQUssaUJBQVU7Z0RBQUM7SUFDZDtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQztrQ0FBSyxpQkFBVTtnREFBQztJQUN2QjtRQUFqQixnQkFBUyxDQUFDLEtBQUssQ0FBQztrQ0FBZ0IsaUJBQVU7MkRBQUM7SUFaaEMsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDdEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN0QyxDQUFDO3lDQWVpQixXQUFJLEVBQXdCLGdDQUFjLEVBQWtCLGVBQU07T0FkeEUsZ0JBQWdCLENBK0U1QjtJQUFELHVCQUFDO0NBQUEsQUEvRUQsSUErRUM7QUEvRVksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHtWaWV3fSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBDcmVkaXRDYXJkVmlldywgQ2FyZCwgU3RyaXBlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXN0cmlwZSc7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL3BheW1lbnQvcGF5bWVudC5zZXJ2aWNlJ1xudmFyIGFwcFNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlBheW1lbnRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHR0ZW1wbGF0ZVVybDogXCIuL3BheW1lbnQuY29tcG9uZW50Lmh0bWxcIixcblx0c3R5bGVVcmxzOiBbJy4vcGF5bWVudC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y2FyZE51bWJlciA9ICcnO1xuXHRjYXJkTW9udGggPSAnJztcblx0Y2FyZFllYXIgPSAnJztcblx0Y2FyZEN2YyA9ICcnO1xuXHRmaXJzdE5hbWUgOnN0cmluZztcblx0bGFzdE5hbWUgOnN0cmluZztcblx0QFZpZXdDaGlsZChcImNhcmRcIikgY2FyZDogRWxlbWVudFJlZjtcblx0QFZpZXdDaGlsZChcImN2Y1wiKSBjdmM6IEVsZW1lbnRSZWY7XG5cdEBWaWV3Q2hpbGQoXCJjYXJkWWVhcklkXCIpIGN5OiBFbGVtZW50UmVmO1xuXHRAVmlld0NoaWxkKFwiY2FyZE1vbnRoSWRcIikgY206IEVsZW1lbnRSZWY7XG5cdEBWaWV3Q2hpbGQoXCJDQjFcIikgRmlyc3RDaGVja0JveDogRWxlbWVudFJlZjtcblxuXHRjb25zdHJ1Y3RvcihwYWdlOiBQYWdlLHB1YmxpYyBQYXltZW50U2VydmljZTogUGF5bWVudFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG5cdH1cblxuXHRkYXRlQ2hhbmdlZCh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZS5sZW5ndGggPT0gMikge1xuXHRcdFx0dGhpcy5jYXJkTW9udGggPSB2YWx1ZTtcblx0XHRcdHRoaXMuY3kubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuXHRcdH1cblx0XHRpZiAodmFsdWUubGVuZ3RoID4gMikge1xuXHRcdFx0dGhpcy5jYXJkTW9udGggPSB2YWx1ZS5zdWJzdHIoMCwgMik7XG5cdFx0XHR0aGlzLmNtLm5hdGl2ZUVsZW1lbnQudGV4dCA9IHRoaXMuY2FyZE1vbnRoO1xuXHRcdFx0dGhpcy5jeS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG5cdFx0XHR0aGlzLmN5Lm5hdGl2ZUVsZW1lbnQudGV4dCA9IHZhbHVlLnN1YnN0cigyLCAxKTtcblx0XHR9XG5cdH1cblxuXHR5ZWFyQ2hhbmdlZCh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZS5sZW5ndGggPT0gMikge1xuXHRcdFx0dGhpcy5jYXJkWWVhciA9IHZhbHVlO1xuXHRcdFx0dGhpcy5jdmMubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuXHRcdH1cblx0XHRpZiAodmFsdWUubGVuZ3RoID4gMikge1xuXHRcdFx0dGhpcy5jYXJkWWVhciA9IHZhbHVlLnN1YnN0cigwLCAyKTtcblx0XHRcdHRoaXMuY3kubmF0aXZlRWxlbWVudC50ZXh0ID0gdGhpcy5jYXJkWWVhcjtcblx0XHRcdHRoaXMuY3ZjLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcblx0XHR9XG5cdFx0aWYodmFsdWUubGVuZ3RoID09IDApXG5cdFx0XHR0aGlzLmNtLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcblx0fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cdFx0Ly8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG5cdFx0dGhpcy5maXJzdE5hbWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJmaXJzdE5hbWVcIiwgXCJcIik7XG5cdFx0dGhpcy5sYXN0TmFtZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImxhc3ROYW1lXCIsIFwiXCIpO1xuXHR9XG5cblx0c3VibWl0KGFyZ3M6IEV2ZW50RGF0YSk6IHZvaWQge1xuXG5cdC8vXHRsZXQgY2FyZFZpZXcgPSA8Q3JlZGl0Q2FyZFZpZXc+dGhpcy5jYXJkLm5hdGl2ZUVsZW1lbnQ7XG5cdC8vXHRsZXQgY2FyZCA9IGNhcmRWaWV3LmNhcmQ7XG5cdFx0Y29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZSgncGtfdGVzdF9KQWdjemt0V1g4amNoamkwYmdISUhqT2UnKTtcblx0XHR2YXIgdmFsdWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJzdHJpbmdLZXlcIiwgXCJObyBzdHJpbmcgdmFsdWVcIik7IC8vIFJlYWRpbmdcblx0XHQvLyB3aWxsIHJldHVybiBcIk5vIHN0cmluZyB2YWx1ZVwiIGlmIHRoZXJlIGlzIG5vIHZhbHVlIGZvciBcInN0cmluZ0tleVwiXG5cdFx0XG5cdFx0Y29uc29sZS5sb2codmFsdWUpXG5cdFx0Y29uc29sZS5sb2codGhpcy5jYXJkTnVtYmVyKTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLmNhcmRNb250aCk7XG5cdFx0Y29uc29sZS5sb2codGhpcy5jYXJkWWVhcik7XG5cdFx0Y29uc29sZS5sb2codGhpcy5jYXJkQ3ZjKTtcblxuIFx0XHQgICAgY29uc3QgY2M6Q2FyZCA9IG5ldyBDYXJkKHRoaXMuY2FyZE51bWJlciwgdGhpcy5jYXJkTW9udGgsIHRoaXMuY2FyZFllYXIsIHRoaXMuY2FyZEN2Yyk7XG5cdFx0XHQgc3RyaXBlLmNyZWF0ZVRva2VuKGNjLmNhcmQsKGVycm9yLHRva2VuKT0+e1xuXHRcdFx0ICAgaWYgKCFlcnJvcikge1xuXHRcdFx0XHQgY29uc29sZS5sb2codG9rZW4uZ2V0SWQoKSk7XG5cdFx0XHRcdCBjb25zb2xlLmxvZyh0b2tlbi5nZXRDYXJkKCkpO1xuXHRcdFx0XHQgdGhpcy5QYXltZW50U2VydmljZS5zdWJtaXRUb2tlbih0b2tlbi5nZXRJZCgpKS5zdWJzY3JpYmUoXG5cdFx0XHRcdFx0cmVzcG9uc2UgPT4gYWxlcnQoXCJQYXltZW50IGRvbmVcIiksXG5cdFx0XHRcdFx0ZXJyb3IgPT4gKGFsZXJ0KFwidGhlcmUgd2FzIGFuIGVycm9yLCBwbGVhc2UgdHJ5IGFnYWluXCIpKSlcdFxuXG5cdFx0XHQgICB9IGVsc2Uge1xuXHRcdFx0XHQgYWxlcnQoXCJpbmNvcmVjdCBjYXJkIGRhdGFcIik7XG5cdFx0XHQgICB9XG5cdFx0XHQgfSk7XG5cdH1cbn1cbiJdfQ==
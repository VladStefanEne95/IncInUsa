import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from '@angular/router';
import {Page} from "ui/page";
import {View} from "ui/core/view";
import { CreditCardView, Card, Stripe } from 'nativescript-stripe';
import { EventData } from 'data/observable';
import { PaymentService } from './../../services/payment/payment.service'
var appSettings = require("application-settings");


@Component({
    selector: "Payment",
    moduleId: module.id,
    templateUrl: "./payment.component.html"
})
export class PaymentComponent implements OnInit {

	cardNumber = '';
	cardMonth = '';
	cardYear = '';
	cardCvc = '';
	@ViewChild("card") card: ElementRef;
	constructor(page: Page,public PaymentService: PaymentService, private router: Router) {
		//page.actionBarHidden = true;
	}

    ngOnInit(): void {
        // Init your component properties here.
	}

	submit(args: EventData): void {

	//	let cardView = <CreditCardView>this.card.nativeElement;
	//	let card = cardView.card;
		const stripe = new Stripe('pk_test_JAgczktWX8jchji0bgHIHjOe');
		var value = appSettings.getString("stringKey", "No string value"); // Reading
		// will return "No string value" if there is no value for "stringKey"
		
		console.log(value)
		console.log(this.cardNumber);
		console.log(this.cardMonth);
		console.log(this.cardYear);
		console.log(this.cardCvc);

 		    const cc:Card = new Card(this.cardNumber, this.cardMonth, this.cardYear, this.cardCvc);
			 stripe.createToken(cc.card,(error,token)=>{
			   if (!error) {
				 console.log(token.getId());
				 console.log(token.getCard());
				 this.PaymentService.submitToken(token.getId()).subscribe(
					response => alert("Payment done"),
					error => (alert("there was an error, please try again")))	

			   } else {
				 alert("incorect card data");
			   }
			 });
	}
}

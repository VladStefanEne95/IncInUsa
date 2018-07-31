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
	templateUrl: "./payment.component.html",
	styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

	cardNumber = '';
	cardMonth = '';
	cardYear = '';
	cardCvc = '';
	firstName :string;
	lastName :string;
	@ViewChild("card") card: ElementRef;
	@ViewChild("cvc") cvc: ElementRef;
	@ViewChild("cardYearId") cy: ElementRef;
	@ViewChild("cardMonthId") cm: ElementRef;
	@ViewChild("CB1") FirstCheckBox: ElementRef;

	constructor(page: Page,public PaymentService: PaymentService, private router: Router) {
		page.actionBarHidden = true;
	}

	dateChanged(value) {
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
	}

	yearChanged(value) {
		if (value.length == 2) {
			this.cardYear = value;
			this.cvc.nativeElement.focus();
		}
		if (value.length > 2) {
			this.cardYear = value.substr(0, 2);
			this.cy.nativeElement.text = this.cardYear;
			this.cvc.nativeElement.focus();
		}
		if(value.length == 0)
			this.cm.nativeElement.focus();
	}

    ngOnInit(): void {
		// Init your component properties here.
		this.firstName = appSettings.getString("firstName", "");
		this.lastName = appSettings.getString("lastName", "");
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

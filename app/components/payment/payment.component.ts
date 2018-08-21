import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from '@angular/router';
import {Page} from "ui/page";
import {View} from "ui/core/view";
import { CreditCardView, Card, Stripe } from 'nativescript-stripe';
import { EventData } from 'data/observable';
import { PaymentService } from './../../services/payment/payment.service'
import { IncorporationService } from './../../services/incorporation/incorporation.service'

var appSettings = require("application-settings");


@Component({
    selector: "Payment",
    moduleId: module.id,
	templateUrl: "./payment.component.html",
	styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

	cn1 :number;
	cn2 :number;
	cn3 :number;
	cn4 :number;
	oldValueLength :number;
	
	cardNumber = '';
	cardMonth = '';
	cardYear = '';
	cardCvc = '';

	firstName :string;
	lastName :string;
	email :string;
	al1 :string;
	al2 :string;
	city :string;
	postal :number;
	country :string;
	state :string;
	companyName: string;
	companyType :string;
	directors :string;
	uuid :string;
	payment :number;

	lastCardNumber :string;

	@ViewChild("card") card: ElementRef;
	@ViewChild("owner") owner: ElementRef;
	@ViewChild("cvc") cvc: ElementRef;
	@ViewChild("cardYearId") cy: ElementRef;
	@ViewChild("cardMonthId") cm: ElementRef;
	@ViewChild("fullcard") fc: ElementRef;
	@ViewChild("minicard") mc: ElementRef;
	@ViewChild("card1") card1: ElementRef;
	@ViewChild("cardNr") cardNr: ElementRef;
	@ViewChild("CB1") FirstCheckBox: ElementRef;

	constructor(private page: Page, public PaymentService: PaymentService, public IncorporationService: IncorporationService, private router: Router) {
		page.actionBarHidden = true;
	}

	ngOnInit(): void {
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
	}

	cardNumberChanged(value) {
		//console.log(value);
		console.log(this.cardNr.nativeElement.android.getSelectionStart());
		if ( value.length > 19 ) {
			this.cardNumber = this.lastCardNumber
			this.cardNr.nativeElement.text = this.lastCardNumber
		} else {
			if (value.length == 19) {
				this.owner.nativeElement.focus();
				this.lastCardNumber = value;
				this.owner.nativeElement.selectionStart = this.owner.nativeElement.text.length;
				this.owner.nativeElement.selectionEnd = this.owner.nativeElement.text.length;
				this.owner.nativeElement.android.setSelection(this.owner.nativeElement.text.length);
			}// else if (value.length % 5 == 4) {
			// 	this.cardNr.nativeElement.focus();
			// 	this.cardNr.nativeElement.text = value + " ";
			// 	this.cardNumber = this.cardNr.nativeElement.text;
			// 	this.cardNr.nativeElement.selectionStart = this.cardNr.nativeElement.text.length;
			// 	this.cardNr.nativeElement.selectionEnd = this.cardNr.nativeElement.text.length;
			// 	this.cardNr.nativeElement.android.setSelection(this.cardNr.nativeElement.text.length);
			// }
			let noSpace = value.replace(/\ /g, '');
			let withSpace = "";
			for (let i = 0; i < noSpace.length; i++) {
				if (i % 4 == 0 && i != 0) {
					withSpace += " ";
				}
				withSpace += noSpace[i];
			}
			this.cardNr.nativeElement.text = withSpace;
			this.cardNumber = withSpace;
			let cursorPosition = this.cardNr.nativeElement.text.length;
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
			this.cy.nativeElement.selectionStart = this.cy.nativeElement.text.length;
			this.cy.nativeElement.selectionEnd = this.cy.nativeElement.text.length;
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
			this.cvc.nativeElement.selectionStart = this.cvc.nativeElement.text.length;
			this.cvc.nativeElement.selectionEnd = this.cvc.nativeElement.text.length;
		}
		if (value.length == 0) {
			this.cm.nativeElement.focus();
			this.cm.nativeElement.selectionStart = this.cm.nativeElement.text.length;
			this.cm.nativeElement.selectionEnd = this.cm.nativeElement.text.length;
		}
	}


	submit(args: EventData): void {

	//	let cardView = <CreditCardView>this.card.nativeElement;
	//	let card = cardView.card;
		const stripe = new Stripe('pk_test_JAgczktWX8jchji0bgHIHjOe');
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
			.subscribe(
				response => console.log(response),
				error => console.log(error)
			);
	}
}

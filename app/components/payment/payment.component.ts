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
	postal :string;
	country :string;
	state :string;
	companyName: string;
	companyType :string;
	directors :string;
	uuid :string;
	payment :number;
	lastPosition :number;
	emoji :string;
	billing :string;

	billingfirstName :string;
	billinglastName :string;
	billingemail :string;
	billingal1 :string;
	billingal2 :string;
	billingcity :string;
	billingpostal :string;
	billingcountry :string;
	billingemoji :string;
	billingstate :string;

	lastCardNumber :string;

	@ViewChild("card") card: ElementRef;
	@ViewChild("owner") owner: ElementRef;
	@ViewChild("cvc") cvcId: ElementRef;
	@ViewChild("cardYearId") cy: ElementRef;
	@ViewChild("cardMonthId") cm: ElementRef;
	@ViewChild("fullcard") fc: ElementRef;
	@ViewChild("minicard") mc: ElementRef;
	@ViewChild("card1") card1: ElementRef;
	@ViewChild("cardNr") cardNr: ElementRef;
	@ViewChild("CB1") FirstCheckBox: ElementRef;
	@ViewChild("dummy") dummy: ElementRef;

	constructor(private page: Page, public PaymentService: PaymentService, public IncorporationService: IncorporationService, private router: Router) {
		page.actionBarHidden = true;
	}

	ngOnInit(): void {
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
			this.billing = appSettings.getString("billing","")
			this.billingfirstName = appSettings.getString("billingfirstName", "");
			this.billinglastName = appSettings.getString("billinglastName", "");
			this.billingemail = appSettings.getString("billingemail", ""); 
			this.billingal1 = appSettings.getString("billingal1","");
			this.billingal2 = appSettings.getString("billingal2","");
			this.billingcity = appSettings.getString("billingcity", "");
			this.billingpostal = appSettings.getString("billingpostal", "");
			this.billingcountry = appSettings.getString("billingcountry", "");
			this.billingemoji = appSettings.getString("billingemoji", "");
			this.billingstate = appSettings.getString("billingstate", "");
		}
		
		this.oldValueLength = 0;
		this.lastCardNumber = "";
		this.lastPosition = 0;
	}

	cardNumberChanged(value) {
		//console.log(value);
		//console.log(this.cardNr.nativeElement.android.getSelectionStart());
		//console.log(this.lastPosition - this.cardNr.nativeElement.android.getSelectionStart());
		//console.log(this.lastPosition, this.cardNr.nativeElement.android.getSelectionStart());
		let change = 0;
		console.log(this.lastPosition, this.cardNr.nativeElement.android.getSelectionStart());
		if (this.lastPosition > this.cardNr.nativeElement.android.getSelectionStart()) {
			change = 1;
		}
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
	}

	
	cvcChanged(value) {
		if (value.length == 3) {
			this.cardCvc = value;
		} else if (value.length > 3) {
			value = value.substr(0, 3);
			this.cardCvc = value;
			this.cvcId.nativeElement.text = value;
		}
	}

	editBilling() {
		this.router.navigate(["/billing"]);
	}


	submit(args: EventData): void {

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
						.subscribe(
							response => console.log(response),
							error => console.log(error)
						);
	}
}

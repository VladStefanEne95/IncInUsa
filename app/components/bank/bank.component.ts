import { Component, OnInit,ViewChild, ElementRef } from "@angular/core";
import {Page} from "ui/page";
import { Router } from '@angular/router';
var appSettings = require("application-settings");


@Component({
    selector: "Bank",
    moduleId: module.id,
    templateUrl: "./bank.component.html"
})
export class BankComponent implements OnInit {
	
	bankAccount :boolean;
	payment :number;

	@ViewChild("CB1") FirstCheckBox: ElementRef;
	@ViewChild("CB2") SecondCheckBox: ElementRef;

    constructor(private page: Page, private router: Router) {
		this.page = page;
		page.actionBarHidden = true;
		this.page.addCss("#CB1 {visibility: collapsed}");
		this.page.addCss("#CB2 {visibility: collapsed}");
    }

    ngOnInit(): void {
		this.bankAccount = (appSettings.getString("bankAccount", "") == 'true');
		if (this.bankAccount == true) {
			this.FirstCheckBox.nativeElement.checked = true;
			this.page.addCss("#CB1 {visibility: visible}");
			this.payment = 100;
		}
		
		if (this.bankAccount == false) {
			this.SecondCheckBox.nativeElement.checked = true;
			this.page.addCss("#CB2 {visibility: visible}");
			this.payment = 0;
		}

	}


	public nextStep() {
		appSettings.setString("payment", this.payment.toString());
		appSettings.setString("bankAccount", this.bankAccount.toString());
		this.router.navigate(["/personal"]);
	}

	public firstCheckboxTap() {
		this.FirstCheckBox.nativeElement.checked = true;
		this.SecondCheckBox.nativeElement.checked = false;
		this.bankAccount = true; 
		this.payment = 100;
		this.page.addCss("#CB1 {visibility: visible}");
		this.page.addCss("#CB2 {visibility: collapsed}");
	}

	public secondCheckboxTap() {
		this.FirstCheckBox.nativeElement.checked = false;
		this.SecondCheckBox.nativeElement.checked = true;
		this.bankAccount = false;
		this.payment = 0;
		this.page.addCss("#CB2 {visibility: visible}");
		this.page.addCss("#CB1 {visibility: collapsed}");
	}
}

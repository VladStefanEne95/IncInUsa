import { Component, OnInit,ViewChild, ElementRef } from "@angular/core";
import {Page} from "ui/page";
import { Router } from '@angular/router';
var appSettings = require("application-settings");


@Component({
    selector: "Details",
    moduleId: module.id,
    templateUrl: "./details.component.html"
})
export class DetailsComponent implements OnInit {
	
	companyName :string;
	companyType :string;

	@ViewChild("CB1") FirstCheckBox: ElementRef;
	@ViewChild("CB2") SecondCheckBox: ElementRef;

    constructor(private page: Page, private router: Router) {
		this.page = page;
		page.actionBarHidden = true;
		this.page.addCss("#CB1 {visibility: collapsed}");
		this.page.addCss("#CB2 {visibility: collapsed}");
    }

    ngOnInit(): void {
		this.companyName = appSettings.getString("companyName", "");
		this.companyType = appSettings.getString("companyType", "");

		if(this.companyType == "LLC") {
			this.FirstCheckBox.nativeElement.checked = true;
			this.page.addCss("#CB1 {visibility: visible}");
		}
		
		if(this.companyType == "Inc") {
			this.SecondCheckBox.nativeElement.checked = true;
			this.page.addCss("#CB2 {visibility: visible}");
		}
	}


	public step3() {
		if(this.companyName == "" || this.companyType == "") {
			alert("please complete the form before proceeding");
			return;
		}
		appSettings.setString("companyName", this.companyName);
		appSettings.setString("companyType", this.companyType);
		this.router.navigate(["/bank"]);
	}

	public buttonTapes() {
		alert("some text");
	}
	public firstCheckboxTap() {
		this.FirstCheckBox.nativeElement.checked = true;
		this.SecondCheckBox.nativeElement.checked = false;
		this.companyType = "LLC"; 
		this.page.addCss("#CB1 {visibility: visible}");
		this.page.addCss("#CB2 {visibility: collapsed}");
	}

	public secondCheckboxTap() {
		this.FirstCheckBox.nativeElement.checked = false;
		this.SecondCheckBox.nativeElement.checked = true;
		this.companyType = "Inc";
		this.page.addCss("#CB2 {visibility: visible}");
		this.page.addCss("#CB1 {visibility: collapsed}");
	}
}

import { Component, OnInit,ViewChild, ElementRef } from "@angular/core";
import {Page} from "ui/page";
import { Router } from '@angular/router';

const plugin = require("nativescript-uuid");
var appSettings = require("application-settings");

@Component({
    selector: "Review",
    moduleId: module.id,
    templateUrl: "./review.component.html"
})
export class ReviewComponent implements OnInit {

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

	//@ViewChild("step2") step2: ElementRef;
    constructor(private page: Page, private router: Router) {
		// Use the component constructor to inject providers.
		page.actionBarHidden = true;
		this.page = page;
		this.page.addCss("#step3 {visibility: collapsed}");
    }

    ngOnInit(): void {
		// Init your component properties here.
		this.companyName = appSettings.getString("companyName", "");
		this.companyType = appSettings.getString("companyType", "");
		this.firstName = appSettings.getString("firstName", "");
		this.lastName = appSettings.getString("lastName", "");
		this.email = appSettings.getString("email", "");
		this.al1 = appSettings.getString("al1", "");
		this.al2 = appSettings.getString("al2", "");
		this.city = appSettings.getString("city", "");
		this.postal = appSettings.getString("postal", 0);
		this.country = appSettings.getString("country", "");
		this.state = appSettings.getString("state", "");
	}
}

import { Component, OnInit,ViewChild, ElementRef } from "@angular/core";
import {Page} from "ui/page";
import { Router } from '@angular/router';

const plugin = require("nativescript-uuid");
var appSettings = require("application-settings");

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

	companyUuid :string;
	viewType :number;

	//@ViewChild("step2") step2: ElementRef;
    constructor(private page: Page, private router: Router) {
		// Use the component constructor to inject providers.
		page.actionBarHidden = true;
		this.page.addCss("#step3 {visibility: collapsed}");
    }

    ngOnInit(): void {
		// Init your component properties here.
		this.companyUuid = appSettings.getString("companyUuid", "");
		if (this.companyUuid == "")
			this.viewType = 1;
		else
			this.viewType = 2;
	}
	public oldInc() {
		alert("good for you");
	}

	public continue(): void {
		var uuid = plugin.getUUID();
		appSettings.setString("companyUuid", uuid);
		console.log("The device UUID is " + uuid);
		this.router.navigate(["/details"]);
		// this.page.addCss("#step3 {visibility: collapsed}");
		// this.page.addCss("#step2 {visibility: visible}");
	}
	
	public start(){
		var uuid = plugin.getUUID();
		appSettings.setString("companyUuid", uuid);
		appSettings.setString("companyName", "");
		appSettings.setString("companyType", "");
		appSettings.setString("firstName", "");
		appSettings.setString("lastName", "");
		appSettings.setString("email", "");
		appSettings.setString("al1", "");
		appSettings.setString("al2", "");
		appSettings.setString("city", "");
		appSettings.setString ("postal", "");
		appSettings.setString("country", "");
		appSettings.setString("state", "");
		appSettings.setString("addToDirectors", "");
		this.router.navigate(["/details"]);
	}
}

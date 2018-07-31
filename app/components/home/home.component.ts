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
	page;
	//@ViewChild("step2") step2: ElementRef;
    constructor(page: Page, private router: Router) {
		// Use the component constructor to inject providers.
		page.actionBarHidden = true;
		this.page = page;
		this.page.addCss("#step3 {visibility: collapsed}");
    }

    ngOnInit(): void {
		// Init your component properties here.
		this.companyUuid = appSettings.getString("companyUuid", "");
	}
	oldInc() {
		alert("good for you");
	}

	step2(page: Page): void{
		var uuid = plugin.getUUID();
		appSettings.setString("companyUuid", uuid);
		console.log("The device UUID is " + uuid);
		this.router.navigate(["/details"]);
		// this.page.addCss("#step3 {visibility: collapsed}");
		// this.page.addCss("#step2 {visibility: visible}");
	}
}

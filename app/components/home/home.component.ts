import { Component, OnInit,ViewChild, ElementRef } from "@angular/core";
import {Page} from "ui/page";
import { Router } from '@angular/router';
import { StartService } from './../../services/start/start.service'

import * as dialogs from "ui/dialogs";

var appSettings = require("application-settings");

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

	companyUuid :string;
	viewType :number;
	uuidString :any;

    constructor(private page: Page, private router: Router, private StartService: StartService) {
		page.actionBarHidden = true;
		this.page.addCss("#step3 {visibility: collapsed}");
    }

    ngOnInit(): void {
		this.companyUuid = appSettings.getString("uuid", "");
		console.log(this.companyUuid);
		this.uuidString = appSettings.getString("uuidString", "");
		if (this.companyUuid == "")
			this.viewType = 1;
		else
			this.viewType = 2;
	}

	public generateUuid() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		  var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		  return v.toString(16);
		});
	  }
	public oldInc() {
		dialogs.prompt({
			title: "Application Number",
			cancelButtonText: "Cancel",
			neutralButtonText: "Done",
			defaultText: ""
		}).then(r => {
			this.StartService.refreshStatus(r.text).subscribe(
				response => {
					let uuidArr = this.uuidString.split(",");
					uuidArr.push(r.text);
					this.uuidString = uuidArr.toString();
					appSettings.setString("uuidString", this.uuidString);
					this.router.navigate(["/manage"]);
				},
				error => console.log(error)
			);
		});
	}
	

	public continue(): void {
		this.router.navigate(["/details"]);
	}
	
	public start() {
		let uuid = this.generateUuid();
		let uuidArr = [];
		uuidArr = this.uuidString.split(",");
		uuidArr.push(uuid);
		this.uuidString = uuidArr.toString();
		appSettings.setString("uuidString", this.uuidString);
		appSettings.setString("uuid", uuid);
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
		appSettings.setString("emoji", "");
		appSettings.setString("state", "");

		appSettings.setString("billing", "");
		appSettings.setString("billingfirstName", "");
		appSettings.setString("billinglastName", "");
		appSettings.setString("billingemail", "");
		appSettings.setString("billingal1", "");
		appSettings.setString("billingal2", "");
		appSettings.setString("billingcity", "");
		appSettings.setString ("billingpostal", "");
		appSettings.setString("billingcountry", "");
		appSettings.setString("billingemoji", "");
		appSettings.setString("billingstate", "");

		appSettings.setString("addToDirectors", "");
		this.router.navigate(["/details"]);
	}
}

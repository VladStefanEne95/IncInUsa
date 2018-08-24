import { Component, OnInit,ViewChild, ElementRef } from "@angular/core";
import {Page} from "ui/page";
import { Router } from '@angular/router';

const plugin = require("nativescript-uuid");
var appSettings = require("application-settings");

@Component({
    selector: "Finish",
    moduleId: module.id,
    templateUrl: "./finish.component.html"
})
export class FinishComponent implements OnInit {

    constructor(private page: Page, private router: Router) {
		page.actionBarHidden = true;
    }

    ngOnInit(): void {
		
		appSettings.setString("companyName", "");
		appSettings.setString("companyType", "");
		appSettings.setString("firstName", "");
		appSettings.setString("lastName", ""), 
		appSettings.setString("uuid", "");
		appSettings.setString("email", "");
		appSettings.setString("al1", "");
		appSettings.setString("al2", "");
		appSettings.setString("city", "");
		appSettings.setString("postal", "");
		appSettings.setString("country", "");
		appSettings.setString("state", "");
		appSettings.setString("directors", "");
	
	}
	public viewAppStatus() {
		this.router.navigate(["/manage"]);
	}
}

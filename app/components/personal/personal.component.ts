import { Component, OnInit,ViewChild, ElementRef } from "@angular/core";
import {Page} from "ui/page";
import {KeyboardType} from "ui/enums";
import { SearchBar } from "ui/search-bar";
import { Router } from '@angular/router';
var appSettings = require("application-settings");


@Component({
    selector: "Personal",
    moduleId: module.id,
	templateUrl: "./personal.component.html",
	styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

	@ViewChild("CB1") FirstCheckBox: ElementRef;

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
	

    constructor( private page: Page, private router: Router) {
		// Use the component constructor to inject providers.
		page.actionBarHidden = true;
    }

    ngOnInit(): void {
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
		this.FirstCheckBox.nativeElement.checked = "true";
	}


	step3() {
	
		// if (this.firstName == "" ||
		// 	this.lastName == "" ||
		// 	this.email == "" ||
		// 	this.al1 == "" ||
		// 	this.al2 == "" ||
		// 	this.city == "" ||
		// 	this.postal == 0 ||
		// 	this.country == "" ||
		// 	this.state == "") {
		// 		alert("please complete the entire form");
		// 		return;
		// 	}
		appSettings.setString("firstName", this.firstName);
		appSettings.setString("lastName", this.lastName);
		appSettings.setString("email", this.email);
		appSettings.setString("al1", this.al1);
		appSettings.setString("al2", this.al2);
		appSettings.setString("city", this.city);
		appSettings.setString ("postal", this.postal);
		appSettings.setString("country", this.country);
		appSettings.setString("state", this.state);
		appSettings.setString("addToDirectors", String(this.FirstCheckBox.nativeElement.checked));

		if (this.FirstCheckBox.nativeElement.checked == true) {
			appSettings.setString("directors", JSON.stringify([{ 
														"firstName": this.firstName,
														 "lastName": this.lastName,
														 "email": this.email,
														 "al1": this.al1,
														 "al2": this.al2,
														 "city": this.city,
														 "postal": this.postal,
														 "country": this.country,
														 "state": this.state
			}]));
		} else {
			appSettings.setString("directors", JSON.stringify([{}]));
		}

		this.router.navigate(["/review"]);
	}

}

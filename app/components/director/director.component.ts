import { Component, OnInit,ViewChild, ElementRef } from "@angular/core";
import {Page} from "ui/page";
import { Router } from '@angular/router';

const plugin = require("nativescript-uuid");
var appSettings = require("application-settings");

@Component({
    selector: "Director",
    moduleId: module.id,
    templateUrl: "./director.component.html"
})
export class DirectorComponent implements OnInit {

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

	//@ViewChild("step2") step2: ElementRef;
    constructor(private page: Page, private router: Router) {
		// Use the component constructor to inject providers.
		page.actionBarHidden = true;
		this.page = page;
    }

    ngOnInit(): void {
		// Init your component properties here.
		this.directors = appSettings.getString("directors", "");
		let directorsObj;
		if (this.directors) {
			directorsObj = JSON.parse(this.directors);
			this.firstName = directorsObj[0].firstName;
			this.lastName = directorsObj[0].lastName;
			this.email = directorsObj[0].email;
			this.al1 = directorsObj[0].al1;
			this.al2 = directorsObj[0].al2;
			this.city = directorsObj[0].city;
			this.postal = directorsObj[0].postal;
			this.country = directorsObj[0].country;
			this.state = directorsObj[0].state;
		} else {
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
	
	public done(){
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
		this.router.navigate(["/review"]);
	}
}

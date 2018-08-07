import { Component, OnInit,ViewChild, ElementRef } from "@angular/core";
import {Page} from "ui/page";
import { Router } from '@angular/router';

const plugin = require("nativescript-uuid");
var appSettings = require("application-settings");

@Component({
    selector: "NewDirector",
    moduleId: module.id,
    templateUrl: "./newdirector.component.html"
})
export class NewDirectorComponent implements OnInit {

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
	directorsObj :any;
	directorLength: number;

	//@ViewChild("step2") step2: ElementRef;
    constructor(private page: Page, private router: Router) {
		// Use the component constructor to inject providers.
		page.actionBarHidden = true;
		this.page = page;
    }

    ngOnInit(): void {
		// Init your component properties here.
		this.directors = appSettings.getString("directors", "");
		this.directorsObj = JSON.parse(this.directors);
		this.directorLength = this.directorsObj.length;
	}
	
	public addDirector(){
		let auxObj = {
			firstName: this.firstName,
			lastName: this.lastName,
			email: this.email,
			al1: this.al1,
			al2: this.al2,
			city: this.city,
			postal: this.postal,
			country: this.country,
			state: this.state,
		}
		this.directorsObj.push(auxObj);
		appSettings.setString("directors", JSON.stringify(this.directorsObj));
		this.router.navigate(["/review"]);
	}
}

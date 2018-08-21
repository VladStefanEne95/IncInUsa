import { Component, OnInit,ViewChild, ElementRef } from "@angular/core";
import { Page } from "ui/page";
import { KeyboardType } from "ui/enums";
import { SearchBar } from "ui/search-bar";
import {  ActivatedRoute, Router } from '@angular/router';
import { StartService } from './../../services/start/start.service';


var appSettings = require("application-settings");


@Component({
    selector: "Application",
    moduleId: module.id,
	templateUrl: "./application.component.html",
	styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

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
	uuid :string;
	companyUuid :string;
	directorsArr :any;

	
    constructor(private page: Page, private router: Router, private _Activatedroute:ActivatedRoute, private StartService: StartService) {
		// Use the component constructor to inject providers.
		page.actionBarHidden = true;
		this.page = page;
    }

    ngOnInit(): void {
		this.uuid = this._Activatedroute.snapshot.params['id'];
		this.directors = appSettings.getString("directors", "");
		
		
		this.StartService.refreshStatus(this.uuid).subscribe(
			response => {
				this.companyName = response['incorporation'][0].companyName;
				this.companyType = response['incorporation'][0].companyType;
				this.firstName = response['incorporation'][0].firstName;
				this.lastName = response['incorporation'][0].lastName;
				this.email = response['incorporation'][0].email;
				this.al1 = response['incorporation'][0].al1;
				this.al2 = response['incorporation'][0].al2;
				this.city = response['incorporation'][0].city;
				this.postal = response['incorporation'][0].postal;
				this.country = response['incorporation'][0].country;
				this.state = response['incorporation'][0].state;
				this.directors = response['incorporation'][0].directors;
				this.directorsArr = JSON.parse(this.directors);
			},
			error => console.log(error)
		);
	}

	step3() {
		this.router.navigate(["/review"]);
	}

	viewDirector(id) {
		this.router.navigate(["/view-director", this.uuid, id]);
	}

}

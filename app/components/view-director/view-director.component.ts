import { Component, OnInit,ViewChild, ElementRef } from "@angular/core";
import { Page } from "ui/page";
import { ActivatedRoute, Router } from '@angular/router';
import { StartService } from './../../services/start/start.service'

const plugin = require("nativescript-uuid");
var appSettings = require("application-settings");

@Component({
    selector: "ViewDirector",
    moduleId: module.id,
    templateUrl: "./view-director.component.html"
})
export class ViewDirectorComponent implements OnInit {

	uuid :string;
	id :number
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
	directors :any;
	directorsArr :Array<any>;

    constructor(private page: Page, private router: Router, private _Activatedroute:ActivatedRoute, private StartService: StartService) {
		page.actionBarHidden = true;
		this.page = page;
    }

    ngOnInit(): void {
		// Init your component properties here.
		this.uuid = this._Activatedroute.snapshot.params['id'];
		this.id = this._Activatedroute.snapshot.params['id2'];
		this.directors = appSettings.getString("directors", "");
		let directorsObj;
		this.StartService.refreshStatus(this.uuid).subscribe(
			response => {
				this.directors = response['incorporation'][0].directors;
				this.directorsArr = JSON.parse(this.directors);
				this.firstName = this.directorsArr[this.id].firstName;
				this.lastName = this.directorsArr[this.id].lastName;
				this.email = this.directorsArr[this.id].email;
				this.al1 = this.directorsArr[this.id].al1;
				this.al2 = this.directorsArr[this.id].al2;
				this.city = this.directorsArr[this.id].city;
				this.postal = this.directorsArr[this.id].postal;
				this.country = this.directorsArr[this.id].country;
				this.state = this.directorsArr[this.id].state;
			},
			error => console.log(error)
		);
	}

}

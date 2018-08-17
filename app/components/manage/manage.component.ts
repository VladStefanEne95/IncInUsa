import { Component, OnInit,ViewChild, ElementRef } from "@angular/core";
import {Page} from "ui/page";
import { ActivatedRoute, Router } from '@angular/router';
import { StartService } from './../../services/start/start.service';


const plugin = require("nativescript-uuid");
var appSettings = require("application-settings");

@Component({
    selector: "Manage",
    moduleId: module.id,
	templateUrl: "./manage.component.html",
	styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

	companyName: string;
	companyType :string;
	companyUuid :string;
	uuidString :string;
	uuidArr :any;
	serverArr :any;
	updatedAt :any;
	status :string;

	//@ViewChild("step2") step2: ElementRef;
    constructor(private page: Page, private router: Router, private _Activatedroute:ActivatedRoute, private StartService: StartService) {
		// Use the component constructor to inject providers.
		page.actionBarHidden = true;
		this.page = page;
    }

    ngOnInit(): void {
		// Init your component properties here.
		this.companyName = appSettings.getString("companyName", "");
		this.companyType = appSettings.getString("companyType", "");
		this.uuidString = appSettings.getString("uuidString", "");
		this.uuidArr = this.uuidString.split(",");
		this.serverArr = [];

		this.companyUuid = appSettings.getString("uuid", "");
		this.status = appSettings.getString("status", "");
		let i = 0;
		for (let uuidElem of this.uuidArr) {
			if (uuidElem) {
				this.serverArr[i] = {};
				i++;
			}
		}
		i = 0;
		for (let uuidElem of this.uuidArr) {
			if (uuidElem) {
				this.StartService.refreshStatus(uuidElem).subscribe(
					response => {
							this.serverArr[i].status = response['incorporation'][0].status;
							this.serverArr[i].companyName = response['incorporation'][0].companyName;
							this.serverArr[i].companyType = response['incorporation'][0].companyType;
							this.serverArr[i].updatedAt = response['incorporation'][0].updatedAt;
							console.log(this.serverArr[i].status, this.serverArr[i].updatedAt);
							i++;
						},
					error => console.log(error)
				);
			}
		}
	}
	
	public done(){
		alert("to do");
	}

	public viewStatus() {
		this.router.navigate(['/status/' + this.companyUuid]);
	}
}

import { Component, OnInit,ViewChild, ElementRef } from "@angular/core";
import {Page} from "ui/page";
import { ActivatedRoute, Router } from '@angular/router';
import { StartService } from './../../services/start/start.service';
import * as dialogs from "ui/dialogs"


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
	serverArr :Array<any>;
	status :string;

    constructor(private page: Page, private router: Router, private _Activatedroute:ActivatedRoute, private StartService: StartService) {
		page.actionBarHidden = true;
		this.page = page;
    }

    ngOnInit(): void {
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
						this.serverArr[i].uuid = response['incorporation'][0].uuid;
						i++;
					},
					error => console.log(error)
				);
			}
		}
	}
	
	public done() {
		alert("to do");
	}

	public oldInc() {
		dialogs.prompt({
			title: "Application Number",
			cancelButtonText: "Cancel",
			neutralButtonText: "Done",
			defaultText: ""
		}).then(r => {
			this.uuidString = appSettings.getString("uuidString", "");
			if (this.uuidString.indexOf(r.text) !== -1) {
				this.uuidArr = this.uuidString.split(",");
				this.uuidArr.push(r.text);
				this.uuidString = this.uuidArr.toString();
				appSettings.setString("uuidString", this.uuidString);
				this.StartService.refreshStatus(r.text).subscribe(
					response => {
						let counter = this.serverArr.length;
						this.serverArr[counter] = {};
						this.serverArr[counter].status = response['incorporation'][0].status;
						this.serverArr[counter].companyName = response['incorporation'][0].companyName;
						this.serverArr[counter].companyType = response['incorporation'][0].companyType;
						this.serverArr[counter].updatedAt = response['incorporation'][0].updatedAt;
						this.serverArr[counter].uuid = response['incorporation'][0].uuid;
					},
					error => console.log(error)
				);
			} else 
				alert ("You already have this application");
		});
	}

	public viewStatus(companyUuid :string) {
		this.router.navigate(['/status/' + companyUuid]);
	}
}

import { Component, OnInit,ViewChild, ElementRef } from "@angular/core";
import {Page} from "ui/page";
import { ActivatedRoute, Router } from '@angular/router';
import { StartService } from './../../services/start/start.service';


const plugin = require("nativescript-uuid");
var appSettings = require("application-settings");

@Component({
    selector: "Status",
    moduleId: module.id,
	templateUrl: "./status.component.html",
	styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

	companyName: string;
	companyType :string;
	companyUuid :string;
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
		this.companyUuid = appSettings.getString("uuid", "");
		this.status = appSettings.getString("status", "");
		this.StartService.refreshStatus(this.companyUuid).subscribe(
			response => {
					appSettings.setString("status", response['incorporation'][0].status)
					this.status = response['incorporation'][0].status;
					this.updatedAt = response['incorporation'][0].updatedAt;
				},
			error => console.log(error)
		);
	}
	
	public done(){
		alert("to do");
	}
}

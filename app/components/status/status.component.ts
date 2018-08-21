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

	uuid :string;
	companyName: string;
	companyType :string;
	updatedAt :any;
	status :any;


    constructor(private page: Page, private router: Router, private _Activatedroute:ActivatedRoute, private StartService: StartService) {
		page.actionBarHidden = true;
		this.page = page;
    }

    ngOnInit(): void {
		this.uuid = this._Activatedroute.snapshot.params['id'];
		this.StartService.refreshStatus(this.uuid).subscribe(
			response => {
				this.status = response['status'];
				this.companyName = response['incorporation'][0].companyName;
				this.companyType = response['incorporation'][0].companyType;
				this.updatedAt = response['incorporation'][0].updatedAt;
			},
			error => console.log(error)
		);
	}

	public viewApplication(uuid) {
		this.router.navigate(["/application", uuid]);
	}
	
	public done(){
		alert("to do");
	}
}

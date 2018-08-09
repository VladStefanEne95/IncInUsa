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


	//@ViewChild("step2") step2: ElementRef;
    constructor(private page: Page, private router: Router) {
		// Use the component constructor to inject providers.
		page.actionBarHidden = true;
    }

    ngOnInit(): void {
		// Init your component properties here.
	
	}
	public viewAppStatus() {
		alert("TO DO");
	}
}

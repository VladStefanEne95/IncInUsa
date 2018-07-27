import { Component, OnInit,ViewChild, ElementRef } from "@angular/core";
import {Page} from "ui/page";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

	page;
	//@ViewChild("step2") step2: ElementRef;
    constructor(page: Page) {
		// Use the component constructor to inject providers.
		page.actionBarHidden = true;
		this.page = page;
		this.page.addCss("#step3 {visibility: collapsed}");
    }

    ngOnInit(): void {
        // Init your component properties here.
	}
	step3(page: Page): void{
		console.log("aici");
		this.page.addCss("#step2 {visibility: collapsed}");
		this.page.addCss("#step3 {visibility: visible}");
	}

	step2(page: Page): void{
		console.log("aici");
		this.page.addCss("#step3 {visibility: collapsed}");
		this.page.addCss("#step2 {visibility: visible}");
	}
}

import { Component, OnInit,ViewChild, ElementRef } from "@angular/core";
import {Page} from "ui/page";
import {KeyboardType} from "ui/enums";
import { SearchBar } from "ui/search-bar";
import { Router } from '@angular/router';
var appSettings = require("application-settings");


@Component({
    selector: "Personal",
    moduleId: module.id,
	templateUrl: "./personal.component.html",
	styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

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
	countryList :Array<String>;
	

    constructor( private page: Page, private router: Router) {
		// Use the component constructor to inject providers.
		page.actionBarHidden = true;
    }

    ngOnInit(): void {
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
		this.FirstCheckBox.nativeElement.checked = "true";
		this.countryList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
		,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
		,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
		,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
		,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
		,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
		,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
		,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
		,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
		,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
		,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
		,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
		,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
		,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay"
		,"Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
	
	}


	step3() {
	
		// if (this.firstName == "" ||
		// 	this.lastName == "" ||
		// 	this.email == "" ||
		// 	this.al1 == "" ||
		// 	this.al2 == "" ||
		// 	this.city == "" ||
		// 	this.postal == 0 ||
		// 	this.country == "" ||
		// 	this.state == "") {
		// 		alert("please complete the entire form");
		// 		return;
		// 	}
		appSettings.setString("firstName", this.firstName);
		appSettings.setString("lastName", this.lastName);
		appSettings.setString("email", this.email);
		appSettings.setString("al1", this.al1);
		appSettings.setString("al2", this.al2);
		appSettings.setString("city", this.city);
		appSettings.setString ("postal", this.postal);
		appSettings.setString("country", this.country);
		appSettings.setString("state", this.state);
		appSettings.setString("addToDirectors", String(this.FirstCheckBox.nativeElement.checked));

		if (this.FirstCheckBox.nativeElement.checked == true) {
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
		} else {
			appSettings.setString("directors", JSON.stringify([{}]));
		}

		this.router.navigate(["/review"]);
	}


	@ViewChild('myfilter') myfilter: ElementRef;
	
	cancelFilterableList() {
		console.log('canceled');
	}
	
	itemTapped(args) {
		alert(args.selectedItem)
	}
	
	showPicker() {
		this.myfilter.nativeElement.show();
	}
	

}

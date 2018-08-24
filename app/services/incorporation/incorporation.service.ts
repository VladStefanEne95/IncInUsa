import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from "rxjs";

@Injectable()
export class IncorporationService {

  private submitUrl = "http://7409d3fd.ngrok.io/incorporation-data/";
  
  constructor(private http: HttpClient, private router: Router) { }

  submitBilling(firstName, lastName, email, al1, al2, city, postal, country, state, uuid, emoji) {
	  
	let data = {
	  "firstName": firstName,
	  "lastName": lastName,
	  "email": email, 
	  "al1": al1, 
	  "al2": al2, 
	  "city": city, 
	  "postal": postal, 
	  "country": country, 
	  "state": state, 
	  "uuid": uuid,
	  "emoji": emoji
	}
	let body = JSON.stringify(data);
	let headears = new HttpHeaders();
	headears.append('Content-Type', 'application/json');
  return this.http.post("http://7409d3fd.ngrok.io/incorporation-data/billing", data, {headers: headears}); 	
  }
  
  submitData(firstName, lastName, email, al1, al2, city, postal, country, state, directors, uuid, companyName, companyType, emoji) {

	console.log(uuid);
	  let data = {
		"firstName": firstName,
		"lastName": lastName,
		"email": email, 
		"al1": al1, 
		"al2": al2, 
		"city": city, 
		"postal": postal, 
		"country": country, 
		"state": state, 
		"uuid": uuid,
		"emoji": emoji,
		"directors": directors,
		"companyName": companyName,
		"companyType": companyType
	  }
	  let body = JSON.stringify(data);
	  let headears = new HttpHeaders();
	  headears.append('Content-Type', 'application/json');
	return this.http.post(this.submitUrl, data, {headers: headears}); 	
  }

}
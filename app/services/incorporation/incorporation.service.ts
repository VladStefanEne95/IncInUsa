import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from "rxjs";

@Injectable()
export class IncorporationService {

  private submitUrl = "http://2e498c7f.ngrok.io/incorporation-data/";
  
  constructor(private http: HttpClient, private router: Router) { }
  
  submitData(firstName, lastName, email, al1, al2, city, postal, country, state, directors, uuid, companyName, companyType) {

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
		"directors": directors,
		"companyName": companyName,
		"companyType": companyType
	  }
	  let body = JSON.stringify(data);
	  let headears = new HttpHeaders();
	  headears.append('Content-Type', 'application/json');
	return this.http.post(`${this.submitUrl}`, data, {headers: headears}); 	
  }

}
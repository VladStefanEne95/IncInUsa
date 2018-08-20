import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from "rxjs";

@Injectable()
export class PaymentService {

  private submitUrl = "http://4f0b569b.ngrok.io/payment/";
  
  constructor(private http: HttpClient, private router: Router) { }
  
  submitToken(token: string) {
	console.log(token);
	let headears = new HttpHeaders();
	headears.append('Content-Type', 'application/json');
	return this.http.post(this.submitUrl, {stripeToken: token}); 	
  }

}
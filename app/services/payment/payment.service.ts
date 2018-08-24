import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from "rxjs";

@Injectable()
export class PaymentService {

  private submitUrl = "http://7409d3fd.ngrok.io/payment/";
  
  constructor(private http: HttpClient, private router: Router) { }
  
  submitToken(token: string, payment: number) {
	console.log(token);
	let headears = new HttpHeaders();
	headears.append('Content-Type', 'application/json');
	return this.http.post(this.submitUrl, {stripeToken: token, sum: payment}); 	
  }

}
import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from "rxjs";

@Injectable()
export class PaymentService {

  private submitUrl = "http://localhost:3000/";
  
  constructor(private http: HttpClient, private router: Router) { }
  
  submitToken(token: string) {
	  console.log(token);
	  return this.http.get("http://localhost:3000/test"); 	
  }

}
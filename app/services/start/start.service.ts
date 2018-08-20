import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from "rxjs";

@Injectable()
export class StartService {

  private submitUrl = "http://4f0b569b.ngrok.io/incorporation-data/refresh/";
  
  constructor(private http: HttpClient, private router: Router) { } 
  
  refreshStatus(uuid) {
	return this.http.get(this.submitUrl + uuid); 	
  }
}
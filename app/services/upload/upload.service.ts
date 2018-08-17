import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import * as bghttp from "nativescript-background-http";


@Injectable()
export class UploadService {

  private submitUrl = "http://38a1be63.ngrok.io/incorporation-data/refresh/";
  
  constructor(private http: HttpClient, private router: Router) { }
 
  public extractImageName(fileUri) {
	var pattern = /[^/]*$/;
	var imageName = fileUri.match(pattern);

	return imageName;
}


  public uploadImage(destination, filepath) {
	let session = bghttp.session("image-upload");
	let imageName = this.extractImageName(filepath);

	var request = {
		url: destination,
		method: "POST",
		headers: {
			"File-Name": imageName
		},
		description: "{ 'uploading': " + imageName + " }"
	};
	console.log("aici");
	request.headers['uuid'] = "itworks"; // replace with uuid;
	let task = session.uploadFile(filepath, request);
	task.on("complete", (event) => { 
		console.log("complete");
	});
	task.on("error", event => {
		console.log(event);
	});	
  }
}
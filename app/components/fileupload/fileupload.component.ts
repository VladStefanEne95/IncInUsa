import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import * as Camera  from "nativescript-camera";
import { ImageFormat } from "ui/enums";
import { Image } from "ui/image";
import * as bghttp from "nativescript-background-http";
import * as imagepicker from "nativescript-imagepicker";
import * as FileSystem from "file-system";
import { Observable } from "rxjs";
import {Page} from "ui/page";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
const imageSourceModule = require("tns-core-modules/image-source")
import { UploadService } from './../../services/upload/upload.service'

var appSettings = require("application-settings");

@Component({
    selector: "Fileupload",
    moduleId: module.id,
    templateUrl: "./fileupload.component.html"
})
export class FileuploadComponent implements OnInit {
  
	public selectedIndex = 1;
    public items: Array<string>;


    imageSrc: any;
	isSingleMode: boolean = true;
	imageSelected: boolean = false;
    thumbSize: number = 80;
	previewSize: number = 200;
	docType :string;
	docNumber :number;
	uuid :string;

	constructor(private page: Page, private UploadService: UploadService) {
		page.actionBarHidden = true;
		this.items = [];
	}

    ngOnInit(): void {
		// Init your component properties here.
		this.page.addCss("#step2 {visibility: collapsed}");
		this.items.push("Second");
		this.items.push("Passaport");
		this.uuid = appSettings.getString("uuid", "");
		Camera.requestPermissions();
	}
	
	public onchange(args: SelectedIndexChangedEventData) {
        console.log(`Drop Down selected index changed"`);
    }

    public onopen() {
        console.log("Drop Down opened.");
    }

    public onclose() {
        console.log("Drop Down closed.");
	}
	
	public showOptions() {
		this.page.addCss("#step1 {visibility: collapsed}");
		this.page.addCss("#step2 {visibility: visible}");
		this.page.addCss(".hide-border {border-bottom-color: #dedede}");
	}


	public hideOptions() {
		this.page.addCss("#step2 {visibility: collapsed}");
		this.page.addCss("#step1 {visibility: visible}");
		this.page.addCss(".hide-border {border-bottom-color: white}");
	}
	
    public onSelectSingleTap() {
		this.isSingleMode = true;
        let context = imagepicker.create({
            mode: "single"
        });
        this.startSelection(context);
    }

    private startSelection(context) {
		let session = bghttp.session("image-upload");
        context
        .authorize()
        .then(() => {
            return context.present();
        })
        .then((selection) => {
			this.imageSrc = selection.length > 0 ? selection[0] : null;
			this.imageSelected = true;
			//check for ios
			this.upload("http://af2b4f6d.ngrok.io/upload", this.imageSrc['_android']);
        }).catch(function (e) {
            console.log(e);
        });
	}
	
	public takePicture() {
		Camera.takePicture({saveToGallery: false, width: 320, height: 240 }).then(picture => {
			let folder = FileSystem.knownFolders.documents();
			let path = FileSystem.path.join(folder.path, (new Date()) + ".png");
			imageSourceModule.fromAsset(picture)
			.then(imageSource => {
				 let saved = imageSource.saveToFile(path, "png");
				 this.imageSelected = true;
				 this.imageSrc = path;
				 this.imageSelected = true;
				 this.upload("http://af2b4f6d.ngrok.io/upload", path);
			 });
		});
	}
	public upload(destination: string, filepath: string) {
		this.UploadService.uploadImage(destination, filepath);
	}
}
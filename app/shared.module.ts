import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { StatusUpdate } from './pipes/status-update.pipe';

@NgModule({
	imports: [ 
		CommonModule 
	],
    declarations: [
        StatusUpdate
	],
	exports: [
        StatusUpdate
    ]
})
export class SharedModule { }

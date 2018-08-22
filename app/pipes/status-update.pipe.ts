import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'statusUpdate'})
export class StatusUpdate implements PipeTransform {
  transform(value: any): string {
	if (value) {
		let date = new Date();
		let isoDate = date.toISOString().substring(0, 10);
		isoDate = isoDate.replace(/-/g, '\/');
		console.log(value);
		if (isoDate === value.substring(0, 10)){
			return  value.split(" ")[1].substring(0, 5) + " " + value.split(" ")[2];
		} else {
			return isoDate;
		}
	}
  }
}
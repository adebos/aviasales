import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
	selector: 'app-flight-item',
	templateUrl: './flight-item.component.html',
	styleUrls: ['./flight-item.component.css']
})
export class FlightItemComponent implements OnInit {
	@Input() ticket;

	constructor() { }

	ngOnInit() {
	}

}

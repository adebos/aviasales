import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-tickets-page',
	templateUrl: './tickets-page.component.html',
	styleUrls: ['./tickets-page.component.css']
})
export class TicketsPageComponent implements OnInit {
	ticketAfterFilter;

	constructor() {
	}

	ngOnInit() {

	}
	filterToShow(ticketAfterFilter) {
        this.ticketAfterFilter = ticketAfterFilter;
    }

}

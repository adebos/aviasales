import { Component, OnChanges, Input } from '@angular/core';
import { Data } from '../tickets';


@Component({
	selector: 'app-flight-list',
	templateUrl: './flight-list.component.html',
	styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnChanges {
	@Input() ticketAfterFilter;
	tickets;

	constructor() {
		this.tickets = Data.tickets;
		this.startSortTickets();
	}
	ngOnChanges(changes) {
		if (this.ticketAfterFilter) {
			this.onFilter();
		}
	}
	startSortTickets() {
		this.tickets = Data.tickets;
		this.tickets.sort((a, b) => a.price - b.price);
	};
	sortTickets(num) {
		let newTickets = Data.tickets.filter((ticket) => ticket.stops == num);
		return newTickets;
	};
	onFilter() {
		this.tickets = [];

		if (this.ticketAfterFilter.length === 0) return;
		if (this.ticketAfterFilter[0] === true) {
			this.startSortTickets();
		} else {
			for (let i = 1; i < 5; i++) {
				if (this.ticketAfterFilter[i] === true) {
					let newTickets = this.sortTickets(i-1);
					this.tickets = this.tickets.concat(newTickets)
											   .sort((a, b) => a.price - b.price);
				}
			}
		}
	}
}
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
	chekedInputs: boolean[];
	@Output() filterToShow = new EventEmitter();

	constructor() {}

	ngOnInit() {
		let self = this;
		let block = document.getElementsByClassName("filter__block")[0];
		let inputs = block.querySelectorAll("input");
		for (let i = 0; i < inputs.length; i++) {
			inputs[i].onclick = function() {
				if (this === inputs[0]) {
					for (let i = 1; i < inputs.length; i++) {
						inputs[i].checked = false;
					};
					inputs[0].checked = true;
				} else {
					inputs[0].checked = false;
				}
				self.checkedToArray();
			};
		};
		let spans = block.querySelectorAll("span");
		for (let i = 0; i < spans.length; i++) {
			spans[i].onclick = function() {
				for (let i = 0; i < inputs.length; i++) {
					inputs[i].checked = false;
				};
				this.parentElement.querySelector("input").checked = true;
				self.checkedToArray();
			};
		};
	}

	checkedToArray() {
		this.chekedInputs = [];
		let block = document.getElementsByClassName("filter__block")[0];
		let inputs = block.querySelectorAll("input");
		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i].checked == true) {
				this.chekedInputs[i] = true;
			}
		};
		this.filterToShow.emit(this.chekedInputs);
	}
}

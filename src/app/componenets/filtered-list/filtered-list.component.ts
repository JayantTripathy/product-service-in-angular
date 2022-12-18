import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtered-list',
  templateUrl: './filtered-list.component.html',
  styleUrls: ['./filtered-list.component.css']
})
export class FilteredListComponent implements OnInit {
  @Input() all: number | undefined;
  @Input() cricketersList: any[] | undefined;

  // This variable holds the selected value of the radio button
  selectedRadioButtonValue: string = 'All';

  // The Output decorator makes the property of an Component as an Output property
  // The EventEmitter class in Angular is used to create the custom event
  // When the radio button selection changes, the selected radio button
  // value which is a string gets passed to the event handler method.
  // Hence, the event payload is string.
  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }
  getCricketerListByCountry(country: string): any {
    return this.cricketersList?.filter(x => x.country === country)?.length;
  }
  // This method raises the custom event. We will bind this
  // method to the change event of all the radio buttons
  RadioButtonSelectionChange() {
    this.countRadioButtonSelectionChanged
      .emit(this.selectedRadioButtonValue);
  }
}

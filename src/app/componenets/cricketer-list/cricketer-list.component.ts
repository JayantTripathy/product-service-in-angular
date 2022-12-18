import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cricketer-list',
  templateUrl: './cricketer-list.component.html',
  styleUrls: ['./cricketer-list.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class CricketerListComponent implements OnInit {

  cricketerList: Cricketer[]=[];
  selectedCricketersCountRadioButton: string = 'All';
  constructor() { }

  ngOnInit(): void {
   this.getAllCricketers();
  }
  getAllCricketers(){
    this.cricketerList= [
      { id: 1, name: 'Rahuld Dravid', hundreds: 48, country: 'India' },
      { id: 2, name: 'Sachin Tendulkar', hundreds: 100, country: 'India' },
      { id: 3, name: 'Saurrav Ganguly', hundreds: 38, country: 'India' },
      { id: 4, name: 'Mahendra Singh Dhoni', hundreds: 16, country: 'India' },
      { id: 5, name: 'Virat Kohli', hundreds: 71, country: 'India' },
      { id: 6, name: 'Ricky Ponting', hundreds: 71, country: 'Australia ' },
      { id: 7, name: 'Steven Smith', hundreds: 27, country: 'Australia' },
      { id: 8, name: 'Kane Willimison', hundreds: 51, country: 'Newzealand' },
      { id: 8, name: 'Babar Azam', hundreds: 24, country: 'Pakistan' }
    ];
  }
  getNewCricketers(){
    console.log(this.cricketerList);
    
    this.cricketerList.push({ id: 9, name: 'David Warner', hundreds: 30, country: 'Australia' });
    this.cricketerList.push({ id: 10, name: 'Md. Rizwan', hundreds: 14, country: 'Pakistan' });
    console.log(this.cricketerList);
  }
  getAllCricketerListCount(): number {
    return this.cricketerList.length;
  }
  getAllCricketerList(): any {
    return this.cricketerList;
  }
    // Depending on the radio button which is selected, this method updates
    // the selectedStudentCountRadioButton property
    // This method is going to called when the child component (filteredListComponent)
    // raises the custom event - countRadioButtonSelectionChanged
    // The event binding is specified in CricketerList.component.html
    onCricketersCountRadioButtonChange(selectedRadioButtonValue: any): void {
      this.selectedCricketersCountRadioButton = selectedRadioButtonValue;
  }
  identify(index: number, item: any){
    return item.name; 
 }
}
export class Cricketer {

  id: number = 0;
  name: string = '';
  hundreds: number = 0;
  country: string = '';
}
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  count = 0;
  constructor() { }

  ngOnInit(): void {
  }
  incrementChild() {
    this.count++;
  }
  decrementChild() {
    this.count--;
  }
}

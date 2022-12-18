import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  @ViewChild(ChildComponent) child: ChildComponent | undefined;

  ngOnInit(): void {
  }

   increment() {
    this.child?.incrementChild();
  }
   decrement() {
    this.child?.decrementChild();
  }
}

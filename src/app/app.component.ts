import { DecimalPipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

name: string='Jayant';
  constructor(private router : Router) { }

  ngOnInit() {
    
  }
  Navigation(pageLink: any){
    return pageLink=='about' ? this.router.navigate(['/about-us']) : this.router.navigate(['/contact-us']);
  }
  
}

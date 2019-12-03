import { Component, OnInit } from '@angular/core';


import { MessageService } from '../message.service';
import { timer } from 'rxjs';
//import { Observable } from 'rxjs/Observable';
//import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.css']
})
export class AlertButtonComponent implements OnInit {
 
  // content: Observable<any>; 

 content     = 'you have been warned';
 hideContent = true;
 severity    = 423;

 constructor() { }
 // constructor(private msgService: MessageService) { }
 

 ngOnInit() {
   // this.content = this.msgService.getContent();
 }

 toggle() {
   this.hideContent = !this.hideContent;
 }

 toggleAsync() {
   timer(500).subscribe(() => {
     this.toggle();
   });
 }

}

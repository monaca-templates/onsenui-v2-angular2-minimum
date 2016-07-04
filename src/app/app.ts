import {Component} from '@angular/core';
import {onsNotification, ONS_DIRECTIVES} from 'angular2-onsenui';

@Component({
  selector: 'app',
  directives: [ONS_DIRECTIVES],
  templateUrl: './app.html',
})
export class MyApp {
  constructor() {}

  alert() {
  	onsNotification.alert({
	  message: 'Hello World!',
	  title: 'Onsen UI!',
	  animation: 'default'
	});
  }
}

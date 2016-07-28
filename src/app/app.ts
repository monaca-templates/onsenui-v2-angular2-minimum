import {Component} from '@angular/core';
import {onsNotification, ONS_DIRECTIVES} from 'angular2-onsenui';

@Component({
  selector: 'app',
  directives: [ONS_DIRECTIVES],
  template: require('./app.html'),
  styles: [require('./app.css')]
})
export class MyApp {
  constructor() {}

  alert() {
    onsNotification.alert('This is an Onsen UI alert notification test.');
  }
}

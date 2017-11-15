import {Component} from '@angular/core';
import * as ons from 'onsenui';

@Component({
  selector: 'app',
  template: require('./app.html'),
  styles: [require('./app.css')]
})
export class MyApp {
  constructor() {}

  alert() {
    ons.notification.alert('This is an Onsen UI alert notification test.');
  }
}

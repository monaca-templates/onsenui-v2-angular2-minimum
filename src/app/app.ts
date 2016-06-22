import {Component} from '@angular/core';

import 'onsenui';
import {ONS_DIRECTIVES} from 'angular2-onsenui';

@Component({
  selector: 'app',
  directives: [ONS_DIRECTIVES],
  templateUrl: 'app/app.html',
})
export class MyApp {
  constructor() {}
}

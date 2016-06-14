// Polyfills
import 'core-js';
require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');

// Vendor imports
import '@angular/platform-browser-dynamic';
import '@angular/platform-browser';
import '@angular/core';
import '@angular/http';
import '@angular/router';
// import 'rxjs/Rx';

// Onsen UI
import 'onsenui'
import {ONS_DIRECTIVES} from 'angular2-onsenui';

// Application code starts here
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide, enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router';

import {MyApp} from './app/app';

// enableProdMode()

bootstrap(MyApp, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
])
.catch(err => console.error(err));

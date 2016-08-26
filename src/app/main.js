import "../../scss/main.scss";
import "es6-shim";
import "es6-promise";
import "reflect-metadata";

import "zone.js/dist/zone";
import "zone.js/dist/long-stack-trace-zone";

import "rxjs/add/operator/map";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
platformBrowserDynamic().bootstrapModule(AppModule);

/**
 * Created by ralemy on 8/26/16.
 * This file filters all test files so that webpack can bundle them.
 */

Error.stackTraceLimit = Infinity;

import "es6-shim";
import "es6-promise";
import "reflect-metadata";

import "zone.js/dist/zone";
import "zone.js/dist/async-test";
import "zone.js/dist/fake-async-test";
import "zone.js/dist/sync-test";

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {
    TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
} from '@angular/platform-browser-dynamic/testing';
import { setBaseTestProviders, addProviders, inject } from '@angular/core/testing';

setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

Object.assign(global, { addProviders, inject });

let testContext = require.context('../src', true, /\.spec\.js/);
testContext.keys().forEach(testContext);

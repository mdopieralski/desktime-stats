import 'core-js';
import 'zone.js/dist/zone';
import 'zone.js/dist/proxy';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/async-test';
import 'zone.js/dist/jasmine-patch';

import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

const context = (require as any).context('../app/', true, /\.spec\.ts$/);
context.keys().map(context);

TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);
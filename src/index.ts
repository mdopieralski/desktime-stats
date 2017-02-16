import 'zone.js';
import 'reflect-metadata';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';

if (process.env.PRODUCTION) {

    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
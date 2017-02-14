'use strict';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule } from 'ui-router-ng2';

import { Components } from './components/components';
import { CommonComponents } from './common/common';

require('../assets/styles/_main.less');

const Routes = [].concat.apply([], Components.routes);
const RoutesComponents = Routes.map(route => route.component);
const Declarations = [].concat.apply(CommonComponents, RoutesComponents);
const RouterModule = UIRouterModule.forRoot({
	states: Routes,
	useHash: false
});

Declarations.push(Components.root);

@NgModule({
	imports: [BrowserModule, RouterModule],
	declarations: Declarations,
	bootstrap: [Components.root]
})
export class AppModule {}
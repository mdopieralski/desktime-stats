'use strict';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UIRouterModule } from 'ui-router-ng2';
import { HttpModule } from '@angular/http';

import { Components } from './components/components';
import { CommonComponents, CommonServices } from './common/common';

require('../assets/styles/_main.less');

const Routes = [].concat.apply([], Components.routes);
const RoutesComponents = Routes.map(route => route.component);
const RouterModule = UIRouterModule.forRoot({
    states: Routes,
    useHash: false
});

function _getDeclarations() {

    let base = [].concat.apply(CommonComponents, RoutesComponents);
    base = [].concat.apply(base, Components.stateless);
    base.push(Components.root);

    return base;
}

@NgModule({
    imports: [BrowserModule, RouterModule, FormsModule, HttpModule],
    declarations: _getDeclarations(),
    bootstrap: [Components.root],
    providers: CommonServices
})
export class AppModule {}
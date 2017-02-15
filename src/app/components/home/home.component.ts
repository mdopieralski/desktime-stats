import { Component } from '@angular/core';

require('./home.less');

@Component({
    selector: 'home-component',
    template: require('./home.component.html')
})
export class HomeComponent {
    name = 'home';
}
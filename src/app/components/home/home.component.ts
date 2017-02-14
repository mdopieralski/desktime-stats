import { Component } from '@angular/core';

@Component({
	selector: 'home-component',
	template: require('./home.component.html')
})
export class HomeComponent {
	name = 'home';
}
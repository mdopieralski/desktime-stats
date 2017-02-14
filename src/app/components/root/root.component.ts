import { Component } from '@angular/core';

@Component({
	selector: 'desktime-stats-app',
	template: `
		<header d-header></header>
		<main id="main-content">
			<ui-view></ui-view>
		</main>
		<footer d-footer></footer>
	`
})
export class RootComponent {
	name = 'Angular';
}
import { Component } from '@angular/core';

require('./d-footer.less');

@Component({
	selector: '[d-footer]',
	template: require('./d-footer.component.html')
})
export class dFooterComponent {
	name = 'd-footer';
}
import { Component } from '@angular/core';

require('./d-header.less');

@Component({
    selector: '[d-header]',
    template: require('./d-header.component.html')
})
export class dHeaderComponent {
    name = 'd-header';
}
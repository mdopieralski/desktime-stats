import { Component } from '@angular/core';

@Component({
    selector: 'settings-component',
    template: require('./settings.component.html')
})
export class SettingsComponent {

    settingsModel = {
        apiKey: '',
        hourValue: ''
    };

    constructor() {

        const $localStorageData = localStorage.getItem('DesktimeSettings');

        if ($localStorageData) {

            if ($localStorageData !== '[object Object]') {

                this.settingsModel = JSON.parse($localStorageData);
            }
        }
    }

    onSubmit() {

        localStorage.setItem('DesktimeSettings', JSON.stringify(this.settingsModel));
        alert('success');
    }
}
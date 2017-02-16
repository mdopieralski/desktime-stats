import { Component } from '@angular/core';

require('./settings.less');

@Component({
    selector: 'settings-component',
    template: require('./settings.component.html')
})
export class SettingsComponent {

    settingsModel = {
        apiKey: '',
        hourValue: ''
    };
    successMessage = false;
    resetMessage = false;

    constructor() {

        const $localStorageData = localStorage.getItem('DesktimeSettings');

        if ($localStorageData) {

            if ($localStorageData !== '[object Object]') {

                this.settingsModel = JSON.parse($localStorageData);
            }
        }
    }
    save() {

        localStorage.setItem('DesktimeSettings', JSON.stringify(this.settingsModel));
        this.successMessage = true;

        setTimeout(function() {

            this.successMessage = false;
        }, 1500);
    }
    reset() {

        localStorage.removeItem('DesktimeSettings');

        this.settingsModel = {
            apiKey: '',
            hourValue: ''
        };
        this.resetMessage = true;

        setTimeout(function() {

            this.resetMessage = false;
        }, 1500);
    }
}
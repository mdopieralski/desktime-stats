import { Component } from '@angular/core';
import { DesktimeApiService } from '../../common/desktime-api/desktime-api.service';

@Component({
    selector: 'stats-component',
    template: require('./stats.component.html')
})
export class StatsComponent {

    employee = {
        apps: {
            productive: [],
            neutral: [],
            unproductive: [],
        }
    };
    statsLoaded = false;
    company = {};

    constructor(private DesktimeAPI: DesktimeApiService) {

        let $localStorageData = localStorage['DesktimeSettings'];

        if ($localStorageData) {

            $localStorageData = JSON.parse($localStorageData);

            DesktimeAPI.getCompany($localStorageData.apiKey)
                .subscribe(res => {

                    this.company = res;
                });

            DesktimeAPI.getEmployee($localStorageData.apiKey)
                .subscribe(res => {

                    console.log(res);

                    this.employee = res;

                    setTimeout(() => {

                        this.statsLoaded = true;
                    }, 1000);
                });
        }
    }
}
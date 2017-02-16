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
    missingSettings = false;
    apiError = false;

    constructor(private DesktimeAPI: DesktimeApiService) {

        let $localStorageData = localStorage['DesktimeSettings'];

        if (!!$localStorageData) {

            $localStorageData = JSON.parse($localStorageData);

            DesktimeAPI.getCompany($localStorageData.apiKey)
                .subscribe(res => {

                    if (!res.error) {

                        this.company = res;

                        DesktimeAPI.getEmployee($localStorageData.apiKey)
                            .subscribe(res => {

                                if (!res.error) {

                                    this.employee = res;

                                    setTimeout(() => {

                                        this.statsLoaded = true;
                                    }, 1000);
                                }
                            });
                    } else {

                        this.apiError = true;
                    }
                });
        } else {

            this.missingSettings = true;
        }
    }
}
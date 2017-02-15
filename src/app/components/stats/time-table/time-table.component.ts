import { Component, Input } from '@angular/core';

require('./time-table.less');

@Component({
    selector: 'time-table',
    template: require('./time-table.component.html')
})
export class TimetableComponent {

    @Input('table-data') data: any;

    name = 'timetable';
    hourValue = 0;
    filterValue = '';
    summaryValue = 0;
    summaryValueText = '';

    constructor() {

        let $localStorageData = localStorage['DesktimeSettings'];

        if ($localStorageData) {

            $localStorageData = JSON.parse($localStorageData);
            this.hourValue = $localStorageData.hourValue;
        }
    }
    ngOnChanges() {

        if (this.data.length) {

            this.data = this.getTranslatedData();
        }
    }
    getTranslatedData() {

        this.summaryValue = 0;

        return this.data.map((item, index) => {

            item.value = ((item.duration / 60) * (this.hourValue / 60));
            item.valueText = `${item.value.toFixed(2)} PLN`;
            item.visible = true;

            this.updateSummaryValue(item.value);

            if (index === this.data.length - 1) {

                this.fixSummaryValue();
            }

            return item;
        });
    }
    updateSummaryValue(value) {

        this.summaryValue += value;
    }
    fixSummaryValue() {

        this.summaryValue = Math.round(this.summaryValue * 1e2) / 1e2;
        this.summaryValueText = this.summaryValue.toString() + 'PLN';
    }
    setFilter(boolean) {

        this.summaryValue = 0;

        this.data = this.data.map(item => {

            const filter = this.filterValue.toLowerCase().split('|');

            item.visible = boolean ? (item.name.toLowerCase().indexOf(this.filterValue.toLowerCase()) > -1) : true;

            if (item.visible) {

                this.updateSummaryValue(item.value);

            }
            return item;
        });


        if (!boolean) {
            this.filterValue = '';
        } else {

            this.fixSummaryValue();
        }
    }
}
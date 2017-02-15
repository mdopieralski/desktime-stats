'use strict';

import { dHeaderComponent } from './d-header/d-header.component';
import { dFooterComponent } from './d-footer/d-footer.component';
import { dSpinnerComponent } from './d-spinner/d-spinner.component';

import { DesktimeApiService } from './desktime-api/desktime-api.service';

export const CommonComponents = [
    dHeaderComponent,
    dFooterComponent,
    dSpinnerComponent,
];

export const CommonServices = [
    DesktimeApiService
];
'use strict';

import { RootComponent } from './root/root.component';

import { HomeRoutes } from './home/home.routes';
import { SettingsRoutes } from './settings/settings.routes';
import { StatsRoutes } from './stats/stats.routes';

import { TimetableComponent } from './stats/time-table/time-table.component';

export const Components = {
    root: RootComponent,
    stateless: [
        TimetableComponent
    ],
    routes: [
        HomeRoutes,
        SettingsRoutes,
        StatsRoutes,
    ]
};
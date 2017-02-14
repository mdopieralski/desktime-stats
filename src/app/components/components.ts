'use strict';

import { RootComponent } from './root/root.component';

import { HomeRoutes } from './home/home.routes';
import { SettingsRoutes } from './settings/settings.routes';
import { StatsRoutes } from './stats/stats.routes';

export const Components = {
	root: RootComponent,
	routes: [
		HomeRoutes,
		SettingsRoutes,
		StatsRoutes,
	]
};
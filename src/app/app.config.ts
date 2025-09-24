import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { isDevMode } from '@angular/core';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { alcoholicsReducer } from './data-access/states/alcoholics/alcoholics.reducer';
import { provideEffects } from '@ngrx/effects';
import { AlcoholicsEffects } from './data-access/states/alcoholics/alcoholics.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools'; 
import { AlcoholicsFacade } from './data-access/states/alcoholics/alcoholics.facade';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    provideStore({
      alcoholicsFilterItems: alcoholicsReducer
    }),
    provideEffects([
      AlcoholicsEffects,
    ]),
    (isDevMode() ? [provideStoreDevtools({ maxAge: 25 })] : []),

    AlcoholicsFacade
  ],
};

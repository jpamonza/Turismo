import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { appRoutes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { PlacesService } from './modules/dashboard/service/places.service';
import { provideHttpClient } from '@angular/common/http';
import { provideOAuthClient, OAuthStorage } from 'angular-oauth2-oidc';

const oAuthStorageFactory = (): OAuthStorage => {
  return localStorage;
};

export const appConfig: ApplicationConfig = {
  providers: [
    PlacesService,
    provideRouter(appRoutes),
    provideStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(),
    provideHttpClient(),
    provideOAuthClient(),
    { provide: OAuthStorage, useFactory: oAuthStorageFactory }
  ],
};

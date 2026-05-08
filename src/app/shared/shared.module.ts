import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { authReducer } from '../auth/store/auth.reducer';
import { dashboardReducer } from '../dashboard/store/dashboard.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../auth/store/auth.effects';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiService } from './services/api.service';
import { TokenInterceptor } from './interceptors/http-token.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DashboardEffects } from '../dashboard/store/dashboard.effects';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    StoreModule.forRoot({ auth: authReducer, dashboard: dashboardReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([AuthEffects, DashboardEffects]),
  ],
  providers: [
    ApiService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class SharedModule {}

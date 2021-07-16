import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { StoreModule } from '@ngrx/store';
import { authReducer } from '../auth/store/auth/auth.reducer';
import { dashboardReducer } from '../dashboard/store/dashboard/dashboard.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../auth/store/auth/auth.effects';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/http-token.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DashboardEffects } from '../dashboard/store/dashboard/dashboard.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ dashboard: dashboardReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([AuthEffects, DashboardEffects]),
    ToastrModule.forRoot(),
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

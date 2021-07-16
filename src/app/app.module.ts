import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthEffects } from './auth/store/auth/auth.effects';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { dashboardReducer } from './dashboard/store/dashboard/dashboard.reducer';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardEffects } from './dashboard/store/dashboard/dashboard.effects';
import { authReducer } from './auth/store/auth/auth.reducer';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    DashboardModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    MatTableModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    StoreModule.forRoot({
      auth: authReducer,
      dashboard: dashboardReducer,
    }),
    EffectsModule.forRoot([AuthEffects, DashboardEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([AuthEffects, DashboardEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

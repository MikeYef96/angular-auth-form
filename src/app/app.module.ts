import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth/services/auth.service';
import { authReducer } from './auth/store/auth.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthEffects } from './auth/store/auth.effects';
import { SharedModule } from './shared/shared.module';
import { dashboardReducer } from './dashboard/store/dashboard.reducer';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardEffects } from './dashboard/store/dashboard.effects';
import { ChartModule } from 'angular2-chartjs';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    DashboardModule,
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    MatTableModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot({
      auth: authReducer,
      dashboard: dashboardReducer,
    }),
    EffectsModule.forRoot([AuthEffects, DashboardEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    ChartModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}

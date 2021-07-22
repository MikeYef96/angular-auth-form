import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ApiService } from './services/api.service';
import { TokenInterceptor } from './interceptors/http-token.interceptor';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [],
  imports: [BrowserAnimationsModule, CommonModule, ToastrModule.forRoot()],
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

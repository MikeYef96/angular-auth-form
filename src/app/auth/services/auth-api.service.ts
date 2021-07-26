import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { IUserData } from 'src/app/shared/models/user-data.model';
import { ApiService } from '../../shared/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService extends ApiService {

  constructor(protected injector: Injector) {
    super(injector);
  }

  login({ email, password }: any): Observable<IUserData> {
    return super.post<IUserData>('login', {
      email,
      password,
    });
  }
}

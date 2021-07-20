import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { IAuthState } from 'src/app/auth/model/auth-state.model';
import { signInRequest } from '../../store/auth.actions';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent {
  constructor(private store: Store<IAuthState>) {}

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.min(4), Validators.required]),
  });

  signInHandler(): void {
    if (this.form.invalid) {
      return;
    }

    this.store.dispatch(signInRequest(this.form.getRawValue()));
  }
}

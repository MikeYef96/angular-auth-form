import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AuthStateInterface } from 'src/app/auth/model/state.model';
import { signInRequest } from '../../store/auth.actions';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInFormComponent {
  constructor(private store: Store<AuthStateInterface>) {}

  form: FormGroup = new FormGroup({
    email: new FormControl('admin@deepersignals.com', [
      Validators.email,
      Validators.required,
    ]),
    password: new FormControl('password', [
      Validators.min(4),
      Validators.required,
    ]),
  });

  signInHandler(): void {
    if (this.form.invalid) {
      return;
    }

    this.store.dispatch(signInRequest(this.form.getRawValue()));
  }
}

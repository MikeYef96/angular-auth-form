import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthStateInterface } from 'src/app/shared/models/state.model';
import { signInRequest } from 'src/app/shared/store/auth.actions';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('user@deepersignals.com', [
      Validators.email,
      Validators.required,
    ]),
    password: new FormControl('password', [
      Validators.min(4),
      Validators.required,
    ]),
  });

  get email(): AbstractControl {
    return this.form.controls.email;
  }

  get password(): AbstractControl {
    return this.form.controls.password;
  }

  constructor(private store: Store<AuthStateInterface>) {}

  ngOnInit(): void {}

  signInHandler(): void {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
    this.store.dispatch(signInRequest(this.form.getRawValue()));
  }
}

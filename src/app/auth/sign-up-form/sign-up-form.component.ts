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
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.min(4), Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.min(4), Validators.required]),
  });

  constructor(private store: Store<AuthStateInterface>) {}

  ngOnInit(): void {}

  get email(): AbstractControl {
    return this.form.controls.email;
  }

  get password(): AbstractControl {
    return this.form.controls.password;
  }

  signUpHandler(): void {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
    this.store.dispatch(signInRequest(this.form.getRawValue()));
  }
}

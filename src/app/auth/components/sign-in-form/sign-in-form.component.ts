import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {AuthStateService} from "../../services/auth-state.service";
import {LocalStorageService} from "../../../shared/services/local-storage.service";

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent implements OnInit {

  constructor(
    public authStateService: AuthStateService,
    private localStorageService: LocalStorageService
  ) { }

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.min(4), Validators.required]),
  });

  ngOnInit(): void {
    if (this.localStorageService.getToken()) {
      this.localStorageService.initState.isAuthorized = true;
      this.localStorageService.getRole();
    }
  }

  signInHandler(): void {
    this.authStateService.setSignIn(this.form.getRawValue())

    if (this.form.invalid) {
      return;
    }
  }
}

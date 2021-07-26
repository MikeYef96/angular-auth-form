import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IAuthState } from 'src/app/auth/model/auth-state.model';
import { AuthApiService } from '../../services/auth-api.service';
import { IUserData } from '../../../shared/models/user-data.model';
import { Router } from '@angular/router';
import {LocalStorageService} from "../../../shared/services/local-storage.service";

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent implements OnInit {

  constructor(private authService: AuthApiService,
              private router: Router,
              public localStorageService: LocalStorageService) {}

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
    this.authService
      .login(this.form.getRawValue())
      .subscribe((data: IUserData) => {
        this.localStorageService.setToken(data.token);
        this.localStorageService.setRole(data.role);

        this.localStorageService.initState.isAuthorized = true;

        this.router.navigate(['/dashboard/reports']);
      });

    if (this.form.invalid) {
      return;
    }
  }
}

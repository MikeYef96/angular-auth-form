import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IAuthState } from 'src/app/auth/model/auth-state.model';
import {AuthService} from "../../services/auth.service";
import {IUserData} from "../../../shared/models/user-data.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent implements  OnInit{
   initState: IAuthState = {
     isAuthorized: false,
     userData: null,
   }


  constructor(private authService: AuthService,private router: Router) {}

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.min(4), Validators.required]),
  });

  ngOnInit(): void {
    if(this.authService.getToken()){
      this.initState.isAuthorized = true;
      this.authService.getRole()
    }
  }

  signInHandler(): void {
    this.authService.login(this.form.getRawValue()).subscribe(
      (data: IUserData) => {
        this.authService.setToken(data.token)
        this.authService.setRole(data.role)

        this.initState.isAuthorized = true;

        this.router.navigate(['/dashboard/reports']);

      }
    )

    if (this.form.invalid) {
      return ;
    }
  }
}

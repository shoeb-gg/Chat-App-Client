import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  public invalidForm: boolean = false;

  logInForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {
    if (this.auth.loggedInStatus()) {
      this.router.navigate(['/chat']);
    }
  }

  submitLogInForm() {
    if (!this.logInForm.valid) {
      this.invalidForm = true;
      return;
    }
    this.invalidForm = false;

    this.auth.logInUser(this.logInForm.value).subscribe((res: any) => {
      console.log(res);

      if (res.message === 'Success') {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/chat']);
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss'],
})
export class RegComponent implements OnInit {
  constructor(private fb: FormBuilder, private auth: AuthService) {}

  public invalidForm: boolean = false;

  regForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {}

  submitRegForm() {
    if (!this.regForm.valid) {
      this.invalidForm = true;
      return;
    }
    this.invalidForm = false;

    this.auth.createUser(this.regForm.value).subscribe((res) => {
      console.log(res);
    });
  }
}

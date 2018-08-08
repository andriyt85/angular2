import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  minLength = 3;
  maxLength = 20;
  minPass   = 8;
  maxPass   = 20;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private loginService: LoginService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      name: ['',
        [
          Validators.required,
          Validators.minLength(this.minLength),
          Validators.maxLength(this.maxLength)
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(this.minPass),
          Validators.maxLength(this.maxPass)
        ]
      ]
    });
  }
  signIn() {
    if (this.loginForm.valid) {
     this.loginService.signIn(this.loginForm.value).subscribe((res: any) => {
       if (res.authenticated) {
         this.router.navigate(['/tasks']);
       } else {
         alert('Opppsssss!!!!!');
       }
     });
    }
  }
  signUp() {
    if (this.loginForm.valid) {
      this.loginService.signUp(this.loginForm.value).subscribe((res: any) => {
        if (res.saved) {
          alert('Saved');
        } else {
          alert('Opppppspsssss!!!!!');
        }

      });
    }
  }
}


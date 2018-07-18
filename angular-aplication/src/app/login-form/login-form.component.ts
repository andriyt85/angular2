import { LoginServiceService } from './services/login-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  minLength = 3;
  maxLength = 20;
  minPass   = 8;
  maxPass   = 20;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private loginService: LoginServiceService) { }

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
       if (res.authentificated) {
         this.router.navigate(['/statistic']);
       } else {
         alert('Opppsssss!!!!!');
       }
     });
    }
  }
}


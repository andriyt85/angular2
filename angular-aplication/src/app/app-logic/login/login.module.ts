import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginService } from './services/login.service';
import { AngularMaterialModule } from '../../common/core/angular-material/angular-material.module';



@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  providers: [LoginService],
  declarations: [LoginComponent]
})
export class LoginModule { }

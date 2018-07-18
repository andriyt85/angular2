import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './../share/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { InterceptorsModule } from './interceptors/interceptors.module';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { StatisticComponent } from './statistic/statistic.component';
import { LoginServiceService } from './login-form/services/login-service.service';


@NgModule({
   declarations: [
      AppComponent,
      LoginFormComponent,
      StatisticComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      MaterialModule,
      AppRoutingModule,
      NoopAnimationsModule,
      BrowserAnimationsModule,
      InterceptorsModule
   ],
   providers: [
     LoginServiceService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

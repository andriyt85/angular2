
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { InterceptorsModule } from './common/interceptors/interceptors.module';

import { AppComponent } from './app.component';
import { LoginService } from './app-logic/login/services/login.service';


@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      AppRoutingModule,
      NoopAnimationsModule,
      BrowserAnimationsModule,
      InterceptorsModule

   ],
   providers: [LoginService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

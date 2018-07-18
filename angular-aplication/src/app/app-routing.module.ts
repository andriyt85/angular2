import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticComponent } from './statistic/statistic.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'statistic', component: StatisticComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

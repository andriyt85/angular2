import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: '../app/app-logic/login/login.module#LoginModule'
  },
  {
    path: 'tasks',
    loadChildren: '../app/app-logic/task-manager/task-manager.module#TaskManagerModule'
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})

export class AppRoutingModule { }

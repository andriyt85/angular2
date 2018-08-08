import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TaskManagerComponent } from './task-manager.component';

const routes: Routes = [
  {
    path: '',
    component: TaskManagerComponent
  },
  {path: '**', redirectTo: 'tasks', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class TaskRoutingModule { }

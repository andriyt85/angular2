import { AngularMaterialModule } from './../../common/core/angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskManagerComponent } from './task-manager.component';
import { TaskRoutingModule } from './task-routing.module';


@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    AngularMaterialModule
  ],
  declarations: [TaskManagerComponent]
})
export class TaskManagerModule { }

import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../common/core/angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskManagerComponent } from './task-manager.component';
import { TaskRoutingModule } from './task-routing.module';
import { TaskManagerService } from './task-manager.service';


@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [TaskManagerService],
  declarations: [TaskManagerComponent]
})
export class TaskManagerModule { }

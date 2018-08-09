import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TaskManagerService } from './task-manager.service';



@Component({
  selector: 'app-tasks',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  taskForm: FormGroup;
  minLength = 3;
  maxLength = 20;
  minPass   = 3;
  maxPass   = 20;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private taskManagerService: TaskManagerService) { }

  ngOnInit() {
    this.initForm();
  }


  initForm() {
    this.taskForm = this.formBuilder.group({
      name: ['',
        [
          Validators.required,
          Validators.minLength(this.minLength),
          Validators.maxLength(this.maxLength)
        ]
      ],
      description: ['',
        [
          Validators.required,
          Validators.minLength(this.minPass),
          Validators.maxLength(this.maxPass)
        ]
      ]
    });
  }

  createTask () {
    if (this.taskForm.valid) {
      this.taskManagerService.create(this.taskForm.value).subscribe((res: any) => {
        if (res.created) {
          alert('Created new task!');
        } else {
          alert('Something went wrong');
        }
      });
    }
  }

}

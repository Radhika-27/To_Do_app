import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToDoService } from 'src/app/to-do.service';

@Component({
  selector: 'app-to-do-add',
  templateUrl: './to-do-add.component.html',
  styleUrls: ['./to-do-add.component.scss']
})
export class ToDoAddComponent implements OnInit {
  constructor(
    private router: Router,
    private toDoService:ToDoService

  ) { }


  ngOnInit(): void {
  }

  onSubmit(mform: NgForm) {
    if(mform.form.value){
      this.setData(mform.form.value);
    }
    this.router.navigate(['']);
  }

  setData(data: any){
  this.toDoService.dataSet(data);

  }
}

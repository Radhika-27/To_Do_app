import {  Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/to-do.service';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  taskArray = [{ taskName: 'Brush teeth', dueDate: '12-01-1999', isCompleted: false },{ taskName: 'Milk', dueDate: '12-01-1999', isCompleted: false },
  { taskName: 'Moping', dueDate: '12-01-1999', isCompleted: false },{ taskName: 'Clean Desk', dueDate: '12-01-1999', isCompleted: false },{ taskName: 'Wash Clothes', dueDate: '12-01-1999', isCompleted: false },
   { taskName: 'Clean Bags', dueDate: '12-01-1999', isCompleted: false },{ taskName: 'Eat food', dueDate: '12-01-1999', isCompleted: false },
   { taskName: 'Office Work', dueDate: '12-01-1999', isCompleted: false },{ taskName: 'Clean Fans', dueDate: '12-01-1999', isCompleted: false },
   { taskName: 'Worship of god', dueDate: '12-01-1999', isCompleted: false },{ taskName: 'palnting', dueDate: '12-01-1999', isCompleted: false },
   { taskName: 'Wash Shoes', dueDate: '12-01-1999', isCompleted: false },{ taskName: 'Clean wash area', dueDate: '12-01-1999', isCompleted: false },
   ];
  public searchText: any;
  public userDetails: any;
  constructor(
    private toDoService:ToDoService,
  ) {
   }


  ngOnInit(): void {
    this.getData();
  }

  getData(){
  this.toDoService.data.subscribe(
    (data : any) => {
      if(data){
        this.taskArray.push(data);
      }
    }
  );
}

  onDelete(index: number) {
    console.log(index);
    this.taskArray.splice(index, 1);
  }

  onCheck(index: number) {
    console.log(this.taskArray);
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

}

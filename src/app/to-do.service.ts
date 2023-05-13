import { Injectable } from '@angular/core';
import { BehaviorSubject, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
private sumbitData = new  BehaviorSubject(null);
data = this.sumbitData.asObservable();

  constructor() {

  }

  dataSet(data: any) {
    this.sumbitData.next(data);
  }

}

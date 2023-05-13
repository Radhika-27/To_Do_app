import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoAddComponent } from './components/to-do-add/to-do-add.component';

const routes: Routes = [
  {path:'',component:ToDoListComponent},
  {path:'add',component:ToDoAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

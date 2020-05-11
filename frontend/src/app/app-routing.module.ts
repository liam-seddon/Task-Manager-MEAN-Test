import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {taskmanagerviewcomponent} from './pages/task-manager-view/task-manager-view.component';


const routes: Routes = [
  {path: '', component: taskmanagerviewcomponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

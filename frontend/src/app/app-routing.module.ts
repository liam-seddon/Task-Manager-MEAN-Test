import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskManagerViewComponent} from './pages/task-manager-view/task-manager-view.component';


const routes: Routes = [
  {path: '', component: TaskManagerViewComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

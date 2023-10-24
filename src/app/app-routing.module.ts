import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';

const routes: Routes = [
  {
    path:'my-first-comp',
    component:MyFirstCompComponent
  }
];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

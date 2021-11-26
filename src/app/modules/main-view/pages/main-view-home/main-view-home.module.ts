import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainViewHomeComponent } from './main-view-home.component';

const routes: Routes = [
  { path: "", component: MainViewHomeComponent },
]

@NgModule({
  declarations: [MainViewHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainViewHomeModule { }

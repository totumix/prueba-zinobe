import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


const routes: Routes = [
  {
    path: "", 
    component: MainViewComponent, 
    children: [
      {
        path: "home",
        loadChildren: () => import('./pages/main-view-home/main-view-home.module').then(m => m.MainViewHomeModule)
      },
      {
        path: "credit-request",
        loadChildren: () => import('./pages/main-view-credit-request/main-view-credit-request.module').then(m => m.MainViewCreditRequestModule)
      }
    ]
  },
];

@NgModule({
  declarations: [
    MainViewComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ]
})
export class MainViewModule { }

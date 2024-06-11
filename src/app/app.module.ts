import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { CrudService } from './config/crudService';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

const routes: Routes = [
  { path: "", redirectTo: "/sso/login", pathMatch: "full" },
  {
    path: "sso",
    loadChildren: () => import('./modules/sso/sso.module').then(m => m.SsoModule)
  },
  {
    path: "main-view",
    loadChildren: () => import('./modules/main-view/main-view.module').then(m => m.MainViewModule)
  }
];

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes)], providers: [
        CrudService,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }

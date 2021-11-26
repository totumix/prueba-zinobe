import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainViewCreditRequestComponent } from './main-view-credit-request.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CreditsRequestTableComponent } from './pages/credits-request-table/credits-request-table.component';
import { AddCreditRequestComponent } from './pages/add-credit-request/add-credit-request.component';
import { BaseFormCreditRequestService } from './utils/base-form-credit-request.service';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const routes: Routes = [
  {
    path: "", component: MainViewCreditRequestComponent, children: [
      { path: "", component: CreditsRequestTableComponent },
      { path: "add-request", component: AddCreditRequestComponent }
    ]
  }
]

@NgModule({
  declarations: [
    MainViewCreditRequestComponent,
    CreditsRequestTableComponent,
    AddCreditRequestComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  providers: [
    BaseFormCreditRequestService
  ]
})
export class MainViewCreditRequestModule { }

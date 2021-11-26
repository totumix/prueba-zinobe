import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CrudService } from 'src/app/config/crudService';
import { Credit } from 'src/app/core/models/Credit.model';
import { ConfirmationDialogComponent } from '../../components/confirmation-dialog/confirmation-dialog.component';
import { BaseFormCreditRequestService } from '../../utils/base-form-credit-request.service';

@Component({
  selector: 'app-credits-request-table',
  templateUrl: './credits-request-table.component.html',
  styleUrls: ['./credits-request-table.component.scss']
})
export class CreditsRequestTableComponent implements OnInit {

  public loading = false;
  public credits = [];
  public totalCreditsValue: number;
  displayedColumns: string[] = ['nombre', 'monto', 'aprobado', 'fecha', 'acciones'];
  dataSource = new MatTableDataSource<Credit>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private _crudService: CrudService,
    public dialog: MatDialog,
    public creditForm: BaseFormCreditRequestService
  ) { }

  ngOnInit(): void {
    this.getCredits()
  }

  getCredits() {
    this.loading = true;
    this._crudService.getEntities('credits').then(res => {
      this.loading = false;
      this.credits = res;
      this.totalCreditsValue = this.credits.reduce((sum, value) => (value.aprobado == true ? sum + value.monto : sum), 0);
      this.dataSource = new MatTableDataSource(this.credits);
      this.dataSource.paginator = this.paginator;
    })
  }

  approveCredit(credit) {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          contentText: `¿Seguro que quiere aprobar este crédito?`,
        }
      })
      .afterClosed()
      .subscribe(result => {
        if (result) {
          credit['aprobado'] = true;
          this._crudService.updateEntity('credits', credit).subscribe(res => {
            this.creditForm.changeMonto(credit['monto']);
          })
        }
        console.log(result)
      });
  }

}

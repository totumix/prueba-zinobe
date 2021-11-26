import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CrudService } from 'src/app/config/crudService';
import { Credit } from 'src/app/core/models/Credit.model';
import { User } from 'src/app/core/models/User.model';
import { BaseFormCreditRequestService } from '../../utils/base-form-credit-request.service';

@Component({
  selector: 'app-add-credit-request',
  templateUrl: './add-credit-request.component.html',
  styleUrls: ['./add-credit-request.component.scss']
})
export class AddCreditRequestComponent implements OnInit {

  public user: User;
  public minDate;

  constructor(
    public creditForm: BaseFormCreditRequestService,
    private _crudService: CrudService,
    private snackBar: MatSnackBar,
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit(): void {
    this.creditForm.baseForm.get('nombre').setValue(this.user.nombre)
  }

  createCredit() {
    var random_boolean = Math.random() < 0.5;
    this.creditForm.baseForm.get('aprobado').setValue(random_boolean)
    let credit = this.creditForm.baseForm.value;
    this._crudService.createEntity('credits', credit).subscribe(res => {
      if (random_boolean) {
        this.creditForm.changeMonto(this.creditForm.baseForm.get('monto').value)
        this.snackBar.open('Su credito fue aprobado', 'Exitoso', { duration: 5000 })
      } else {
        this.snackBar.open('Su credito no fue aprobado', 'Fallo', { duration: 5000 })
      }
      this.resetForm();
    })
  }

  resetForm() {
    this.creditForm.resetForm(new Credit)
  }

}

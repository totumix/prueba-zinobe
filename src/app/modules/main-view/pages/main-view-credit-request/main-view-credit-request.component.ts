import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseFormCreditRequestService } from './utils/base-form-credit-request.service';


@Component({
  selector: 'app-main-view-credit-request',
  templateUrl: './main-view-credit-request.component.html',
  styleUrls: ['./main-view-credit-request.component.scss']
})
export class MainViewCreditRequestComponent {

  public totalBankCapital = environment.TOTAL_BANK_CAPITAL;

  constructor(
    public creditForm: BaseFormCreditRequestService
  ) {
    this.creditForm.creditValue.subscribe(value => {
      this.totalBankCapital -= value;
    })
  }

}

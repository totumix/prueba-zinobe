import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseFormCreditRequestService } from './pages/main-view-credit-request/utils/base-form-credit-request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  public totalBankCapital = environment.TOTAL_BANK_CAPITAL;

  constructor(
    private router: Router,
    public creditForm: BaseFormCreditRequestService
  ) {
    const savedTotalBankCapital = localStorage.getItem('totalBankCapital');
    this.totalBankCapital = savedTotalBankCapital !== null ? parseFloat(savedTotalBankCapital) : environment.TOTAL_BANK_CAPITAL;
    this.creditForm.creditValue.subscribe(value => {
      this.totalBankCapital -= value;
      this.saveTotalBankCapital();
    });
  }

  ngOnInit(): void {
    this.showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');
    environment.TOTAL_BANK_CAPITAL = this.totalBankCapital;
  }

  private saveTotalBankCapital() {
    localStorage.setItem('totalBankCapital', this.totalBankCapital.toString());
  }

  showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId)

    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show')
        toggle.classList.toggle('bx-x')
        bodypd.classList.toggle('body-pd')
        headerpd.classList.toggle('body-pd')
      })
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate([`/sso/login`]);
  }
}

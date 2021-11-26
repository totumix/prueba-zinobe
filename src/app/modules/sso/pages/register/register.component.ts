import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/config/crudService';
import { BaseFormUserService } from '../../utils/base-form-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private _crudService: CrudService,
    public userForm: BaseFormUserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  register() {
    let user = this.userForm.baseForm.value;
    this._crudService.createEntity('users', user).subscribe(res => {
      this.router.navigate([`/sso/login`]);
    })
  }

}

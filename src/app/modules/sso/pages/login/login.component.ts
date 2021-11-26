import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/config/crudService';
import { User } from 'src/app/core/models/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public users: User[];
  public user: User;
  email = '';
  constructor(
    private _crudService: CrudService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._crudService.getEntities('users').then(res => {
      this.users = res;
    })
  }

  login() {
    this.users.filter(user => {
      if (user.correo == this.email) {
        this.user = user;
      }
    });
    
    if (this.user) {
      this.router.navigate([`/main-view/home`]);
      localStorage.setItem('user', JSON.stringify(this.user))
    } else {
      this.snackBar.open('El usuario no se encuentra registrado', 'Exitoso', { duration: 2000 });
    }
  }
}

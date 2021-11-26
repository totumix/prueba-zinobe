import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/User.model';

@Injectable({
  providedIn: 'root'
})
export class BaseFormUserService {
  public baseForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.baseForm = this.fb.group({
      id: [Math.random()],
      nombre: [null, Validators.required],
      correo: [null, Validators.required],
      cedula: [null, Validators.required],
    });
  }

  public pathFormData(user): void {
    this.baseForm.patchValue({
      id: user.id,
      nombre: user.nombre,
      correo: user.correo,
      cedula: user.cedula
    });
  }

  resetForm(user?) {
    this.baseForm.reset(new User);
  }
}

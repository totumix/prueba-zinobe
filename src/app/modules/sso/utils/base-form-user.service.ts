import { Injectable } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/User.model';

@Injectable({
  providedIn: 'root'
})
export class BaseFormUserService {
  public baseForm: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) {
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

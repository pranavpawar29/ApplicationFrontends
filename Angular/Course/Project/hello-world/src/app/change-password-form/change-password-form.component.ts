import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from '../change-password/passwords.validators';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {
  form: FormGroup;
  constructor(fb: FormBuilder){
    this.form = fb.group({
      oldPassword: ['', Validators.required, PasswordValidators.validOldPassword],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    },{
      validator: PasswordValidators.passwordsShouldMatch
    });
  }

  get oldPassword(){
    return this.form.get('oldPassword')
  }

  get newPassword(){
    return this.form.get('newPassword')
  }
  
  get confirmPassword(){
    return this.form.get('confirmPassword')
  }
}

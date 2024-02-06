import { Component } from '@angular/core';
import { PasswordValidators } from './passwords.validators'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  value  = false;
  forms = new FormGroup({
    oldPassword: new FormControl('', Validators.required, PasswordValidators.incorrectPassword),
    verifyPassword: new FormGroup({
      newPassword: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    })
  });
  
  get oldPassword(){
    return this.forms.get('oldPassword')
  }

  get newPassword(){
    return this.forms.get('verifyPassword.newPassword')
  }
  
  get confirmPassword(){
    return this.forms.get('verifyPassword')?.get('confirmPassword')
  }
}

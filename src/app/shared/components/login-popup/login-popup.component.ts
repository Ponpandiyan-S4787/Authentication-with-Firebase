import { Component, EventEmitter, Output } from '@angular/core';
import { formsDatas } from '../../interfaces/forms-interface';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/AuthService';
@Component({
  selector: 'auth-login-popup',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputComponent,
    ButtonComponent,
  ],
  templateUrl: './login-popup.component.html',
  styleUrl: './login-popup.component.scss',
})
export class LoginPopupComponent {
  @Output() cancelEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  loginForm = formsDatas;
  constructor(private router: Router, private authService: AuthService) {}
  onSubmitted() {
    this.authService
      .logininMethod(this.loginForm.value.email, this.loginForm.value.password)
      .then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
  }
  onCanceled() {
    this.cancelEvent.emit(true);
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { formsDatas } from '../../interfaces/forms-interface';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'pms-login-popup',
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
  onSubmitted() {
    console.log('submitted');
  }
  onCanceled() {
    this.cancelEvent.emit(true);
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { formsDatas } from '../../interfaces/forms-interface';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from '../../modules/materials/materials.module';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';
import { AuthService } from '../../../services/AuthService';

@Component({
  selector: 'auth-signup-popup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsModule,
    InputComponent,
    ButtonComponent,
  ],
  templateUrl: './signup-popup.component.html',
  styleUrl: './signup-popup.component.scss',
})
export class SignupPopupComponent {
  @Output() cancelEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() afterSignup: EventEmitter<boolean> = new EventEmitter<boolean>();
  signupForm = formsDatas;
  constructor(private authService: AuthService) {}
  onRegistered() {
    if (confirm('Pls confrim ur registeration')) {
      this.authService
        .signupMethod(
          this.signupForm.value.email,
          this.signupForm.value.password
        )
        .then(
          (res) => {
            alert('reg successfully' + res.user.displayName);
            this.afterSignup.emit(true);
          },
          (err) => {
            alert('sorry ur enter the' + err);
          }
        );
    }
  }
  onCanceled() {
    this.authService.logoutMethod();
    this.cancelEvent.emit(true);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../../modules/materials/materials.module';
import { LoginPopupComponent } from '../login-popup/login-popup.component';
import { FormsModule } from '@angular/forms';
import { SignupPopupComponent } from '../signup-popup/signup-popup.component';

@Component({
  selector: 'auth-nav',
  standalone: true,
  imports: [
    MaterialsModule,
    CommonModule,
    FormsModule,
    LoginPopupComponent,
    SignupPopupComponent,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  loginPopup: boolean = false;
  signupPopup: boolean = false;
  onSignupBtnClicked() {
    this.loginPopup = false;
    this.signupPopup = true;
  }
  onLoginBtnClicked() {
    this.signupPopup = false;
    this.loginPopup = true;
  }
  cancelClicked(event: boolean) {
    this.loginPopup = false;
    this.signupPopup = false;
  }
  openLogin(event: boolean) {
    this.loginPopup = event;
    this.signupPopup = !event;
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../../modules/materials/materials.module';
import { LoginPopupComponent } from '../login-popup/login-popup.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'pms-nav',
  standalone: true,
  imports: [MaterialsModule, CommonModule, FormsModule, LoginPopupComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  loginPopup: boolean = false;
  onLoginBtnClicked() {
    this.loginPopup = true;
  }
  cancelClicked(event: boolean) {
    this.loginPopup = false;
  }
}

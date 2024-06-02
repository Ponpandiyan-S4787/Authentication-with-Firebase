import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../../modules/materials/materials.module';

@Component({
  selector: 'pms-nav',
  standalone: true,
  imports: [MaterialsModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  onLoginBtnClicked() {
    console.log('clicked');
  }
}

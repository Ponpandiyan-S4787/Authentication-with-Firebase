import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../../shared/modules/materials/materials.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'pms-home',
  standalone: true,
  imports: [CommonModule, MaterialsModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  value = 'sathish';
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../../modules/materials/materials.module';

@Component({
  selector: 'auth-button',
  standalone: true,
  imports: [CommonModule, MaterialsModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() style!: object;
  @Output() btnClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  onBtnClicked() {
    this.btnClicked.emit();
  }
}

import { CommonModule, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MaterialsModule } from '../../modules/materials/materials.module';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'pms-input',
  standalone: true,
  imports: [CommonModule, MaterialsModule, FormsModule, NgStyle],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent,
    },
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() type!: string;
  @Input() placeholder!: string;
  @Input() style!: any;
  onChange: Function = () => {};
  onTouch: Function = () => {};
  set value(val: string) {
    this.onChange(val);
    this.onTouch(val);
  }

  writeValue(val: string): void {
    this.value = val;
  }
  registerOnChange(onChanged: Function): void {
    this.onChange = onChanged;
  }
  registerOnTouched(onToched: Function): void {
    this.onTouch = onToched;
  }
  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error('Method not implemented.');
  // }
}

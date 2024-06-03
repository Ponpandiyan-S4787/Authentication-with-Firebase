import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MaterialsModule } from '../../modules/materials/materials.module';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { formControls } from '../../interfaces/forms-interface';

@Component({
  selector: 'pms-input',
  standalone: true,
  imports: [CommonModule, MaterialsModule, FormsModule, ReactiveFormsModule],
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
  @Input() style!: object;
  formControls = formControls;
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

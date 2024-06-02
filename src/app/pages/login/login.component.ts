import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { formsDatas } from '../../shared/interfaces/forms-interface';
import { InputComponent } from '../../shared/components/input/input.component';

@Component({
  selector: 'pms-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm = formsDatas;
  clicked() {
    console.log(this.loginForm.value);
  }
}

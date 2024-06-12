import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface LoginInterface {
  email: string;
  password: string;
}
export const formsDatas = new FormGroup({
  email: new FormControl(),
  password: new FormControl(),
});
export const formControls = new FormControl('', [Validators.required]);

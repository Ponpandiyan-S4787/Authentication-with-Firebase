import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private auth: Auth) {}

  signinMethod(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
}

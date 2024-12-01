import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private auth: AngularFireAuth, private router: Router) {}

  login() {
    this.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        // Navigate to the table component
        this.router.navigate(['/table']);
      })
      .catch(error => {
        this.errorMessage = error.message;
      });
  }
  
}
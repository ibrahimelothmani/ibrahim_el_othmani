import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  contact = { name: '', email: '', message: '' };

  constructor(
    private db: AngularFireDatabase,
    private router: Router,
    private authGuard: AuthGuard
  ) {}

  submitContactForm() {
    this.db
      .list('/contacts')
      .push(this.contact)
      .then(() => {
        this.authGuard.allowSuccessAccess();
        this.router.navigate(['/success']);
      })
      .catch((error) => {
        console.error('Error submitting contact form:', error);
        alert('Failed to send the message. Please try again.');
      });
  }
}

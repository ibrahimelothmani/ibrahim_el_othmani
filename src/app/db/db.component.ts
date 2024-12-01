import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.css']
})
export class DBComponent implements OnInit {
  contacts: any[] = [];

  constructor(
    private db: AngularFireDatabase,
    private auth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit() {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        // User is logged in, fetch contacts
        this.db.list('/contacts').valueChanges().subscribe(data => {
          this.contacts = data;
        });
      } else {
        // If not logged in, redirect to login
        this.router.navigate(['/login']);
      }
    });
  }

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigate(['/login']); // Redirect to login after logout
    }).catch((error) => {
      console.error('Logout failed:', error);
    });
  }
}

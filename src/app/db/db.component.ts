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

  async delete(contactKey: string) {
    const user = await this.auth.currentUser;
    if(user){
      console.log('User is authenticated');
      this.db.list(`/contact/${contactKey}`).remove();
    }
    else{
      console.log('User is not authenticated');
      this.router.navigate(['/login']); // Redirect to login after logout
    }
  }
  
  logout() {
    this.auth.signOut().then(() => {
      this.router.navigate(['/login']); // Redirect to login after logout
    }).catch((error) => {
      console.error('Logout failed:', error);
    });
  }
}

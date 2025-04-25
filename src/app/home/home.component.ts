import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

declare var AOS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contact = { name: '', email: '', message: '' };
  isFormSubmitting = false;
  formSubmitSuccess = false;
  formSubmitError = false;
  errorMessage = '';
  currentProjectCategory = 'all';

  constructor(
    private db: AngularFireDatabase,
    private router: Router,
    private authGuard: AuthGuard
  ) {}

  ngOnInit() {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
    });
    
    this.setupEventListeners();
  }
  
  setupEventListeners() {
    // Add scroll event listeners or other initializations here
    window.addEventListener('scroll', this.revealOnScroll);
    
    // Initialize skill bars if they exist
    this.initializeSkillBars();
  }

  filterProjects(category: string) {
    this.currentProjectCategory = category;
    // You could add filtering logic here if needed
  }
  
  revealOnScroll = () => {
    // This method can be used to add any custom scroll-based animations
    // beyond what AOS provides
  }
  
  initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach((bar: any) => {
      const value = bar.getAttribute('data-value');
      setTimeout(() => {
        bar.style.width = `${value}%`;
      }, 1000);
    });
  }

  submitContactForm() {
    if (!this.isValidForm()) {
      this.formSubmitError = true;
      this.errorMessage = 'Please fill in all required fields.';
      return;
    }
    
    this.isFormSubmitting = true;
    this.formSubmitError = false;
    
    this.db
      .list('/contacts')
      .push(this.contact)
      .then(() => {
        this.isFormSubmitting = false;
        this.formSubmitSuccess = true;
        this.contact = { name: '', email: '', message: '' };
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          this.formSubmitSuccess = false;
        }, 5000);
        
        // For admin access
        this.authGuard.allowSuccessAccess();
        // this.router.navigate(['/success']);
      })
      .catch((error) => {
        console.error('Error submitting contact form:', error);
        this.isFormSubmitting = false;
        this.formSubmitError = true;
        this.errorMessage = 'Failed to send the message. Please try again.';
      });
  }
  
  isValidForm(): boolean {
    return !!this.contact.name && !!this.contact.email && !!this.contact.message;
  }
  
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

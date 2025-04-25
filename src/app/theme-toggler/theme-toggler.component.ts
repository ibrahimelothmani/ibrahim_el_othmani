import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.css']
})
export class ThemeTogglerComponent implements OnInit {
  isDarkMode = false;

  constructor() { }

  ngOnInit(): void {
    // Check if the user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    
    // Check for system preference if no saved theme
    if (!savedTheme) {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDarkMode) {
        this.isDarkMode = true;
        this.applyTheme('dark');
        return;
      }
    }
    
    // Apply saved theme if exists
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      this.applyTheme('dark');
    } else {
      this.isDarkMode = false;
      this.applyTheme('light');
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    
    if (this.isDarkMode) {
      this.applyTheme('dark');
    } else {
      this.applyTheme('light');
    }
  }

  private applyTheme(theme: 'dark' | 'light'): void {
    if (theme === 'dark') {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      
      // Force all headings to be white
      setTimeout(() => {
        // Target specific section titles that have trouble with dark mode
        document.querySelectorAll('#experience .section-title h2, #experience .display-5, #education .section-title h2, .section-title h2.display-5').forEach((el: any) => {
          el.style.color = '#ffffff';
          el.style.backgroundColor = 'transparent';
        });
        
        // Target modern card elements
        document.querySelectorAll('#experience .modern-card .card-header, #experience .job-title, #experience .company-name').forEach((el: any) => {
          el.style.color = '#ffffff';
          el.style.backgroundColor = '';
        });
        
        // Target other headings that might need dark mode fixes
        document.querySelectorAll('.section-title h2, h2.display-5, .display-5, #experience h2, #education h2, #about h2, #portfolio h2, .fw-bold.mb-4').forEach((el: any) => {
          el.style.color = '#ffffff';
          el.style.backgroundColor = 'transparent';
        });
      }, 10);
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      
      // Reset any inline styles
      setTimeout(() => {
        document.querySelectorAll('#experience .section-title h2, #experience .display-5, #education .section-title h2, .section-title h2.display-5').forEach((el: any) => {
          el.style.color = '';
          el.style.backgroundColor = '';
        });

        // Reset modern card elements
        document.querySelectorAll('#experience .modern-card .card-header, #experience .job-title, #experience .company-name').forEach((el: any) => {
          el.style.color = '';
          el.style.backgroundColor = '';
        });
        
        document.querySelectorAll('.section-title h2, h2.display-5, .display-5, #experience h2, #education h2, #about h2, #portfolio h2, .fw-bold.mb-4').forEach((el: any) => {
          el.style.color = '';
          el.style.backgroundColor = '';
        });
      }, 10);
    }
    
    // Force refresh UI components
    setTimeout(() => {
      // Refresh skill bars
      const skillBars = document.querySelectorAll('.skill-progress');
      skillBars.forEach((bar: any) => {
        const value = bar.getAttribute('data-value');
        bar.style.width = `${value}%`;
      });
      
      // Refresh images and cards
      document.querySelectorAll('.card, .experience-card, .project-card').forEach((element: any) => {
        element.style.opacity = '0.9';
        setTimeout(() => {
          element.style.opacity = '1';
        }, 50);
      });
    }, 100);
  }
} 
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  constructor(private router: Router) {}

  ngOnInit() {
    // Initialize Bootstrap components on route change
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.initBootstrapComponents();
    });

    // Initial initialization
    setTimeout(() => {
      this.initBootstrapComponents();
    }, 0);
  }

  initBootstrapComponents() {
    // Initialize all dropdowns
    const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
    if (dropdownElementList.length > 0) {
      Array.from(dropdownElementList).forEach(dropdownToggleEl => {
        new bootstrap.Dropdown(dropdownToggleEl);
      });
    }

    // Initialize tooltips if needed
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    if (tooltipTriggerList.length > 0) {
      Array.from(tooltipTriggerList).forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl);
      });
    }

    // Initialize any other Bootstrap components as needed
  }
}

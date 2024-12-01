import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  private text = 'I am Ibrahim El Othmani'; // Text for typing effect
  private typingDelay = 70; // Typing delay in milliseconds

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    // Perform any pre-rendering initialization if needed
  }

  ngAfterViewInit(): void {
    // Ensure DOM elements are fully loaded before running the typing effect
    this.runTypingEffect();
  }

  private runTypingEffect(): void {
    const typingElement = this.elRef.nativeElement.querySelector('#typing-text');
    if (typingElement) {
      this.typeText(this.text, typingElement, this.typingDelay);
    }
  }

  private typeText(text: string, typingElement: HTMLElement, delay: number): void {
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        typingElement.textContent += text.charAt(i);
      }, delay * i);
    }
  }
}
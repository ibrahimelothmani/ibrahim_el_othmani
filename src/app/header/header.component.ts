import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activeSection: string = 'home';
  
  constructor() { }

  ngOnInit(): void {
    this.setupTypingEffect();
    this.checkScroll();
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const sections = ['about', 'experience', 'portfolio', 'services', 'contact'];
    const scrollPosition = window.scrollY + 300; // Offset for better UX
    
    // Default to home if we're at the top
    if (scrollPosition < 300) {
      this.activeSection = 'home';
      this.updateNavBarStyle(true);
      return;
    }
    
    this.updateNavBarStyle(false);
    
    // Find which section we're in
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;
        
        if (scrollPosition >= top && scrollPosition < top + height) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
  
  updateNavBarStyle(isAtTop: boolean) {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    if (navbar) {
      if (isAtTop) {
        navbar.style.boxShadow = 'none';
      } else {
        navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
      }
    }
  }

  setupTypingEffect() {
    const text = "I'm Ibrahim El Othmani";
    const typingTextElement = document.getElementById('typing-text');
    
    if (typingTextElement) {
      let charIndex = 0;
      const typeWriter = () => {
        if (charIndex < text.length) {
          typingTextElement.innerHTML += text.charAt(charIndex);
          charIndex++;
          setTimeout(typeWriter, 100);
        }
      };
      
      typeWriter();
    }
  }
}
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header">
      <div class="header-container">
        <div class="logo">
          <h1 class="logo-text">Portfolio</h1>
        </div>

        <nav class="nav-menu">
          <a routerLink="/home" routerLinkActive="active" class="nav-link">
            <span class="nav-icon">🏠</span>
            <span class="nav-text">Home</span>
          </a>
          <a routerLink="/about" routerLinkActive="active" class="nav-link">
            <span class="nav-icon">👤</span>
            <span class="nav-text">Sobre</span>
          </a>
          <a routerLink="/projects" routerLinkActive="active" class="nav-link">
            <span class="nav-icon">💼</span>
            <span class="nav-text">Projetos</span>
          </a>
          <a routerLink="/skills" routerLinkActive="active" class="nav-link">
            <span class="nav-icon">⚡</span>
            <span class="nav-text">Habilidades</span>
          </a>
          <a routerLink="/contact" routerLinkActive="active" class="nav-link">
            <span class="nav-icon">📧</span>
            <span class="nav-text">Contato</span>
          </a>
        </nav>

        <div class="social-links">
          <a
            href="https://www.linkedin.com/in/wellyssonrocha-front-end/"
            target="_blank"
            class="social-link"
            title="LinkedIn"
          >
            <span class="social-icon">💼</span>
          </a>
        </div>

        <button class="theme-toggle" (click)="toggleTheme()">
          <span class="theme-icon">{{ isDarkTheme ? '☀️' : '🌙' }}</span>
        </button>

        <button class="mobile-menu-toggle" (click)="toggleMobileMenu()">
          <span class="hamburger"></span>
        </button>
      </div>

      <div class="mobile-menu" [class.active]="isMobileMenuOpen">
        <a
          routerLink="/home"
          routerLinkActive="active"
          class="mobile-nav-link"
          (click)="closeMobileMenu()"
        >
          <span class="nav-icon">🏠</span>
          <span class="nav-text">Home</span>
        </a>
        <a
          routerLink="/about"
          routerLinkActive="active"
          class="mobile-nav-link"
          (click)="closeMobileMenu()"
        >
          <span class="nav-icon">👤</span>
          <span class="nav-text">Sobre</span>
        </a>
        <a
          routerLink="/projects"
          routerLinkActive="active"
          class="mobile-nav-link"
          (click)="closeMobileMenu()"
        >
          <span class="nav-icon">💼</span>
          <span class="nav-text">Projetos</span>
        </a>
        <a
          routerLink="/skills"
          routerLinkActive="active"
          class="mobile-nav-link"
          (click)="closeMobileMenu()"
        >
          <span class="nav-icon">⚡</span>
          <span class="nav-text">Habilidades</span>
        </a>
        <a
          routerLink="/contact"
          routerLinkActive="active"
          class="mobile-nav-link"
          (click)="closeMobileMenu()"
        >
          <span class="nav-icon">📧</span>
          <span class="nav-text">Contato</span>
        </a>
      </div>
    </header>
  `,
  styles: [
    `
      .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        transition: all 0.3s ease;
      }

      .header-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .logo-text {
        font-size: 1.8rem;
        font-weight: 700;
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin: 0;
      }

      .nav-menu {
        display: flex;
        gap: 2rem;
        align-items: center;
      }

      .nav-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
        color: white;
        font-weight: 500;
        padding: 0.5rem 1rem;
        border-radius: 25px;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
      }

      .nav-link::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.2),
          transparent
        );
        transition: left 0.5s;
      }

      .nav-link:hover::before {
        left: 100%;
      }

      .nav-link:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: translateY(-2px);
      }

      .nav-link.active {
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      }

      .nav-icon {
        font-size: 1.2rem;
      }

      .nav-text {
        font-size: 0.9rem;
      }

      .theme-toggle {
        background: rgba(255, 255, 255, 0.1);
        border: none;
        border-radius: 50%;
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
      }

      .theme-toggle:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: scale(1.1);
      }

      .theme-icon {
        font-size: 1.2rem;
      }

      .mobile-menu-toggle {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
      }

      .hamburger {
        width: 25px;
        height: 3px;
        background: white;
        position: relative;
        transition: all 0.3s ease;
      }

      .hamburger::before,
      .hamburger::after {
        content: '';
        position: absolute;
        width: 25px;
        height: 3px;
        background: white;
        transition: all 0.3s ease;
      }

      .hamburger::before {
        top: -8px;
      }

      .hamburger::after {
        bottom: -8px;
      }

      .mobile-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        padding: 1rem;
        transform: translateY(-100%);
        opacity: 0;
        transition: all 0.3s ease;
      }

      .mobile-menu.active {
        transform: translateY(0);
        opacity: 1;
      }

      .mobile-nav-link {
        display: flex;
        align-items: center;
        gap: 1rem;
        text-decoration: none;
        color: white;
        padding: 1rem;
        border-radius: 10px;
        transition: all 0.3s ease;
      }

      .mobile-nav-link:hover {
        background: rgba(255, 255, 255, 0.1);
      }

      @media (max-width: 768px) {
        .nav-menu {
          display: none;
        }

        .mobile-menu-toggle {
          display: block;
        }

        .mobile-menu {
          display: block;
        }

        .header-container {
          padding: 1rem;
        }
      }
    `,
  ],
})
export class HeaderComponent {
  @Output() themeToggle = new EventEmitter<void>();
  isDarkTheme = true;
  isMobileMenuOpen = false;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeToggle.emit();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}

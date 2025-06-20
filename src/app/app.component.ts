import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styles: [
    `
      .app-container {
        min-height: 100vh;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        transition: all 0.3s ease;
        color: white;
      }

      .app-container.dark-theme {
        background: linear-gradient(
          135deg,
          #1a1a2e 0%,
          #16213e 50%,
          #0f3460 100%
        );
      }

      .main-content {
        min-height: calc(100vh - 140px);
        padding: 20px;
        color: white;
      }

      @media (max-width: 768px) {
        .main-content {
          padding: 10px;
        }
      }
    `,
  ],
})
export class AppComponent {
  isDarkTheme = false;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-section">
            <h3 class="footer-title">Portfolio</h3>
            <p class="footer-description">
              Desenvolvedor apaixonado por criar experiências digitais incríveis
            </p>
          </div>

          <div class="footer-section">
            <h4 class="footer-subtitle">Redes Sociais</h4>
            <div class="social-links">
              <a href="#" class="social-link" title="GitHub">
                <span class="social-icon">🐙</span>
              </a>
              <a
                href="https://www.linkedin.com/in/wellyssonrocha-front-end/"
                target="_blank"
                class="social-link"
                title="LinkedIn"
              >
                <span class="social-icon">💼</span>
              </a>
              <a href="#" class="social-link" title="Twitter">
                <span class="social-icon">🐦</span>
              </a>
              <a href="#" class="social-link" title="Instagram">
                <span class="social-icon">📸</span>
              </a>
            </div>
          </div>

          <div class="footer-section">
            <h4 class="footer-subtitle">Contato</h4>
            <div class="contact-info">
              <p class="contact-item">
                <span class="contact-icon">📧</span>
                <span>contato&#64;portfolio.com</span>
              </p>
              <p class="contact-item">
                <span class="contact-icon">📱</span>
                <span>+55 (11) 99999-9999</span>
              </p>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p class="copyright">
            © 2025 Portfolio. Todos os direitos reservados.
          </p>
          <p class="made-with">Feito com ❤️ e Angular</p>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      .footer {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(20px);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding: 3rem 0 1rem;
        margin-top: 2rem;
      }

      .footer-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }

      .footer-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-bottom: 2rem;
      }

      .footer-section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .footer-title {
        font-size: 1.5rem;
        font-weight: 700;
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin: 0;
      }

      .footer-subtitle {
        font-size: 1.1rem;
        font-weight: 600;
        color: white;
        margin: 0;
      }

      .footer-description {
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.6;
        margin: 0;
      }

      .social-links {
        display: flex;
        gap: 1rem;
      }

      .social-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45px;
        height: 45px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        text-decoration: none;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
      }

      .social-link:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-3px) scale(1.1);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
      }

      .social-icon {
        font-size: 1.2rem;
      }

      .contact-info {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .contact-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: rgba(255, 255, 255, 0.8);
        margin: 0;
      }

      .contact-icon {
        font-size: 1rem;
      }

      .footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 2rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
      }

      .copyright,
      .made-with {
        color: rgba(255, 255, 255, 0.6);
        margin: 0;
        font-size: 0.9rem;
      }

      .made-with {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      @media (max-width: 768px) {
        .footer-container {
          padding: 0 1rem;
        }

        .footer-content {
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .footer-bottom {
          flex-direction: column;
          gap: 1rem;
          text-align: center;
        }
      }
    `,
  ],
})
export class FooterComponent {}

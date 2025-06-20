import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="contact-container">
      <!-- Contact Hero -->
      <section class="contact-hero">
        <div class="hero-content">
          <h1 class="hero-title">Vamos Conversar</h1>
          <p class="hero-subtitle">
            Estou sempre aberto a novas oportunidades e projetos interessantes
          </p>
        </div>
      </section>

      <!-- Contact Content -->
      <section class="contact-content">
        <div class="contact-grid">
          <!-- Contact Info -->
          <div class="contact-info">
            <h2 class="section-title">Informações de Contato</h2>
            <div class="info-items">
              <div class="info-item">
                <div class="info-icon">📧</div>
                <div class="info-content">
                  <h3>Email</h3>
                  <p>contato&#64;portfolio.com</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">📱</div>
                <div class="info-content">
                  <h3>Telefone</h3>
                  <p>+55 (11) 99999-9999</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">📍</div>
                <div class="info-content">
                  <h3>Localização</h3>
                  <p>São Paulo, Brasil</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">⏰</div>
                <div class="info-content">
                  <h3>Disponibilidade</h3>
                  <p>Segunda a Sexta, 9h às 18h</p>
                </div>
              </div>
            </div>

            <div class="social-links">
              <h3>Redes Sociais</h3>
              <div class="social-grid">
                <a href="#" class="social-link" title="GitHub">
                  <span class="social-icon">🐙</span>
                  <span class="social-name">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/wellyssonrocha-front-end/"
                  target="_blank"
                  class="social-link"
                  title="LinkedIn"
                >
                  <span class="social-icon">💼</span>
                  <span class="social-name">LinkedIn</span>
                </a>
                <a href="#" class="social-link" title="Twitter">
                  <span class="social-icon">🐦</span>
                  <span class="social-name">Twitter</span>
                </a>
                <a href="#" class="social-link" title="Instagram">
                  <span class="social-icon">📸</span>
                  <span class="social-name">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form">
            <h2 class="section-title">Envie uma Mensagem</h2>
            <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="form-group">
                <label for="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  [(ngModel)]="formData.name"
                  required
                  class="form-input"
                  placeholder="Seu nome completo"
                />
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  [(ngModel)]="formData.email"
                  required
                  class="form-input"
                  placeholder="seu&#64;email.com"
                />
              </div>

              <div class="form-group">
                <label for="subject">Assunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  [(ngModel)]="formData.subject"
                  required
                  class="form-input"
                  placeholder="Qual é o assunto?"
                />
              </div>

              <div class="form-group">
                <label for="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  [(ngModel)]="formData.message"
                  required
                  class="form-textarea"
                  placeholder="Conte-me sobre seu projeto..."
                  rows="5"
                ></textarea>
              </div>

              <button
                type="submit"
                class="submit-btn"
                [disabled]="isSubmitting"
              >
                <span class="btn-icon" *ngIf="!isSubmitting">📤</span>
                <span class="btn-icon" *ngIf="isSubmitting">⏳</span>
                {{ isSubmitting ? 'Enviando...' : 'Enviar Mensagem' }}
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq-section">
        <h2 class="section-title">Perguntas Frequentes</h2>
        <div class="faq-grid">
          <div class="faq-item" *ngFor="let faq of faqs; let i = index">
            <div
              class="faq-question"
              (click)="toggleFaq(i)"
              (keydown.enter)="toggleFaq(i)"
              tabindex="0"
              role="button"
              [attr.aria-expanded]="faq.isOpen"
            >
              <h3>{{ faq.question }}</h3>
              <span class="faq-icon" [class.open]="faq.isOpen">+</span>
            </div>
            <div class="faq-answer" [class.open]="faq.isOpen">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .contact-container {
        padding-top: 80px;
      }

      /* Contact Hero */
      .contact-hero {
        min-height: 40vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        text-align: center;
      }

      .hero-title {
        font-size: 3.5rem;
        font-weight: 800;
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 1rem;
      }

      .hero-subtitle {
        font-size: 1.3rem;
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.6;
      }

      /* Contact Content */
      .contact-content {
        padding: 4rem 2rem;
      }

      .contact-grid {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
      }

      .section-title {
        font-size: 2rem;
        color: white;
        margin-bottom: 2rem;
      }

      /* Contact Info */
      .contact-info {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        padding: 2rem;
      }

      .info-items {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-bottom: 2rem;
      }

      .info-item {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .info-icon {
        font-size: 2rem;
        width: 60px;
        height: 60px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(10px);
      }

      .info-content h3 {
        color: white;
        font-size: 1.1rem;
        margin-bottom: 0.3rem;
      }

      .info-content p {
        color: rgba(255, 255, 255, 0.8);
        margin: 0;
      }

      .social-links h3 {
        color: white;
        font-size: 1.3rem;
        margin-bottom: 1rem;
      }

      .social-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }

      .social-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: rgba(255, 255, 255, 0.1);
        color: white;
        text-decoration: none;
        padding: 1rem;
        border-radius: 15px;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
      }

      .social-link:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-3px);
      }

      .social-icon {
        font-size: 1.2rem;
      }

      .social-name {
        font-weight: 500;
      }

      /* Contact Form */
      .contact-form {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        padding: 2rem;
      }

      .form-group {
        margin-bottom: 1.5rem;
      }

      .form-group label {
        display: block;
        color: white;
        font-weight: 500;
        margin-bottom: 0.5rem;
      }

      .form-input,
      .form-textarea {
        width: 100%;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        color: white;
        font-size: 1rem;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
      }

      .form-input::placeholder,
      .form-textarea::placeholder {
        color: rgba(255, 255, 255, 0.6);
      }

      .form-input:focus,
      .form-textarea:focus {
        outline: none;
        border-color: #4ecdc4;
        box-shadow: 0 0 20px rgba(78, 205, 196, 0.3);
      }

      .form-textarea {
        resize: vertical;
        min-height: 120px;
      }

      .submit-btn {
        width: 100%;
        padding: 1rem 2rem;
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        color: white;
        border: none;
        border-radius: 50px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
      }

      .submit-btn:hover:not(:disabled) {
        transform: translateY(-3px);
        box-shadow: 0 12px 35px rgba(255, 107, 107, 0.4);
      }

      .submit-btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }

      .btn-icon {
        font-size: 1.2rem;
      }

      /* FAQ Section */
      .faq-section {
        padding: 5rem 2rem;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(20px);
      }

      .faq-grid {
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .faq-item {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 15px;
        overflow: hidden;
      }

      .faq-question {
        padding: 1.5rem;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 0.3s ease;
      }

      .faq-question:hover {
        background: rgba(255, 255, 255, 0.05);
      }

      .faq-question h3 {
        color: white;
        font-size: 1.1rem;
        margin: 0;
      }

      .faq-icon {
        color: #4ecdc4;
        font-size: 1.5rem;
        font-weight: bold;
        transition: all 0.3s ease;
      }

      .faq-icon.open {
        transform: rotate(45deg);
      }

      .faq-answer {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
      }

      .faq-answer.open {
        max-height: 200px;
      }

      .faq-answer p {
        padding: 0 1.5rem 1.5rem;
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.6;
        margin: 0;
      }

      /* Responsive */
      @media (max-width: 768px) {
        .hero-title {
          font-size: 2.5rem;
        }

        .contact-grid {
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .social-grid {
          grid-template-columns: 1fr;
        }

        .faq-question {
          padding: 1rem;
        }

        .faq-question h3 {
          font-size: 1rem;
        }
      }
    `,
  ],
})
export class ContactComponent {
  isSubmitting = false;

  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  faqs = [
    {
      question: 'Quais tipos de projetos você aceita?',
      answer:
        'Aceito projetos de desenvolvimento web, aplicações móveis, APIs e sistemas personalizados. Estou sempre aberto a novos desafios!',
      isOpen: false,
    },
    {
      question: 'Qual é o prazo médio de entrega?',
      answer:
        'O prazo varia de acordo com a complexidade do projeto. Projetos pequenos podem levar 1-2 semanas, enquanto projetos maiores podem levar 1-3 meses.',
      isOpen: false,
    },
    {
      question: 'Você trabalha com equipes remotas?',
      answer:
        'Sim! Tenho experiência trabalhando com equipes distribuídas e estou confortável com comunicação remota e ferramentas de colaboração.',
      isOpen: false,
    },
    {
      question: 'Oferece suporte pós-entrega?',
      answer:
        'Sim, ofereço suporte técnico e manutenção após a entrega do projeto. Podemos discutir os termos de suporte durante o planejamento.',
      isOpen: false,
    },
  ];

  categories = ['Todos', 'Frontend', 'Angular', 'TypeScript', 'SCSS'];

  onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;

    // Simular envio do formulário
    setTimeout(() => {
      console.log('Formulário enviado:', this.formData);
      alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');

      // Resetar formulário
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: '',
      };

      this.isSubmitting = false;
    }, 2000);
  }

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}

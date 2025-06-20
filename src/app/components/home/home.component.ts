import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="home-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              <span class="title-line">Olá, eu sou</span>
              <span class="title-highlight">Desenvolvedor</span>
              <span class="title-line">Full Stack</span>
            </h1>
            <p class="hero-subtitle">
              Transformando ideias em experiências digitais incríveis
            </p>
            <div class="hero-buttons">
              <a routerLink="/projects" class="btn btn-primary">
                <span class="btn-icon">🚀</span>
                Ver Projetos
              </a>
              <a routerLink="/contact" class="btn btn-secondary">
                <span class="btn-icon">💬</span>
                Fale Comigo
              </a>
            </div>
          </div>

          <div class="hero-visual">
            <div class="floating-card">
              <div class="card-content">
                <div class="avatar">👨‍💻</div>
                <h3>Desenvolvedor</h3>
                <p>Angular • React • Node.js</p>
              </div>
            </div>
            <div class="floating-elements">
              <div class="floating-element" style="--delay: 0s">⚡</div>
              <div class="floating-element" style="--delay: 1s">💻</div>
              <div class="floating-element" style="--delay: 2s">🎨</div>
              <div class="floating-element" style="--delay: 3s">🔧</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="features-section">
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>Foco em Resultados</h3>
            <p>
              Desenvolvo soluções que realmente fazem a diferença para o seu
              negócio
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Performance</h3>
            <p>
              Aplicações rápidas e otimizadas para a melhor experiência do
              usuário
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3>Design Moderno</h3>
            <p>
              Interfaces bonitas e intuitivas seguindo as últimas tendências
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3>Segurança</h3>
            <p>
              Implementação de boas práticas de segurança em todos os projetos
            </p>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="stats-section">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">50+</div>
            <div class="stat-label">Projetos Concluídos</div>
          </div>

          <div class="stat-item">
            <div class="stat-number">3+</div>
            <div class="stat-label">Anos de Experiência</div>
          </div>

          <div class="stat-item">
            <div class="stat-number">100%</div>
            <div class="stat-label">Clientes Satisfeitos</div>
          </div>

          <div class="stat-item">
            <div class="stat-number">24/7</div>
            <div class="stat-label">Suporte Disponível</div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .home-container {
        padding-top: 80px;
      }

      /* Hero Section */
      .hero-section {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        position: relative;
        overflow: hidden;
      }

      .hero-content {
        max-width: 1200px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
      }

      .hero-text {
        z-index: 2;
      }

      .hero-title {
        font-size: 3.5rem;
        font-weight: 800;
        line-height: 1.1;
        margin-bottom: 1.5rem;
        display: flex;
        flex-direction: column;
      }

      .title-line {
        color: white;
        opacity: 0.9;
      }

      .title-highlight {
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-size: 4rem;
        animation: gradientShift 3s ease-in-out infinite;
      }

      @keyframes gradientShift {
        0%,
        100% {
          filter: hue-rotate(0deg);
        }
        50% {
          filter: hue-rotate(30deg);
        }
      }

      .hero-subtitle {
        font-size: 1.3rem;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 2rem;
        line-height: 1.6;
      }

      .hero-buttons {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem 2rem;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 600;
        font-size: 1rem;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
      }

      .btn::before {
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

      .btn:hover::before {
        left: 100%;
      }

      .btn-primary {
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        color: white;
        box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
      }

      .btn-primary:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 35px rgba(255, 107, 107, 0.4);
      }

      .btn-secondary {
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border: 2px solid rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
      }

      .btn-secondary:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-3px);
      }

      .btn-icon {
        font-size: 1.2rem;
      }

      /* Hero Visual */
      .hero-visual {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 500px;
      }

      .floating-card {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        padding: 2rem;
        text-align: center;
        animation: float 6s ease-in-out infinite;
        z-index: 2;
      }

      @keyframes float {
        0%,
        100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
        }
      }

      .card-content h3 {
        color: white;
        margin: 1rem 0 0.5rem;
        font-size: 1.5rem;
      }

      .card-content p {
        color: rgba(255, 255, 255, 0.8);
        margin: 0;
      }

      .avatar {
        font-size: 4rem;
        margin-bottom: 1rem;
      }

      .floating-elements {
        position: absolute;
        width: 100%;
        height: 100%;
      }

      .floating-element {
        position: absolute;
        font-size: 2rem;
        animation: floatElement 4s ease-in-out infinite;
        animation-delay: var(--delay);
      }

      .floating-element:nth-child(1) {
        top: 10%;
        left: 10%;
      }
      .floating-element:nth-child(2) {
        top: 20%;
        right: 15%;
      }
      .floating-element:nth-child(3) {
        bottom: 30%;
        left: 5%;
      }
      .floating-element:nth-child(4) {
        bottom: 20%;
        right: 10%;
      }

      @keyframes floatElement {
        0%,
        100% {
          transform: translateY(0px) rotate(0deg);
        }
        50% {
          transform: translateY(-15px) rotate(10deg);
        }
      }

      /* Features Section */
      .features-section {
        padding: 5rem 2rem;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(20px);
      }

      .features-grid {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
      }

      .feature-card {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        padding: 2rem;
        text-align: center;
        transition: all 0.3s ease;
      }

      .feature-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      }

      .feature-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
      }

      .feature-card h3 {
        color: white;
        font-size: 1.3rem;
        margin-bottom: 1rem;
      }

      .feature-card p {
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.6;
        margin: 0;
      }

      /* Stats Section */
      .stats-section {
        padding: 5rem 2rem;
      }

      .stats-grid {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
      }

      .stat-item {
        text-align: center;
        padding: 2rem;
      }

      .stat-number {
        font-size: 3rem;
        font-weight: 800;
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 0.5rem;
      }

      .stat-label {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1.1rem;
        font-weight: 500;
      }

      /* Responsive */
      @media (max-width: 768px) {
        .hero-content {
          grid-template-columns: 1fr;
          gap: 2rem;
          text-align: center;
        }

        .hero-title {
          font-size: 2.5rem;
        }

        .title-highlight {
          font-size: 3rem;
        }

        .hero-buttons {
          justify-content: center;
        }

        .hero-visual {
          height: 300px;
        }

        .floating-card {
          padding: 1.5rem;
        }

        .avatar {
          font-size: 3rem;
        }

        .features-grid {
          grid-template-columns: 1fr;
        }

        .stats-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    // Adicionar animações de entrada
    this.animateOnScroll();
  }

  private animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    });

    document.querySelectorAll('.feature-card, .stat-item').forEach((el) => {
      observer.observe(el);
    });
  }
}

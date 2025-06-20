import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-container">
      <!-- About Hero -->
      <section class="about-hero">
        <div class="about-content">
          <div class="about-text">
            <h1 class="about-title">Sobre Mim</h1>
            <p class="about-subtitle">
              Desenvolvedor apaixonado por tecnologia e inovação
            </p>
          </div>
          <div class="about-avatar">
            <div class="avatar-container">
              <div class="avatar">👨‍💻</div>
              <div class="avatar-glow"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Bio Section -->
      <section class="bio-section">
        <div class="bio-content">
          <div class="bio-text">
            <h2>Minha História</h2>
            <p>
              Sou um desenvolvedor Front-end especializado em Angular,
              apaixonado por criar interfaces modernas e experiências de usuário
              excepcionais. Com foco em desenvolvimento front-end, tenho
              trabalhado em diversos projetos que me permitiram desenvolver
              habilidades sólidas em Angular, TypeScript e design de interfaces.
            </p>
            <p>
              Minha jornada na programação começou com a curiosidade de entender
              como criar interfaces bonitas e funcionais. Hoje, transformo essa
              paixão em aplicações web modernas, responsivas e performáticas
              usando Angular.
            </p>
            <div class="bio-stats">
              <div class="bio-stat">
                <span class="stat-number">3+</span>
                <span class="stat-label">Anos de Experiência</span>
              </div>
              <div class="bio-stat">
                <span class="stat-number">50+</span>
                <span class="stat-label">Projetos Concluídos</span>
              </div>
              <div class="bio-stat">
                <span class="stat-number">15+</span>
                <span class="stat-label">Tecnologias Dominadas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Timeline Section -->
      <section class="timeline-section">
        <h2 class="section-title">Minha Jornada</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-date">2023 - Presente</div>
              <h3>Desenvolvedor Front-end Angular Senior</h3>
              <p>
                Desenvolvimento de aplicações web complexas usando Angular,
                TypeScript e SCSS. Foco em performance, acessibilidade e
                experiência do usuário.
              </p>
              <div class="timeline-tech">
                <span class="tech-tag">Angular</span>
                <span class="tech-tag">TypeScript</span>
                <span class="tech-tag">SCSS</span>
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-date">2021 - 2023</div>
              <h3>Desenvolvedor Front-end</h3>
              <p>
                Desenvolvimento de interfaces de usuário modernas e responsivas.
                Especialização em Angular e boas práticas de desenvolvimento
                front-end.
              </p>
              <div class="timeline-tech">
                <span class="tech-tag">Angular</span>
                <span class="tech-tag">TypeScript</span>
                <span class="tech-tag">SCSS</span>
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-date">2020 - 2021</div>
              <h3>Desenvolvedor Júnior</h3>
              <p>
                Primeiros passos na carreira de desenvolvimento front-end.
                Aprendizado de fundamentos de Angular, TypeScript e boas
                práticas de programação.
              </p>
              <div class="timeline-tech">
                <span class="tech-tag">Angular</span>
                <span class="tech-tag">TypeScript</span>
                <span class="tech-tag">CSS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Values Section -->
      <section class="values-section">
        <h2 class="section-title">Meus Valores</h2>
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">🎯</div>
            <h3>Foco</h3>
            <p>
              Mantenho o foco nos objetivos do projeto e nas necessidades do
              cliente
            </p>
          </div>

          <div class="value-card">
            <div class="value-icon">🚀</div>
            <h3>Inovação</h3>
            <p>
              Sempre busco novas tecnologias e abordagens para resolver
              problemas
            </p>
          </div>

          <div class="value-card">
            <div class="value-icon">🤝</div>
            <h3>Colaboração</h3>
            <p>
              Acredito no poder do trabalho em equipe e na troca de conhecimento
            </p>
          </div>

          <div class="value-card">
            <div class="value-icon">📚</div>
            <h3>Aprendizado</h3>
            <p>
              Estou sempre aprendendo e me atualizando com as últimas tendências
            </p>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .about-container {
        padding-top: 80px;
      }

      /* About Hero */
      .about-hero {
        min-height: 60vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
      }

      .about-content {
        max-width: 1200px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
      }

      .about-title {
        font-size: 3.5rem;
        font-weight: 800;
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 1rem;
      }

      .about-subtitle {
        font-size: 1.3rem;
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.6;
      }

      .about-avatar {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .avatar-container {
        position: relative;
      }

      .avatar {
        font-size: 8rem;
        z-index: 2;
        position: relative;
      }

      .avatar-glow {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 200px;
        height: 200px;
        background: radial-gradient(
          circle,
          rgba(255, 107, 107, 0.3) 0%,
          transparent 70%
        );
        border-radius: 50%;
        animation: pulse 2s ease-in-out infinite;
      }

      @keyframes pulse {
        0%,
        100% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 0.5;
        }
        50% {
          transform: translate(-50%, -50%) scale(1.1);
          opacity: 0.8;
        }
      }

      /* Bio Section */
      .bio-section {
        padding: 5rem 2rem;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(20px);
      }

      .bio-content {
        max-width: 800px;
        margin: 0 auto;
      }

      .bio-text h2 {
        font-size: 2.5rem;
        color: white;
        margin-bottom: 2rem;
        text-align: center;
      }

      .bio-text p {
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.8;
        margin-bottom: 1.5rem;
      }

      .bio-stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin-top: 3rem;
      }

      .bio-stat {
        text-align: center;
        padding: 2rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        backdrop-filter: blur(10px);
      }

      .bio-stat .stat-number {
        display: block;
        font-size: 2.5rem;
        font-weight: 800;
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .bio-stat .stat-label {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1rem;
        margin-top: 0.5rem;
      }

      /* Timeline Section */
      .timeline-section {
        padding: 5rem 2rem;
      }

      .section-title {
        font-size: 2.5rem;
        color: white;
        text-align: center;
        margin-bottom: 3rem;
      }

      .timeline {
        max-width: 800px;
        margin: 0 auto;
        position: relative;
      }

      .timeline::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 2px;
        background: linear-gradient(to bottom, #ff6b6b, #4ecdc4);
        transform: translateX(-50%);
      }

      .timeline-item {
        position: relative;
        margin-bottom: 3rem;
        display: flex;
        align-items: center;
      }

      .timeline-item:nth-child(odd) {
        flex-direction: row;
      }

      .timeline-item:nth-child(even) {
        flex-direction: row-reverse;
      }

      .timeline-marker {
        width: 20px;
        height: 20px;
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        border-radius: 50%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        box-shadow: 0 0 20px rgba(255, 107, 107, 0.5);
      }

      .timeline-content {
        width: 45%;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        padding: 2rem;
        transition: all 0.3s ease;
      }

      .timeline-content:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
      }

      .timeline-date {
        color: #4ecdc4;
        font-weight: 600;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
      }

      .timeline-content h3 {
        color: white;
        font-size: 1.3rem;
        margin-bottom: 1rem;
      }

      .timeline-content p {
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.6;
        margin-bottom: 1rem;
      }

      .timeline-tech {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
      }

      .tech-tag {
        background: rgba(255, 255, 255, 0.1);
        color: white;
        padding: 0.3rem 0.8rem;
        border-radius: 15px;
        font-size: 0.8rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }

      /* Values Section */
      .values-section {
        padding: 5rem 2rem;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(20px);
      }

      .values-grid {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
      }

      .value-card {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        padding: 2rem;
        text-align: center;
        transition: all 0.3s ease;
      }

      .value-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      }

      .value-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
      }

      .value-card h3 {
        color: white;
        font-size: 1.3rem;
        margin-bottom: 1rem;
      }

      .value-card p {
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.6;
        margin: 0;
      }

      /* Responsive */
      @media (max-width: 768px) {
        .about-content {
          grid-template-columns: 1fr;
          gap: 2rem;
          text-align: center;
        }

        .about-title {
          font-size: 2.5rem;
        }

        .avatar {
          font-size: 6rem;
        }

        .bio-stats {
          grid-template-columns: 1fr;
        }

        .timeline::before {
          left: 20px;
        }

        .timeline-item {
          flex-direction: row !important;
        }

        .timeline-marker {
          left: 20px;
          transform: translateX(-50%);
        }

        .timeline-content {
          width: calc(100% - 60px);
          margin-left: 60px;
        }

        .values-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class AboutComponent {}

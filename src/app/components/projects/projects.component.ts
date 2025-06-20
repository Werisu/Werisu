import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  link: string;
  github: string;
  isHovered?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="projects-container">
      <!-- Projects Hero -->
      <section class="projects-hero">
        <div class="hero-content">
          <h1 class="hero-title">Meus Projetos</h1>
          <p class="hero-subtitle">
            Uma coleção dos meus trabalhos mais recentes e desafiadores
          </p>
        </div>
      </section>

      <!-- Filter Section -->
      <section class="filter-section">
        <div class="filter-container">
          <button
            *ngFor="let category of categories"
            class="filter-btn"
            [class.active]="selectedCategory === category"
            (click)="filterProjects(category)"
          >
            {{ category }}
          </button>
        </div>
      </section>

      <!-- Projects Grid -->
      <section class="projects-grid-section">
        <div class="projects-grid">
          <div
            *ngFor="let project of filteredProjects"
            class="project-card"
            (mouseenter)="project.isHovered = true"
            (mouseleave)="project.isHovered = false"
          >
            <div class="project-image">
              <div class="image-placeholder">{{ project.image }}</div>
              <div class="project-overlay" [class.active]="project.isHovered">
                <div class="overlay-content">
                  <a [href]="project.link" target="_blank" class="project-link">
                    <span class="link-icon">🔗</span>
                    Ver Projeto
                  </a>
                  <a
                    [href]="project.github"
                    target="_blank"
                    class="project-link"
                  >
                    <span class="link-icon">🐙</span>
                    Código
                  </a>
                </div>
              </div>
            </div>

            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>

              <div class="project-tech">
                <span
                  *ngFor="let tech of project.technologies"
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
              </div>

              <div class="project-category">
                <span class="category-badge">{{ project.category }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Project -->
      <section class="featured-section">
        <h2 class="section-title">Projeto em Destaque</h2>
        <div class="featured-project">
          <div class="featured-content">
            <div class="featured-text">
              <h3 class="featured-title">E-commerce Moderno</h3>
              <p class="featured-description">
                Uma plataforma de e-commerce completa desenvolvida com Angular e
                Node.js. Inclui sistema de pagamentos, gestão de produtos,
                carrinho de compras e painel administrativo.
              </p>
              <div class="featured-tech">
                <span class="tech-tag">Angular</span>
                <span class="tech-tag">Node.js</span>
                <span class="tech-tag">MongoDB</span>
                <span class="tech-tag">Stripe</span>
              </div>
              <div class="featured-links">
                <a href="#" class="btn btn-primary">
                  <span class="btn-icon">🚀</span>
                  Ver Projeto
                </a>
                <a href="#" class="btn btn-secondary">
                  <span class="btn-icon">🐙</span>
                  Ver Código
                </a>
              </div>
            </div>
            <div class="featured-visual">
              <div class="featured-image">
                <div class="image-placeholder large">🛒</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .projects-container {
        padding-top: 80px;
      }

      /* Projects Hero */
      .projects-hero {
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

      /* Filter Section */
      .filter-section {
        padding: 2rem;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(20px);
      }

      .filter-container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .filter-btn {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: white;
        padding: 0.8rem 1.5rem;
        border-radius: 25px;
        cursor: pointer;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
        font-weight: 500;
      }

      .filter-btn:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
      }

      .filter-btn.active {
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        border-color: transparent;
        box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
      }

      /* Projects Grid */
      .projects-grid-section {
        padding: 4rem 2rem;
      }

      .projects-grid {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
      }

      .project-card {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        overflow: hidden;
        transition: all 0.3s ease;
        position: relative;
      }

      .project-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      }

      .project-image {
        position: relative;
        height: 200px;
        overflow: hidden;
      }

      .image-placeholder {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4rem;
        background: linear-gradient(45deg, #667eea, #764ba2);
        color: white;
      }

      .image-placeholder.large {
        font-size: 6rem;
      }

      .project-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: all 0.3s ease;
      }

      .project-overlay.active {
        opacity: 1;
      }

      .overlay-content {
        display: flex;
        gap: 1rem;
      }

      .project-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: rgba(255, 255, 255, 0.1);
        color: white;
        text-decoration: none;
        padding: 0.8rem 1.2rem;
        border-radius: 25px;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
      }

      .project-link:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: scale(1.05);
      }

      .link-icon {
        font-size: 1.2rem;
      }

      .project-content {
        padding: 1.5rem;
      }

      .project-title {
        color: white;
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 0.8rem;
      }

      .project-description {
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.6;
        margin-bottom: 1rem;
      }

      .project-tech {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        margin-bottom: 1rem;
      }

      .tech-tag {
        background: rgba(255, 255, 255, 0.1);
        color: white;
        padding: 0.3rem 0.8rem;
        border-radius: 15px;
        font-size: 0.8rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }

      .project-category {
        display: flex;
        justify-content: flex-end;
      }

      .category-badge {
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        color: white;
        padding: 0.3rem 0.8rem;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 500;
      }

      /* Featured Section */
      .featured-section {
        padding: 5rem 2rem;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(20px);
      }

      .section-title {
        font-size: 2.5rem;
        color: white;
        text-align: center;
        margin-bottom: 3rem;
      }

      .featured-project {
        max-width: 1200px;
        margin: 0 auto;
      }

      .featured-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
      }

      .featured-title {
        font-size: 2rem;
        color: white;
        margin-bottom: 1rem;
      }

      .featured-description {
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.8;
        margin-bottom: 2rem;
        font-size: 1.1rem;
      }

      .featured-tech {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        margin-bottom: 2rem;
      }

      .featured-links {
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

      .featured-visual {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .featured-image {
        width: 100%;
        max-width: 400px;
      }

      /* Responsive */
      @media (max-width: 768px) {
        .hero-title {
          font-size: 2.5rem;
        }

        .projects-grid {
          grid-template-columns: 1fr;
        }

        .featured-content {
          grid-template-columns: 1fr;
          gap: 2rem;
          text-align: center;
        }

        .featured-links {
          justify-content: center;
        }

        .filter-container {
          justify-content: center;
        }
      }
    `,
  ],
})
export class ProjectsComponent {
  selectedCategory = 'Todos';
  categories = ['Todos', 'Frontend', 'Backend', 'Full Stack', 'Mobile'];

  projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Moderno',
      description:
        'Plataforma completa de e-commerce com sistema de pagamentos e gestão de produtos.',
      image: '🛒',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Full Stack',
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description:
        'Dashboard interativo para análise de dados com gráficos e métricas em tempo real.',
      image: '📊',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Firebase'],
      category: 'Frontend',
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'API REST',
      description:
        'API RESTful robusta para gerenciamento de usuários e autenticação.',
      image: '🔌',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      category: 'Backend',
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'App de Tarefas',
      description:
        'Aplicativo móvel para gerenciamento de tarefas com sincronização em nuvem.',
      image: '📱',
      technologies: ['React Native', 'Firebase', 'Redux', 'AsyncStorage'],
      category: 'Mobile',
      link: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'Portfolio Interativo',
      description:
        'Portfolio pessoal com animações e design moderno usando Angular.',
      image: '🎨',
      technologies: ['Angular', 'SCSS', 'TypeScript', 'GSAP'],
      category: 'Frontend',
      link: '#',
      github: '#',
    },
    {
      id: 6,
      title: 'Sistema de Chat',
      description:
        'Sistema de chat em tempo real com WebSockets e interface moderna.',
      image: '💬',
      technologies: ['Angular', 'Socket.io', 'Node.js', 'MongoDB'],
      category: 'Full Stack',
      link: '#',
      github: '#',
    },
  ];

  get filteredProjects() {
    if (this.selectedCategory === 'Todos') {
      return this.projects;
    }
    return this.projects.filter(
      (project) => project.category === this.selectedCategory
    );
  }

  filterProjects(category: string) {
    this.selectedCategory = category;
  }
}

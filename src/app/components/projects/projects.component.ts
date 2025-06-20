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
              <h3 class="featured-title">Clinic Management Pro</h3>
              <p class="featured-description">
                Sistema completo de gestão clínica desenvolvido com Angular e
                TypeScript. Inclui agendamento de consultas, prontuários
                eletrônicos, controle financeiro, gestão de pacientes e
                relatórios detalhados. Interface moderna e responsiva com foco
                na experiência do usuário e eficiência operacional.
              </p>
              <div class="featured-tech">
                <span class="tech-tag">Angular</span>
                <span class="tech-tag">TypeScript</span>
                <span class="tech-tag">Healthcare</span>
                <span class="tech-tag">Management</span>
              </div>
              <div class="featured-links">
                <a
                  href="https://github.com/Werisu/clinic-management-pro"
                  target="_blank"
                  class="btn btn-primary"
                >
                  <span class="btn-icon">🚀</span>
                  Ver Projeto
                </a>
                <a
                  href="https://github.com/Werisu/clinic-management-pro"
                  target="_blank"
                  class="btn btn-secondary"
                >
                  <span class="btn-icon">🐙</span>
                  Ver Código
                </a>
              </div>
            </div>
            <div class="featured-visual">
              <div class="featured-image">
                <div class="image-placeholder large">🏥</div>
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
  categories = [
    'Todos',
    'Frontend',
    'Full Stack',
    'Mobile',
    'PWA',
    'E-commerce',
  ];

  projects: Project[] = [
    {
      id: 1,
      title: 'Werisu',
      description:
        'Portfólio pessoal moderno desenvolvido com Angular, apresentando projetos e habilidades de desenvolvimento front-end.',
      image: '🎨',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Responsive Design'],
      category: 'Frontend',
      link: 'https://github.com/Werisu/Werisu',
      github: 'https://github.com/Werisu/Werisu',
    },
    {
      id: 2,
      title: 'Shared Cart Crew',
      description:
        'Sistema de carrinho compartilhado para compras colaborativas com funcionalidades de sincronização em tempo real.',
      image: '🛒',
      technologies: ['Angular', 'TypeScript', 'Real-time', 'Collaborative'],
      category: 'Frontend',
      link: 'https://github.com/Werisu/shared-cart-crew',
      github: 'https://github.com/Werisu/shared-cart-crew',
    },
    {
      id: 3,
      title: 'Quiz Answer Checker Pro',
      description:
        'Sistema avançado de verificação de respostas para questionários com análise automática e feedback inteligente.',
      image: '✅',
      technologies: ['Angular', 'TypeScript', 'Quiz System', 'AI Analysis'],
      category: 'Frontend',
      link: 'https://github.com/Werisu/quiz-answer-checker-pro',
      github: 'https://github.com/Werisu/quiz-answer-checker-pro',
    },
    {
      id: 4,
      title: 'Clinic Management Pro',
      description:
        'Sistema completo de gestão clínica com agendamento, prontuários eletrônicos e controle financeiro.',
      image: '🏥',
      technologies: ['Angular', 'TypeScript', 'Healthcare', 'Management'],
      category: 'Full Stack',
      link: 'https://github.com/Werisu/clinic-management-pro',
      github: 'https://github.com/Werisu/clinic-management-pro',
    },
    {
      id: 5,
      title: 'Pontuei',
      description:
        'Sistema de pontuação e gamificação para engajamento de usuários com rankings e recompensas.',
      image: '🏆',
      technologies: ['Angular', 'TypeScript', 'Gamification', 'Scoring'],
      category: 'Frontend',
      link: 'https://github.com/Werisu/pontuei',
      github: 'https://github.com/Werisu/pontuei',
    },
    {
      id: 6,
      title: 'Sorteia AE',
      description:
        'Aplicação de sorteios e rifas com interface intuitiva e sistema de geração de números aleatórios.',
      image: '🎲',
      technologies: ['Angular', 'TypeScript', 'Random Generation', 'UI/UX'],
      category: 'Frontend',
      link: 'https://github.com/Werisu/sorteia-ae',
      github: 'https://github.com/Werisu/sorteia-ae',
    },
    {
      id: 7,
      title: 'Study Scheduler',
      description:
        'Organizador de estudos com cronograma inteligente, lembretes e acompanhamento de progresso.',
      image: '📚',
      technologies: ['Angular', 'TypeScript', 'Scheduling', 'Productivity'],
      category: 'Frontend',
      link: 'https://github.com/Werisu/study-scheduler',
      github: 'https://github.com/Werisu/study-scheduler',
    },
    {
      id: 8,
      title: 'Friends Nest',
      description:
        'Rede social para amigos com funcionalidades de chat, compartilhamento e organização de eventos.',
      image: '👥',
      technologies: ['Angular', 'TypeScript', 'Social Network', 'Real-time'],
      category: 'Full Stack',
      link: 'https://github.com/Werisu/friends-nest',
      github: 'https://github.com/Werisu/friends-nest',
    },
    {
      id: 9,
      title: 'Lista Espera Agenda',
      description:
        'Sistema de lista de espera para agendamentos com notificações e gestão de filas.',
      image: '⏰',
      technologies: [
        'Angular',
        'TypeScript',
        'Queue Management',
        'Notifications',
      ],
      category: 'Frontend',
      link: 'https://github.com/Werisu/lista-espera-agenda',
      github: 'https://github.com/Werisu/lista-espera-agenda',
    },
    {
      id: 10,
      title: 'E-commerce Map',
      description:
        'Plataforma de e-commerce com integração de mapas para localização de produtos e entregas.',
      image: '🗺️',
      technologies: ['Angular', 'TypeScript', 'E-commerce', 'Maps API'],
      category: 'E-commerce',
      link: 'https://github.com/Werisu/ecommerce-map-2',
      github: 'https://github.com/Werisu/ecommerce-map-2',
    },
    {
      id: 11,
      title: 'Training Progress',
      description:
        'Sistema de acompanhamento de progresso em treinamentos com métricas e relatórios detalhados.',
      image: '📈',
      technologies: ['Angular', 'TypeScript', 'Analytics', 'Progress Tracking'],
      category: 'Frontend',
      link: 'https://github.com/Werisu/training-progress',
      github: 'https://github.com/Werisu/training-progress',
    },
    {
      id: 12,
      title: 'Nannynha',
      description:
        'Aplicação para babás e cuidadores com agendamento de serviços e gestão de clientes.',
      image: '👶',
      technologies: [
        'Angular',
        'TypeScript',
        'Service Management',
        'Scheduling',
      ],
      category: 'Full Stack',
      link: 'https://github.com/Werisu/nannynha',
      github: 'https://github.com/Werisu/nannynha',
    },
    {
      id: 13,
      title: 'Fullstack App',
      description:
        'Aplicação full-stack completa demonstrando integração entre frontend e backend.',
      image: '⚡',
      technologies: ['Angular', 'TypeScript', 'Full Stack', 'API Integration'],
      category: 'Full Stack',
      link: 'https://github.com/Werisu/fullstack-app',
      github: 'https://github.com/Werisu/fullstack-app',
    },
    {
      id: 14,
      title: 'Workshop Angular',
      description:
        'Projeto educacional para workshops de Angular com exemplos práticos e tutoriais.',
      image: '🎓',
      technologies: ['Angular', 'TypeScript', 'Education', 'Workshop'],
      category: 'Frontend',
      link: 'https://github.com/Werisu/workshop-angular',
      github: 'https://github.com/Werisu/workshop-angular',
    },
    {
      id: 15,
      title: 'Clínica Veterinária',
      description:
        'Sistema de gestão para clínicas veterinárias com prontuários e agendamento de consultas.',
      image: '🐾',
      technologies: ['Angular', 'TypeScript', 'Veterinary', 'Healthcare'],
      category: 'Full Stack',
      link: 'https://github.com/Werisu/clinica-veterinaria-2',
      github: 'https://github.com/Werisu/clinica-veterinaria-2',
    },
    {
      id: 16,
      title: 'PWA App',
      description:
        'Progressive Web App com funcionalidades offline e experiência mobile-first.',
      image: '📱',
      technologies: ['PWA', 'JavaScript', 'Offline', 'Mobile First'],
      category: 'PWA',
      link: 'https://github.com/Werisu/pwa',
      github: 'https://github.com/Werisu/pwa',
    },
    {
      id: 17,
      title: 'E-commerce WW',
      description:
        'Fork do projeto ecommerce de Well e Will (WW) com melhorias e customizações.',
      image: '🛍️',
      technologies: ['Angular', 'TypeScript', 'E-commerce', 'Fork'],
      category: 'E-commerce',
      link: 'https://github.com/Werisu/ecommerce-ww',
      github: 'https://github.com/Werisu/ecommerce-ww',
    },
    {
      id: 18,
      title: 'Guardião',
      description:
        'Sistema de monitoramento e segurança com funcionalidades de vigilância e alertas.',
      image: '🛡️',
      technologies: ['Angular', 'TypeScript', 'Security', 'Monitoring'],
      category: 'Full Stack',
      link: 'https://github.com/Werisu/guardiao',
      github: 'https://github.com/Werisu/guardiao',
    },
    {
      id: 19,
      title: 'Treinamento Ergon',
      description:
        'Sistema de treinamento corporativo desenvolvido para a ERGON SISTEMAS.',
      image: '🏢',
      technologies: [
        'Angular',
        'TypeScript',
        'Corporate Training',
        'Enterprise',
      ],
      category: 'Frontend',
      link: 'https://github.com/Werisu/treinamento-ergon',
      github: 'https://github.com/Werisu/treinamento-ergon',
    },
    {
      id: 20,
      title: 'Store Management',
      description:
        'Sistema de gestão de lojas com controle de estoque, vendas e relatórios.',
      image: '🏪',
      technologies: ['Angular', 'TypeScript', 'Store Management', 'Inventory'],
      category: 'Full Stack',
      link: 'https://github.com/Werisu/store',
      github: 'https://github.com/Werisu/store',
    },
    {
      id: 21,
      title: 'Customer Registration',
      description:
        'Sistema de cadastro de clientes desenvolvido para demonstrar habilidades no processo seletivo da Maxicon.',
      image: '👤',
      technologies: ['Angular', 'TypeScript', 'CRUD', 'Customer Management'],
      category: 'Frontend',
      link: 'https://github.com/Werisu/customer-registration',
      github: 'https://github.com/Werisu/customer-registration',
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

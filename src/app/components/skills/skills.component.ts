import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="skills-container">
      <!-- Skills Hero -->
      <section class="skills-hero">
        <div class="hero-content">
          <h1 class="hero-title">Minhas Habilidades</h1>
          <p class="hero-subtitle">
            Tecnologias e ferramentas que domino para criar soluções incríveis
          </p>
        </div>
      </section>

      <!-- Skills Categories -->
      <section class="skills-categories">
        <div class="categories-grid">
          <div class="category-card" *ngFor="let category of categories">
            <div class="category-icon">{{ category.icon }}</div>
            <h3 class="category-title">{{ category.name }}</h3>
            <p class="category-description">{{ category.description }}</p>
          </div>
        </div>
      </section>

      <!-- Skills Progress -->
      <section class="skills-progress">
        <h2 class="section-title">Nível de Proficiência</h2>
        <div class="skills-grid">
          <div class="skill-item" *ngFor="let skill of skills">
            <div class="skill-header">
              <span class="skill-icon">{{ skill.icon }}</span>
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-level">{{ skill.level }}%</span>
            </div>
            <div class="progress-bar">
              <div
                class="progress-fill"
                [style.width.%]="skill.level"
                [@progressAnimation]="skill.level"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tools Section -->
      <section class="tools-section">
        <h2 class="section-title">Ferramentas e Tecnologias</h2>
        <div class="tools-grid">
          <div class="tool-card" *ngFor="let tool of tools">
            <div class="tool-icon">{{ tool.icon }}</div>
            <h3 class="tool-name">{{ tool.name }}</h3>
            <p class="tool-description">{{ tool.description }}</p>
          </div>
        </div>
      </section>

      <!-- Learning Section -->
      <section class="learning-section">
        <h2 class="section-title">Aprendendo Atualmente</h2>
        <div class="learning-grid">
          <div class="learning-card" *ngFor="let learning of learningList">
            <div class="learning-icon">{{ learning.icon }}</div>
            <h3 class="learning-name">{{ learning.name }}</h3>
            <div class="learning-progress">
              <div class="progress-bar small">
                <div
                  class="progress-fill"
                  [style.width.%]="learning.progress"
                ></div>
              </div>
              <span class="progress-text">{{ learning.progress }}%</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .skills-container {
        padding-top: 80px;
      }

      /* Skills Hero */
      .skills-hero {
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

      /* Skills Categories */
      .skills-categories {
        padding: 4rem 2rem;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(20px);
      }

      .categories-grid {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
      }

      .category-card {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        padding: 2rem;
        text-align: center;
        transition: all 0.3s ease;
      }

      .category-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      }

      .category-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
      }

      .category-title {
        color: white;
        font-size: 1.3rem;
        margin-bottom: 1rem;
      }

      .category-description {
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.6;
        margin: 0;
      }

      /* Skills Progress */
      .skills-progress {
        padding: 5rem 2rem;
      }

      .section-title {
        font-size: 2.5rem;
        color: white;
        text-align: center;
        margin-bottom: 3rem;
      }

      .skills-grid {
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .skill-item {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 15px;
        padding: 1.5rem;
      }

      .skill-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
      }

      .skill-icon {
        font-size: 1.5rem;
      }

      .skill-name {
        color: white;
        font-weight: 600;
        flex: 1;
      }

      .skill-level {
        color: #4ecdc4;
        font-weight: 600;
        font-size: 0.9rem;
      }

      .progress-bar {
        width: 100%;
        height: 8px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
        overflow: hidden;
      }

      .progress-bar.small {
        height: 6px;
      }

      .progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
        border-radius: 4px;
        transition: width 1s ease-in-out;
        position: relative;
      }

      .progress-fill::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.3),
          transparent
        );
        animation: shimmer 2s infinite;
      }

      @keyframes shimmer {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }

      /* Tools Section */
      .tools-section {
        padding: 5rem 2rem;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(20px);
      }

      .tools-grid {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
      }

      .tool-card {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 15px;
        padding: 1.5rem;
        text-align: center;
        transition: all 0.3s ease;
      }

      .tool-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      }

      .tool-icon {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }

      .tool-name {
        color: white;
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
      }

      .tool-description {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.9rem;
        margin: 0;
      }

      /* Learning Section */
      .learning-section {
        padding: 5rem 2rem;
      }

      .learning-grid {
        max-width: 800px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
      }

      .learning-card {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 15px;
        padding: 1.5rem;
        text-align: center;
        transition: all 0.3s ease;
      }

      .learning-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      }

      .learning-icon {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }

      .learning-name {
        color: white;
        font-size: 1.1rem;
        margin-bottom: 1rem;
      }

      .learning-progress {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .progress-text {
        color: #4ecdc4;
        font-weight: 600;
        font-size: 0.9rem;
        min-width: 40px;
      }

      /* Responsive */
      @media (max-width: 768px) {
        .hero-title {
          font-size: 2.5rem;
        }

        .categories-grid {
          grid-template-columns: 1fr;
        }

        .tools-grid {
          grid-template-columns: repeat(2, 1fr);
        }

        .learning-grid {
          grid-template-columns: 1fr;
        }

        .skill-header {
          flex-wrap: wrap;
        }
      }
    `,
  ],
})
export class SkillsComponent implements OnInit {
  categories = [
    {
      name: 'Frontend',
      icon: '🎨',
      description: 'Desenvolvimento de interfaces modernas e responsivas',
    },
    {
      name: 'Backend',
      icon: '⚙️',
      description: 'Desenvolvimento de APIs e sistemas robustos',
    },
    {
      name: 'Mobile',
      icon: '📱',
      description: 'Desenvolvimento de aplicativos móveis',
    },
    {
      name: 'DevOps',
      icon: '🚀',
      description: 'Deploy, CI/CD e infraestrutura',
    },
  ];

  skills: Skill[] = [
    { name: 'Angular', level: 95, icon: '🅰️', category: 'Frontend' },
    { name: 'TypeScript', level: 92, icon: '📘', category: 'Frontend' },
    { name: 'SCSS/SASS', level: 90, icon: '🎨', category: 'Frontend' },
    { name: 'HTML5', level: 88, icon: '🌐', category: 'Frontend' },
    { name: 'CSS3', level: 85, icon: '💅', category: 'Frontend' },
    { name: 'JavaScript', level: 80, icon: '⚡', category: 'Frontend' },
    { name: 'RxJS', level: 75, icon: '🔄', category: 'Frontend' },
    { name: 'Angular Material', level: 70, icon: '🧩', category: 'Frontend' },
  ];

  tools = [
    { name: 'Git', icon: '📚', description: 'Controle de versão' },
    { name: 'VS Code', icon: '💻', description: 'Editor de código' },
    {
      name: 'Angular CLI',
      icon: '🛠️',
      description: 'Ferramenta de linha de comando',
    },
    {
      name: 'Chrome DevTools',
      icon: '🔍',
      description: 'Debugging e performance',
    },
    { name: 'Figma', icon: '🎨', description: 'Design de interfaces' },
    { name: 'Postman', icon: '📮', description: 'Teste de APIs' },
  ];

  learningList = [
    { name: 'Angular 17+', icon: '🅰️', progress: 85 },
    { name: 'Tailwind CSS', icon: '🎨', progress: 60 },
    { name: 'Storybook', icon: '📚', progress: 45 },
  ];

  ngOnInit() {
    // Animar barras de progresso quando o componente for carregado
    setTimeout(() => {
      this.animateProgressBars();
    }, 500);
  }

  private animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach((bar, index) => {
      setTimeout(() => {
        bar.classList.add('animate');
      }, index * 200);
    });
  }
}

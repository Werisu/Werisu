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
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  categories = [
    {
      name: 'Frontend',
      icon: '🎨',
      description: 'Desenvolvimento de interfaces modernas e responsivas',
    },
    {
      name: 'Frameworks',
      icon: '⚙️',
      description: 'Frameworks e bibliotecas JavaScript',
    },
    {
      name: 'Ferramentas',
      icon: '🛠️',
      description: 'Ferramentas de desenvolvimento e versionamento',
    },
    {
      name: 'Design',
      icon: '🎨',
      description: 'Design de interfaces e UX/UI',
    },
  ];

  skills: Skill[] = [
    { name: 'Angular', level: 95, icon: '🅰️', category: 'Frontend' },
    { name: 'TypeScript', level: 90, icon: '📘', category: 'Frontend' },
    { name: 'SCSS/SASS', level: 88, icon: '🎨', category: 'Frontend' },
    { name: 'HTML5', level: 85, icon: '🌐', category: 'Frontend' },
    { name: 'CSS3', level: 82, icon: '💅', category: 'Frontend' },
    { name: 'JavaScript (ES6+)', level: 80, icon: '⚡', category: 'Frontend' },
    { name: 'RxJS', level: 75, icon: '🔄', category: 'Frameworks' },
    { name: 'Angular Material', level: 70, icon: '🧩', category: 'Frameworks' },
    { name: 'Bootstrap', level: 65, icon: '🎨', category: 'Frameworks' },
    { name: 'Tailwind CSS', level: 60, icon: '🎨', category: 'Frameworks' },
  ];

  tools = [
    {
      name: 'Git & GitHub',
      icon: '📚',
      description: 'Controle de versão e colaboração',
    },
    { name: 'VS Code', icon: '💻', description: 'Editor de código principal' },
    {
      name: 'Angular CLI',
      icon: '🛠️',
      description: 'Ferramenta de linha de comando Angular',
    },
    {
      name: 'Chrome DevTools',
      icon: '🔍',
      description: 'Debugging e análise de performance',
    },
    {
      name: 'Figma',
      icon: '🎨',
      description: 'Design de interfaces e prototipagem',
    },
    {
      name: 'Postman',
      icon: '📮',
      description: 'Teste e documentação de APIs',
    },
    {
      name: 'npm/yarn',
      icon: '📦',
      description: 'Gerenciamento de dependências',
    },
    { name: 'Webpack', icon: '📦', description: 'Bundling e otimização' },
  ];

  learningList = [
    { name: 'Angular 17+', icon: '🅰️', progress: 90 },
    { name: 'Storybook', icon: '📚', progress: 50 },
    { name: 'Jest', icon: '🧪', progress: 40 },
    { name: 'Cypress', icon: '🔍', progress: 35 },
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

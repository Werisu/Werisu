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

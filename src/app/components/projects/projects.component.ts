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
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
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

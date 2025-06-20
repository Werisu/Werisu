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
    'E-commerce',
    'Healthcare',
    'Education',
  ];

  projects: Project[] = [
    {
      id: 1,
      title: 'Clinic Management Pro',
      description:
        'Sistema completo de gestão clínica desenvolvido com Angular e TypeScript. Inclui agendamento de consultas, prontuários eletrônicos, controle financeiro, gestão de pacientes e relatórios detalhados. Interface moderna e responsiva com foco na experiência do usuário.',
      image: '🏥',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'RxJS'],
      category: 'Healthcare',
      link: 'https://github.com/Werisu/clinic-management-pro',
      github: 'https://github.com/Werisu/clinic-management-pro',
    },
    {
      id: 2,
      title: 'Shared Cart Crew',
      description:
        'Sistema inovador de carrinho compartilhado para compras colaborativas. Permite que múltiplos usuários contribuam para uma compra coletiva com sincronização em tempo real, divisão de custos e histórico de transações.',
      image: '🛒',
      technologies: ['Angular', 'TypeScript', 'Real-time', 'Collaborative'],
      category: 'E-commerce',
      link: 'https://github.com/Werisu/shared-cart-crew',
      github: 'https://github.com/Werisu/shared-cart-crew',
    },
    {
      id: 3,
      title: 'Quiz Answer Checker Pro',
      description:
        'Sistema avançado de verificação de respostas para questionários educacionais. Inclui análise automática de respostas, feedback inteligente, relatórios de performance e dashboard para professores.',
      image: '✅',
      technologies: ['Angular', 'TypeScript', 'Quiz System', 'Analytics'],
      category: 'Education',
      link: 'https://github.com/Werisu/quiz-answer-checker-pro',
      github: 'https://github.com/Werisu/quiz-answer-checker-pro',
    },
    {
      id: 4,
      title: 'Pontuei',
      description:
        'Plataforma de gamificação e sistema de pontuação para engajamento de usuários. Implementa rankings, recompensas, badges e sistema de conquistas para aumentar a interação e retenção.',
      image: '🏆',
      technologies: [
        'Angular',
        'TypeScript',
        'Gamification',
        'User Engagement',
      ],
      category: 'Frontend',
      link: 'https://github.com/Werisu/pontuei',
      github: 'https://github.com/Werisu/pontuei',
    },
    {
      id: 5,
      title: 'Sorteia AE',
      description:
        'Aplicação de sorteios e rifas com interface intuitiva e moderna. Sistema de geração de números aleatórios, gestão de participantes, histórico de sorteios e notificações automáticas.',
      image: '🎲',
      technologies: ['Angular', 'TypeScript', 'Random Generation', 'UI/UX'],
      category: 'Frontend',
      link: 'https://github.com/Werisu/sorteia-ae',
      github: 'https://github.com/Werisu/sorteia-ae',
    },
    {
      id: 6,
      title: 'Study Scheduler',
      description:
        'Organizador inteligente de estudos com cronograma personalizado, lembretes automáticos, acompanhamento de progresso e relatórios de produtividade. Ideal para estudantes e profissionais.',
      image: '📚',
      technologies: ['Angular', 'TypeScript', 'Scheduling', 'Productivity'],
      category: 'Education',
      link: 'https://github.com/Werisu/study-scheduler',
      github: 'https://github.com/Werisu/study-scheduler',
    },
    {
      id: 7,
      title: 'Friends Nest',
      description:
        'Rede social para amigos com funcionalidades de chat em tempo real, compartilhamento de momentos, organização de eventos e sistema de notificações. Interface moderna e responsiva.',
      image: '👥',
      technologies: ['Angular', 'TypeScript', 'Social Network', 'Real-time'],
      category: 'Full Stack',
      link: 'https://github.com/Werisu/friends-nest',
      github: 'https://github.com/Werisu/friends-nest',
    },
    {
      id: 8,
      title: 'Lista Espera Agenda',
      description:
        'Sistema inteligente de lista de espera para agendamentos com notificações automáticas, gestão de filas, priorização de atendimentos e dashboard de controle em tempo real.',
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
      id: 9,
      title: 'E-commerce Map',
      description:
        'Plataforma de e-commerce inovadora com integração de mapas para localização de produtos, cálculo de frete, rastreamento de entregas e experiência de compra otimizada.',
      image: '🗺️',
      technologies: ['Angular', 'TypeScript', 'E-commerce', 'Maps API'],
      category: 'E-commerce',
      link: 'https://github.com/Werisu/ecommerce-map-2',
      github: 'https://github.com/Werisu/ecommerce-map-2',
    },
    {
      id: 10,
      title: 'Training Progress',
      description:
        'Sistema completo de acompanhamento de progresso em treinamentos corporativos. Inclui métricas detalhadas, relatórios personalizados, certificados automáticos e dashboard de gestão.',
      image: '📈',
      technologies: ['Angular', 'TypeScript', 'Analytics', 'Progress Tracking'],
      category: 'Education',
      link: 'https://github.com/Werisu/training-progress',
      github: 'https://github.com/Werisu/training-progress',
    },
    {
      id: 11,
      title: 'Nannynha',
      description:
        'Plataforma completa para babás e cuidadores com agendamento de serviços, gestão de clientes, sistema de pagamentos, avaliações e comunicação em tempo real.',
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
      id: 12,
      title: 'Fullstack App',
      description:
        'Aplicação full-stack demonstrando integração completa entre frontend Angular e backend. Inclui autenticação, CRUD operations, upload de arquivos e API REST.',
      image: '⚡',
      technologies: ['Angular', 'TypeScript', 'Full Stack', 'API Integration'],
      category: 'Full Stack',
      link: 'https://github.com/Werisu/fullstack-app',
      github: 'https://github.com/Werisu/fullstack-app',
    },
    {
      id: 13,
      title: 'Workshop Angular',
      description:
        'Projeto educacional para workshops de Angular com exemplos práticos, tutoriais interativos, exercícios hands-on e documentação completa para aprendizado.',
      image: '🎓',
      technologies: ['Angular', 'TypeScript', 'Education', 'Workshop'],
      category: 'Education',
      link: 'https://github.com/Werisu/workshop-angular',
      github: 'https://github.com/Werisu/workshop-angular',
    },
    {
      id: 14,
      title: 'Clínica Veterinária',
      description:
        'Sistema especializado de gestão para clínicas veterinárias com prontuários eletrônicos, agendamento de consultas, controle de vacinas, histórico de tratamentos e relatórios médicos.',
      image: '🐾',
      technologies: ['Angular', 'TypeScript', 'Veterinary', 'Healthcare'],
      category: 'Healthcare',
      link: 'https://github.com/Werisu/clinica-veterinaria-2',
      github: 'https://github.com/Werisu/clinica-veterinaria-2',
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

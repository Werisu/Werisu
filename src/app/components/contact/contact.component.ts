import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
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

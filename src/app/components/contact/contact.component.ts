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
      question:
        'Você trabalha apenas com Angular ou outras tecnologias também?',
      answer:
        'Sou especialista em Angular com 3+ anos de experiência, mas também trabalho com TypeScript, SCSS, RxJS e outras tecnologias do ecossistema front-end. Meu foco principal é Angular, mas estou sempre aprendendo novas tecnologias.',
      isOpen: false,
    },
    {
      question: 'Você aceita projetos remotos?',
      answer:
        'Sim! Trabalho 100% remotamente e tenho experiência com equipes distribuídas. Estou disponível para projetos de qualquer lugar do Brasil e também internacionais.',
      isOpen: false,
    },
    {
      question: 'Qual é o seu processo de desenvolvimento?',
      answer:
        'Sigo uma abordagem ágil com planejamento detalhado, desenvolvimento iterativo, testes contínuos e entregas incrementais. Sempre mantenho o cliente informado sobre o progresso.',
      isOpen: false,
    },
    {
      question: 'Você oferece manutenção e suporte após o projeto?',
      answer:
        'Sim, ofereço suporte técnico, manutenção e atualizações após a entrega. Podemos discutir um plano de suporte personalizado de acordo com suas necessidades.',
      isOpen: false,
    },
    {
      question: 'Quanto tempo leva para desenvolver um projeto típico?',
      answer:
        'O prazo varia conforme a complexidade. Projetos pequenos (1-2 semanas), médios (1-2 meses) e grandes (3-6 meses). Sempre forneço cronogramas detalhados no início.',
      isOpen: false,
    },
    {
      question: 'Você trabalha com APIs e integrações?',
      answer:
        'Sim! Tenho experiência com integração de APIs REST, autenticação, gerenciamento de estado e comunicação com backends. Trabalho com serviços externos e APIs de terceiros.',
      isOpen: false,
    },
  ];

  categories = ['Todos', 'Frontend', 'Angular', 'TypeScript', 'SCSS'];

  onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;

    // Formatar mensagem para WhatsApp
    const message = this.formatWhatsAppMessage();

    // URL do WhatsApp com a mensagem formatada
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=5563992304647&text=${encodeURIComponent(
      message
    )}&type=phone_number&app_absent=0`;

    // Abrir WhatsApp em nova aba
    window.open(whatsappUrl, '_blank');

    // Resetar formulário
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };

    this.isSubmitting = false;
  }

  private formatWhatsAppMessage(): string {
    const { name, email, subject, message } = this.formData;

    return `Olá! Recebi uma mensagem através do seu site:

*Nome:* ${name}
*Email:* ${email}
*Assunto:* ${subject}

*Mensagem:*
${message}

---
Mensagem enviada através do formulário de contato do site.`;
  }

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}

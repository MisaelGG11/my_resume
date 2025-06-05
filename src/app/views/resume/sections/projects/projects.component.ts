import { Component, signal } from '@angular/core';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { MainProject } from '@interfaces/projects.interface';

@Component({
  selector: 'projects-section',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styles: `
    .underline-hover::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: white;
      transition: width 0.5s;
    }

    .underline-hover:hover::after {
      width: 100%;
    }

    .horizontal-card {
      @apply col-span-1 md:col-span-2 flex flex-wrap w-full;
    }
  `,
})
export class ProjectsComponent {
  mainProjects = signal<MainProject[]>([
    {
      id: 1,
      title: 'Bolsa de trabajo TalentHub',
      description:
        'Una plataforma de bolsa de trabajo innovadora que conecta de manera eficiente a empresas y profesionales, ofreciendo oportunidades laborales relevantes y personalizadas para encontrar el empleo perfecto.',
      imageUrl: 'assets/images/projects/TalentHub.webp',
      repositoryUrl: 'https://github.com/MisaelGG11/bad115-frontend',
      technologies: [
        'Angular',
        'TailwindCSS',
        'TypeScript',
        'PrimeNG',
        'Nest.js',
        'SQLServer',
      ],
    },
    {
      id: 2,
      title: 'Vetenaria MISTUN',
      description:
        'El Sistema de Gestión Veterinaria "ARTEMIS" optimiza los procesos de la veterinaria MISTUN mediante módulos para gestionar servicios, seguridad, clientes, mascotas, citas, cirugías, ventas, citas y estadísticas',
      imageUrl: 'assets/images/projects/Vet-Mistun.webp',
      technologies: [
        'Express.js',
        'PostgreSQL',
        'Nest.js',
        'React.js',
        'Node.js',
        'MaterialUI',
        'CSS',
      ],
    },
    {
      id: 3,
      title: 'SmartCity Challenge',
      description:
        'Con SmartCity Challenge, presenta soluciones innovadoras innovadoras en diversos ecosistemas utilizando Minecraft. Esta plataforma facilita la interacción entre participantes y jurados, promoviendo la creatividad, resiliencia e innovación.',
      imageUrl: 'assets/images/projects/SmartCity.webp',
      technologies: [
        'Vue',
        'PostgreSQL',
        'PrimeVue',
        'Laravel',
        'TailwindCSS',
        'Node.js',
      ],
    },
  ]);
}

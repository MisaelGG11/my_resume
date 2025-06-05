import { Component, signal } from '@angular/core';
import { ExperienceCardComponent } from "./components/experience-card/experience-card.component";
import { Experience } from '../../../../interfaces/experience.interfaces';

@Component({
    selector: 'app-experience',
    imports: [ExperienceCardComponent],
    templateUrl: './experience.component.html',
    styles: ``
})
export class ExperienceComponent {
  experience = signal<Experience[]>([
    {
      position: "Desarrollador Fullstack",
      company: "Secretaría de Innovación",
      fechaInicio: new Date('2023-07-10'),
      fechaFin: undefined, // Ongoing position
      functions: [
        {
          icon: 'language',
          description: 'Diseño y desarrollo de interfaces de usuario modernas y responsivas utilizando HTML, CSS, TailwindCSS, PrimeVue, JavaScript, TypeScript y Vue.js.',
          highlightedWords: ['diseño', 'desarrollo', 'responsivas']
        },
        {
          icon: 'database',
          description: 'Implementación y mantenimiento de lógica de servidor, bases de datos y APIs con tecnologías como Node.js (Express.js y Nest.js) y Laravel.',
          highlightedWords: ['implementación', 'APIs', 'Node', 'Laravel']
        },
        {
          icon: 'accessibility',
          description: 'Aseguramiento de la accesibilidad y usabilidad de aplicaciones web para todos los usuarios.',
          highlightedWords: ['accesibilidad', 'usabilidad']
        },
        {
          icon: 'groups',
          description: 'Colaboración multidisciplinaria con diseñadores y desarrolladores para entregar productos de alta calidad y coherencia.',
          highlightedWords: ['colaboración', 'alta calidad', 'coherencia']
        },
        {
          icon: 'bug_report',
          description: 'Ejecución de pruebas y depuración para garantizar el correcto funcionamiento y rendimiento de las aplicaciones.',
          highlightedWords: ['pruebas', 'depuración', 'rendimiento']
        },
        {
          icon: 'api',
          description: 'Integración de servicios externos mediante APIs RESTful para ampliar la funcionalidad de las aplicaciones.',
          highlightedWords: ['integración', 'APIs RESTful']
        }
      ]
    }
  ]);
}

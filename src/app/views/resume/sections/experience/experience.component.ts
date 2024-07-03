import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styles: `
    @keyframes border-rotate {
      0% {
        background-position: 0% 50%;
      }
      100% {
        background-position: 200% 50%;
      }
    }

    @keyframes glow {
      0%, 100% {
        box-shadow: 0 0 3px 1px rgba(0, 0, 255, 0.5);
      }
      50% {
        box-shadow: 0 0 3px 1px rgb(183, 58, 255, 0.5);
      }
    }

    .animated-border {
      background: linear-gradient(90deg, #3b82f6, #a855f7, #3b82f6, #a855f7);
      background-size: 200% 200%;
      animation: border-rotate 4s linear infinite, glow 2s ease-in-out infinite;
      border-radius: 8px;
      padding: 1px; /* Ajusta este valor para controlar el grosor del borde */
    }

    .container {
      background-color: #070a25; /* Fondo acorde a los colores */
      border-radius: 8px;
    }
  `
})
export class ExperienceComponent {

}

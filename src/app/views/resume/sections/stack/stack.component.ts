import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TooltipComponent } from '../../../../core/components/tooltip/tooltip.component';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [
    CommonModule,
    TooltipComponent
  ],
  templateUrl: './stack.component.html',
  styles: ``
})
export class StackComponent {
  stack = [
    {
      name: "HTML",
      color: "#EF652A",
      logo: '../../../../assets/icons/html5.svg'
    },
    {
      name: "CSS",
      color: "#30A9DC",
       logo: '../../../../assets/icons/css.svg'
    },
    {
      name: "JavaScript",
      color: "#F0DB4F",
       logo: '../../../../assets/icons/javascript.svg'
    },
    {
      name: "TypeScript",
      color: "#3178C6",
       logo: '../../../../assets/icons/typescript.svg'
    },
    {
      name: "Tailwind",
      color: "#17BAB8",
       logo: '../../../../assets/icons/tailwindcss.svg'
    },
    {
      name: "React",
      color: "#00D8FF",
       logo: '../../../../assets/icons/react.svg'
    },
    {
      name: "Redux",
      color: "#765ABC",
       logo: '../../../../assets/icons/redux.svg'
    },
    {
      name: "Next",
      color: "#FAFAFA",
       logo: '../../../../assets/icons/nextjs.svg'
    },
    {
      name: "Angular",
      color: "#ce4df5",
       logo: '../../../../assets/icons/angular17.png'
    },
    {
      name: "Vue",
      color: "#41B883",
       logo: '../../../../assets/icons/vue.svg'
    },
    {
      name: "NodeJS",
      color: "#539E43",
       logo: '../../../../assets/icons/nodejs.svg'
    },
    {
      name: "ExpressJS",
      color: "#FAFAFA",
       logo: '../../../../assets/icons/expressjs.svg'
    },
    {
      name: "Nest",
      color: "#E0234E",
       logo: '../../../../assets/icons/nest.svg'
    },
    {
      name: "GraphQL",
      color: "#F6009C",
       logo: '../../../../assets/icons/graphql.svg'
    },
    {
      name: "Laravel",
      color: "#FF2D20",
       logo: '../../../../assets/icons/laravel.svg'
    },
    {
      name: "Git",
      color: "#DE4C36",
       logo: '../../../../assets/icons/git.svg'
    },
    {
      name: "VS Code",
      color: "#3DA9F2",
       logo: '../../../../assets/icons/vscode.svg'
    },
    {
      name: "Canva",
      color: "#00C4CC",
       logo: '../../../../assets/icons/canva.webp'
    },
  ];
}

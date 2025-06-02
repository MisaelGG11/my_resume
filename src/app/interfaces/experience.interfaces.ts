export interface Experience {
  position: string;
  company: string;
  fechaInicio: Date;
  fechaFin?: Date; // Optional, can be null if the experience is ongoing
  functions: {
    description: string;
    highlightedWords: string[];
    icon: string; // Icon name or class
  }[];
}

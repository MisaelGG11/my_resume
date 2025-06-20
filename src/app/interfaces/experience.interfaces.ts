export interface Experience {
  position: string;
  company: string;
  initDate: Date;
  endDate?: Date; // Optional, can be null if the experience is ongoing
  functions: {
    description: string;
    highlightedWords: string[];
    icon: string; // Icon name or class
  }[];
}

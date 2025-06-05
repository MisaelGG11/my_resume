export interface MainProject {
  id: number; // Unique identifier for the project
  title: string;
  description: string;
  imageUrl: string;
  repositoryUrl?: string; // Optional, can be null if no Git repository / Private repository
  liveDemoUrl?: string; // Optional, for projects that have a live demo
  technologies: string[];
}

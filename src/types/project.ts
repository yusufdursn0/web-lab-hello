export type Category = "frontend" | "backend" | "fullstack";

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  year: number;
  category: Category;
  github?: string;
  demo?: string;
}
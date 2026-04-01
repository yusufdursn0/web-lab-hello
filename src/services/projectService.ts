import type { Project } from "../types/project";

export async function getProjects(): Promise<Project[]> {
  const response = await fetch("/data/projects.json");

  if (!response.ok) {
    throw new Error("Projeler alınamadı.");
  }

  return (await response.json()) as Project[];
}
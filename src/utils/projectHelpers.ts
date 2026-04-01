import type { Category, Project } from "../types/project";

export function applyFilters(
  projects: Project[],
  search: string,
  category: Category | "all"
): Project[] {
  const normalizedSearch = search.trim().toLowerCase();

  let filtered = [...projects];

  if (normalizedSearch) {
    filtered = filtered.filter((project) => {
      const titleMatch = project.title.toLowerCase().includes(normalizedSearch);
      const descriptionMatch = project.description.toLowerCase().includes(normalizedSearch);
      const techMatch = project.tech.some((item) =>
        item.toLowerCase().includes(normalizedSearch)
      );

      return titleMatch || descriptionMatch || techMatch;
    });
  }

  if (category !== "all") {
    filtered = filtered.filter((project) => project.category === category);
  }

  return filtered;
}
import { useEffect, useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "../forms/ProjectFilter";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  year: number;
  category: string;
}

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/data/projects.json");
        if (!response.ok) {
          throw new Error("Projeler alınamadı.");
        }

        const data: Project[] = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Bir hata oluştu.");
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()) ||
        project.tech.some((item) =>
          item.toLowerCase().includes(search.toLowerCase())
        );

      const matchesCategory =
        category === "all" || project.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [projects, search, category]);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-6 text-3xl font-bold">Projeler</h2>

      <ProjectFilter
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
      />

      {loading && <p className="text-gray-500">Projeler yükleniyor...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && filteredProjects.length === 0 && (
        <p className="text-gray-500">Gösterilecek proje bulunamadı.</p>
      )}

      {!loading && !error && filteredProjects.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
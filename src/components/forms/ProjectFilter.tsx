interface ProjectFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
}

export default function ProjectFilter({
  search,
  onSearchChange,
  category,
  onCategoryChange,
}: ProjectFilterProps) {
  const categories = ["all", "frontend", "backend", "fullstack"];

  return (
    <div className="mb-8 space-y-4">
      <input
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Proje ara..."
        className="w-full rounded-xl border border-gray-300 px-4 py-2"
      />

      <div className="flex flex-wrap gap-2">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onCategoryChange(item)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium ${
              category === item
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
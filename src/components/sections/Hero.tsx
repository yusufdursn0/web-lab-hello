export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[70vh] items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-2xl text-center">
        <p className="mb-2 font-medium text-blue-600">Merhaba, ben</p>
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">Yusuf</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          React ve TypeScript ile portföy geliştiren öğrenci
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
          >
            Projelerimi Gör
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-blue-600 px-6 py-3 font-medium text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800"
          >
            İletişime Geç
          </a>
        </div>
      </div>
    </section>
  );
}
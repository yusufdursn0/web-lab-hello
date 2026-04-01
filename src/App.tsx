import UIKit from "./pages/UIKit";
import Button from "./components/Button";

export default function App() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <a
        href="#main-content"
        className="sr-only bg-blue-800 p-2 text-white focus:not-sr-only focus:absolute focus:left-0 focus:top-0 z-50"
      >
        Ana içeriğe atla
      </a>

      <button
        onClick={toggleDarkMode}
        className="fixed right-4 top-4 z-50 rounded-full bg-gray-200 p-2 text-gray-800 shadow-lg transition-transform hover:scale-110 dark:bg-gray-700 dark:text-gray-200"
        aria-label="Tema değiştir"
      >
        <span className="dark:hidden">☾</span>
        <span className="hidden dark:inline">☀</span>
      </button>

      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-3 sm:flex-row">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Yusuf - Tailwind Portföy
          </h1>

          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a
                  href="#hakkimda"
                  className="rounded-md px-3 py-1 text-gray-700 transition-colors hover:bg-blue-100 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  Hakkımda
                </a>
              </li>
              <li>
                <a
                  href="#projeler"
                  className="rounded-md px-3 py-1 text-gray-700 transition-colors hover:bg-blue-100 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  Projeler
                </a>
              </li>
              <li>
                <a
                  href="#iletisim"
                  className="rounded-md px-3 py-1 text-gray-700 transition-colors hover:bg-blue-100 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  İletişim
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section id="hakkimda" className="px-4 py-16">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row md:items-start">
            <div className="flex h-40 w-40 items-center justify-center rounded-full bg-blue-100 text-4xl font-bold text-blue-800 shadow-lg dark:bg-gray-800 dark:text-blue-300">
              Y
            </div>

            <div>
              <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-left">
                Hakkımda
              </h2>
              <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
                Modern web teknolojileriyle kullanıcı dostu arayüzler geliştirmeyi
                seviyorum. Bu projede önceki laboratuvarlarda yaptığım portföyü
                Tailwind CSS ile yeniden düzenledim.
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="rounded-full bg-blue-800 px-3 py-1 text-sm text-white">React</li>
                <li className="rounded-full bg-blue-800 px-3 py-1 text-sm text-white">TypeScript</li>
                <li className="rounded-full bg-blue-800 px-3 py-1 text-sm text-white">Tailwind</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler" className="bg-gray-50 px-4 py-16 dark:bg-gray-900">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 dark:text-white">
              Projelerim
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg dark:bg-gray-800">
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Portföy Sitesi
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Önceki laboratuvarlarda geliştirilen portföyün Tailwind ile yeniden tasarlanmış hali.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Responsive Arayüz
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Mobile-first responsive sınıflarla oluşturulmuş proje bölümü.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                    UI Kit Çalışması
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Button, Input, Card ve Alert bileşenlerinin sergilendiği ekran.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="iletisim" className="px-4 py-16">
          <div className="mx-auto max-w-lg">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
              İletişim
            </h2>

            <form className="space-y-4">
              <div>
                <label htmlFor="ad" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Ad Soyad
                </label>
                <input
                  id="ad"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                  type="text"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  E-posta
                </label>
                <input
                  id="email"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                  type="email"
                  required
                />
              </div>

              <div>
                <label htmlFor="mesaj" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mesajınız
                </label>
                <textarea
                  id="mesaj"
                  rows={5}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                  required
                />
              </div>

              <Button variant="primary" size="lg" type="submit">
                Gönder
              </Button>
            </form>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <UIKit />
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-gray-100 px-4 py-6 text-center text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
        <p>&copy; 2026 Yusuf. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}
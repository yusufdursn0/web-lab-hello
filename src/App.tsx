import "./App.css";

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <div className="site-title">Yusuf Dursun</div>

          <nav aria-label="Ana navigasyon">
            <ul className="nav-list">
              <li>
                <a href="#hakkimda">Hakkımda</a>
              </li>
              <li>
                <a href="#projeler">Projeler</a>
              </li>
              <li>
                <a href="#iletisim">İletişim</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" className="container">
        <section className="hero">
          <h1>Yusuf Dursun - Kişisel Portföy</h1>
          <p>
            Web geliştirme öğreniyorum. HTML, CSS, React ve TypeScript ile
            responsive projeler geliştiriyorum.
          </p>
        </section>

        <section id="hakkimda">
          <h2>Hakkımda</h2>

          <div className="about-content">
            <figure>
              <img
                src="https://via.placeholder.com/260"
                alt="Yusuf Dursun'un profil fotoğrafı"
              />
              <figcaption>Yusuf Dursun</figcaption>
            </figure>

            <div className="about-text">
              <p>
                Merhaba, ben Yusuf. Web geliştirme öğreniyorum. HTML5, CSS,
                React ve TypeScript ile projeler geliştiriyorum.
              </p>

              <h3>Kullandığım Teknolojiler</h3>

              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Responsive Design</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler" aria-labelledby="projeler-baslik">
          <h2 id="projeler-baslik">Projelerim</h2>

          <div className="project-grid">
            <article className="project-card">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Watchlist projesinin ekran görüntüsü"
              />
              <h3>Watchlist Projesi</h3>
              <p>
                Film ve dizi listesi oluşturmak için geliştirdiğim bir web
                uygulamasıdır.
              </p>
              <ul className="skill-tags" role="list" aria-label="Watchlist teknolojileri">
                <li>React</li>
                <li>TypeScript</li>
                <li>CSS</li>
              </ul>
            </article>

            <article className="project-card">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Kişisel portföy sitesinin ekran görüntüsü"
              />
              <h3>Kişisel Portföy Sitesi</h3>
              <p>
                Kendimi, projelerimi ve iletişim bilgilerimi tanıttığım tek
                sayfalık portföy çalışmasıdır.
              </p>
              <ul className="skill-tags" role="list" aria-label="Portföy teknolojileri">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>React</li>
              </ul>
            </article>

            <article className="project-card">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Responsive tasarım örneği ekran görüntüsü"
              />
              <h3>Responsive Tasarım Çalışması</h3>
              <p>
                Mobile-first yaklaşımı, Flexbox ve Grid kullanarak geliştirdiğim
                responsive arayüz örneğidir.
              </p>
              <ul className="skill-tags" role="list" aria-label="Responsive proje teknolojileri">
                <li>Flexbox</li>
                <li>Grid</li>
                <li>Responsive</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>

          <form action="#" method="POST" noValidate className="contact-form">
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Adınızı ve soyadınızı girin"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-posta adresinizi girin"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                  defaultValue=""
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Mesajınızı yazın"
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small
                  id="message-error"
                  className="error-msg"
                  role="alert"
                ></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2026 Yusuf Dursun. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
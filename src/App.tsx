import "./App.css";

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
        <nav aria-label="Ana navigasyon" className="container">
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
      </header>

      <main id="main-content" className="container">
        <h1>Yusuf Dursun - Kişisel Portföy</h1>

        <section id="hakkimda">
          <h2>Hakkımda</h2>

          <figure>
            <img
              src="https://via.placeholder.com/200"
              alt="Yusuf Dursun'un profil fotoğrafı"
            />
            <figcaption>Yusuf Dursun </figcaption>
          </figure>

          <p>
            Merhaba, ben Yusuf. Web geliştirme öğreniyorum. HTML5, CSS, React ve
            TypeScript ile projeler geliştiriyorum.
          </p>

          <h3>Kullandığım Teknolojiler</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Git ve GitHub</li>
          </ul>
        </section>

        <section id="projeler" aria-labelledby="projeler-baslik">
          <h2 id="projeler-baslik">Projelerim</h2>

          <article className="project-card">
            <img
              src="https://via.placeholder.com/400x220"
              alt="Watchlist projesinin ekran görüntüsü"
            />
            <h3>Watchlist Projesi</h3>
            <p>
              Film ve dizi listesi oluşturmak için geliştirdiğim bir web
              uygulamasıdır.
            </p>
            <p>Kullanılan teknolojiler: React, TypeScript, CSS</p>
          </article>

          <article className="project-card">
            <img
              src="https://via.placeholder.com/400x220"
              alt="Kişisel portföy sitesinin ekran görüntüsü"
            />
            <h3>Kişisel Portföy Sitesi</h3>
            <p>
              Kendimi, projelerimi ve iletişim bilgilerimi tanıttığım tek
              sayfalık portföy çalışmasıdır.
            </p>
            <p>Kullanılan teknolojiler: HTML5, CSS3, React</p>
          </article>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>

          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad: Yusuf Dursun</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:yusufdursn0@gmail.com</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
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
                <label htmlFor="message">Mesajınız: Merhaba</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
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
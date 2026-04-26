import portfolioBackImg from "@/assets/portafolioback.webp";

export function Portfolio() {
  return (
    <main className="portfolio-page">
      <div className="container">
        <section className="portfolio-section" aria-label="Primera sección del portafolio">
          <div className="portfolio-featured-grid">
            <article className="portfolio-media-card portfolio-media-card-top-wide">
              <div
                className="portfolio-media-card-frame portfolio-media-card-frame-intro"
                style={{ backgroundImage: `url(${portfolioBackImg})` }}
              >
                <div className="portfolio-intro-copy">
                  <div className="portfolio-intro-main">
                    <span className="portfolio-intro-eyebrow">Portafolio</span>
                    <h1 className="portfolio-intro-title">Video, foto y dirección creativa</h1>
                  </div>

                  <div className="portfolio-intro-side">
                    <p className="portfolio-intro-description">
                      Selección de trabajos para marcas y proyectos que buscan presencia visual con identidad.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-left-tall">
              <div className="portfolio-media-card-frame">
                <span className="portfolio-media-card-label">Vertical izquierda</span>
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-right-column">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-video">
                <video
                  autoPlay
                  className="portfolio-media-video"
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src="/portfolio/videos/hero-camaleonte.webm" type="video/webm" />
                </video>
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-center-top">
              <div className="portfolio-media-card-frame">
                <span className="portfolio-media-card-label">Centro superior</span>
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-center-tall">
              <div className="portfolio-media-card-frame">
                <span className="portfolio-media-card-label">Vertical central</span>
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-left-bottom">
              <div className="portfolio-media-card-frame">
                <span className="portfolio-media-card-label">Inferior izquierda</span>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}

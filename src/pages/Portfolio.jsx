import { Link } from "react-router-dom";
import portfolioBackImg from "@/assets/portafolioback.webp";
import { ROUTES } from "@/lib/routes.js";
import { PortfolioVideo } from "@/components/portfolio/PortfolioVideo.jsx";

export function Portfolio() {
  return (
    <main className="portfolio-page">
      <div className="container">

        {/* ── Section 1 – Grid A ── */}
        <section className="portfolio-section" aria-label="Sección 1 del portafolio">
          <div className="portfolio-featured-grid portfolio-featured-grid--a-wide">

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
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Sesión editorial con retrato para campaña visual"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/photo-editorial-1105.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-center-top">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-branding">
                <img
                  alt="Pieza visual para redes sociales y contenido de marca"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/feed-diseno-odi.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-center-tall">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-video">
                <PortfolioVideo
                  className="portfolio-media-video"
                  src="/portfolio/videos/reel-joyas-sabrina-carpenter-espresso.webm"
                />
              </div>
            </article>

          </div>
        </section>

        {/* ── Banner: hero-camaleonte.webm (16:9) ── */}
        <div className="portfolio-video-banner">
          <PortfolioVideo
            className="portfolio-media-video"
            src="/portfolio/videos/hero-camaleonte.webm"
          />
        </div>

        {/* ── Section 2 – Grid B ── */}
        <section className="portfolio-section" aria-label="Sección 2 del portafolio">
          <div className="portfolio-featured-grid portfolio-featured-grid--b">

            <article className="portfolio-media-card portfolio-media-card-b-left-tall">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Fotografía de producción"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/fotografia-1.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-b-top-right">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-video">
                <PortfolioVideo
                  className="portfolio-media-video"
                  src="/portfolio/videos/reel-tengo-tiroides-bad-dreams-teddy-swims.webm"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-b-center-mid">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Imagen de producción audiovisual"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/1.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-b-right-tall">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Fotografía de estudio"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/foto-7-final.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-b-center-tall">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-video">
                <PortfolioVideo
                  className="portfolio-media-video"
                  src="/portfolio/videos/reel-motivacional-dinamico-flawed-mangoes-dramamine-v2.webm"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-b-right-bottom">
              <div
                className="portfolio-media-card-frame portfolio-media-card-frame-quote"
                style={{ backgroundImage: `url(${portfolioBackImg})` }}
              >
                <p className="portfolio-quote-text">Crear no es solo producir. Es dejar una huella.</p>
              </div>
            </article>

          </div>
        </section>

        {/* ── Section 3 – Grid C ── */}
        <section className="portfolio-section" aria-label="Sección 3 del portafolio">
          <div className="portfolio-featured-grid portfolio-featured-grid--c">

            <article className="portfolio-media-card portfolio-media-card-c-top-left">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Retrato editorial para campaña visual"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/photo-editorial-5618.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-c-top-right">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-video">
                <PortfolioVideo
                  className="portfolio-media-video"
                  src="/portfolio/videos/reel-tirads-v4-ruzzi-cuando.webm"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-c-center-mid">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Imagen de contenido de marca"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/2.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-c-right-tall">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Fotografía de sesión con cliente"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/foto-4.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-c-bottom-left">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Imagen de producción para proyecto de marca"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/foto-3.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-c-center-tall">
              <div
                className="portfolio-media-card-frame portfolio-media-card-frame-quote"
                style={{ backgroundImage: `url(${portfolioBackImg})` }}
              >
                <p className="portfolio-quote-text">Cada encuadre cuenta lo que las palabras no pueden.</p>
              </div>
            </article>

          </div>
        </section>

        {/* ── Section 4 – Grid D ── */}
        <section className="portfolio-section" aria-label="Sección 4 del portafolio">
          <div className="portfolio-featured-grid portfolio-featured-grid--d">

            <article className="portfolio-media-card portfolio-media-card-d-top-left">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-branding">
                <img
                  alt="Feed de diseño para redes sociales de cliente"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/feed-jaimec.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-d-top-center">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-video">
                <PortfolioVideo
                  className="portfolio-media-video"
                  src="/portfolio/videos/reel-octubre-rosa-kodaline-all-i-want-piano.webm"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-d-mid-left">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Fotografía de producción visual"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/img-7530.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-d-mid-center">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Retrato en sesión fotográfica"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/foto-1.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-d-mid-right">
              <div
                className="portfolio-media-card-frame portfolio-media-card-frame-quote"
                style={{ backgroundImage: `url(${portfolioBackImg})` }}
              >
                <p className="portfolio-quote-text">Movimiento e imagen al servicio de tu marca.</p>
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-d-bot-right">
              <Link
                to={ROUTES.contact}
                className="portfolio-media-card-frame portfolio-media-card-frame-cta"
                style={{ backgroundImage: `url(${portfolioBackImg})` }}
              >
                <div className="portfolio-cta-content">
                  <span className="portfolio-cta-label">¿Empezamos algo juntos?</span>
                  <span className="portfolio-cta-action">Contactar</span>
                </div>
              </Link>
            </article>

          </div>
        </section>

        {/* ── Section 5 – Grid A (sin intro) ── */}
        <section className="portfolio-section" aria-label="Sección 5 del portafolio">
          <div className="portfolio-featured-grid">

            <article className="portfolio-media-card portfolio-media-card-top-wide">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-video">
                <PortfolioVideo
                  className="portfolio-media-video"
                  src="/portfolio/videos/reel-28-dic-midnight-mood.webm"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-left-tall">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Fotografía de producción para proyecto visual"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/foto-2.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-right-column">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-video">
                <PortfolioVideo
                  className="portfolio-media-video"
                  src="/portfolio/videos/reel-javier-prp.webm"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-center-top">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Story de contenido educativo para redes"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/story-esguince-1.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-center-tall">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Imagen de contenido visual para proyecto"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/3.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-left-bottom">
              <div
                className="portfolio-media-card-frame portfolio-media-card-frame-quote"
                style={{ backgroundImage: `url(${portfolioBackImg})` }}
              >
                <p className="portfolio-quote-text">El momento preciso, capturado sin concesiones.</p>
              </div>
            </article>

          </div>
        </section>

        {/* ── Section 6 – Grid B ── */}
        <section className="portfolio-section" aria-label="Sección 6 del portafolio">
          <div className="portfolio-featured-grid portfolio-featured-grid--b">

            <article className="portfolio-media-card portfolio-media-card-b-left-tall">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Fotografía documental de sesión con profesional"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/photo-doc-jaime.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-b-top-right">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-video">
                <PortfolioVideo
                  className="portfolio-media-video"
                  src="/portfolio/videos/reel-braquimetatarsia.webm"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-b-center-mid">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Imagen de producción visual"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/4.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-b-right-tall">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-branding">
                <img
                  alt="Banner de diseño para campaña de marca"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/banner-natalia.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-b-center-tall">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Story de contenido educativo en redes"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/story-esguince-2.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-b-right-bottom">
              <div
                className="portfolio-media-card-frame portfolio-media-card-frame-quote"
                style={{ backgroundImage: `url(${portfolioBackImg})` }}
              >
                <p className="portfolio-quote-text">Contenido que conecta, marca que trasciende.</p>
              </div>
            </article>

          </div>
        </section>

        {/* ── Section 7 – Grid C ── */}
        <section className="portfolio-section" aria-label="Sección 7 del portafolio">
          <div className="portfolio-featured-grid portfolio-featured-grid--c">

            <article className="portfolio-media-card portfolio-media-card-c-top-left">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Fotografía de sesión para profesional de la salud"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/photo-profesionalisima.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-c-top-right">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-video">
                <PortfolioVideo
                  className="portfolio-media-video"
                  src="/portfolio/videos/reel-detectar.webm"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-c-center-mid">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Imagen de producción visual para proyecto"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/5.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-c-right-tall">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Story educativa para redes sociales"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/story-esguince-3.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-c-bottom-left">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Fotografía documental para proyecto de comunicación"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/doc-jaime.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-c-center-tall">
              <Link
                to={ROUTES.contact}
                className="portfolio-media-card-frame portfolio-media-card-frame-cta"
                style={{ backgroundImage: `url(${portfolioBackImg})` }}
              >
                <div className="portfolio-cta-content">
                  <span className="portfolio-cta-label">Tu marca merece este nivel</span>
                  <span className="portfolio-cta-action">Hablemos</span>
                </div>
              </Link>
            </article>

          </div>
        </section>

        {/* ── Section 8 – Grid D ── */}
        <section className="portfolio-section" aria-label="Sección 8 del portafolio">
          <div className="portfolio-featured-grid portfolio-featured-grid--d portfolio-featured-grid--d-no-top">

            <article className="portfolio-media-card portfolio-media-card-d-top-left">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Imagen de producción para campaña visual"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/6.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-d-mid-left">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-branding">
                <img
                  alt="Feed de foto para perfil profesional en redes"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/feed-foto-profesionalisima.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-d-mid-center">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Story final de serie educativa para redes"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/story-esguince-4.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-d-mid-right">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-branding">
                <img
                  alt="Pieza visual de campaña para fecha especial"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/audoc-san-valentin.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-d-bot-right">
              <div
                className="portfolio-media-card-frame portfolio-media-card-frame-quote"
                style={{ backgroundImage: `url(${portfolioBackImg})` }}
              >
                <p className="portfolio-quote-text">Detrás de cada imagen hay una decisión creativa.</p>
              </div>
            </article>

          </div>
        </section>

        {/* ── Banner: audoc-presentation.webm (16:9) ── */}
        <div className="portfolio-video-banner">
          <PortfolioVideo
            className="portfolio-media-video"
            src="/portfolio/videos/audoc-presentation.webm"
          />
        </div>

        {/* ── Section 9 – Grid A (sin intro) ── */}
        <section className="portfolio-section" aria-label="Sección 9 del portafolio">
          <div className="portfolio-featured-grid">

            <article className="portfolio-media-card portfolio-media-card-top-wide">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Fotografía grupal para proyecto corporativo"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/foto-grupal-rvg.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-left-tall">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Imagen de producción visual"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/2-1.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-right-column">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-video">
                <PortfolioVideo
                  className="portfolio-media-video"
                  src="/portfolio/videos/reel-cuales-son-los-riesgos-de-la-cirugia-tiroides.webm"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-center-top">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Imagen de producción para contenido de marca"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/2-2.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-center-tall">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Imagen de producción visual para proyecto"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/2-3.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-left-bottom">
              <div
                className="portfolio-media-card-frame portfolio-media-card-frame-quote"
                style={{ backgroundImage: `url(${portfolioBackImg})` }}
              >
                <p className="portfolio-quote-text">Presencia visual que no se olvida.</p>
              </div>
            </article>

          </div>
        </section>

        {/* ── Section 10 – Grid B ── */}
        <section className="portfolio-section" aria-label="Sección 10 del portafolio">
          <div className="portfolio-featured-grid portfolio-featured-grid--b portfolio-featured-grid--b-no-top">

            <article className="portfolio-media-card portfolio-media-card-b-left-tall">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Imagen de producción para proyecto visual"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/2-4.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-b-center-mid">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Imagen de producción visual"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/2-5.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-b-right-tall">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Fotografía de producción para contenido de marca"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/3-1.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-b-center-tall">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Imagen de producción visual para proyecto"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/3-2.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-b-right-bottom">
              <div
                className="portfolio-media-card-frame portfolio-media-card-frame-quote"
                style={{ backgroundImage: `url(${portfolioBackImg})` }}
              >
                <p className="portfolio-quote-text">La identidad de tu marca merece el mejor tratamiento visual.</p>
              </div>
            </article>

          </div>
        </section>

        {/* ── Banner: ips-horizontal.webm (16:9) ── */}
        <div className="portfolio-video-banner">
          <PortfolioVideo
            className="portfolio-media-video"
            src="/portfolio/videos/ips-horizontal.webm"
          />
        </div>

        {/* ── Section 11 – Grid C (cierre) ── */}
        <section className="portfolio-section" aria-label="Sección 11 del portafolio">
          <div className="portfolio-featured-grid portfolio-featured-grid--c">

            <article className="portfolio-media-card portfolio-media-card-c-top-left">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Imagen de producción visual"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/3-3.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-c-top-right">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-video">
                <PortfolioVideo
                  className="portfolio-media-video"
                  src="/portfolio/videos/v1.webm"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-c-center-mid">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Imagen de producción para proyecto de marca"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/3-4.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-c-right-tall">
              <div className="portfolio-media-card-frame portfolio-media-card-frame-photo">
                <img
                  alt="Imagen de producción visual de cierre"
                  className="portfolio-media-cover"
                  decoding="async"
                  loading="lazy"
                  src="/portfolio/images/3-5.webp"
                />
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-c-bottom-left">
              <div
                className="portfolio-media-card-frame portfolio-media-card-frame-quote"
                style={{ backgroundImage: `url(${portfolioBackImg})` }}
              >
                <p className="portfolio-quote-text">Tu historia merece ser contada con toda su fuerza.</p>
              </div>
            </article>

            <article className="portfolio-media-card portfolio-media-card-c-center-tall">
              <Link
                to={ROUTES.contact}
                className="portfolio-media-card-frame portfolio-media-card-frame-cta"
                style={{ backgroundImage: `url(${portfolioBackImg})` }}
              >
                <div className="portfolio-cta-content">
                  <span className="portfolio-cta-label">Trabajemos juntos</span>
                  <span className="portfolio-cta-action">Contáctanos</span>
                </div>
              </Link>
            </article>

          </div>
        </section>

      </div>
    </main>
  );
}

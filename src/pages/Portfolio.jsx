import { useEffect } from "react";
import { Link } from "react-router-dom";
import portfolioBackImg from "@/assets/portafolioback.webp";
import { ROUTES } from "@/lib/routes.js";
import { PortfolioVideo } from "@/components/portfolio/PortfolioVideo.jsx";

const items = [
  {
    type: "intro",
    content: {
      eyebrow: "Portafolio",
      title: "Video, foto y dirección creativa",
      description:
        "Selección de trabajos para marcas y proyectos que buscan presencia visual con identidad.",
    },
  },
  {
    type: "video",
    src: "/portfolio/videos/hero-camaleonte.webm",
  },
  {
    type: "photo",
    alt: "Sesión editorial con retrato para campaña visual",
    src: "/portfolio/images/photo-editorial-1105.webp",
  },
  {
    type: "photo",
    alt: "Pieza visual para redes sociales y contenido de marca",
    src: "/portfolio/images/feed-diseno-odi.webp",
  },
  {
    type: "video",
    src: "/portfolio/videos/reel-joyas-sabrina-carpenter-espresso.webm",
  },
  {
    type: "video",
    src: "/portfolio/videos/v1.webm",
  },
  {
    type: "photo",
    alt: "Fotografía de producción",
    src: "/portfolio/images/fotografia-1.webp",
  },
  {
    type: "quote",
    text: "Crear no es solo producir. Es dejar una huella.",
  },
  {
    type: "photo",
    alt: "Imagen de producción audiovisual",
    src: "/portfolio/images/1.webp",
  },
  {
    type: "video",
    src: "/portfolio/videos/reel-tengo-tiroides-bad-dreams-teddy-swims.webm",
  },
  {
    type: "video",
    src: "/portfolio/videos/reel-motivacional-dinamico-flawed-mangoes-dramamine-v2.webm",
  },
  {
    type: "photo",
    alt: "Fotografía de estudio",
    src: "/portfolio/images/foto-7-final.webp",
  },
  {
    type: "photo",
    alt: "Retrato editorial para campaña visual",
    src: "/portfolio/images/photo-editorial-5618.webp",
  },
  {
    type: "quote",
    text: "Cada encuadre cuenta lo que las palabras no pueden.",
  },
  {
    type: "photo",
    alt: "Imagen de contenido de marca",
    src: "/portfolio/images/2.webp",
  },
  {
    type: "photo",
    alt: "Fotografía de sesión con cliente",
    src: "/portfolio/images/foto-4.webp",
  },
  {
    type: "photo",
    alt: "Imagen de producción para proyecto de marca",
    src: "/portfolio/images/foto-3.webp",
  },
  {
    type: "video",
    src: "/portfolio/videos/reel-tirads-v4-ruzzi-cuando.webm",
  },
  {
    type: "photo",
    alt: "Feed de diseño para redes sociales de cliente",
    src: "/portfolio/images/feed-jaimec.webp",
  },
  {
    type: "cta",
    label: "¿Empezamos algo juntos?",
    action: "Contactar",
    to: ROUTES.contact,
  },
  {
    type: "photo",
    alt: "Fotografía de producción visual",
    src: "/portfolio/images/img-7530.webp",
  },
  {
    type: "photo",
    alt: "Retrato en sesión fotográfica",
    src: "/portfolio/images/foto-1.webp",
  },
  {
    type: "video",
    src: "/portfolio/videos/reel-octubre-rosa-kodaline-all-i-want-piano.webm",
  },
  {
    type: "photo",
    alt: "Fotografía de producción para proyecto visual",
    src: "/portfolio/images/foto-2.webp",
  },
  {
    type: "quote",
    text: "El momento preciso, capturado sin concesiones.",
  },
  {
    type: "photo",
    alt: "Story de contenido educativo para redes",
    src: "/portfolio/images/story-esguince-1.webp",
  },
  {
    type: "video",
    src: "/portfolio/videos/reel-javier-prp.webm",
  },
  {
    type: "photo",
    alt: "Imagen de contenido visual para proyecto",
    src: "/portfolio/images/3.webp",
  },
  {
    type: "video",
    src: "/portfolio/videos/reel-28-dic-midnight-mood.webm",
  },
  {
    type: "photo",
    alt: "Fotografía documental de sesión con profesional",
    src: "/portfolio/images/photo-doc-jaime.webp",
  },
  {
    type: "quote",
    text: "Contenido que conecta, marca que trasciende.",
  },
  {
    type: "photo",
    alt: "Imagen de producción visual",
    src: "/portfolio/images/4.webp",
  },
  {
    type: "video",
    src: "/portfolio/videos/reel-braquimetatarsia.webm",
  },
  {
    type: "photo",
    alt: "Story de contenido educativo en redes",
    src: "/portfolio/images/story-esguince-2.webp",
  },
  {
    type: "photo",
    alt: "Banner de diseño para campaña de marca",
    src: "/portfolio/images/banner-natalia.webp",
  },
  {
    type: "photo",
    alt: "Fotografía de sesión para profesional de la salud",
    src: "/portfolio/images/photo-profesionalisima.webp",
  },
  {
    type: "cta",
    label: "Tu marca merece este nivel",
    action: "Hablemos",
    to: ROUTES.contact,
  },
  {
    type: "photo",
    alt: "Imagen de producción visual para proyecto",
    src: "/portfolio/images/5.webp",
  },
  {
    type: "photo",
    alt: "Story educativa para redes sociales",
    src: "/portfolio/images/story-esguince-3.webp",
  },
  {
    type: "photo",
    alt: "Fotografía documental para proyecto de comunicación",
    src: "/portfolio/images/doc-jaime.webp",
  },
  {
    type: "video",
    src: "/portfolio/videos/reel-detectar.webm",
  },
  {
    type: "photo",
    alt: "Imagen de producción para campaña visual",
    src: "/portfolio/images/6.webp",
  },
  {
    type: "quote",
    text: "Detrás de cada imagen hay una decisión creativa.",
  },
  {
    type: "photo",
    alt: "Feed de foto para perfil profesional en redes",
    src: "/portfolio/images/feed-foto-profesionalisima.webp",
  },
  {
    type: "photo",
    alt: "Story final de serie educativa para redes",
    src: "/portfolio/images/story-esguince-4.webp",
  },
  {
    type: "video",
    src: "/portfolio/videos/audoc-presentation.webm",
  },
  {
    type: "video",
    src: "/portfolio/videos/reel-cuales-son-los-riesgos-de-la-cirugia-tiroides.webm",
  },
  {
    type: "photo",
    alt: "Fotografía grupal para proyecto corporativo",
    src: "/portfolio/images/foto-grupal-rvg.webp",
  },
  {
    type: "photo",
    alt: "Imagen de producción visual",
    src: "/portfolio/images/2-1.webp",
  },
  {
    type: "photo",
    alt: "Imagen de producción para contenido de marca",
    src: "/portfolio/images/2-2.webp",
  },
  {
    type: "photo",
    alt: "Imagen de producción visual para proyecto",
    src: "/portfolio/images/2-3.webp",
  },
  {
    type: "cta",
    label: "Trabajemos juntos",
    action: "Contáctanos",
    to: ROUTES.contact,
  },
  {
    type: "photo",
    alt: "Imagen de producción para proyecto visual",
    src: "/portfolio/images/2-4.webp",
  },
  {
    type: "video",
    src: "/portfolio/videos/ips-horizontal.webm",
  },
  {
    type: "photo",
    alt: "Imagen de producción visual",
    src: "/portfolio/images/2-5.webp",
  },
  {
    type: "photo",
    alt: "Fotografía de producción para contenido de marca",
    src: "/portfolio/images/3-1.webp",
  },
  {
    type: "photo",
    alt: "Imagen de producción visual para proyecto",
    src: "/portfolio/images/3-2.webp",
  },
  {
    type: "quote",
    text: "La identidad de tu marca merece el mejor tratamiento visual.",
  },
  {
    type: "photo",
    alt: "Imagen de producción visual",
    src: "/portfolio/images/3-3.webp",
  },
  {
    type: "photo",
    alt: "Imagen de producción visual de cierre",
    src: "/portfolio/images/3-5.webp",
  },
  {
    type: "quote",
    text: "Tu historia merece ser contada con toda su fuerza.",
  },
  {
    type: "photo",
    alt: "Imagen de producción para proyecto de marca",
    src: "/portfolio/images/3-4.webp",
  },
];

/*
 * Reparto manual en 3 columnas balanceadas por altura estimada:
 * - Col 1: items 0-19   (~352)
 * - Col 2: items 20-40  (~354)
 * - Col 3: items 41-61  (~346)
 * Diferencia máxima: ~8px (~2%)
 */
const col1Items = items.slice(0, 19);
const col2Items = items.slice(20, 40);
const col3Items = [items[40], ...items.slice(41)];

/* Mobile: swap CTA "Trabajemos juntos" with the quote above it */
const mobileItems = [...items];
const idxCta = mobileItems.findIndex(
  (i) => i.type === "cta" && i.label === "Trabajemos juntos"
);
const idxQuote = mobileItems.findIndex(
  (i) =>
    i.type === "quote" &&
    i.text === "La identidad de tu marca merece el mejor tratamiento visual."
);
[mobileItems[idxCta], mobileItems[idxQuote]] = [
  mobileItems[idxQuote],
  mobileItems[idxCta],
];

function PortfolioCard({ item }) {
  if (item.type === "intro") {
    return (
      <article className="portfolio-masonry-card">
        <div
          className="portfolio-masonry-frame portfolio-masonry-frame--intro"
          style={{ backgroundImage: `url(${portfolioBackImg})` }}
        >
          <div className="portfolio-intro-copy">
            <div className="portfolio-intro-main">
              <span className="portfolio-intro-eyebrow">
                {item.content.eyebrow}
              </span>
              <h1 className="portfolio-intro-title">
                {item.content.title}
              </h1>
            </div>
            <div className="portfolio-intro-side">
              <p className="portfolio-intro-description">
                {item.content.description}
              </p>
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (item.type === "quote") {
    return (
      <article className="portfolio-masonry-card">
        <div
          className="portfolio-masonry-frame portfolio-masonry-frame--quote"
          style={{ backgroundImage: `url(${portfolioBackImg})` }}
        >
          <p className="portfolio-quote-text">{item.text}</p>
        </div>
      </article>
    );
  }

  if (item.type === "cta") {
    return (
      <article className="portfolio-masonry-card">
        <Link
          to={item.to}
          className="portfolio-masonry-frame portfolio-masonry-frame--cta"
          style={{ backgroundImage: `url(${portfolioBackImg})` }}
        >
          <div className="portfolio-cta-content">
            <span className="portfolio-cta-label">{item.label}</span>
            <span className="portfolio-cta-action">{item.action}</span>
          </div>
        </Link>
      </article>
    );
  }

  if (item.type === "video") {
    return (
      <article className="portfolio-masonry-card">
        <div className="portfolio-masonry-frame portfolio-masonry-frame--video">
          <PortfolioVideo
            className="portfolio-masonry-media"
            src={item.src}
          />
        </div>
      </article>
    );
  }

  return (
    <article className="portfolio-masonry-card">
      <div className="portfolio-masonry-frame portfolio-masonry-frame--photo">
        <img
          alt={item.alt}
          className="portfolio-masonry-media"
          decoding="async"
          loading="lazy"
          src={item.src}
        />
      </div>
    </article>
  );
}

export function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="portfolio-page">
      <div className="container">
        {/* Desktop: 3 balanced columns */}
        <div className="portfolio-columns portfolio-columns--desktop">
          <div className="portfolio-column">
            {col1Items.map((item, i) => (
              <PortfolioCard key={`c1-${i}`} item={item} />
            ))}
          </div>
          <div className="portfolio-column">
            {col2Items.map((item, i) => (
              <PortfolioCard key={`c2-${i}`} item={item} />
            ))}
          </div>
          <div className="portfolio-column">
            {col3Items.map((item, i) => (
              <PortfolioCard key={`c3-${i}`} item={item} />
            ))}
          </div>
        </div>

        {/* Mobile: 2 columns via native CSS masonry */}
        <div className="portfolio-columns portfolio-columns--mobile">
          {mobileItems.map((item, i) => (
            <PortfolioCard key={`m-${i}`} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
}

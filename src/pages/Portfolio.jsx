import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import portfolioBackImg from "@/assets/portafolioback.webp";
import { ROUTES } from "@/lib/routes.js";
import { PortfolioVideo } from "@/components/portfolio/PortfolioVideo.jsx";
import { Skeleton } from "@/components/ui/Skeleton.jsx";

const items = [
  {
    type: "intro",
    content: {
      eyebrow: "Nuestro enfoque",
      title: "Cada proyecto es único",
      description:
        "Trabajamos codo a codo con cada marca para crear contenido que no solo se ve bien, sino que genera resultados reales.",
    },
  },
  {
    type: "video",
    src: "https://media.camaleontestudio.com/videos/hero-camaleonte.webm",
  },
  {
    type: "photo",
    alt: "Sesión editorial con retrato para campaña visual",
    src: "https://media.camaleontestudio.com/images/photo-editorial-1105.webp",
  },
  {
    type: "photo",
    alt: "Pieza visual para redes sociales y contenido de marca",
    src: "https://media.camaleontestudio.com/images/feed-diseno-odi.webp",
  },
  {
    type: "video",
    src: "https://media.camaleontestudio.com/videos/reel-joyas-sabrina-carpenter-espresso.webm",
  },
  {
    type: "video",
    src: "https://media.camaleontestudio.com/videos/v1.webm",
  },
  {
    type: "photo",
    alt: "Fotografía de producción",
    src: "https://media.camaleontestudio.com/images/fotografia-1.webp",
  },
  {
    type: "quote",
    text: "Crear no es solo producir. Es dejar una huella.",
  },
  {
    type: "photo",
    alt: "Imagen de producción audiovisual",
    src: "https://media.camaleontestudio.com/images/1.webp",
  },
  {
    type: "video",
    src: "https://media.camaleontestudio.com/videos/reel-tengo-tiroides-bad-dreams-teddy-swims.webm",
  },
  {
    type: "video",
    src: "https://media.camaleontestudio.com/videos/reel-motivacional-dinamico-flawed-mangoes-dramamine-v2.webm",
  },
  {
    type: "photo",
    alt: "Fotografía de estudio",
    src: "https://media.camaleontestudio.com/images/foto-7-final.webp",
  },
  {
    type: "photo",
    alt: "Retrato editorial para campaña visual",
    src: "https://media.camaleontestudio.com/images/photo-editorial-5618.webp",
  },
  {
    type: "quote",
    text: "Cada encuadre cuenta lo que las palabras no pueden.",
  },
  {
    type: "photo",
    alt: "Imagen de contenido de marca",
    src: "https://media.camaleontestudio.com/images/2.webp",
  },
  {
    type: "photo",
    alt: "Fotografía de sesión con cliente",
    src: "https://media.camaleontestudio.com/images/foto-4.webp",
  },
  {
    type: "photo",
    alt: "Imagen de producción para proyecto de marca",
    src: "https://media.camaleontestudio.com/images/foto-3.webp",
  },
  {
    type: "video",
    src: "https://media.camaleontestudio.com/videos/reel-tirads-v4-ruzzi-cuando.webm",
  },
  {
    type: "photo",
    alt: "Feed de diseño para redes sociales de cliente",
    src: "https://media.camaleontestudio.com/images/feed-jaimec.webp",
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
    src: "https://media.camaleontestudio.com/images/img-7530.webp",
  },
  {
    type: "photo",
    alt: "Retrato en sesión fotográfica",
    src: "https://media.camaleontestudio.com/images/foto-1.webp",
  },
  {
    type: "video",
    src: "https://media.camaleontestudio.com/videos/reel-octubre-rosa-kodaline-all-i-want-piano.webm",
  },
  {
    type: "photo",
    alt: "Fotografía de producción para proyecto visual",
    src: "https://media.camaleontestudio.com/images/foto-2.webp",
  },
  {
    type: "quote",
    text: "El momento preciso, capturado sin concesiones.",
  },
  {
    type: "photo",
    alt: "Story de contenido educativo para redes",
    src: "https://media.camaleontestudio.com/images/story-esguince-1.webp",
  },
  {
    type: "video",
    src: "https://media.camaleontestudio.com/videos/reel-javier-prp.webm",
  },
  {
    type: "photo",
    alt: "Imagen de contenido visual para proyecto",
    src: "https://media.camaleontestudio.com/images/3.webp",
  },
  {
    type: "video",
    src: "https://media.camaleontestudio.com/videos/reel-28-dic-midnight-mood.webm",
  },
  {
    type: "photo",
    alt: "Fotografía documental de sesión con profesional",
    src: "https://media.camaleontestudio.com/images/photo-doc-jaime.webp",
  },
  {
    type: "quote",
    text: "Contenido que conecta, marca que trasciende.",
  },
  {
    type: "photo",
    alt: "Imagen de producción visual",
    src: "https://media.camaleontestudio.com/images/4.webp",
  },
  {
    type: "video",
    src: "https://media.camaleontestudio.com/videos/reel-braquimetatarsia.webm",
  },
  {
    type: "photo",
    alt: "Story de contenido educativo en redes",
    src: "https://media.camaleontestudio.com/images/story-esguince-2.webp",
  },
  {
    type: "photo",
    alt: "Banner de diseño para campaña de marca",
    src: "https://media.camaleontestudio.com/images/banner-natalia.webp",
  },
  {
    type: "photo",
    alt: "Fotografía de sesión para profesional de la salud",
    src: "https://media.camaleontestudio.com/images/photo-profesionalisima.webp",
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
    src: "https://media.camaleontestudio.com/images/5.webp",
  },
  {
    type: "photo",
    alt: "Story educativa para redes sociales",
    src: "https://media.camaleontestudio.com/images/story-esguince-3.webp",
  },
  {
    type: "photo",
    alt: "Fotografía documental para proyecto de comunicación",
    src: "https://media.camaleontestudio.com/images/doc-jaime.webp",
  },
  {
    type: "video",
    src: "https://media.camaleontestudio.com/videos/reel-detectar.webm",
  },
  {
    type: "photo",
    alt: "Imagen de producción para campaña visual",
    src: "https://media.camaleontestudio.com/images/6.webp",
  },
  {
    type: "quote",
    text: "Detrás de cada imagen hay una decisión creativa.",
  },
  {
    type: "photo",
    alt: "Feed de foto para perfil profesional en redes",
    src: "https://media.camaleontestudio.com/images/feed-foto-profesionalisima.webp",
  },
  {
    type: "photo",
    alt: "Story final de serie educativa para redes",
    src: "https://media.camaleontestudio.com/images/story-esguince-4.webp",
  },
  {
    type: "video",
    src: "https://media.camaleontestudio.com/videos/audoc-presentation.webm",
  },
  {
    type: "video",
    src: "https://media.camaleontestudio.com/videos/reel-cuales-son-los-riesgos-de-la-cirugia-tiroides.webm",
  },
  {
    type: "photo",
    alt: "Fotografía grupal para proyecto corporativo",
    src: "https://media.camaleontestudio.com/images/foto-grupal-rvg.webp",
  },
  {
    type: "photo",
    alt: "Imagen de producción visual",
    src: "https://media.camaleontestudio.com/images/2-1.webp",
  },
  {
    type: "photo",
    alt: "Imagen de producción para contenido de marca",
    src: "https://media.camaleontestudio.com/images/2-2.webp",
  },
  {
    type: "photo",
    alt: "Imagen de producción visual para proyecto",
    src: "https://media.camaleontestudio.com/images/2-3.webp",
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
    src: "https://media.camaleontestudio.com/images/2-4.webp",
  },
  {
    type: "video",
    src: "https://media.camaleontestudio.com/videos/ips-horizontal.webm",
  },
  {
    type: "photo",
    alt: "Imagen de producción visual",
    src: "https://media.camaleontestudio.com/images/2-5.webp",
  },
  {
    type: "photo",
    alt: "Fotografía de producción para contenido de marca",
    src: "https://media.camaleontestudio.com/images/3-1.webp",
  },
  {
    type: "photo",
    alt: "Imagen de producción visual para proyecto",
    src: "https://media.camaleontestudio.com/images/3-2.webp",
  },
  {
    type: "quote",
    text: "La identidad de tu marca merece el mejor tratamiento visual.",
  },
  {
    type: "photo",
    alt: "Imagen de producción visual",
    src: "https://media.camaleontestudio.com/images/3-3.webp",
  },
  {
    type: "photo",
    alt: "Imagen de producción visual de cierre",
    src: "https://media.camaleontestudio.com/images/3-5.webp",
  },
  {
    type: "quote",
    text: "Tu historia merece ser contada con toda su fuerza.",
  },
  {
    type: "photo",
    alt: "Imagen de producción para proyecto de marca",
    src: "https://media.camaleontestudio.com/images/3-4.webp",
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

function PortfolioImage({ src, alt, heroReady }) {
  const [loaded, setLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const imgDomRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && heroReady) {
      setShouldLoad(true);
    }
  }, [isVisible, heroReady]);

  useEffect(() => {
    if (!shouldLoad) return;

    const img = imgDomRef.current;
    if (!img) return;

    if (img.complete && img.naturalHeight > 0) {
      setLoaded(true);
      return;
    }

    const timeout = setTimeout(() => setLoaded(true), 5000);
    return () => clearTimeout(timeout);
  }, [shouldLoad]);

  return (
    <article className="portfolio-masonry-card" ref={cardRef}>
      <div className="portfolio-masonry-frame portfolio-masonry-frame--photo">
        {!loaded && <Skeleton className="portfolio-skeleton" />}
        {shouldLoad && (
          <img
            ref={imgDomRef}
            alt={alt}
            className="portfolio-masonry-media"
            decoding="async"
            onLoad={() => setLoaded(true)}
            src={src}
            style={{ opacity: loaded ? 1 : 0 }}
          />
        )}
      </div>
    </article>
  );
}

function PortfolioCard({ item, heroReady }) {
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
            heroReady={heroReady}
          />
        </div>
      </article>
    );
  }

  return <PortfolioImage src={item.src} alt={item.alt} heroReady={heroReady} />;
}

export function Portfolio() {
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setHeroReady(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="portfolio-page">
      {/* Hero */}
      <section className="portfolio-hero">
        <div className="container portfolio-hero-inner">
          <motion.span
            className="portfolio-hero-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Portafolio
          </motion.span>
          <motion.h1
            className="portfolio-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Video, foto y <span className="text-gradient">dirección creativa</span>
          </motion.h1>
          <motion.p
            className="portfolio-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Selección de trabajos para marcas y proyectos que buscan
            <br className="hide-mobile" /> presencia visual con identidad.
          </motion.p>
        </div>
      </section>

      <div className="container">
        {/* Desktop: 3 balanced columns */}
        <div className="portfolio-columns portfolio-columns--desktop">
          <div className="portfolio-column">
            {col1Items.map((item, i) => (
              <PortfolioCard heroReady={heroReady} key={`c1-${i}`} item={item} />
            ))}
          </div>
          <div className="portfolio-column">
            {col2Items.map((item, i) => (
              <PortfolioCard heroReady={heroReady} key={`c2-${i}`} item={item} />
            ))}
          </div>
          <div className="portfolio-column">
            {col3Items.map((item, i) => (
              <PortfolioCard heroReady={heroReady} key={`c3-${i}`} item={item} />
            ))}
          </div>
        </div>

        {/* Mobile: 2 columns via native CSS masonry */}
        <div className="portfolio-columns portfolio-columns--mobile">
          {mobileItems.map((item, i) => (
            <PortfolioCard heroReady={heroReady} key={`m-${i}`} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
}

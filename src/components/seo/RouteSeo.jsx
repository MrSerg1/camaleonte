import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import portadaImg from "@/assets/portada.webp";
import logoImg from "@/assets/Camaleonte.webp";
import { ROUTES } from "@/lib/routes";

const SITE_NAME = "Camaleonte Studio";
const SITE_LOCALE = "es_CO";
const SITE_LANGUAGE = "es-CO";
const INSTAGRAM_URL = "https://www.instagram.com/camaleonte.studio";
const DEFAULT_ROBOTS = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

const SERVICE_AREAS = [
  { "@type": "City", name: "Bucaramanga" },
  { "@type": "City", name: "Girón" },
  { "@type": "City", name: "Piedecuesta" },
  { "@type": "AdministrativeArea", name: "Área metropolitana de Bucaramanga" },
  { "@type": "AdministrativeArea", name: "Santander" },
];

const OFFER_CATALOG = {
  "@type": "OfferCatalog",
  name: "Servicios audiovisuales",
  itemListElement: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Contenido para redes sociales",
        areaServed: SERVICE_AREAS,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Sesiones fotográficas",
        areaServed: SERVICE_AREAS,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Cobertura audiovisual de eventos",
        areaServed: SERVICE_AREAS,
      },
    },
  ],
};

const ROUTE_METADATA = {
  [ROUTES.home]: {
    pageName: "Inicio",
    pageType: "WebPage",
    title: "Camaleonte Studio | Productora audiovisual en Bucaramanga y Santander",
    description:
      "Camaleonte Studio es una productora audiovisual en Bucaramanga que crea contenido para redes sociales, sesiones fotográficas y cobertura de eventos en Santander.",
  },
  [ROUTES.services]: {
    pageName: "Servicios",
    pageType: "WebPage",
    title: "Servicios audiovisuales en Bucaramanga y Santander | Camaleonte Studio",
    description:
      "Servicios audiovisuales para marcas en Bucaramanga, Girón y Piedecuesta: contenido para redes sociales, sesiones fotográficas y cobertura de eventos en Santander.",
  },
  [ROUTES.about]: {
    pageName: "Nosotros",
    pageType: "AboutPage",
    title: "Camaleonte Studio | Productora audiovisual en Bucaramanga",
    description:
      "Conoce a Camaleonte Studio, productora audiovisual para marcas, proyectos y personas en Bucaramanga, el área metropolitana y Santander.",
  },
  [ROUTES.contact]: {
    pageName: "Contacto",
    pageType: "ContactPage",
    title: "Contacto | Camaleonte Studio en Bucaramanga y Santander",
    description:
      "Contacta a Camaleonte Studio para contenido para redes, sesiones fotográficas y cobertura de eventos en Bucaramanga, Girón, Piedecuesta y Santander.",
  },
  [ROUTES.portfolio]: {
    pageName: "Portafolio",
    pageType: "CollectionPage",
    title: "Portafolio audiovisual | Camaleonte Studio",
    description:
      "Portafolio audiovisual de Camaleonte Studio con proyectos de contenido visual para marcas, campañas y eventos en Bucaramanga y Santander.",
  },
};

function normalizePath(pathname) {
  if (pathname !== "/" && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

function toAbsoluteUrl(origin, path) {
  return new URL(path, origin).toString();
}

function upsertMetaTag(attribute, key, content) {
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function upsertLinkTag(rel, href) {
  let tag = document.head.querySelector(`link[rel="${rel}"]`);

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }

  tag.setAttribute("href", href);
}

function upsertJsonLd(id, data) {
  let script = document.head.querySelector(`script#${id}`);

  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

function buildBreadcrumbSchema(origin, pathname, pageName) {
  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: toAbsoluteUrl(origin, ROUTES.home),
    },
  ];

  if (pathname !== ROUTES.home) {
    itemListElement.push({
      "@type": "ListItem",
      position: 2,
      name: pageName,
      item: toAbsoluteUrl(origin, pathname),
    });
  }

  return {
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

function buildStructuredData(origin, currentUrl, metadata, imageUrl, logoUrl, pathname) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${toAbsoluteUrl(origin, ROUTES.home)}#website`,
        url: toAbsoluteUrl(origin, ROUTES.home),
        name: SITE_NAME,
        inLanguage: SITE_LANGUAGE,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${toAbsoluteUrl(origin, ROUTES.home)}#business`,
        name: SITE_NAME,
        url: toAbsoluteUrl(origin, ROUTES.home),
        logo: logoUrl,
        image: imageUrl,
        description: metadata.description,
        sameAs: [INSTAGRAM_URL],
        areaServed: SERVICE_AREAS,
        hasOfferCatalog: OFFER_CATALOG,
      },
      {
        "@type": metadata.pageType,
        "@id": `${currentUrl}#webpage`,
        url: currentUrl,
        name: metadata.pageName,
        description: metadata.description,
        inLanguage: SITE_LANGUAGE,
        isPartOf: {
          "@id": `${toAbsoluteUrl(origin, ROUTES.home)}#website`,
        },
        about: {
          "@id": `${toAbsoluteUrl(origin, ROUTES.home)}#business`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: imageUrl,
        },
      },
      buildBreadcrumbSchema(origin, pathname, metadata.pageName),
    ],
  };
}

export function RouteSeo() {
  const location = useLocation();

  useEffect(() => {
    const origin = window.location.origin;
    const pathname = normalizePath(location.pathname);
    const metadata = ROUTE_METADATA[pathname] ?? ROUTE_METADATA[ROUTES.home];
    const currentUrl = toAbsoluteUrl(origin, pathname);
    const imageUrl = toAbsoluteUrl(origin, portadaImg);
    const logoUrl = toAbsoluteUrl(origin, logoImg);

    document.documentElement.lang = SITE_LANGUAGE;
    document.title = metadata.title;

    upsertMetaTag("name", "description", metadata.description);
    upsertMetaTag("name", "robots", DEFAULT_ROBOTS);
    upsertMetaTag("name", "theme-color", "#1a1a1a");

    upsertMetaTag("property", "og:site_name", SITE_NAME);
    upsertMetaTag("property", "og:locale", SITE_LOCALE);
    upsertMetaTag("property", "og:type", "website");
    upsertMetaTag("property", "og:title", metadata.title);
    upsertMetaTag("property", "og:description", metadata.description);
    upsertMetaTag("property", "og:url", currentUrl);
    upsertMetaTag("property", "og:image", imageUrl);
    upsertMetaTag("property", "og:image:alt", metadata.title);

    upsertMetaTag("name", "twitter:card", "summary_large_image");
    upsertMetaTag("name", "twitter:title", metadata.title);
    upsertMetaTag("name", "twitter:description", metadata.description);
    upsertMetaTag("name", "twitter:image", imageUrl);
    upsertMetaTag("name", "twitter:image:alt", metadata.title);

    upsertLinkTag("canonical", currentUrl);

    upsertJsonLd(
      "route-seo-jsonld",
      buildStructuredData(origin, currentUrl, metadata, imageUrl, logoUrl, pathname),
    );
  }, [location.pathname]);

  return null;
}

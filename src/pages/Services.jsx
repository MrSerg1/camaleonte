import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ROUTES } from "@/lib/routes";
import { Camera, Smartphone, CalendarDays, Film, Building2, ArrowRight, Check, MessageSquare, Clapperboard, PackageOpen } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Sesiones Fotográficas",
    description: "Fotografía comercial, editorial y de producto con iluminación controlada y dirección de arte que eleva la percepción de tu marca.",
    image: "https://media.camaleontestudio.com/images/photo-editorial-5618.webp",
  },
  {
    icon: Smartphone,
    title: "Contenido para Redes",
    description: "Diseñamos el contenido que detiene el scroll. Posts, carruseles y stories optimizados para el algoritmo de Instagram, TikTok y Facebook.",
    image: "https://media.camaleontestudio.com/images/feed-diseno-odi.webp",
  },
  {
    icon: CalendarDays,
    title: "Cobertura de Eventos",
    description: "Inmortalizamos la energía de tus eventos con fotografía documental, cobertura en vivo y aftermovies cinematográficos.",
    image: "https://media.camaleontestudio.com/images/foto-grupal-rvg.webp",
  },
  {
    icon: Film,
    title: "Reels & Shorts",
    description: "Transformamos ideas en videos de alto impacto. Edición dinámica, tendencias sonoras y narrativa visual que conecta con tu audiencia.",
    image: "https://media.camaleontestudio.com/images/story-esguince-1.webp",
  },
  {
    icon: Building2,
    title: "Video Corporativo",
    description: "Entrevistas cinematográficas, videos de cultura empresarial y testimoniales que transmiten confianza, profesionalismo y valores.",
    image: "https://media.camaleontestudio.com/images/3-2.webp",
  },
];

const plans = [
  {
    name: "Esencial",
    price: "$",
    description: "Presencia profesional para marcas en crecimiento",
    features: [
      "3 publicaciones (foto / diseño)",
      "5 historias interactivas",
      "4 reels dinámicos",
      "1 sesión fotográfica mensual",
    ],
    highlight: false,
  },
  {
    name: "Emprendedor",
    price: "$$",
    description: "Conecta con tu audiencia de forma constante",
    features: [
      "4 publicaciones de feed estético",
      "6 historias diarias",
      "6 reels de alcance orgánico",
      "2 sesiones fotográficas mensuales",
      "Diseño de historias destacadas",
    ],
    highlight: true,
  },
  {
    name: "Pro",
    price: "$$$",
    description: "Estrategia de alto impacto para dominar tu nicho",
    features: [
      "6 publicaciones premium",
      "7 stories interactivas",
      "7 reels con edición profesional",
      "3 sesiones fotográficas mensuales",
      "Video corporativo trimestral",
      "Análisis de métricas y reporte",
    ],
    highlight: false,
  },
];

const process = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Brief",
    description: "Nos sentamos contigo a entender tu marca, tus objetivos y tu audiencia. Cada proyecto comienza con una conversación real.",
  },
  {
    step: "02",
    icon: Clapperboard,
    title: "Producción",
    description: "Ejecutamos con precisión creativa. Fotografía, video, diseño y edición bajo un mismo estándar de calidad exigente.",
  },
  {
    step: "03",
    icon: PackageOpen,
    title: "Entrega",
    description: "Recibes contenido listo para publicar, optimizado para cada plataforma y acompañado de recomendaciones estratégicas.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  }),
};

export function Services() {
  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="container services-hero-inner">
          <motion.span
            className="services-hero-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Lo que hacemos
          </motion.span>
          <motion.h1
            className="services-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Producción creativa
            <br />
            <span className="text-gradient">con estrategia</span>
          </motion.h1>
          <motion.p
            className="services-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Fotografía, video y diseño que convierten tu marca
            <br className="hide-mobile" /> en una experiencia visual memorable.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-showcase">
        <div className="container">
          <div className="services-grid">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="service-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i * 0.1}
                variants={fadeUp}
              >
                <div
                  className="service-card-bg"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="service-card-overlay" />
                <div className="service-card-content">
                  <service.icon className="service-card-icon" size={28} />
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.description}</p>
                  <Link to={ROUTES.contact} className="service-card-link">
                    Solicitar <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="services-process">
        <div className="container">
          <motion.div
            className="process-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="process-eyebrow">Cómo trabajamos</span>
            <h2 className="process-title">
              De la idea <span className="text-gradient">al resultado</span>
            </h2>
          </motion.div>

          <div className="process-steps">
            {process.map((item, i) => (
              <motion.div
                key={item.step}
                className="process-step"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i * 0.15}
                variants={fadeUp}
              >
                <span className="process-number">{item.step}</span>
                <item.icon className="process-icon" size={24} />
                <h3 className="process-step-title">{item.title}</h3>
                <p className="process-step-desc">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="services-plans">
        <div className="container">
          <motion.div
            className="plans-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="plans-eyebrow">Planes mensuales</span>
            <h2 className="plans-title">
              Escoge tu <span className="text-gradient">ritmo</span>
            </h2>
            <p className="plans-subtitle">
              Todos los planes incluyen dirección creativa, edición profesional
              y entrega optimizada para redes.
            </p>
          </motion.div>

          <div className="plans-grid">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                className={`plan-card ${plan.highlight ? "plan-card--highlight" : ""}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i * 0.12}
                variants={fadeUp}
              >
                {plan.highlight && (
                  <span className="plan-badge">Más popular</span>
                )}
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">{plan.price}</div>
                <p className="plan-desc">{plan.description}</p>
                <ul className="plan-features">
                  {plan.features.map((feat) => (
                    <li key={feat}>
                      <Check size={16} className="plan-check" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  to={ROUTES.contact}
                  className={`plan-cta ${plan.highlight ? "plan-cta--primary" : ""}`}
                >
                  Personalizar plan
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="services-cta">
        <div className="container">
          <motion.div
            className="services-cta-inner"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="services-cta-title">
              ¿Ningún plan encaja?
              <br />
              <span className="text-gradient">Construimos a tu medida.</span>
            </h2>
            <p className="services-cta-desc">
              Cada marca es diferente. Hablemos de tu proyecto y diseñamos
              una propuesta que se ajuste exactamente a lo que necesitas.
            </p>
            <Link to={ROUTES.contact} className="cta-button">
              Hablemos de tu proyecto
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

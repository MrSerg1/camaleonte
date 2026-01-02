import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Clapperboard, Camera, MonitorPlay, MessageCircle } from "lucide-react";
import snarkdown from 'snarkdown';
import { Link } from "react-router-dom";

const originalServices = [
  {
    icon: Clapperboard,
    title: "Esencial",
    description: `Ideal para marcas en crecimiento que buscan una presencia profesional y tranquila:
<br>
- **3 publicaciones:** Fotos / Diseño. 
- **5 Historias:** Públicaciones interactivas e historias destacadas.
- **4 Reels:** Video corto dinámico y atractivo.`
  },
  {
    icon: Camera,
    title: "Emprendedor",
    description: `Ideal para marcas que buscan establecer su presencia digital y conectar con su audiencia de forma constante:

- **4 Publicaciones**: Diseño de fotos y posts para un FEED estético.
- **6 Historias**: Interacción diaria y gestión de historias destacadas.
- **6 Reels**: Videos dinámicos para aumentar tu alcance orgánico.`
  },
  {
    icon: MonitorPlay,
    title: "Pro",
    description: `Domina tu nicho con una estrategia con base en el contenido de alto impacto, diseñada para maximizar tu alcance y autoridad:

- **6 Publicaciones Premium**: Diseños estratégicos de alto nivel.
- **7 Stories Interactivas**: Dinámicas para aumentar la conexión y retención de tu audiencia.
- **7 Reels de Alto Alcance**: Edición profesional con tendencias y audios virales.
`
}
];

const fullViewportServices = [
  {
    id: 1,
    title: "Sesiones Fotográficas",
    description: "Capturamos la esencia de tu marca con fotografía comercial, edicion y de producto de alta calidad. expertos en iluminación y composición precisa para campañas que buscan alto impacto.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80",
    align: "left"
  },
  {
    id: 2,
    title: "Diseño y contenido para redes sociales",
    description: "Diseñamos estratégicamente el contenido que detiene el scroll. Creamos Reels dinámicos y posts visualmente potentes optimizados para el algoritmo de Facebook,Instagram, TikTok y Youtube.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
    align: "right"
  },
  {
    id: 3,
    title: "Sesiones en Eventos",
    description: "Inmortalizamos la energía de tus eventos. Cobertura en vivo, aftermovies y fotografía documental para conciertos, festivales y eventos corporativos.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
    align: "left"
  },
  {
    id: 4,
    title: "Creamos Reels",
    description: "Transformamos tus ideas o material crudo en Reels de alta calidad. Nos enfocamos en la edición dinámica, tendencias sonoras y narrativa visual para marcas que ya tienen una estrategia pero necesitan una ejecución impecable y profesional",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80",
    align: "right"
  },
  {
    id: 5,
    title: "Videos coorporativos",
    description: "Comunicación corporativa elevada. Entrevistas cinematográficas, videos de cultura empresarial y testimoniales que transmiten confianza y profesionalismo.",
    image: "https://images.unsplash.com/photo-1574717432707-c25419be1f1a?auto=format&fit=crop&q=80",
    align: "left"
  }
];

function ServiceSection({ service }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className={`service-full-section ${service.align === "right" ? "align-right" : ""}`}>
      <div className="service-full-content">
        <motion.div 
          className="service-text-block"
          initial={{ opacity: 0, x: service.align === "left" ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="service-full-title">{service.title}</h2>
          <p className="service-full-description">{service.description}</p>
          <motion.button 
            className="service-learn-more"
            whileHover={{ x: 10 }}
          >
            Comenzar <ArrowRight size={16} />
          </motion.button>
        </motion.div>

        <motion.div 
          className="service-image-block"
          style={{ y, opacity }}
        >
          <div className="image-wrapper">
            <img src={service.image} alt={service.title} />
            <div className="image-overlay"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <div className="services-page-container">
       <h1 className="page-title">Servicios</h1>
      {/* Nuevas Secciones Full Viewport */}
      <section className="services-full-wrapper">
        {fullViewportServices.map((service) => (
          <ServiceSection key={service.id} service={service} />
        ))}
      </section>

       {/* Sección Original de Tarjetas */}
      <section className="services-page">
        <section className="services-grid">
          {originalServices.map((service) => (
            <div className="service-card" key={service.title}>
              <article className="service-content">
                <service.icon className="service-icon" />
                <h3 className="service-title">{service.title}</h3>
                <div 
                  className="service-description"
                  dangerouslySetInnerHTML={{__html: snarkdown(service.description) }}
                />
              
                <div className="service-cta-wrapper">
                  <Link to="/contact" className="service-cta">
                    Personaliza tu plan
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </section>
      </section>

      
    </div>
  );
}

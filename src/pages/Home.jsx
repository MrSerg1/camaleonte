import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import portadaImg from "@/assets/portada.webp";
import { ROUTES } from "@/lib/routes";

const featuredProjects = [
  {
    title: "Identidad Visual para Clínica",
    client: "Centro médico especializado",
    requirements: "Necesitaban renovar su presencia digital con fotografía profesional que transmitiera confianza y cercanía con los pacientes.",
    solution: "Diseñamos una sesión editorial completa con iluminación controlada y dirección de arte que elevó la percepción de marca, logrando un tono visual coherente para todas sus redes sociales.",
    image: "https://media.camaleontestudio.com/images/photo-editorial-1105.webp",
  },
  {
    title: "Cobertura Corporativa Integral",
    client: "Evento empresarial sector salud",
    requirements: "Buscaban documentar un evento corporativo con fotografía de alto impacto que capturara la energía del equipo y la profesionalidad del encuentro.",
    solution: "Implementamos cobertura en vivo con múltiples ángulos y edición en tiempo real, entregando un set de imágenes listas para publicación que reflejaron la identidad corporativa con un acabado premium.",
    image: "https://media.camaleontestudio.com/images/foto-grupal-rvg.webp",
  },
];

export function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img className="hero-bg" src={portadaImg} alt="Portada" />
        
        <div className="container hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            CREAMOS <span className="text-gradient">IMPACTO</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Contamos la historia de tu marca, empresa o proyecto.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to={ROUTES.portfolio} className="cta-button">
              <Play size={20} className="fill-current" />
              Mas Trabajos
            </Link>
          </motion.div>
        </div>
        <div className="hero-gradient-bottom" />
      </section>
      
      {/* Featured Projects */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Proyectos destacados</h2>
          <div className="featured-grid">
            {featuredProjects.map((project, i) => (
              <Link
                key={i}
                to={ROUTES.portfolio}
                className="featured-card"
              >
                <motion.div
                  className="featured-card-inner"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="featured-card-media">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                    <div className="featured-card-overlay" />
                  </div>
                  <div className="featured-card-content">
                    <span className="featured-card-client">{project.client}</span>
                    <h3 className="featured-card-title">{project.title}</h3>
                    <div className="featured-card-body">
                      <p><strong>Requerimiento:</strong> {project.requirements}</p>
                      <p><strong>Solución:</strong> {project.solution}</p>
                    </div>
                    <span className="featured-card-link">
                      Más proyectos <ArrowUpRight size={14} />
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import portadaImg from "@/assets/portada.webp";
import { ROUTES } from "@/lib/routes";

export function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img className="hero-bg" src = {portadaImg} alt="Portada" />
        
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
      
      {/* Featured Section Placeholder */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Proyectos destacados</h2>
          <div className="featured-grid">
            {/* Placeholders */}
            <div className="featured-placeholder" />
            <div className="featured-placeholder" />
          </div>
        </div>
      </section>
    </div>
  );
}

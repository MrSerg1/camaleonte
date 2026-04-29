import { motion } from "framer-motion";
import aboutHeroBg from "@/assets/aboutus.webp"
import camaleonteUs from "@/assets/camaleonteUs.webp"

export function AboutUs() {
  return (
    <div className="about-us-page">
      <section className="about-hero">
        <img
        className="about-hero-bg-placeholder"
        src={camaleonteUs}
        alt="Camaleonte Team"
        />
        <div className="about-hero-overlay" />
        
        <div className="container about-hero-content">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nosotros
          </motion.h1>
          <motion.p 
            className="about-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Creatividad que transforma, estrategia que impulsa.
          </motion.p>
        </div>
      </section>

      <section className="about-section who-we-are">
        <div className="container about-grid">
          <div className="about-content">
            <h2 className="section-title">Quiénes Somos</h2>
            <p>
             En Camaleonte, somos un equipo compacto de tres especialistas en artes audiovisuales unidos por una misma pasión: contar historias que impactan. Al ser una estructura ágil, nos involucramos personalmente en cada fase del proceso, transformando ideas en experiencias digitales que conectan marcas con personas de manera real.
            </p>
            <p>
              Nuestra filosofía es la adaptabilidad. Como el camaleón, evolucionamos con cada proyecto para dominar las tendencias del algoritmo, manteniendo siempre una esencia de excelencia técnica y creatividad innegociable.
            </p>
          </div>
          <div className="about-image">
            {/* Placeholder for image */}
            <img 
            className="image-placeholder"
            src={aboutHeroBg}
            alt="About Us"
            />
          </div>
        </div>
      </section>

      <section className="about-section mission-vision">
        <div className="container">
          <div className="mv-grid">
            <motion.div 
              className="mv-card mission"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>Misión</h3>
              <p>
                Potenciar la voz de las marcas a través de una producción audiovisual de alta calidad y estrategias digitales innovadoras, ayudando a nuestros clientes a destacar en un mundo saturado de información.
              </p>
            </motion.div>

            <motion.div 
              className="mv-card vision"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>Visión</h3>
              <p>
                Ser la agencia de referencia en producción creativa y marketing digital, reconocida por nuestra capacidad de fusionar arte y estrategia para generar un impacto real y medible en cada proyecto.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

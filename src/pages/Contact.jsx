import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Correo",
    value: "camaleonte.studios@gmail.com",
    href: "mailto:camaleonte.studios@gmail.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+57 319 4263404",
    href: "https://wa.me/573194263404",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Bucaramanga, Colombia",
    href: null,
  },
];

const services = [
  "Sesión Fotográfica",
  "Diseño Redes",
  "Sesión Evento",
  "Reels",
  "Coorporativos",
];

const formFields = [
  { name: "nombre", label: "Nombre", type: "text", placeholder: "Tu nombre" },
  { name: "correo", label: "Correo", type: "email", placeholder: "ejemplo@gmail.com" },
  { name: "servicio", label: "Servicio", type: "select", options: services },
  { name: "idea", label: "Tu idea", type: "textarea", placeholder: "Describe aquí qué te gustaría hacer, tu proyecto, tu idea." },
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

export function Contact() {
  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container contact-hero-content">
          <motion.h1
            className="contact-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Inicia tu <span className="text-gradient">proyecto</span>
          </motion.h1>
          <motion.p
            className="contact-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Hablanos acerca de tu idea y permitenos ser la voz de tu proyecto.
            Te crearemos un plan ajustado a tus necesidades.
          </motion.p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="contact-body">
        <div className="container contact-body-grid">
          {/* Glass Form */}
          <motion.div
            className="contact-glass-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <form className="contact-form">
              <div className="form-grid">
                {formFields.map((field, i) => (
                  <motion.div
                    key={field.name}
                    className="form-group"
                    custom={i}
                    variants={itemVariants}
                  >
                    <label className="form-label">{field.label}</label>
                    {field.type === "select" ? (
                      <select className="form-input">
                        <option value="" disabled selected>Selecciona un servicio</option>
                        {field.options.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    ) : field.type === "textarea" ? (
                      <textarea
                        rows={5}
                        className="form-input form-textarea"
                        placeholder={field.placeholder}
                      />
                    ) : (
                      <input
                        type={field.type}
                        className="form-input"
                        placeholder={field.placeholder}
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.button
                type="submit"
                className="contact-submit-btn"
                custom={formFields.length}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={16} />
                Enviar
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="contact-info-panel"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h3 className="contact-info-title">Métodos de Contacto</h3>
            <p className="contact-info-desc">
              También puedes escribirnos directamente a través de estos medios:
            </p>

            <div className="contact-methods-list">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={method.label}
                  href={method.href || undefined}
                  className={`contact-method-row ${method.href ? "" : "no-link"}`}
                  target={method.href?.startsWith("http") ? "_blank" : undefined}
                  rel={method.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  custom={i}
                  variants={itemVariants}
                >
                  <div className="contact-method-icon">
                    <method.icon size={20} />
                  </div>
                  <div className="contact-method-text">
                    <span className="contact-method-label">{method.label}</span>
                    <span className="contact-method-value">{method.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

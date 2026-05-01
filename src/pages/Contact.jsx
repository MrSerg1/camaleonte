import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { addToast } from "@/lib/toastStore";

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

const initialForm = {
  nombre: "",
  correo: "",
  servicio: "",
  idea: "",
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

export function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!formData.nombre.trim()) return "El nombre es obligatorio.";
    if (!formData.correo.trim()) return "El correo es obligatorio.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.correo.trim()))
      return "Por favor ingresa un correo válido.";
    if (!formData.servicio) return "Selecciona un servicio.";
    if (!formData.idea.trim()) return "Cuéntanos tu idea.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      addToast({ type: "error", message: error });
      return;
    }

    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(
        serviceId,
        templateId,
        {
          nombre: formData.nombre.trim(),
          correo: formData.correo.trim(),
          servicio: formData.servicio,
          idea: formData.idea.trim(),
        },
        publicKey
      );

      addToast({
        type: "success",
        message: "¡Mensaje enviado con éxito! Te contactaremos pronto.",
      });
      setFormData(initialForm);
    } catch (err) {
      console.error("EmailJS error:", err);
      addToast({
        type: "error",
        message:
          "Hubo un problema al enviar el mensaje. Inténtalo de nuevo más tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formFields = [
    {
      name: "nombre",
      label: "Nombre",
      type: "text",
      placeholder: "Tu nombre",
      value: formData.nombre,
    },
    {
      name: "correo",
      label: "Correo",
      type: "email",
      placeholder: "ejemplo@gmail.com",
      value: formData.correo,
    },
    {
      name: "servicio",
      label: "Servicio",
      type: "select",
      options: services,
      value: formData.servicio,
    },
    {
      name: "idea",
      label: "Tu idea",
      type: "textarea",
      placeholder:
        "Describe aquí qué te gustaría hacer, tu proyecto, tu idea.",
      value: formData.idea,
    },
  ];

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
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                {formFields.map((field, i) => (
                  <motion.div
                    key={field.name}
                    className="form-group"
                    custom={i}
                    variants={itemVariants}
                  >
                    <label className="form-label" htmlFor={field.name}>
                      {field.label}
                    </label>
                    {field.type === "select" ? (
                      <select
                        id={field.name}
                        name={field.name}
                        className="form-input"
                        value={field.value}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      >
                        <option value="" disabled>
                          Selecciona un servicio
                        </option>
                        {field.options.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        rows={1}
                        className="form-input form-textarea"
                        placeholder={field.placeholder}
                        value={field.value}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        onInput={(e) => {
                          e.target.style.height = "auto";
                          e.target.style.height = `${e.target.scrollHeight}px`;
                        }}
                      />
                    ) : (
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        className="form-input"
                        placeholder={field.placeholder}
                        value={field.value}
                        onChange={handleChange}
                        disabled={isSubmitting}
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
                whileHover={isSubmitting ? {} : { scale: 1.02 }}
                whileTap={isSubmitting ? {} : { scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="spin-icon" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Enviar
                  </>
                )}
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
                  rel={
                    method.href?.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
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

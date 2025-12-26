import { Clapperboard, Camera, MonitorPlay } from "lucide-react";

const services = [
  {
    icon: Clapperboard,
    title: "Pre-Production",
    description: "Scriptwriting, storyboarding, and technical planning to ensure a smooth shoot."
  },
  {
    icon: Camera,
    title: "Production",
    description: "High-end filming with cinema cameras, lighting, and drone operation."
  },
  {
    icon: MonitorPlay,
    title: "Post-Production",
    description: "Professional editing, color grading, VFX, and sound design."
  }
];

export function Services() {
  return (
    <div className="container page-container">
      <h1 className="page-title">Servicios</h1>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.title} className="service-card">
            <service.icon className="service-icon" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { ROUTES } from "@/lib/routes";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/">
            <h2>CAMALEONTE</h2>
          </Link>
          <p>
            Llevamos tu idea al siguiente nivel, producimos experiencias audio visuales dedicadas a las redes sociales, promovemos tu marca, cambiamos las reglas del juego. 
          </p>
        </div>
        
        <div className="footer-section">
          <h4>Navegación</h4>
          <ul className="footer-links">
            <li><Link to={ROUTES.portfolio} className="footer-link">Portafolio</Link></li>
            <li><Link to={ROUTES.services} className="footer-link">Servicios</Link></li>
            <li><Link to={ROUTES.about} className="footer-link">Nosotros</Link></li>
            <li><Link to={ROUTES.contact} className="footer-link">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Siguenos</h4>
          <ul className="footer-links">
            <li><a href="https://www.instagram.com/camaleonte.studio" className="footer-link" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-copyright">
        © {new Date().getFullYear()} Camaleonte Productions. All rights reserved.
      </div>
    </footer>
  );
}

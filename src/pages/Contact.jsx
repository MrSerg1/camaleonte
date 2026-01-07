import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <div className="container">
      <h1 className="contact-title">Inicia tu proyecto</h1>
      <p className="contact-description">Hablanos acerca de tu idea y permitenos ser la voz de tu proyecto, te crearemos un plan ajustado a tus necesidades.</p>

      <div className="contact-page-grid">
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-input" />
              </div>
              <div className="form-group">
                <label 
                className="form-label">Correo</label>
                <input 
                type="email" 
                className="form-input"
                placeholder="ejemplo@gmail.com"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Servicio</label>
              <select className="form-select">
                <option>Sesión Fotográfica</option>
                <option>Diseño Redes</option>
                <option>Sesión Evento</option>
                <option>Reels</option>
                <option>Coorporativos</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Tu idea</label>
              <textarea 
              rows={5} 
              className="form-textarea"
              placeholder="Describe aquí que te gustaría hacer, tu proyecto, tu idea."
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              Enviar
            </button>
          </form>
        </div>

        <div className="contact-info-card">
          <h3>Métodos de Contacto</h3>
          <p>También puedes escribirnos directamente a través de estos medios:</p>
          
          <div className="contact-method">
            <Mail className="contact-icon" />
            <div>
              <h4>Correo</h4>
              <a href="mailto:info@camaleonte.com">info@camaleonte.com</a>
            </div>
          </div>

          <div className="contact-method">
            <Phone className="contact-icon" />
            <div>
              <h4>WhatsApp</h4>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">+1 (234) 567-890</a>
            </div>
          </div>

          <div className="contact-method">
            <MapPin className="contact-icon" />
            <div>
              <h4>Ubicación</h4>
              <p>Bucaramanga, Colombia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

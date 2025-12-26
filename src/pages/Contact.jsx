export function Contact() {
  return (
    <div className="container page-container">
      <div className="contact-wrapper">
        <h1 className="contact-title">Start a Project</h1>
        <p className="contact-description">Tell us about your vision. We'll help you bring it to life.</p>
        
        <form className="contact-form">
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" />
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">Project Type</label>
            <select className="form-select">
              <option>Commercial</option>
              <option>Music Video</option>
              <option>Documentary</option>
              <option>Corporate</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea rows={5} className="form-textarea"></textarea>
          </div>
          
          <button type="submit" className="submit-button">
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
}

export function Ourgear() {
  return (
    <div className="container page-container">
      <h1 className="page-title">Our Gear</h1>
      <p className="page-description">We use industry-standard equipment to deliver the highest quality visuals.</p>
      
      <div className="equipment-grid">
        {/* Placeholder Categories */}
        {['Cameras', 'Lenses', 'Lighting', 'Audio'].map((cat) => (
          <div key={cat} className="equipment-card">
            <h3 className="equipment-title">{cat}</h3>
            <ul className="equipment-list">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

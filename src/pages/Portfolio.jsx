import  Slider  from "@/components/Slider";


export function Portfolio() {
  return (
    <main className="container page-container">
      <h1 className="page-title">Portafolio</h1>
      <Slider />
      <section className="portfolio-grid">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="portfolio-item group">
            <div className="portfolio-overlay">
              <span className="project-title">Project {i}</span>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

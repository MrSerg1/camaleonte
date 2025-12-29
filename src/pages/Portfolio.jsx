import  Slider  from "@/components/Slider";


export function Portfolio() {
  return (
    <>
      <Slider />
      <div className="container page-container">
        <section className="portfolio-grid">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="portfolio-item group">
              <div className="portfolio-overlay">
                <span className="project-title">Project {i}</span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

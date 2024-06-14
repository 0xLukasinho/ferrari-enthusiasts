import React from 'react';
import '../styles.css';

function HomePage() {
  return (
    <main className="container p-4">
      <section>
        <h1 className="display-2 p-4">Welcome, Ferrari aficionados!</h1>
        <div className="row">
          <p className="lead fw-bold">A Ferrari is an object of art. It is the perfect synthesis between the technological and the artistic, where passion meets performance. This website is a sanctuary for those who share an undying love for the Prancing Horse.</p>
        </div>
      </section>

      <section>
        <div className="row align-items-center justify-content-center">
          <div className="col-9 col-md-4 gallery-card-container">
            <div className="card border-0 shadow my-3">
              <img src={`${process.env.PUBLIC_URL}/media/ferrari-enzo.jpg`} alt="Ferrari Enzo" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Gallery</h5>
                <p>See the different Ferraris in all their glory and learn more about the different models.</p>
                <div className="text-center">
                  <a href="/gallery" className="btn btn-outline-danger btn m-2">Gallery</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9 col-md-4 gallery-card-container">
            <div className="card border-0 shadow my-3">
              <img src={`${process.env.PUBLIC_URL}/media/Ferrari-F50.webp`} alt="Ferrari F50" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Super Trump</h5>
                <p>Do you know the strengths of the different Ferrari models? Put your knowledge to the test by playing Ferrari Super Trump.</p>
                <div className="text-center">
                  <a href="/super_trump" className="btn btn-outline-danger btn m-2">Super Trump</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9 col-md-4 gallery-card-container">
            <div className="card border-0 shadow my-3 ">
              <img src={`${process.env.PUBLIC_URL}/media/laferrari.jpg`} alt="LaFerrari" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Comparison</h5>
                <p>Do you want to know how the different models stack up against each other? Compare them here!</p>
                <div className="text-center">
                  <a href="/compare" className="btn btn-outline-danger btn m-2">Compare</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" id="History">
        <h2 className="display-3">The history of Ferrari</h2>
        <div className="row align-items-center">
          <div className="col-12 col-lg-8">
            <p>The Ferrari story began in 1939 when Enzo Ferrari, a former racing driver, established the Scuderia Ferrari racing team. However, it wasn't until 1947 that the first Ferrari-badged car, the 125 S, rolled off the production line. This modest yet powerful machine marked the birth of a brand that would forever change the automotive landscape.</p>
            <p>In the 1950s, Ferrari solidified its reputation with iconic models like the 250 GT and the legendary 250 GTO – cars that not only dominated racing circuits but also captured the hearts of enthusiasts worldwide. The 1960s saw the introduction of the stunning 275 GTB and the game-changing mid-engined Dino, paving the way for future innovations.</p>
            <p>The 1970s and 80s were defined by Ferrari's bold foray into modern design, with the release of the striking Berlinetta Boxer and the iconic Testarossa, which became a cultural phenomenon and a poster car for an entire generation. The 1990s brought forth the F355 and the F50, showcasing Ferrari's unwavering commitment to pushing the boundaries of performance and technology.</p>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <img src={`${process.env.PUBLIC_URL}/media/Enzo.jpg`} alt="Enzo Ferrari" style={{ maxHeight: '340px' }} />
          </div>
          <p>As the new millennium dawned, Ferrari continued to raise the bar with groundbreaking models like the Enzo, the LaFerrari, and the SF90 Stradale – showcasing the brand's mastery of hybrid technology and its relentless pursuit of excellence. Today, Ferrari stands as a symbol of automotive perfection, with each new model embodying the brand's rich racing heritage, uncompromising craftsmanship, and an unwavering passion for creating dreams on wheels.</p>
          <p>From the humble beginnings of the 125 S to the cutting-edge marvels of the modern era, Ferrari's journey has been an epic tale of innovation, performance, and an unyielding spirit that has captivated enthusiasts across generations and continents.</p>
        </div>
      </section>
    </main>
  );
}

export default HomePage;

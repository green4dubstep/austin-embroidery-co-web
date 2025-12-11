import Footer from "../components/Footer";

const OurWork = () => {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Our Work | Austin Embroidery Co</title>
      </head>
      <section class="page-hero">
        <div class="page-hero__inner">
          <p class="page-hero__eyebrow">Portfolio</p>
          <h1 class="page-hero__title">Our Work</h1>
          <p class="page-hero__subtitle">
            A look at projects we’ve produced for local businesses, bands,
            schools, and online brands across Austin and beyond.
          </p>
        </div>
      </section>

      <section class="page-section">
        <div class="page-section__inner">
          <h2 class="page-section__title">Featured Projects</h2>
          <p class="page-section__text">
            Highlight a few favorite jobs: what the client needed, how you
            approached the design and production, and the final result.
          </p>

          <div class="media-grid">
            <div class="media-card media-card--placeholder">
              Case Study 1 – logo + photo + short write-up
            </div>
            <div class="media-card media-card--placeholder">
              Case Study 2 – embroidery set or print series
            </div>
            <div class="media-card media-card--placeholder">
              Embedded video testimonial or recap
            </div>
          </div>
        </div>
      </section>

      <section class="page-section page-section--alt">
        <div class="page-section__inner">
          <h2 class="page-section__title">Brands We’ve Helped</h2>
          <p class="page-section__text">
            Later you can drop in a simple logo strip, carousel, or grid
            showcasing client logos to build trust and social proof.
          </p>
        </div>
      </section>

      <section class="page-section">
        <div class="page-section__inner">
          <h2 class="page-section__title">Ready to Start a Project?</h2>
          <p class="page-section__text">
            Share a few details about your timeline, garment type, and artwork,
            and we’ll follow up with pricing and options.
          </p>
          <button class="contact__btn" type="button" id="openQuoteBtn">
            Request Free Quote
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OurWork;

export default function Body() {
  return (
    <main>
      <section>
        <p className="welcome-description">
          a scent that feels like summer on your skin—fresh, effortless,
          unforgettable. Our fragrance blends sun-lit notes and refined
          botanicals to linger beautifully from day to night. Clean, modern, and
          endlessly wearable, it’s made to elevate every warm moment while
          feeling light, confident, and unmistakably you.
        </p>
      </section>

      <section className="new-releases">
        <h2>See Our New Releases</h2>
        <div className="flex">
          <div className="release-card"></div>
          <div className="release-card"></div>
          <div className="release-card"></div>
          <div className="release-card"></div>
        </div>
      </section>

      <section className="flex brand-showcase">
        <div className="brand-showcase-image"></div>
        <div className="brand-showcase-text">
          <h2>
            What you wear on your skin matters as much as how it makes you feel
          </h2>
          <p>
            Coastline delivers a refined summer fragrance crafted without harsh
            chemicals or unnecessary additives. Clean, modern, and thoughtfully
            formulated, it’s designed to smell incredible while respecting your
            skin and the world around you—so every wear feels as good as it
            smells.
          </p>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Have to Say</h2>
        <div className="flex testimonials-card-wrapper">
          <div className="testimonial-card"></div>
          <div className="testimonial-card"></div>
          <div className="testimonial-card"></div>
          <div className="testimonial-card"></div>
        </div>
      </section>

      <section className="flamengo"></section>
    </main>
  );
}

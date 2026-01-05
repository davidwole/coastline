import Stars from "../assets/Stars.svg";
import Verified from "../assets/Verified.svg";

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
        <div className="flex mobile-flex">
          <div className="release-card"></div>
          <div className="release-card"></div>
          <div className="release-card"></div>
          <div className="release-card"></div>
        </div>
      </section>

      <section className="flex brand-showcase mobile-flex ">
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
        <div className="flex testimonials-card-wrapper mobile-flex ">
          <div className="testimonial-card">
            <img src={Stars} className="review-stars" />
            <h3 className="testimonial-title">“Summer in a bottle”</h3>
            <p className="testimonial-desc">
              This scent instantly takes me to warm nights and ocean air. Light,
              fresh, and lasts all day without ever feeling overpowering.
            </p>

            <div className="testimonial-customer flex">
              <img src={Verified} alt="checkmark" height={30} />
              <p>Alex M.</p>
            </div>
          </div>
          <div className="testimonial-card">
            <img src={Stars} className="review-stars" />
            <h3 className="testimonial-title">“Clean, modern, addictive”</h3>
            <p className="testimonial-desc">
              I get compliments every time I wear this. It smells expensive, but
              still effortless and wearable for everyday.
            </p>

            <div className="testimonial-customer flex">
              <img src={Verified} alt="checkmark" height={30} />
              <p>Jordan R.</p>
            </div>
          </div>
          <div className="testimonial-card">
            <img src={Stars} className="review-stars" />
            <h3 className="testimonial-title">
              “Perfect warm-weather fragrance”
            </h3>
            <p className="testimonial-desc">
              Fresh at first spray, then settles into something soft and
              beautiful. It feels made for summer skin.
            </p>

            <div className="testimonial-customer flex">
              <img src={Verified} alt="checkmark" height={30} />
              <p>Samantha L.</p>
            </div>
          </div>
          <div className="testimonial-card">
            <img src={Stars} className="review-stars" />
            <h3 className="testimonial-title">“Subtle but unforgettable”</h3>
            <p className="testimonial-desc">
              Not too sweet, not too heavy—just balanced. It becomes better as
              the day goes on.
            </p>

            <div className="testimonial-customer flex">
              <img src={Verified} alt="checkmark" height={30} />
              <p>Daniel K.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flamengo"></section>
    </main>
  );
}

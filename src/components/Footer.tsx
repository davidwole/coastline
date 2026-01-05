import FooterLogo from "../assets/FooterLogo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className=" flex footer-wrapper mobile-flex">
        <div className="flex footer-links mobile-flex">
          <ul>
            <li className="footer-title">Shop</li>
            <li>All Fragrances</li>
            <li>Gift Sets</li>
            <li>Discovery Set</li>
          </ul>
          <ul>
            <li className="footer-title">Support</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping & Returns</li>
          </ul>
          <ul>
            <li className="footer-title">Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        <div className="flex newsletter">
          <label>Sign up and save 15%</label>
          <input type="email" placeholder="Email" />
        </div>
      </div>

      <p style={{ textAlign: "center" }}>
        © Coastline Nº 2024 - All rights reserved
      </p>

      <div className="footer-logo hide-for-mobile">
        <img src={FooterLogo} alt="logo" />
      </div>
    </footer>
  );
}

import FooterLogo from "../assets/FooterLogo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className=" flex footer-wrapper">
        <div className="flex footer-links">
          <ul>
            <li className="footer-title">Information</li>
            <li>About</li>
            <li>Recipes</li>
            <li>Labs</li>
          </ul>
          <ul>
            <li className="footer-title">Information</li>
            <li>About</li>
            <li>Recipes</li>
            <li>Labs</li>
          </ul>
          <ul>
            <li className="footer-title">Information</li>
            <li>About</li>
            <li>Recipes</li>
            <li>Labs</li>
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

      <div className="footer-logo">
        <img src={FooterLogo} alt="logo" />
      </div>
    </footer>
  );
}

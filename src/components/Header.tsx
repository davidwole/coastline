import Logo from "../assets/Logo.png";
export default function Header() {
  return (
    <header className="flex header">
      <ul>
        <li>Releases</li>
        <li>Categories</li>
      </ul>
      <img src={Logo} alt="logo" />
      <ul>
        <li>Account</li>
        <li>Bag</li>
      </ul>
    </header>
  );
}

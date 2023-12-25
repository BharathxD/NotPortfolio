import { NAVBAR_LINKS } from "~/lib/constants";
import ThemeSwitcher from "../ui/theme-switcher";
import NavLink from "./nav-link";

const Navbar = () => (
  <nav className="flex flex-row items-center justify-between" aria-label="Main navigation">
    <ul className="flex flex-row" role="list">
      {NAVBAR_LINKS.map((item) => (
        <NavLink key={item.name} item={item} />
      ))}
    </ul>
    <ThemeSwitcher />
  </nav>
);

export default Navbar;

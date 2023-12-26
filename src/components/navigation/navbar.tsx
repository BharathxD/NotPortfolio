import { NAVBAR_LINKS } from "~/lib/constants";

import Logo from "../ui/logo";
import ThemeSwitcher from "../ui/theme-switcher";
import NavItem from "./nav-item";

const Navbar = () => (
  <nav
    className="flex w-full flex-row items-center justify-between p-5 md:flex md:p-10"
    aria-label="Main navigation">
    <div className="inline-flex items-center gap-4 md:gap-6">
      <Logo />
      <ul className="flex flex-row" role="list">
        {NAVBAR_LINKS.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </ul>
    </div>
    <ThemeSwitcher />
  </nav>
);

export default Navbar;

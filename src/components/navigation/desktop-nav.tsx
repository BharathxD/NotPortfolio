import { NAVBAR_LINKS } from "~/lib/constants";
import NavItemDesktop from "./nav-item-desktop";

const DesktopNav = () => (
  <ul className="hidden flex-row md:flex" role="list">
    {NAVBAR_LINKS.map((item) => (
      <NavItemDesktop key={item.name} item={item} />
    ))}
  </ul>
);

export default DesktopNav;

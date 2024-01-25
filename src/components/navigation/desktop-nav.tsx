import { NAVBAR_LINKS } from "~/lib/constants";
import DesktopNavItem from "./desktop-nav-item";

const DesktopNav = () => (
  <ul className="hidden flex-row md:flex" role="list">
    {NAVBAR_LINKS.map((item) => (
      <DesktopNavItem key={item.name} item={item} />
    ))}
  </ul>
);

export default DesktopNav;

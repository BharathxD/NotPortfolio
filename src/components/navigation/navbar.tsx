import { NAVBAR_LINKS } from "~/lib/constants";
import NavLink from "./nav-link";

const Navbar = () => {
  return (
    <nav>
      <ul className="mx-auto flex w-fit flex-row items-center justify-center gap-4 p-2">
        {NAVBAR_LINKS.map((navLink) => (
          <NavLink key={navLink.name} navLink={navLink} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

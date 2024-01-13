import Logo from "../ui/logo";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

const Navbar = () => (
  <nav
    className="flex w-full flex-row items-center justify-between p-5 md:flex md:p-10"
    aria-label="Main navigation">
    <Logo />
    <MobileNav />
    <DesktopNav />
  </nav>
);

export default Navbar;

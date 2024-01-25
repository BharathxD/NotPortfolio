import Logo from "../ui/logo";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

const Header = () => (
  <header className="relative z-50 m-auto h-[10dvh] max-w-4xl">
    <nav
      className="flex w-full flex-row items-center justify-between p-5 md:flex md:p-10"
      aria-label="Main navigation">
      <Logo />
      <MobileNav />
      <DesktopNav />
    </nav>
  </header>
);

export default Header;

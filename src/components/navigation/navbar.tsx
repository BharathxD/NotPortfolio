import getIsSSRMobile from "~/actions/getIsSSRMobile";
import dynamic from "next/dynamic";
import Logo from "../ui/logo";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

const MobileNavSSR = dynamic(() => import("./mobile-nav"), { ssr: false });

const Navbar = () => {
  const isMobile = getIsSSRMobile();
  return (
    <nav
      className="flex w-full flex-row items-center justify-between p-5 md:flex md:p-10"
      aria-label="Main navigation">
      <Logo />
      {isMobile ? <MobileNav /> : <MobileNavSSR />}
      <DesktopNav />
    </nav>
  );
};

export default Navbar;

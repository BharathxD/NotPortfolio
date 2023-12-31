import { NAVBAR_LINKS } from "~/lib/constants";
import { MenuIcon, X } from "lucide-react";
import { memo } from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import NavItemMobile from "./nav-item-mobile";

const MobileNav = () => (
  <Sheet>
    <SheetTrigger
      className="block rounded-full border border-neutral-700 bg-neutral-600/40 p-2 text-neutral-300 shadow-item md:hidden"
      aria-label="Open Menu">
      <MenuIcon size={25} />
    </SheetTrigger>
    <SheetContent
      className="flex max-h-dvh flex-1 flex-col justify-start gap-0 bg-neutral-900 p-0"
      role="navigation"
      aria-label="Mobile Navigation">
      <SheetClose
        className="flex h-min w-full items-center justify-end py-6 pr-5 text-neutral-200 outline-none fade-out"
        aria-label="Close Menu">
        <X size={40} />
      </SheetClose>
      <nav>
        <ul className="flex flex-col items-end" role="list">
          {[{ name: "Home", path: "/" }].concat(NAVBAR_LINKS).map((item) => (
            <NavItemMobile key={item.name} item={item} />
          ))}
        </ul>
      </nav>
    </SheetContent>
  </Sheet>
);

MobileNav.displayName = "MobileNav";

export default memo(MobileNav);

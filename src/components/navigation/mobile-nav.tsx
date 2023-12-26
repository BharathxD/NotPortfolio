import { NAVBAR_LINKS } from "~/lib/constants";
import { MenuIcon, X } from "lucide-react";
import { memo } from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import NavItemMobile from "./nav-item-mobile";

const MobileNav = () => (
  <Sheet>
    <SheetTrigger className="block md:hidden">
      <MenuIcon />
    </SheetTrigger>
    <SheetContent className="flex max-h-dvh min-w-[100vw] flex-col justify-between bg-neutral-900 p-0">
      <ul className="flex flex-col" role="list">
        {[
          ...[
            {
              name: "Home",
              path: "/",
            },
            ...NAVBAR_LINKS,
          ],
        ]
          .toReversed()
          .map((item) => (
            <NavItemMobile key={item.name} item={item} />
          ))}
      </ul>
      <SheetClose className="absolute bottom-0 right-0 flex aspect-square size-28 items-center justify-center">
        <X size={75} />
      </SheetClose>
    </SheetContent>
  </Sheet>
);

MobileNav.displayName = "MobileNav";

export default memo(MobileNav);

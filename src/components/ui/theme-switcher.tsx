"use client";

import useIsMounted from "~/hooks/use-is-mounted";
import { Loader, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useMemo } from "react";

const ThemeSwitcher = () => {
  const isMounted = useIsMounted();
  const { theme, setTheme } = useTheme();

  const updatedTheme = useMemo(() => (theme === "dark" ? "light" : "dark"), [theme]);
  const toggleMode = useCallback(() => setTheme(updatedTheme), [setTheme, updatedTheme]);

  if (!isMounted) {
    return (
      <button className="rounded-full p-1 font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
        <Loader size={25} className="animate-spin text-zinc-50" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleMode}
      aria-label={updatedTheme}
      className="rounded-full p-1 font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
      {theme === "dark" ? <Sun key="1" /> : <Moon key="1" />}
    </button>
  );
};

export default ThemeSwitcher;

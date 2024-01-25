import { Poppins } from "next/font/google";
import localFont from "next/font/local";

/**
 * Configuration for the local Clash font.
 * This configuration includes the paths to the font files, their weights, and styles.
 * The variable `--font-clash` is used to reference this font in CSS.
 */
const clash = localFont({
  src: [
    {
      path: "../styles/fonts/ClashGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/ClashGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../styles/fonts/ClashGrotesk-Semibold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-clash",
});

/**
 * Configuration for the Poppins font
 * This configuration includes the paths to the font files, their weights, and styles.
 * The variable `--font-poppins` is used to reference this font in CSS.
 */
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export { clash, poppins };

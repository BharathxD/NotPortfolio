import { type Emoticons } from "~/types";

const NAVBAR_LINKS: { name: string; path: string }[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const FADE_IN_ANIMATION_SETTINGS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.2 },
};

const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { type: "spring" } },
};

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

const RICKROLL_LINK_YT_ID = "dQw4w9WgXcQ";

const EMOTICONS_MAP: Record<Emoticons[number], string> = {
  angry: ">_<",
  happy: "^_^",
  disappointed: "T_T",
  neutral: "-_-",
  smile: ":)",
  star: "*_*",
  flyaway: "(～￣▽￣)～",
  404: "404",
};

const STATUS_CODES = {
  INTERNAL_SERVER_ERROR: 500,
  BAD_REQUEST: 400,
} as const;

const KAISEI_TOKUMIN_ABS_FONT_URL = new URL("../styles/fonts/kaisei-tokumin-bold.ttf", import.meta.url);

const DOTS_COUNT = 156;

const DEFAULT_DOT_COLORS: [string, string] = [
  "bg-neutral-200 group-hover:bg-neutral-400",
  "bg-neutral-400 group-hover:bg-neutral-200",
];

const ROUTES = ["", "/work", "/blog", "/contact"];

export {
  ROUTES,
  DOTS_COUNT,
  STATUS_CODES,
  NAVBAR_LINKS,
  EMOTICONS_MAP,
  DEFAULT_DOT_COLORS,
  RICKROLL_LINK_YT_ID,
  FADE_IN_ANIMATION_SETTINGS,
  FADE_UP_ANIMATION_VARIANTS,
  KAISEI_TOKUMIN_ABS_FONT_URL,
  FADE_DOWN_ANIMATION_VARIANTS,
};

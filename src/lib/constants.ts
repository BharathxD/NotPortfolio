import { type Emoticons } from "~/types";

const NAVBAR_LINKS: { name: string; path: string }[] = [
  {
    name: "Projects",
    path: "/project",
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

export {
  NAVBAR_LINKS,
  FADE_IN_ANIMATION_SETTINGS,
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_UP_ANIMATION_VARIANTS,
  RICKROLL_LINK_YT_ID,
  EMOTICONS_MAP,
};

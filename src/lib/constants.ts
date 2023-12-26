const NAVBAR_LINKS = [
  {
    name: "About",
    path: "/",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Blog",
    path: "/blog",
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

export { NAVBAR_LINKS, FADE_IN_ANIMATION_SETTINGS, FADE_DOWN_ANIMATION_VARIANTS, FADE_UP_ANIMATION_VARIANTS };

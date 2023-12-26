const HighlightedSpan = ({ children }: React.PropsWithChildren) => (
  <span className="bg-highlight bg-clip-text text-2xl font-semibold italic text-neutral-950 text-shadow-lg md:text-4xl dark:text-neutral-200">
    {" "}
    {children}
    {"  "}
  </span>
);

export default HighlightedSpan;

const HighlightedSpan = ({ children }: React.PropsWithChildren) => (
  <span className="bg-highlight bg-clip-text text-2xl font-semibold italic text-neutral-200 text-shadow-lg md:text-4xl">
    {" "}
    {children}
    {"  "}
  </span>
);

export default HighlightedSpan;

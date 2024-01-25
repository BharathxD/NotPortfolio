interface Props extends React.HTMLAttributes<HTMLSpanElement> {}

const HighlightedSpan = ({ children, ...rest }: Props) => (
  <span
    className="bg-highlight bg-clip-text text-2xl font-semibold italic text-neutral-200 text-shadow-lg md:text-4xl"
    {...rest}>
    {" "}
    {children}
    {"  "}
  </span>
);

export default HighlightedSpan;

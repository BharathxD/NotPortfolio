interface Props extends React.HTMLAttributes<HTMLSpanElement> {}

const HighlightedSpan = ({ children, ...rest }: Props) => (
  <span className="bg-highlight bg-clip-text font-semibold italic text-neutral-200 text-shadow-lg" {...rest}>
    {" "}
    {children}
    {"  "}
  </span>
);

export default HighlightedSpan;

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement> {}

const CodeBlock = ({ children, ...props }: Props) => (
  <div className="group relative">
    <pre
      className="relative mb-4 mt-6 max-h-[640px] overflow-x-auto rounded-lg border border-neutral-800 !bg-gradient-to-br from-neutral-900 to-neutral-950 p-4 font-mono text-sm brightness-110 scrollbar-none"
      {...props}>
      {children}
    </pre>
  </div>
);

export default CodeBlock;

import CopyButton from "~/components/ui/copy-button";

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement> {
  raw?: string;
}

const CodeBlock = ({ children, raw, ...props }: Props) => (
  <div className="group relative">
    <CopyButton
      value={raw}
      className="absolute right-4 top-4 z-20 transition-all duration-200 group-hover:opacity-100 md:opacity-0"
    />
    <pre
      className="relative mb-4 mt-6 max-h-[640px] overflow-x-auto rounded-lg border border-neutral-700 bg-neutral-900 p-4 font-mono text-sm font-semibold text-foreground"
      {...props}>
      {children}
    </pre>
  </div>
);

export default CodeBlock;

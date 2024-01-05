import { cn } from "~/lib/utils";
import { useMDXComponent } from "next-contentlayer/hooks";
import ImageWithLoader from "../projects/image-with-loader";
import { Separator } from "../ui/separator";
import CodeBlock from "./code-block";

const components = {
  pre: CodeBlock,
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code className={cn("relative rounded-md font-mono text-sm", className)} {...props} />
  ),
  hr: ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <Separator className={cn("mb-4 mt-2 border-[var(--tw-prose-hr)]", className)} {...props} />
  ),
  Image: ImageWithLoader,
};

interface Props {
  code: string;
}

const Mdx = ({ code }: Props) => {
  const Component = useMDXComponent(code);
  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
};

export { Mdx };

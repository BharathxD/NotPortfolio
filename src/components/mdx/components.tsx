import ImageWithLoader from "~/components/ui/image-with-loader";
import { Separator } from "~/components/ui/separator";
import { cn } from "~/lib/utils";
import { useMDXComponent } from "next-contentlayer/hooks";
import CodeBlock from "./code-block";
import Heading, { type HeadingLevel } from "./heading";
import "~/styles/mdx.css";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

const createHeading = (level: HeadingLevel) => {
  const HeadingComponent = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading as={level} {...props} />
  );
  HeadingComponent.displayName = `Heading${level}`;
  return HeadingComponent;
};

const components = {
  h1: createHeading("h1"),
  h2: createHeading("h2"),
  h3: createHeading("h3"),
  h4: createHeading("h4"),
  h5: createHeading("h5"),
  h6: createHeading("h6"),
  a: ({ children, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a target="_blank" rel="noopener noreferrer" {...props} aria-label={children?.toString()}>
      {children}
    </a>
  ),
  pre: CodeBlock,
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code className={cn("relative rounded-md font-mono text-sm", className)} {...props} />
  ),
  hr: ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <Separator className={cn("mb-4 mt-2 border-[var(--tw-prose-hr)]", className)} {...props} />
  ),
  table: ({ ...props }: React.HTMLAttributes<HTMLTableElement>) => <Table {...props} />,
  thead: ({ ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <TableHeader className="bg-gradient-to-t from-neutral-700 to-neutral-800 text-neutral-50" {...props} />
  ),
  tbody: ({ ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => <TableBody {...props} />,
  tr: ({ ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <TableRow className="border-neutral-700" {...props} />
  ),
  th: ({ ...props }: React.HTMLAttributes<HTMLTableCellElement>) => <TableHead className="p-2" {...props} />,
  td: ({ ...props }: React.HTMLAttributes<HTMLTableCellElement>) => <TableCell {...props} />,
  tfoot: ({ ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => <TableFooter {...props} />,
  Image: ImageWithLoader,
};

interface Props {
  code: string;
}

const Mdx = ({ code }: Props) => {
  const Component = useMDXComponent(code);
  return (
    <article className="mdx">
      <Component components={components} />
    </article>
  );
};

export { Mdx };

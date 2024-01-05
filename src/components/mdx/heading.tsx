import { Link2 } from "lucide-react";
import Link from "next/link";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
}

const Heading = ({ as: Comp = "h1", ...props }: Props) => (
  <Comp {...props} id={undefined}>
    <span className="invisible absolute mt-[-120px] pt-[120px]" id={props.id} />
    <Link href={`#${props.id}`} className="peer relative no-underline underline-offset-4 hover:md:underline">
      {props.children}
    </Link>
    <Link2 className="ml-2 hidden align-middle peer-hover:md:inline-block" />
  </Comp>
);

export type { HeadingLevel };
export default Heading;

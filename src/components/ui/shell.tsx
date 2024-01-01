import { cn } from "~/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const shellVariants = cva("p-5 md:p-10", {
  variants: {
    variant: {
      landing: "flex h-[90dvh] items-center justify-center",
      ordered: "flex flex-col gap-2",
      spaced: "",
    },
  },
  defaultVariants: {
    variant: "landing",
  },
});

interface ShellProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof shellVariants> {
  as?: React.ElementType;
}

const Shell = ({ className, as: Comp = "section", variant, ...props }: ShellProps) => (
  <Comp className={cn(shellVariants({ variant }), className)} {...props} />
);

export { Shell, shellVariants };

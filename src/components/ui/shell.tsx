import { cn } from "~/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const shellVariants = cva("p-5 md:p-10", {
  variants: {
    variant: {
      spaced: "",
      ordered: "flex flex-col gap-2",
      centered: "flex h-[90dvh] items-center justify-center",
    },
  },
  defaultVariants: {
    variant: "centered",
  },
});

interface ShellProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof shellVariants> {
  as?: React.ElementType;
}

const Shell = ({ className, as: Comp = "section", variant, ...props }: ShellProps) => (
  <Comp className={cn(shellVariants({ variant }), className)} {...props} />
);

export { Shell, shellVariants };

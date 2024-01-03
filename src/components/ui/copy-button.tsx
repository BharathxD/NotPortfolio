"use client";

import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { Button, type ButtonProps } from "~/components/ui/button";
import useCopyToClipboard from "~/hooks/use-hooks";

const CopyButton = ({ value, ...props }: ButtonProps) => {
  const [isCopied, copy] = useCopyToClipboard();
  return (
    <Button
      size="sm"
      variant="outline"
      className="h-6 w-6 px-0"
      onClick={async () => {
        if (typeof window === "undefined") return;
        await copy((value ?? "")?.toString());
      }}
      {...props}>
      {isCopied ? (
        <CheckIcon className="h-3 w-3" aria-hidden="true" />
      ) : (
        <CopyIcon className="h-3 w-3" aria-hidden="true" />
      )}
      <span className="sr-only">{isCopied ? "Copied" : "Copy to clipboard"}</span>
    </Button>
  );
};

export default CopyButton;

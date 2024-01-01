"use client";

import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import type { ButtonProps } from "~/components/ui/button";

const CopyButton = ({ value, ...props }: ButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <button
      size="sm"
      className="h-6 w-6 px-0"
      onClick={() => {
        if (typeof window === "undefined") return;
        setIsCopied(true);
        void window.navigator.clipboard.writeText(value?.toString() ?? "");
        setTimeout(() => setIsCopied(false), 2000);
      }}
      {...props}>
      {isCopied ? (
        <CheckIcon className="h-3 w-3" aria-hidden="true" />
      ) : (
        <CopyIcon className="h-3 w-3" aria-hidden="true" />
      )}
      <span className="sr-only">{isCopied ? "Copied" : "Copy to clipboard"}</span>
    </button>
  );
};

export default CopyButton;

"use client";

import EmptyPage from "~/components/ui/empty-page";
import { Shell } from "~/components/ui/shell";
import { useEffect } from "react";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Shell>
      <EmptyPage
        emoticon="disappointed"
        message="Whoops! Something went wrong, maybe refresh?"
        actionName="Refresh"
        action={reset}
      />
    </Shell>
  );
};

export default ErrorPage;

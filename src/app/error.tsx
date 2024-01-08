"use client";

import EmptyPage from "~/components/ui/empty-page";
import { Shell } from "~/components/ui/shell";

const ErrorPage = () => (
  <Shell variant="landing">
    <EmptyPage
      emoticon="disappointed"
      message="Whoops! Something went wrong, maybe refresh?"
      actionName="Refresh"
    />
  </Shell>
);

export default ErrorPage;

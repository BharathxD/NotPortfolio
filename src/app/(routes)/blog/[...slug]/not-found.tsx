import EmptyPage from "~/components/ui/empty-page";
import { Shell } from "~/components/ui/shell";

const BlogNotFoundPage = () => (
  <Shell>
    <EmptyPage
      emoticon="flyaway"
      message="The blog you are looking for does not exist"
      retryLink="/blog"
      retryLinkText="Blog Page"
    />
  </Shell>
);

export default BlogNotFoundPage;

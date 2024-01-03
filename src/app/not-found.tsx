import EmptyPage from "~/components/empty-page";
import { Shell } from "~/components/ui/shell";

const NotFoundPage = () => (
  <Shell>
    <EmptyPage emoticon="404" message="Bro you lost?" rickroll />
  </Shell>
);

export default NotFoundPage;

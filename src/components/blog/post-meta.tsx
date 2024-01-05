import { formatDate } from "~/lib/utils";

interface Props {
  date?: string;
  readingTime?: number;
}

const PostMeta = ({ date, readingTime }: Props) => (
  <>
    {date && (
      <>
        <time dateTime={date}>{formatDate(date)}</time>
        <span>•</span>
      </>
    )}
    {readingTime && (
      <>
        <div>{readingTime}min</div>
        <span>•</span>
      </>
    )}
  </>
);

export default PostMeta;

import type { Author as AuthorType } from "content-layer/generated";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface Props {
  author: Pick<AuthorType, "_id" | "avatar" | "title" | "linkedin"> | undefined;
}

const Author = ({ author }: Props) => {
  if (!author) return null;
  return (
    <li>
      <Link
        target="_blank"
        href={`https://linkedin.com/in/${author.linkedin}?utm_source=blog&utm_medium=${author.title}?utm_website=portfolio`}
        className="flex items-center space-x-2 text-sm">
        <Avatar>
          <AvatarImage src={author.avatar} alt={author.title} />
          <AvatarFallback className="rounded-full border bg-gradient-to-tr from-neutral-800 to-neutral-900" />
        </Avatar>
        <div className="flex-1 text-left leading-tight">
          <p className="font-medium">{author.title}</p>
          <p className="text-[12px] text-muted-foreground">@{author.linkedin}</p>
        </div>
      </Link>
    </li>
  );
};

export default Author;

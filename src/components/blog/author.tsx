import { createAuthorUrl } from "~/lib/utils";
import type { Author as AuthorType } from "content-layer/generated";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface Props {
  author: Pick<AuthorType, "avatar" | "title" | "linkedin"> | undefined;
}

const Author = ({ author }: Props) => {
  if (!author) return null;
  const { avatar, title, linkedin } = author;
  const authorUrl = createAuthorUrl(author);
  return (
    <li>
      <Link target="_blank" href={authorUrl.toString()} className="flex items-center space-x-2 text-sm">
        <Avatar>
          <AvatarImage src={avatar} alt={title} />
          <AvatarFallback className="rounded-full border bg-gradient-to-tr from-neutral-800 to-neutral-900" />
        </Avatar>
        <div className="flex-1 text-left leading-tight">
          <p className="font-medium">{title}</p>
          <p className="text-[12px] text-muted-foreground">@{linkedin}</p>
        </div>
      </Link>
    </li>
  );
};

export default Author;

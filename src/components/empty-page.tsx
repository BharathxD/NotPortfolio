"use client";

import { EMOTICONS_MAP, RICKROLL_LINK_YT_ID } from "~/lib/constants";
import { type Emoticons } from "~/types";
import { useRouter } from "next/navigation";
import YoutubeButton from "./youtube";

interface Props {
  message?: string;
  emoticon?: Emoticons[number];
  actionName?: string;
  action?: () => void;
  rickroll?: boolean;
}

const EmptyPage = ({
  message = "Still working on this page.",
  emoticon = "angry",
  actionName = "Head back",
  rickroll,
  action,
}: Props) => {
  const router = useRouter();
  const handleEvent = () => router.back();
  return (
    <section className="flex size-full min-h-[90dvh] flex-col items-center justify-center px-4 md:px-10">
      <div>
        <div className="relative z-20 mb-4 h-px bg-glare opacity-80" />
        <h1 className="flex flex-col items-center justify-center gap-2 text-balance bg-gradient-to-b from-neutral-200 to-neutral-400 bg-clip-text text-center text-3xl font-semibold text-transparent text-shadow-lg md:text-5xl">
          <span>{EMOTICONS_MAP[emoticon]}</span>
          <span>{message}</span>
        </h1>
        <div className="my-6 w-full text-center">
          {rickroll ? (
            <YoutubeButton id={RICKROLL_LINK_YT_ID} />
          ) : (
            <button
              className="h-10 overflow-hidden rounded-xl bg-gradient-to-b from-neutral-500 to-neutral-800 px-2 text-base font-medium text-neutral-50 underline-offset-4 shadow-lg shadow-neutral-950 outline-none"
              onClick={action ?? handleEvent}>
              <span>{actionName}</span>
            </button>
          )}
        </div>
        <div className="relative z-20 mt-4 h-px bg-glare opacity-80" />
      </div>
    </section>
  );
};

export default EmptyPage;

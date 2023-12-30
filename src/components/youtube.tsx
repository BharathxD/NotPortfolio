import { memo, useCallback, useState } from "react";
import YouTube from "react-youtube";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

interface Props {
  id: string;
}

const YoutubeButton = ({ id }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const setLoaded = useCallback(() => setIsLoading(false), []);
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
    },
  };
  return (
    <Dialog>
      <DialogTrigger className="h-10 overflow-hidden rounded-xl bg-gradient-to-b from-neutral-500 to-neutral-800 px-2 text-base font-medium text-neutral-50 underline-offset-4 shadow-lg shadow-neutral-950 outline-none">
        Head Back
      </DialogTrigger>
      <DialogContent className="min-h-[50dvh] min-w-[50dvw] overflow-hidden !rounded-3xl p-2">
        <div className="absolute top-0 z-20 h-px w-full bg-glare opacity-80" />
        <div
          className="absolute inset-0 hidden size-full rounded-3xl border data-[loading=true]:block data-[loading=true]:animate-skeleton data-[loading=true]:bg-gradient-to-r data-[loading=true]:from-neutral-950 data-[loading=true]:via-neutral-700 data-[loading=true]:to-neutral-950 data-[loading=true]:bg-[400%,100%]"
          data-loading={isLoading}
        />
        <YouTube
          className="overflow-hidden rounded-2xl border"
          videoId={id}
          opts={opts}
          onReady={setLoaded}
        />
        <div className="absolute bottom-0 z-20 h-px w-full bg-glare opacity-80" />
      </DialogContent>
    </Dialog>
  );
};

YoutubeButton.displayName = "YoutubeButton";

export default memo(YoutubeButton);

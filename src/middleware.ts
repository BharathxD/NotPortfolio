import { detectBot } from "~/lib/detect-bot";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { NextResponse, type NextFetchEvent } from "next/server";

const getRedirectUrl = async (req: Request) => {
  await new Promise((resolve) => {
    const isBot = detectBot(req);
    console.info("isBot:inner", { isBot });
    resolve(true);
  });
};

const middleware = (req: Request, ev: NextFetchEvent) => {
  const isBot = detectBot(req);

  if (isBot) {
    return NextResponse.json({ error: "Bot detected" }, { status: 403 });
  }

  console.log("redirecting to /");
  console.log("req.url", req.url);
  console.log("isBot", isBot);
  ev.waitUntil(getRedirectUrl(req));

  return NextResponse.next();
};

export default middleware;

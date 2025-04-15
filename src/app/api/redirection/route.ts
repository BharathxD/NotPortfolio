import { detectBot } from "~/lib/detect-bot";
import { NextResponse, type NextFetchEvent } from "next/server";

const getRedirectUrl = async (req: Request) => {
  await new Promise((resolve) => {
    const isBot = detectBot(req);
    console.info("isBot:inner", { isBot });
    resolve(true);
  });
};

export const GET = (req: Request, ev: NextFetchEvent) => {
  const isBot = detectBot(req);

  if (isBot) {
    return NextResponse.json({ error: "Bot detected" }, { status: 403 });
  }

  console.log("redirecting to /");
  console.log("req.url", req.url);
  console.log("isBot", isBot);
  ev.waitUntil(getRedirectUrl(req));

  return NextResponse.redirect(new URL("/", req.url));
};

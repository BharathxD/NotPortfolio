import { detectBot } from "~/lib/detect-bot";
import { NextResponse } from "next/server";

export const GET = (req: Request) => {
  const isBot = detectBot(req);

  if (isBot) {
    return NextResponse.json({ error: "Bot detected" }, { status: 403 });
  }

  console.log("redirecting to /");
  console.log("req.url", req.url);
  console.log("isBot", isBot);

  return NextResponse.redirect(new URL("/", req.url));
};

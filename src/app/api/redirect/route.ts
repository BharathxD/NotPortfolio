import { detectBot } from "~/lib/detect-bot";
import { NextResponse } from "next/server";

export const GET = (req: Request) => {
  const isBot = detectBot(req);

  console.info("======== INSIDE API IN =========");

  console.log({ isBot });
  console.info({ headers: req.headers });

  console.info("======== INSIDE API OUT ========");

  return NextResponse.redirect(new URL("/", req.url));
};

import { detectBot } from "~/lib/detect-bot";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { NextResponse, type NextFetchEvent } from "next/server";

const getRedirectUrl = async (req: Request) => {
  await new Promise((resolve) => {
    const isBot = detectBot(req);
    console.log("======== INSIDE PROMISE INT ========");
    console.log(req.headers);
    console.log("======== INSIDE PROMISE OUT ========");
    resolve(true);
  });
};

const middleware = (req: Request, ev: NextFetchEvent) => {
  const isBot = detectBot(req);

  console.log("======== INSIDE MIDDLEWARE INT ========");
  console.log({ isBot });
  console.log(req.headers);
  console.log("======== INSIDE MIDDLEWARE OUT ========");

  ev.waitUntil(getRedirectUrl(req));

  return NextResponse.next();
};

export default middleware;

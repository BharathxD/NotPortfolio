import { ipAddress } from "@vercel/functions";
import { IP_BOTS, UA_BOTS } from "~/lib/bots-list";
import { userAgent } from "next/server";

export const detectBot = (req: Request) => {
  const searchParams = new URL(req.url).searchParams;

  if (searchParams.get("bot")) {
    return true;
  }

  // Check ua
  const ua = userAgent(req);

  console.log("ua.isBot", ua.isBot);
  console.log("ua.ua", ua.ua);

  if (ua) {
    return ua.isBot || UA_BOTS.some((bot) => new RegExp(bot, "i").test(ua.ua));
  }

  // Check ip
  let ip = ipAddress(req);

  console.log("ip", ip);

  if (!ip) {
    return false;
  }

  if (ip.includes("/")) {
    ip = ip.split("/")[0];
  }

  return IP_BOTS.includes(ip);
};

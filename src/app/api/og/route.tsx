import env from "~/env.mjs";
import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";

export const runtime = "edge";

const GET = async (req: NextRequest) => {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");
  const font = fetch(new URL("../../../../public/fonts/kaisei-tokumin-bold.ttf", import.meta.url)).then(
    (res) => res.arrayBuffer()
  );
  const fontData = await font;
  const bgImageUrl = `${env.NEXT_PUBLIC_APP_URL}/og-bg.jpg`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundImage: `url(${bgImageUrl})`,
        }}>
        <div
          style={{
            marginLeft: 100,
            marginRight: 190,
            display: "flex",
            fontSize: 130,
            fontFamily: "Kaisei Tokumin",
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            color: "white",
            lineHeight: "120px",
            whiteSpace: "pre-wrap",
          }}>
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Kaisei Tokumin",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
};

export { GET };

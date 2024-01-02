import env from "~/env.mjs";
import { StatusCodes } from "~/lib/constants";
import { ogImageSchema } from "~/lib/validations";
import { ImageResponse } from "next/og";
import { NextResponse, type NextRequest } from "next/server";
import { ZodError } from "zod";

export const runtime = "edge";

const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = req.nextUrl;
    const { title, description } = ogImageSchema.parse({
      title: searchParams.get("title"),
      description: searchParams.get("description"),
    });
    const fontData = await fetch(
      new URL("../../../../public/fonts/kaisei-tokumin-bold.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());
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
            {title}
          </div>
          {description && (
            <div
              style={{
                marginLeft: 100,
                marginRight: 190,
                display: "flex",
                fontSize: 50,
                fontFamily: "Kaisei Tokumin",
                letterSpacing: "-0.05em",
                fontStyle: "normal",
                color: "white",
                opacity: 0.8,
                lineHeight: "120px",
                whiteSpace: "pre-wrap",
              }}>
              {description}
            </div>
          )}
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
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: "Failed to generate the image", errors: error.issues.map((issue) => issue.message) },
        { status: StatusCodes.BAD_REQUEST }
      );
    }

    return NextResponse.json(
      { message: "Failed to generate the image" },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
};

export { GET };

import { siteConfig } from "~/lib/config";
import { KAISEI_TOKUMIN_ABS_FONT_URL, STATUS_CODES } from "~/lib/constants";
import { ogImageSchema } from "~/lib/validations";
import { type ServerRuntime } from "next";
import { ImageResponse } from "next/og";
import { NextResponse, type NextRequest } from "next/server";
import { ZodError } from "zod";

/**
 * The runtime environment for the application.
 * @type {ServerRuntime}
 */
export const runtime: ServerRuntime = "edge";

/**
 * Handles GET requests to generate an image.
 *
 * @async
 * @function
 * @param {NextRequest} req - The incoming request object.
 * @returns {Promise<NextResponse|ImageResponse>} The response object.
 *
 * @throws {ZodError} When the request parameters fail validation.
 * @throws {Error} When there's an error generating the image.
 */
const GET = async (req: NextRequest): Promise<NextResponse | ImageResponse> => {
  try {
    const { searchParams } = req.nextUrl;

    const { title, subtitle } = ogImageSchema.parse({
      title: searchParams.get("title"),
      subtitle: searchParams.get("subtitle"),
    });

    const fontData = await fetch(KAISEI_TOKUMIN_ABS_FONT_URL).then((res) => res.arrayBuffer());

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
            backgroundImage: `url(${siteConfig.ogBgUrl})`,
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
          {subtitle && (
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
              {subtitle}
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
  } catch (error: unknown) {
    switch (true) {
      case error instanceof ZodError:
        console.error(
          "Failed to generate the image due to invalid request parameters: ",
          (error as { message: string }).message
        );
        return NextResponse.json(
          {
            message: "Failed to generate the image due to invalid request parameters",
            errors: error.issues.map((issue) => issue.message),
          },
          { status: STATUS_CODES.BAD_REQUEST }
        );
      default:
        console.error(
          "An unexpected error occurred while generating the image: ",
          (error as { message: string }).message
        );
        return NextResponse.json(
          {
            message: "An unexpected error occurred while generating the image",
          },
          { status: STATUS_CODES.INTERNAL_SERVER_ERROR }
        );
    }
  }
};

export { GET };

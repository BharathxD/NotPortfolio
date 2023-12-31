import GithubCard from "~/components/contact/github-card";
import LinkedInCard from "~/components/contact/linkedin-card";
import { biography } from "~/lib/config";
import { type SocialProfiles } from "~/types";
import axios, { type AxiosResponse } from "axios";
import imagemin, { type BufferOptions, type Plugin } from "imagemin";
import imageminWebp from "imagemin-webp";

const getBase64ImageUrl = async (
  social: SocialProfiles
): Promise<SocialProfiles & { blurDataUrl: string }> => {
  try {
    console.info(social.imageUrl);
    const response: AxiosResponse<ArrayBuffer> = await axios.get(social.imageUrl, {
      responseType: "arraybuffer",
    });
    const buffer = response.data;
    const minified: Buffer = await (
      imagemin as { buffer: (input: Buffer, options?: BufferOptions) => Promise<Buffer> }
    ).buffer(Buffer.from(buffer));
    return {
      ...social,
      blurDataUrl: `data:image/webp;base64,${Buffer.from(minified).toString()}`,
    };
  } catch (error) {
    // console.error("Error getting base64 image url", error);
    throw error;
  }
};

const ContactPage = async () => {
  const blurImagePromises = biography.socialProfiles.map((social) => getBase64ImageUrl(social));
  const blurImages = await Promise.all(blurImagePromises);
  return (
    <div className="flex flex-col gap-2 p-4 md:p-10">
      <LinkedInCard social={blurImages.find((social) => social.platform === "LinkedIn")!} />
      {/* <GithubCard /> */}
    </div>
  );
};

export default ContactPage;

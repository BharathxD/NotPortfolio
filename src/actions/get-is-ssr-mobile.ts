import MobileDetect from "mobile-detect";
import { headers } from "next/headers";

/**
 * Type for MobileDetect library
 * mobile: Function that returns a string if the device is mobile, null otherwise
 */
type MobileDetectType = {
  mobile: () => string | null;
  isPhoneSized: (maxPhoneWidth?: number) => boolean;
};

/**
 * Function to detect if the server-side rendering is happening on a mobile device
 * @returns boolean - true if the device is mobile, false otherwise
 */
const getIsSSRMobile = (): boolean => {
  try {
    const headersList = headers();
    const userAgent = headersList.get("user-agent") as string;
    if (!userAgent) {
      throw new Error("User-agent header is not present in the request.");
    }
    const md = new MobileDetect(userAgent) as MobileDetectType;
    return Boolean(md.mobile());
  } catch (error: unknown) {
    console.error(error);
    return false;
  }
};

export default getIsSSRMobile;

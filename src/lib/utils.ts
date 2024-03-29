import env from "~/env.mjs";
import { clsx, type ClassValue } from "clsx";
import type { Author } from "content-layer/generated";
import { twMerge } from "tailwind-merge";

/**
 * A utility function that merges class names using clsx and tailwind-merge.
 *
 * @param {ClassValue[]} inputs - An array of class values to merge.
 * @returns {string} The merged class string.
 */
const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

/**
 * Formats a date into a string using the provided options.
 *
 * @param {Date | string | number} date - The date to format. Can be a Date object, a string, or a number.
 * @param {Intl.DateTimeFormatOptions} [options={ month: "long", day: "numeric", year: "numeric" }] - The options to use when formatting the date.
 * @returns {string} The formatted date string.
 */
const formatDate = (
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  }
): string => new Intl.DateTimeFormat("en-US", { ...options }).format(new Date(date));

/**
 * Truncates a string to the specified length and adds an ellipsis if the string is longer than the specified length.
 *
 * @param {string} str - The string to truncate.
 * @param {number} length - The length to truncate the string to.
 * @returns {string} The truncated string.
 */
const truncate = (str: string, length: number): string =>
  str.length > length ? `${str.substring(0, length)}...` : str;

/**
 * Constructs an absolute URL using the provided path and the base URL from the environment variables.
 *
 * @param {string} path - The path to append to the base URL.
 * @returns {string} The constructed absolute URL.
 */
const absoluteUrl = (path: string): string => `${env.NEXT_PUBLIC_APP_URL}${path}`;

/**
 * Creates a URL for the author's LinkedIn profile with additional query parameters.
 *
 * @param {string} linkedin - The author's LinkedIn username.
 * @param {string} title - The title of the author.
 * @returns {URL} - The URL of the author's LinkedIn profile with additional query parameters.
 */
const createAuthorUrl = ({ linkedin, title }: Pick<Author, "linkedin" | "title">): string => {
  const authorUrl = new URL(`https://linkedin.com/in/${linkedin}`);
  authorUrl.searchParams.set("utm_source", "blog");
  authorUrl.searchParams.set("utm_medium", title);
  authorUrl.searchParams.set("utm_website", "portfolio");
  return authorUrl.toString();
};

export { cn, formatDate, truncate, absoluteUrl, createAuthorUrl };

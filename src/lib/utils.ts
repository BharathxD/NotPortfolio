import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const formatDate = (
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  }
) => new Intl.DateTimeFormat("en-US", { ...options }).format(new Date(date));

const truncate = (str: string, length: number) =>
  str.length > length ? `${str.substring(0, length)}...` : str;

const absoluteUrl = (path: string) => `${process.env.NEXT_PUBLIC_APP_URL!}${path}`;

export { cn, formatDate, truncate, absoluteUrl };

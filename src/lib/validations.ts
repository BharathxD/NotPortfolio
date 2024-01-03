import { z } from "zod";

/**
 * Zod schema for validating Open Graph image metadata.
 * @property {z.ZodString} title - A string representing the title of the image. It must be at least 1 character long.
 * @property {z.ZodString} description - An optional string representing the description of the image. It can be null.
 */
const ogImageSchema = z.object({
  title: z.string().min(1),
  description: z.string().nullable().optional(),
});

export { ogImageSchema };

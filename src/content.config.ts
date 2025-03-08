import { defineCollection, z, reference } from "astro:content";
import { file, glob } from "astro/loaders";

const authors = defineCollection({
  schema: z.object({
    name: z.string().nonempty(),
    mood: z.string().optional(),
    bio: z.string().optional(),
    avatar: z.string().optional(),
    favicon: z.string().optional(),
    guest: z.boolean().optional(),
    admin: z.boolean().optional(),
    socials: z.array(z.object({
      name: z.string(),
      url: z.string(),
      icon: z.string(),
      styles: z.string().optional(),
    })),
  }),
  loader: glob({
    pattern: "**/index.{md,mdx}",
    base: "src/pages/blog/",
  }),
});

const blog = defineCollection({
  loader: glob({
    pattern: ["**/*.{md,mdx}", "!**/index.{md,mdx}"],
    base: "src/pages/blog/",
  }),
  schema: z.object({
    title: z.string().nonempty(),
    date: z.date(),
    description: z.string().nonempty(),
    author: reference("authors"),
    image: z.string().optional(),
  }),
});

export const collections = { blog, authors };

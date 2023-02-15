import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    author: z.enum(['Jane Doe', 'John Doe', 'ali']),
  }),
});
const Jobs = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    author: z.enum(['ai', 'ali']),
  }),
});


export const collections = { blog, Jobs };

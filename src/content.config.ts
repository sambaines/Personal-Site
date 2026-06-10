import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    company: z.string(),
    companyLogo: image(),
    order: z.number(),
    cardDescription: z.string(),
    metric: z.string(),
    role: z.string(),
    scope: z.string(),
    cardImage: image(),
  }),
});

const experiments = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experiments' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    publishDate: z.date(),
    thumbnail: image(),
    description: z.string(),
  }),
});

export const collections = {
  'case-studies': caseStudies,
  experiments,
};

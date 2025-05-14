import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    // Load Markdown and MDX files in the `src/content/blog/` directory.
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    // Type-check frontmatter using a schema
    schema: z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

const privacy = defineCollection({
    loader: glob({ base: './src/content/privacy', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()).optional(),
        appName: z.string(),
        contactEmail: z.string().email(),
        icon: z.string().optional(),
    }),
});

const support = defineCollection({
    loader: glob({ base: './src/content/support', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        appName: z.string(),
        description: z.string(),
        contactEmail: z.string().email(),
        pubDate: z.coerce.date(),
        icon: z.string().optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()).optional(),
        updatedDate: z.coerce.date().optional(),
    }),
});

const marketing = defineCollection({
    loader: glob({ base: './src/content/marketing', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        appName: z.string(),
        description: z.string(),
        features: z.array(z.string()),
        icon: z.string().optional(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});


const safety = defineCollection({
    loader: glob({ base: './src/content/safety', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        appName: z.string(),
        description: z.string(),
        features: z.array(z.string()),
        icon: z.string().optional(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()).optional(),
        contactEmail: z.string().email().optional(),
    }),
});

export const collections = {
    blog,
    privacy,
    support,
    marketing,
    safety,
};
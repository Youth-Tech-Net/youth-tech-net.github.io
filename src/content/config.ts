// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content'

// 2. Define a `type` and `schema` for each collection
const sectionsCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    afterTitle: z.string().optional(),
    type: z.string()
  })
})

const teamCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    initials: z.string(),
    image: z.string().optional(), // Optional profile image path
    color: z.enum(['royalOrchid', 'vividTangerine']),
    order: z.number().optional(),
  })
})

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'sections': sectionsCollection,
  'team': teamCollection
}

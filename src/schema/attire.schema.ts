import {z} from 'zod';

export const AttireSchema = z.object({
  id: z.number().int().optional(),
  attireCode: z.string(),
  attireName: z.string(),
  attireDescription: z.string(),
  attirePrice: z.number(),
  attireStatus: z.string(),
  attireStock: z.number().int(),
  imageUrl: z.string().url().optional(),
  categoryId: z.number().int(),
});



import {z} from 'zod';

export type Category = {
  categoryId: number;
  categoryCode: string;
  categoryName: string;
};

export const AttireSchema = z.object({
  id: z.number().int().optional(),
  tenantId: z.string(),
  attireCode: z.string(),
  attireName: z.string(),
  attireDescription: z.string(),
  attirePrice: z.number(),
  attireStatus: z.string(),
  attireStock: z.number().int(),
  imageUrl: z.string().url().optional(),
  category: z.object({
    categoryId: z.number().int(),
    categoryCode: z.string(),
    categoryName: z.string(),
  }),
});

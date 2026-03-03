import {z} from 'zod';

export const TenantSchema = z.object({
  id: z.number().int().optional(),
  tenantId: z.string(),
  name: z.string(),
  branch: z.string().optional(),
  email: z.string().email().optional(),
  phoneNumber: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  active: z.boolean().optional().default(true),
  createdAt: z.string().optional(),
});

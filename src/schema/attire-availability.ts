import { z } from 'zod';

export const AttireAvailabilitySchema = z.object({
  available: z.boolean(),
  expectedReturnDate: z.string(),
  message: z.string(),
});




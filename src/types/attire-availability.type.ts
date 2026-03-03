import { z } from 'zod';
import { AttireAvailabilitySchema } from '../schema/attire-availability';

export type AttireAvailability = z.infer<typeof AttireAvailabilitySchema>;
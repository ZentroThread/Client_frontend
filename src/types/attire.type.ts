import {z} from 'zod';
import {AttireSchema} from '../schema/attire.schema';

export type Attire = z.infer<typeof AttireSchema>;
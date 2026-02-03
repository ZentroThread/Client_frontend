import { z } from "zod";
import { TenantSchema } from "../schema/tenant.schema";

export type Tenant = z.infer<typeof TenantSchema>;
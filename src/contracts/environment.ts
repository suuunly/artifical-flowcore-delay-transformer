import { config } from "dotenv";
import { z } from "zod";

config();

const environmentSchema = z.object({
  TRANSFORMATION_DELAY_MS: z.number().gte(0)
});

export const environment = environmentSchema.parse(process.env);

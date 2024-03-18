import { config } from "dotenv";
import { z } from "zod";

config();

const environmentSchema = z.object({
  TRANSFORMATION_DELAY_MS: z
    .string()
    .min(1)
    .transform((value) => parseInt(value))
});

export const environment = environmentSchema.parse(process.env);

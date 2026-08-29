import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  AUTH_SECRET: z.string().min(32),
  NEXT_PUBLIC_APP_URL: z.string().url().optional(),
  STORAGE_URL: z.string().optional(),
  STORAGE_KEY: z.string().optional(),
  STORAGE_SECRET: z.string().optional(),
  STORAGE_BUCKET: z.string().optional(),
  EMAIL_API_KEY: z.string().optional(),
  EMAIL_FROM: z.string().optional(),
  REDIS_URL: z.string().optional(),
});

export function getEnv() {
  return envSchema.parse(process.env);
}

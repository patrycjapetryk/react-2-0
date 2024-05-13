import { z } from "zod";

export const validationSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Min 3 characters is required" })
      .max(20, "Max 20 characters"),
    time: z.string(),
  })
  .array();

export type FormData = z.infer<typeof validationSchema>;

import { z } from "zod";

export const validationSchema = z.object({
  name: z
    .string()
    .min(5, { message: "Min 5 characters is required" })
    .max(20, "Max 20 characters"),
  surname: z
    .string()
    .min(5, { message: "Min 5 characters is required" })
    .max(20, "Max 20 characters"),
});

export type FormData = z.infer<typeof validationSchema>;

import { z } from "zod";

export const validationSchema = z.object({
  hobby: z
    .string()
    .min(5, { message: "Min 5 characters is required" })
    .max(20, "Max 20 characters"),
  date: z.string().date(),
});

export type FormData = z.infer<typeof validationSchema>;

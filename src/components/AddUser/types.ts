import { z } from "zod";

export const validationSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Nickname is required" })
    .max(10, "Max 10 characters"),
  age: z.string().min(1, "Age is required"),
});

export type UserData = z.infer<typeof validationSchema>;

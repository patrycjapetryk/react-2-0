import { z } from "zod";

export const hobbySchema = z.object({
  hobby: z.string().min(3, { message: "Min 3 characters is required" }),
});

export const validationSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Min 3 characters is required" })
    .max(20, "Max 20 characters"),
  surname: z
    .string()
    .min(3, { message: "Min 3 characters is required" })
    .max(20, "Max 20 characters"),
  hobbies: z.array(hobbySchema),
});

// export type HobbyFormData = z.infer<typeof hobbySchema>;
export type RegistrationFormData = z.infer<typeof validationSchema>;

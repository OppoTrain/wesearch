import { z } from "zod";

export const loginSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name is required")
    .max(20, "First name max length is 20 characters"),
  lastName: z
    .string()
    .min(2, "Last name is required")
    .max(20, "Last name max length is 20 characters"),
  email: z.string().email("Invalid email format"),
  
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(28, "Password must be at most 28 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")  
    .regex(/[a-z]/, "Password must contain at least one lowercase letter") 
    .regex(/\d/, "Password must contain at least one number"),

  confirmPassword: z
    .string()
    .min(8, "Confirm password must be at least 8 characters")
    .max(28, "Confirm password must be at most 28 characters")
    .regex(/[A-Z]/, "Confirm password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Confirm password must contain at least one lowercase letter")
    .regex(/\d/, "Confirm password must contain at least one number")
})
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

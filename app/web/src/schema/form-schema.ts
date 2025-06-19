import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email(),
  password: z.string().min(1, { message: "Password is required" }),
});

export const registerSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email(),
  name: z.string().min(1, { message: "Name is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

import { z } from "zod";

export const contactSchema = z.object({
  names: z.string().min(1, { message: "El nombre no puede estar vacío" }),
  email: z.string().email({ message: "El correo no es válido" }),
  message: z.string().min(1, { message: "El mensaje no puede estar vacío" }),
});

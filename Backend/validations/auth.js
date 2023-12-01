import { body } from "express-validator";

export const registerValidation = [
  body("email", "Formato de email no válido").isEmail(),
  body("password", "Ingrese un mínimo de 5 caracteres").isLength({ min: 5 }),
  body("fullName", "Ingrese su nombre").isLength({ min: 3 }),
  body("avatarUrl", "Ingrese la url de su avatar").optional().isURL(),
];

import { body } from "express-validator";

export const loginValidation = [
  body("email", "Formato de email no válido").isEmail(),
  body("password", "Ingrese un mínimo de 5 caracteres").isLength({ min: 5 }),
];

export const registerValidation = [
  body("email", "Formato de email no válido").isEmail(),
  body("password", "Ingrese un mínimo de 5 caracteres").isLength({ min: 5 }),
  body("fullName", "Ingrese su nombre").isLength({ min: 3 }),
  body("avatarUrl", "Ingrese la url de su avatar").optional().isURL(),
];

export const postCreateValidation = [
  body("title", "Ingrese el título").isLength({ min: 3 }).isString(),
  body("text", "Ingrese el texto").isLength({ min: 10 }).isString(),
  body("tags", "Formato de etiqueta no válido").optional().isString(),
  body("imageUrl", "Enlace de imagen no válido").optional().isString(),
];
// Importa la función 'body' de express-validator para validar campos en las solicitudes.
import { body } from "express-validator";

// Validación para el inicio de sesión.
export const loginValidation = [
  body("email", "Formato de email no válido").isEmail(),
  body("password", "Ingrese un mínimo de 5 caracteres").isLength({ min: 5 }),
];

// Validación para el registro de usuario.
export const registerValidation = [
  body("email", "Formato de email no válido").isEmail(),
  body("password", "Ingrese un mínimo de 5 caracteres").isLength({ min: 5 }),
  body("fullName", "Ingrese su nombre").isLength({ min: 3 }),
  body("avatarUrl", "Ingrese la URL de su avatar").optional().isURL(),
];

// Validación para la creación de publicaciones.
export const postCreateValidation = [
  body("title", "Ingrese el título").isLength({ min: 3 }).isString(),
  body("text", "Ingrese el texto").isLength({ min: 10 }).isString(),
  body("tags", "Formato de etiqueta no válido").optional().isString(),
  body("imageUrl", "Enlace de imagen no válido").optional().isString(),
];

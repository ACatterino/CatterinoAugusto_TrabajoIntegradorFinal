// Importa la función `validationResult` de la biblioteca express-validator.
import { validationResult } from "express-validator";

// Middleware para manejar errores de validación.
export default (req, res, next) => {
  // Obtener los errores de validación utilizando la función `validationResult`.
  const errors = validationResult(req);

  // Verifica si hay errores de validación.
  if (!errors.isEmpty()) {
    // Envia una respuesta con el código de estado 400 (Bad Request) y los errores de validación en formato de array.
    return res.status(400).json(errors.array());
  }

  // Llama a la siguiente función en la cadena de middleware.
  next();
};
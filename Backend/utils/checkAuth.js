// Importa la biblioteca JSON Web Token para manejar tokens de autenticación.
import jwt from "jsonwebtoken";

// Middleware de autenticación.
export default (req, res, next) => {
  // Obtener el token del encabezado de autorización, eliminar la parte "Bearer" y cualquier espacio en blanco.
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");

  // Verifica si se proporcionó un token.
  if (token) {
    try {
      // Decodifica el token utilizando la clave secreta "secret123".
      const decoded = jwt.verify(token, "secret123");

      // Agrega el ID del usuario decodificado al objeto de solicitud (req).
      req.userId = decoded._id;

      // Llama a la siguiente función en la cadena de middleware.
      next();
    } catch (e) {
      // Captura y manejo de errores relacionados con la verificación del token.
      return res.status(403).json({
        message: "Sin acceso",
      });
    }
  } else {
    // Envia una respuesta de acceso denegado si no se proporcionó ningún token.
    return res.status(403).json({
      message: "Sin acceso",
    });
  }
};
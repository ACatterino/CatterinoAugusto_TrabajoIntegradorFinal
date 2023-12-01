// Importa la biblioteca JSON Web Token para manejar tokens de autenticación.
import jwt from "jsonwebtoken";

// Importa la biblioteca bcrypt para el hashing de contraseñas.
import bcrypt from "bcrypt";

import UserModel from "../models/User.js";

// Controlador para el registro de nuevos usuarios.
export const register = async (req, res) => {
  try {    
    // Obtiene la contraseña desde el cuerpo de la solicitud.
    const password = req.body.password;

    // Genera una sal y luego hashea la contraseña.
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // Crea una nueva instancia del modelo de usuario con los datos proporcionados.
    const doc = new UserModel({
      email: req.body.email,
      fullName: req.body.fullName,
      avatarUrl: req.body.avatarUrl,
      passwordHash: hash,
    });

    // Guarda el nuevo usuario en la base de datos.
    const user = await doc.save();

    // Genera un token JWT para la autenticación del usuario.
    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secret123",
      {
        expiresIn: "30d",
      }
    );

    // Excluye el hash de la contraseña del objeto de usuario antes de enviarlo como respuesta.
    const { passwordHash, ...userData } = user._doc;

    // Responde con los datos del usuario y el token.
    res.json({
      ...userData,
      token,
    });
  } catch (err) {
    // Registra el error y envia una respuesta del error
    console.log(err);
    res.status(500).json({
      message: "Registro fallido",
    });
  }
};

// Controlador para la autenticación e inicio de sesión
export const login = async (req, res) => {
  try {
    // Busca al usuario por su dirección de correo electrónico.
    const user = await UserModel.findOne({ email: req.body.email });

    // Verifica si el usuario no fue encontrado.
    if (!user) {
      return res.status(404).json({
        message: "Usuario no encontrado",
      });
    }

    // Verifica si la contraseña proporcionada es válida.
    const isValidPass = await bcrypt.compare(
      req.body.password,
      user._doc.passwordHash
    );

    // Responde con un mensaje de error si la contraseña no es válida.
    if (!isValidPass) {
      return res.status(400).json({
        message: "Usuario o contraseña incorrecta",
      });
    }

    // Genera un token JWT para la autenticación del usuario.
    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secret123",
      {
        expiresIn: "30d",
      }
    );

    // Excluye el hash de la contraseña del objeto de usuario antes de enviarlo como respuesta.
    const { passwordHash, ...userData } = user._doc;

    // Responde con los datos del usuario y el token.
    res.json({
      ...userData,
      token,
    });
  } catch (err) {
    // Registra el error y envia una respuesta de error
    console.log(err);
    res.status(500).json({
      message: "Registro fallido",
    });
  }
};

// Controlador para obtener la información del usuario autenticado.
export const getMe = async (req, res) => {
  try {
    // Busca al usuario por su ID de usuario autenticado.
    const user = await UserModel.findById(req.userId);

    // Verifica si el usuario no fue encontrado.
    if (!user) {
      return res.status(404).json({
        message: "Usuario no encontrado",
      });
    }

    // Excluye el hash de la contraseña del objeto de usuario antes de enviarlo como respuesta.
    const { passwordHash, ...userData } = user._doc;

    // Responde con los datos del usuario.
    res.json(userData);
  } catch (err) {
    // Registra el error y enviar una respuesta de error
    console.log(err);
    res.status(500).json({
      message: "Sin acceso",
    });
  }
};

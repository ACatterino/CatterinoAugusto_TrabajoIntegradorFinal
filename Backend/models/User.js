// Importa la biblioteca de Mongoose para interactuar con MongoDB.
import mongoose from "mongoose";

// Define el esquema para el modelo "User".
const UserSchema = new mongoose.Schema(
  {
    // Campo "fullName" de tipo String, obligatorio.
    fullName: {
      type: String,
      required: true,
    },
    // Campo "email" de tipo String, obligatorio y único.
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // Campo "passwordHash" de tipo String, obligatorio.
    passwordHash: {
      type: String,
      required: true,
    },
    // Campo "avatarUrl" de tipo String.
    avatarUrl: String,
  },
  {
    // Configuración adicional del esquema, en este caso, para registrar las marcas de tiempo (timestamps).
    timestamps: true,
  }
);

// Exporta el modelo "User" basado en el esquema definido.
export default mongoose.model("User", UserSchema);
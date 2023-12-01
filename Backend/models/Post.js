// Importa la biblioteca de Mongoose para interactuar con MongoDB.
import mongoose from "mongoose";

// Define el esquema para el modelo "Post".
const PostSchema = new mongoose.Schema(
  {
    // Campo "title" de tipo String, obligatorio.
    title: {
      type: String,
      required: true,
    },
    // Campo "text" de tipo String, obligatorio y único.
    text: {
      type: String,
      required: true,
      unique: true,
    },
    // Campo "tags" de tipo Array, con valor por defecto un array vacío.
    tags: {
      type: Array,
      default: [],
    },
    // Campo "viewsCount" de tipo Number, con valor por defecto de 0.
    viewsCount: {
      type: Number,
      default: 0,
    },
    // Campo "user" de tipo ObjectId referenciando al modelo "User", obligatorio.
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // Campo "imageUrl" de tipo String.
    imageUrl: String,
  },
  {
    // Configuración adicional del esquema, en este caso, para registrar las marcas de tiempo (timestamps).
    timestamps: true,
  }
);

// Exporta el modelo "Post" basado en el esquema definido.
export default mongoose.model("Post", PostSchema);
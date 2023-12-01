// Importa las bibliotecas y módulos necesarios.
import express from "express";
import multer from "multer";
import mongoose from "mongoose";

// Importa funciones de validación, middlewares y controladores desde archivos específicos.
import {
  registerValidation,
  loginValidation,
  postCreateValidation,
} from "./validations.js";

import { handleValidationErrors, checkAuth } from "./utils/index.js";

import { UserController, PostController } from "./controllers/index.js";

// Conecta a la base de datos MongoDB.
mongoose
  .connect(
    "mongodb+srv://admin:A1234567@cluster0.xpdqg3k.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => console.log("DataBase OK"))
  .catch((err) => console.log("DataBase ERROR", err));

// Crea una instancia de la aplicación Express.
const app = express();

// Configura el multer para gestionar el almacenamiento de archivos.
const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// Configura el middleware para el manejo de JSON y servir archivos estáticos.
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Definir rutas y asociarlas con controladores y middlewares.
app.post(
  "/auth/login",
  loginValidation,
  handleValidationErrors,
  UserController.login
);
app.post(
  "/auth/register",
  registerValidation,
  handleValidationErrors,
  UserController.register
);
app.get("/auth/me", checkAuth, UserController.getMe);

app.post("/upload", checkAuth, upload.single("image"), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

app.post(
  "/posts",
  checkAuth,
  postCreateValidation,
  handleValidationErrors,
  PostController.create
);
app.get("/posts", PostController.getAll);
app.get("/posts/:id", PostController.getOne);
app.patch(
  "/posts/:id",
  checkAuth,
  postCreateValidation,
  handleValidationErrors,
  PostController.update
);
app.delete("/posts/:id", checkAuth, PostController.remove);

// Inicia el servidor en el puerto 4444.
app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});
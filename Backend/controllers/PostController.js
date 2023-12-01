// Importa el modelo de Post desde la ruta especificada.
import PostModel from "../models/Post.js";

// Función del controlador para obtener todos los posts.
export const getAll = async (req, res) => {
  try {
    // Recupera todos los posts y popula el campo "user", luego responder con JSON.
    const posts = await PostModel.find().populate("user").exec();
    res.json(posts);
  } catch (err) {
    // Registra el error y enviar una respuesta del error
    console.log(err);
    res.status(500).json({
      message: "Error al recuperar los posts",
    });
  }
};

// Función del controlador para obtener un solo post por ID e incrementar su contador de vistas.
export const getOne = async (req, res) => {
  try {
    // Extraer el ID del post de los parámetros de la solicitud.
    const postId = req.params.id;

    // Encontrar y actualizar el post, incrementando viewsCount, y responder con el post actualizado.
    const post = await PostModel.findOneAndUpdate(
      {
        _id: postId,
      },
      {
        $inc: { viewsCount: 1 },
      },
      {
        returnDocument: "after",
      }
    );
    res.json(post);
  } catch (err) {
    // Registra el error y envia una respuesta del error
    console.error(err);
    res.status(500).json({
      message: "No se encontró el post",
    });
  }
};

// Función del controlador para eliminar un post por ID.
export const remove = async (req, res) => {
  try {
    // Extraer el ID del post de los parámetros de la solicitud.
    const postId = req.params.id;

    // Encontrar y eliminar el post, y responder según corresponda.
    const deletedPost = await PostModel.findOneAndDelete({
      _id: postId,
    });

    if (!deletedPost) {
      // Si no se encontró el post, enviar una respuesta de no encontrado.
      return res.status(404).json({
        message: "No se encontró el post",
      });
    }

    // Responde con un mensaje de éxito.
    res.json({
      success: true,
    });
  } catch (err) {
    // Registra el error y envia una respuesta del error
    console.error(err);
    res.status(500).json({
      message: "Error al eliminar el post",
    });
  }
};

// Función del controlador para crear un nuevo post.
export const create = async (req, res) => {
  try {
    // Crea una nueva instancia de PostModel con datos del cuerpo de la solicitud.
    const doc = new PostModel({
      title: req.body.title,
      text: req.body.text,
      imageUrl: req.body.imageUrl,
      tags: req.body.tags,
      user: req.userId,
    });

    // Guarda el nuevo post en la base de datos y responde con el post creado.
    const post = await doc.save();
    res.json(post);
  } catch (err) {
    // Registra el error y envia una respuesta de error
    console.log(err);
    res.status(500).json({
      message: "Error al crear el post",
    });
  }
};

// Función del controlador para actualizar un post existente por ID.
export const update = async (req, res) => {
  try {
    // Extrae el ID del post de los parámetros de la solicitud.
    const postId = req.params.id;

    // Actualiza el post con datos del cuerpo de la solicitud, y responde con éxito.
    await PostModel.updateOne(
      {
        _id: postId,
      },
      {
        title: req.body.title,
        text: req.body.text,
        imageUrl: req.body.imageUrl,
        user: req.body.user,
        tags: req.body.tags,
      }
    );

    // Responde con un mensaje de éxito.
    res.json({
      success: "true",
    });
  } catch (err) {
    // Registra el error y envia una respuesta de error
    console.log(err);
    res.status(500).json({
      message: "Error al actualizar el post",
    });
  }
};
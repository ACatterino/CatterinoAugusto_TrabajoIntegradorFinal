import React from "react";

import { Post } from "../components/Post";
import { Index } from "../components/AddComment";
import { CommentsBlock } from "../components/CommentsBlock";

export const FullPost = () => {
  return (
    <>
      {/* Componente Post para mostrar el contenido completo de la publicación */}
      <Post
        id={1}
        title="Recorriendo Italia"
        imageUrl="https://acortar.link/IbVGDb"
        user={{
          avatarUrl:
            "https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png",
          fullName: "Lucas",
        }}
        createdAt={"12 de junio de 2023"}
        viewsCount={150}
        commentsCount={3}
        tags={["Italia", "Paseando", "Maravillas"]}
        isFullPost
      >
        <p>
          ¡Saludos! 👋 En esta nueva serie, "Explorando Italia", 
          embarcamos en un viaje fascinante a través de las maravillas de 
          este hermoso país. Desde las encantadoras calles empedradas 
          de Roma hasta los exuberantes viñedos de la región de la Toscana, 
          cada rincón de Italia cuenta una historia única.
        </p>
      </Post>

      {/* Bloque de comentarios */}
      <CommentsBlock
        items={[
          {
            user: {
              fullName: "Micaela Tucci",
              avatarUrl: "https://mui.com/static/images/avatar/3.jpg",
            },
            text: "¡Qué maravillosa descripción de tu experiencia recorriendo Italia! 🇮🇹✨. Gracias por compartir estos vibrantes detalles que nos transportan a lugares tan encantadores. Cada palabra refleja la pasión por la exploración y la riqueza cultural de este hermoso país. ¡Es como un viaje virtual lleno de belleza y autenticidad! 🌍🍝 ¡Gracias por llevarnos contigo en este fascinante periplo por Italia! ",
          },
          {
            user: {
              fullName: "Luca Tomasetti",
              avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
            },
            text: "¡Gracias por compartir tu experiencia explorando la bella Italia!. Tu relato captura la esencia de la belleza y la emoción de cada momento. ¡Qué emocionante viaje! 🌍🍝.",
          },
        ]}
        isLoading={false}
      >
        {/* Componente Index para agregar un nuevo comentario */}
        <Index />
      </CommentsBlock>
    </>
  );
};

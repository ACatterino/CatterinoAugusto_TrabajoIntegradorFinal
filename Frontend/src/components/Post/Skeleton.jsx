import React from "react";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

import styles from "./Post.module.scss";

export const PostSkeleton = () => {
  return (
    // Contenedor del esqueleto
    <div className={styles.skeleton}>
      {/* Apilamiento de elementos con espacio entre ellos */}
      <Stack spacing={1}>
        {/* Esqueleto rectangular para la imagen del artículo */}
        <Skeleton variant="rectangular" width="100%" height={300} />
        {/* Contenido del esqueleto */}
        <div className={styles.skeletonContent}>
          {/* Sección de información del usuario */}
          <div className={styles.skeletonUser}>
            {/* Esqueleto circular para el avatar del usuario */}
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              style={{ marginRight: 10 }}
            />
            {/* Detalles del usuario en el esqueleto */}
            <div className={styles.skeletonUserDetails}>
              {/* Esqueleto de texto para el nombre del usuario */}
              <Skeleton variant="text" width={60} height={20} />
              {/* Esqueleto de texto para detalles adicionales del usuario */}
              <Skeleton variant="text" width={100} height={15} />
            </div>
          </div>
          {/* Sección de información del artículo */}
          <div className={styles.skeletonInfo}>
            {/* Esqueleto de texto para el título del artículo */}
            <Skeleton variant="text" width="80%" height={45} />
            {/* Sección de etiquetas del artículo */}
            <div className={styles.skeletonTags}>
              {/* Esqueleto de texto para cada etiqueta */}
              <Skeleton variant="text" width={40} height={30} />
              <Skeleton variant="text" width={40} height={30} />
              <Skeleton variant="text" width={40} height={30} />
            </div>
          </div>
        </div>
      </Stack>
    </div>
  );
};


import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

import styles from "./Post.module.scss";

// Definición del componente funcional PostSkeleton
export const PostSkeleton = () => {
  return (
    // Contenedor principal del esqueleto
    <div className={styles.skeleton}>
      {/* Stack para alinear los elementos verticalmente con un espacio específico */}
      <Stack spacing={1}>
        {/* Esqueleto rectangular para la imagen del post */}
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
            {/* Detalles del usuario (nombre y texto adicional) */}
            <div className={styles.skeletonUserDetails}>
              <Skeleton variant="text" width={60} height={20} />
              <Skeleton variant="text" width={100} height={15} />
            </div>
          </div>

          {/* Sección de información del post */}
          <div className={styles.skeletonInfo}>
            {/* Esqueleto de texto para el título del post */}
            <Skeleton variant="text" width="80%" height={45} />

            {/* Sección de etiquetas del post */}
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

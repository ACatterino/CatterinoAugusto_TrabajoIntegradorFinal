import React from 'react';
import { Link } from "react-router-dom";
import clsx from 'clsx';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

import styles from './Post.module.scss';
import { UserInfo } from '../UserInfo';
import { PostSkeleton } from './Skeleton';

export const Post = ({
  _id,
  title,
  createdAt,
  imageUrl,
  user,
  viewsCount,
  commentsCount,
  tags,
  children,
  isFullPost,
  isLoading,
  isEditable,
}) => {
  // Mostrar un esqueleto de carga si los datos están cargando
  if (isLoading) {
    return <PostSkeleton />;
  }

  // Función para manejar la eliminación del artículo
  const onClickRemove = () => {};

  return (
    <div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
      {/* Botones de edición si el artículo es editable */}
      {isEditable && (
        <div className={styles.editButtons}>
          {/* Enlace para editar el artículo */}
          <Link to={`/posts/${_id}/edit`}>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
          </Link>
          {/* Botón para eliminar el artículo */}
          <IconButton onClick={onClickRemove} color="secondary">
            <DeleteIcon />
          </IconButton>
        </div>
      )}
      {/* Imagen del artículo, si está disponible */}
      {imageUrl && (
        <img
          className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
          src={imageUrl}
          alt={title}
        />
      )}
      <div className={styles.wrapper}>
        {/* Información del usuario y fecha de creación del artículo */}
        <UserInfo {...user} additionalText={createdAt} />
        <div className={styles.indention}>
          {/* Título del artículo */}
          <h2 className={clsx(styles.title, { [styles.titleFull]: isFullPost })}>
            {/* Enlace al artículo completo si es un resumen */}
            {isFullPost ? title : <Link to={`/posts/${_id}`}>{title}</Link>}
          </h2>
          {/* Lista de etiquetas del artículo */}
          <ul className={styles.tags}>
            {tags.map((name) => (
              <li key={name}>
                {/* Enlace a la página de etiquetas */}
                <Link to={`/tag/${name}`}>#{name}</Link>
              </li>
            ))}
          </ul>
          {/* Contenido del artículo */}
          {children && <div className={styles.content}>{children}</div>}
          {/* Detalles del artículo, como recuento de vistas y comentarios */}
          <ul className={styles.postDetails}>
            <li>
              <EyeIcon />
              <span>{viewsCount}</span>
            </li>
            <li>
              <CommentIcon />
              <span>{commentsCount}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
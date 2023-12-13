import PropTypes from 'prop-types';
import clsx from 'clsx';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

import styles from './Post.module.scss';
import { UserInfo } from '../UserInfo';
import { PostSkeleton } from './Skeleton';

// Definición del componente funcional Post
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
  // Renderizar un esqueleto mientras se carga la información del post
  if (isLoading) {
    return <PostSkeleton />;
  }

  // Función que se ejecuta al hacer clic en el botón de eliminar
  const onClickRemove = () => {};

  return (
    <div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
      {/* Botones de edición si el post es editable */}
      {isEditable && (
        <div className={styles.editButtons}>
          {/* Enlace para editar el post */}
          <a href={`/posts/${_id}/edit`}>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
          </a>
          {/* Botón para eliminar el post */}
          <IconButton onClick={onClickRemove} color="secondary">
            <DeleteIcon />
          </IconButton>
        </div>
      )}

      {/* Imagen del post si está disponible */}
      {imageUrl && (
        <img
          className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
          src={imageUrl}
          alt={title}
        />
      )}

      {/* Contenedor principal del post */}
      <div className={styles.wrapper}>
        {/* Detalles del usuario y fecha de creación */}
        <UserInfo {...user} additionalText={createdAt} />

        {/* Contenido del post */}
        <div className={styles.indention}>
          {/* Título del post (puede ser un enlace si no es un post completo) */}
          <h2 className={clsx(styles.title, { [styles.titleFull]: isFullPost })}>
            {isFullPost ? title : <a href={`/posts/${_id}`}>{title}</a>}
          </h2>

          {/* Lista de etiquetas asociadas al post */}
          <ul className={styles.tags}>
            {tags.map((name) => (
              <li key={name}>
                <a href={`/tag/${name}`}>#{name}</a>
              </li>
            ))}
          </ul>

          {/* Contenido adicional del post (puede ser un componente React) */}
          {children && <div className={styles.content}>{children}</div>}

          {/* Detalles adicionales del post: vistas y cantidad de comentarios */}
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

// Definir PropTypes para el componente Post
Post.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string,
    fullName: PropTypes.string.isRequired,
  }).isRequired,
  viewsCount: PropTypes.number.isRequired,
  commentsCount: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node,
  isFullPost: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isEditable: PropTypes.bool.isRequired,
};


import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SimpleMDE from 'react-simplemde-editor';

import 'easymde/dist/easymde.min.css';
import styles from './AddPost.module.scss';

export const AddPost = () => {
  const imageUrl = ''; // Ruta de la imagen seleccionada
  const [value, setValue] = React.useState(''); // Contenido del editor Markdown

  // Manejador de cambio de archivo
  const handleChangeFile = () => {};

  // Manejador para eliminar la imagen
  const onClickRemoveImage = () => {};

  // Manejador de cambio en el contenido del editor Markdown
  const onChange = React.useCallback((value) => {
    setValue(value);
  }, []);

  // Opciones para el editor Markdown
  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Ingrese el texto...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    [],
  );

  return (
    <Paper style={{ padding: 30 }}>
      {/* Botón para cargar la imagen de portada */}
      <Button variant="outlined" size="large">
        Cargar vista previa
      </Button>
      {/* Input de tipo archivo para manejar la selección de archivos */}
      <input type="file" onChange={handleChangeFile} hidden />

      {/* Botón para eliminar la imagen de portada */}
      {imageUrl && (
        <Button variant="contained" color="error" onClick={onClickRemoveImage}>
          Eliminar
        </Button>
      )}

      {/* Muestra la imagen de portada si existe */}
      {imageUrl && (
        <img className={styles.image} src={`http://localhost:4444${imageUrl}`} alt="Subida" />
      )}

      <br />
      <br />

      {/* Entrada de título de la publicación */}
      <TextField
        classes={{ root: styles.title }}
        variant="standard"
        placeholder="Título del artículo..."
        fullWidth
      />

      {/* Entrada de etiquetas */}
      <TextField classes={{ root: styles.tags }} variant="standard" placeholder="Etiquetas" fullWidth />

      {/* Editor Markdown */}
      <SimpleMDE className={styles.editor} value={value} onChange={onChange} options={options} />

      {/* Botones de acción */}
      <div className={styles.buttons}>
        {/* Botón para publicar */}
        <Button size="large" variant="contained">
          Publicar
        </Button>

        {/* Enlace de cancelar que redirige a la página principal */}
        <a href="/">
          <Button size="large">Cancelar</Button>
        </a>
      </div>
    </Paper>
  );
};

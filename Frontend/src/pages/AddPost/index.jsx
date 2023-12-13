import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SimpleMDE from 'react-simplemde-editor'; // Importar el editor de Markdown

import 'easymde/dist/easymde.min.css'; // Estilos del editor
import styles from './AddPost.module.scss'; // Estilos específicos para este componente

// Componente funcional AddPost para la creación de nuevas publicaciones
export const AddPost = () => {
  // Estado para gestionar la URL de la imagen seleccionada
  const imageUrl = '';
  // Estado para gestionar el contenido del editor de Markdown
  const [value, setValue] = React.useState('');

  // Manejador de cambios de archivo (imagen)
  const handleChangeFile = () => {};

  // Manejador para eliminar la imagen seleccionada
  const onClickRemoveImage = () => {};

  // Manejador de cambios en el editor de Markdown
  const onChange = React.useCallback((value) => {
    setValue(value);
  }, []);

  // Opciones del editor de Markdown
  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Ingrese el texto...', // Placeholder del editor
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    [],
  );

  // Renderizar el componente
  return (
    <Paper style={{ padding: 30 }}>
      {/* Botón para cargar una imagen de portada */}
      <Button variant="outlined" size="large">
        Cargar vista previa
      </Button>
      {/* Input para seleccionar un archivo (oculto) */}
      <input type="file" onChange={handleChangeFile} hidden />
      {/* Botón para eliminar la imagen seleccionada */}
      {imageUrl && (
        <Button variant="contained" color="error" onClick={onClickRemoveImage}>
          Eliminar
        </Button>
      )}
      {/* Mostrar la imagen seleccionada (si existe) */}
      {imageUrl && (
        <img className={styles.image} src={`http://localhost:4444${imageUrl}`} alt="Subida" />
      )}
      <br />
      <br />
      {/* Campo de texto para el título de la publicación */}
      <TextField
        classes={{ root: styles.title }}
        variant="standard"
        placeholder="Título del artículo..."
        fullWidth
      />
      {/* Campo de texto para los tags de la publicación */}
      <TextField classes={{ root: styles.tags }} variant="standard" placeholder="Etiquetas" fullWidth />
      {/* Editor de Markdown */}
      <SimpleMDE className={styles.editor} value={value} onChange={onChange} options={options} />
      {/* Botones para publicar y cancelar */}
      <div className={styles.buttons}>
        <Button size="large" variant="contained">
          Publicar
        </Button>
        {/* Enlace para cancelar y volver a la página principal */}
        <a href="/">
          <Button size="large">Cancelar</Button>
        </a>
      </div>
    </Paper>
  );
};

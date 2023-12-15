import React from "react";

import styles from "./AddComment.module.scss"; // Importa los estilos específicos de este componente

import TextField from "@mui/material/TextField"; // Importa el componente TextField de Material-UI
import Avatar from "@mui/material/Avatar"; // Importa el componente Avatar de Material-UI
import Button from "@mui/material/Button"; // Importa el componente Button de Material-UI

export const Index = () => {
  return (
    <>
      {/* Contenedor principal del componente */}
      <div className={styles.root}>
        {/* Avatar del usuario */}
        <Avatar
          classes={{ root: styles.avatar }} // Aplica estilos específicos al Avatar
          src="https://mui.com/static/images/avatar/3.jpg" // URL de la imagen del Avatar
        />
        {/* Formulario para agregar un comentario */}
        <div className={styles.form}>
          {/* Campo de texto para escribir el comentario */}
          <TextField
            label="Escribir un comentario" // Etiqueta del campo de texto
            variant="outlined" // Estilo del TextField (bordes resaltados)
            maxRows={10} // Número máximo de filas en el campo de texto
            multiline // Permite múltiples líneas de texto
            fullWidth // Ocupa todo el ancho disponible
          />
          {/* Botón para enviar el comentario */}
          <Button variant="contained">Enviar</Button>
        </div>
      </div>
    </>
  );
};

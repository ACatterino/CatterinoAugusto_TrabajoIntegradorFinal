// Importar estilos desde el archivo SCSS
import styles from "./AddComment.module.scss";

// Importa componentes de Material-UI
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

// Definie y exporta el componente principal
export const Index = () => {
  return (
    <>
      {/* Contenedor principal con estilos del archivo SCSS */}
      <div className={styles.root}>
        {/* Componente Avatar con imagen de avatar y estilos personalizados */}
        <Avatar
          classes={{ root: styles.avatar }}
          src="https://mui.com/static/images/avatar/6.jpg"
        />

        {/* Contenedor del formulario */}
        <div className={styles.form}>
          {/* Campo de texto para escribir comentarios */}
          <TextField
            label="Escribir comentario"
            variant="outlined"
            maxRows={10}
            multiline
            fullWidth
          />

          {/* Botón para enviar el comentario */}
          <Button variant="contained">Enviar</Button>
        </div>
      </div>
    </>
  );
};

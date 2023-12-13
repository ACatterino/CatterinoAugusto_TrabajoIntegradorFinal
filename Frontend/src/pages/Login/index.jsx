// Importar componentes de Material-UI
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

// Importar estilos específicos del componente desde el archivo SCSS
import styles from "./Login.module.scss";

// Componente funcional para la página de inicio de sesión
export const Login = () => {
  return (
    // Contenedor principal con estilos del archivo SCSS
    <Paper classes={{ root: styles.root }}>
      {/* Título de la página de inicio de sesión */}
      <Typography classes={{ root: styles.title }} variant="h5">
        Iniciar sesión en la cuenta
      </Typography>
      {/* Campo de entrada para la dirección de correo electrónico */}
      <TextField
        className={styles.field}
        label="Correo electrónico"
        error
        helperText="Dirección de correo electrónico incorrecta"
        fullWidth
      />
      {/* Campo de entrada para la contraseña */}
      <TextField className={styles.field} label="Contraseña" fullWidth />
      {/* Botón de inicio de sesión */}
      <Button size="large" variant="contained" fullWidth>
        Iniciar sesión
      </Button>
    </Paper>
  );
};

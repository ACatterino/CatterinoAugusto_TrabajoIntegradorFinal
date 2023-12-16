import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import styles from "./Login.module.scss";

export const Login = () => {
  return (
    // Contenedor principal del componente de inicio de sesión
    <Paper classes={{ root: styles.root }}>
      {/* Título del formulario de inicio de sesión */}
      <Typography classes={{ root: styles.title }} variant="h5">
        Inicio de sesión
      </Typography>

      {/* Entrada de correo electrónico con mensaje de error */}
      <TextField
        className={styles.field}
        label="Correo electrónico"
        //error  || Indica que hay un error en la entrada
        helperText="Correo electrónico incorrecto"  // Mensaje de error
        fullWidth  // Ocupa el ancho completo del contenedor
      />

      {/* Entrada de contraseña */}
      <TextField className={styles.field} label="Contraseña" fullWidth />

      {/* Botón para iniciar sesión */}
      <Button size="large" variant="contained" fullWidth>
        Ingresar
      </Button>
    </Paper>
  );
};

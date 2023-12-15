import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

import styles from "./Login.module.scss";

export const Registration = () => {
  return (
    <Paper classes={{ root: styles.root }}>
      {/* Título del formulario de registro */}
      <Typography classes={{ root: styles.title }} variant="h5">
        Crear cuenta
      </Typography>
      {/* Avatar para la imagen de perfil */}
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      {/* Campo para el nombre completo del usuario */}
      <TextField className={styles.field} label="Nombre completo" fullWidth />
      {/* Campo para la dirección de correo electrónico */}
      <TextField className={styles.field} label="E-Mail" fullWidth />
      {/* Campo para la contraseña */}
      <TextField className={styles.field} label="Contraseña" fullWidth />
      {/* Botón para registrar la cuenta */}
      <Button size="large" variant="contained" fullWidth>
        Registrarse
      </Button>
    </Paper>
  );
};


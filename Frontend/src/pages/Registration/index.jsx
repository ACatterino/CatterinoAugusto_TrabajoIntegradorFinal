// Importar componentes de Material-UI
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

// Importar estilos específicos del componente desde el archivo SCSS
import styles from './Login.module.scss';

// Componente funcional para la página de registro
export const Registration = () => {
  return (
    // Contenedor principal con estilos del archivo SCSS
    <Paper classes={{ root: styles.root }}>
      {/* Título de la página de registro */}
      <Typography classes={{ root: styles.title }} variant="h5">
        Creación de cuenta
      </Typography>
      {/* Avatar del usuario */}
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      {/* Campo de entrada para el nombre completo */}
      <TextField className={styles.field} label="Nombre completo" fullWidth />
      {/* Campo de entrada para la dirección de correo electrónico */}
      <TextField className={styles.field} label="Correo electrónico" fullWidth />
      {/* Campo de entrada para la contraseña */}
      <TextField className={styles.field} label="Contraseña" fullWidth />
      {/* Botón de registro */}
      <Button size="large" variant="contained" fullWidth>
        Registrarse
      </Button>
    </Paper>
  );
};

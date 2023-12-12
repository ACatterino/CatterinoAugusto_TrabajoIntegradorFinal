import Button from '@mui/material/Button';

import styles from './Header.module.scss';
import Container from '@mui/material/Container';

export const Header = () => {
  const isAuth = false; // Variable que indica si el usuario está autenticado

  const onClickLogout = () => {
    // Función que se ejecuta cuando se hace clic en el botón de "Salir/Logout"
  };

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <a className={styles.logo} href="/">
            <div>TRAVELLERS BLOG</div>
          </a>
          <div className={styles.buttons}>
            {isAuth ? ( // Si el usuario está autenticado
              <>
                <a href="/posts/create">
                  <Button variant="contained">Crea un artículo</Button>
                </a>
                <Button onClick={onClickLogout} variant="contained" color="error">
                  Salir
                </Button>
              </>
            ) : ( // Si el usuario no está autenticado
              <>
                <a href="/login">
                  <Button variant="outlined">Iniciar sesión</Button>
                </a>
                <a href="/register">
                  <Button variant="contained">Crear cuenta</Button>
                </a>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

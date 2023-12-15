import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import styles from "./Header.module.scss";  // Estilos del módulo
import Container from "@mui/material/Container";

export const Header = () => {
  const isAuth = false; // Indica si el usuario está autenticado

  const onClickLogout = () => {
    // Función para manejar el clic en el botón de salir
  };

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          {/* Enlace al inicio del blog */}
          <Link className={styles.logo} to="/">
            <div>VIAJANDO POR EL MUNDO</div>
          </Link>

          {/* Botones de autenticación */}
          <div className={styles.buttons}>
            {isAuth ? (
              /* Si el usuario está autenticado */
              <>
                <Link to="/posts/create">
                  <Button variant="contained">Escribir artículo</Button>
                </Link>
                <Button
                  onClick={onClickLogout}
                  variant="contained"
                  color="error"
                >
                  Salir
                </Button>
              </>
            ) : (
              /* Si el usuario no está autenticado */
              <>
                <Link to="/login">
                  <Button variant="outlined">Iniciar sesión</Button>
                </Link>
                <Link to="/register">
                  <Button variant="contained">Crear cuenta</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};


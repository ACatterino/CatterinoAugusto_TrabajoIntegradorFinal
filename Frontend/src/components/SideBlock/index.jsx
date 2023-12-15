import React from "react";
import styles from "./SideBlock.module.scss";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export const SideBlock = ({ title, children }) => {
  return (
    // Componente Paper de Material-UI con estilos personalizados
    <Paper classes={{ root: styles.root }}>
      {/* Título del bloque lateral */}
      <Typography variant="h6" classes={{ root: styles.title }}>
        {title}
      </Typography>
      {/* Contenido del bloque lateral */}
      {children}
    </Paper>
  );
};

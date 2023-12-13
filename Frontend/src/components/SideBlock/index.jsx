import PropTypes from "prop-types"; // Importar PropTypes
// Importar los estilos del archivo SCSS y los componentes de Material-UI
import styles from "./SideBlock.module.scss";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

// Definir y exportar el componente funcional SideBlock
export const SideBlock = ({ title, children }) => {
    return (
      // Contenedor de Paper con estilos del archivo SCSS
      <Paper classes={{ root: styles.root }}>
        {/* Título del bloque lateral */}
        <Typography variant="h6" classes={{ root: styles.title }}>
          {title}
        </Typography>
        {/* Contenido del bloque lateral (puede contener otros componentes o elementos) */}
        {children}
      </Paper>
    );
  };
  
  // Definir PropTypes para validar las props
  SideBlock.propTypes = {
    title: PropTypes.string.isRequired, // Propiedad 'title' como una cadena requerida
    children: PropTypes.node.isRequired, // Propiedad 'children' como cualquier nodo requerido
  };
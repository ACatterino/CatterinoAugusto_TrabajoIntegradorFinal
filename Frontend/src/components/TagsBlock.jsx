import PropTypes from "prop-types"; // Importar PropTypes
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import TagIcon from "@mui/icons-material/Tag";
import ListItemText from "@mui/material/ListItemText";
import Skeleton from "@mui/material/Skeleton";
import { SideBlock } from "./SideBlock";

// Definir y exportar el componente funcional TagsBlock
export const TagsBlock = ({ items, isLoading = true }) => {
  return (
    // Utilizar el componente SideBlock para agregar un título al bloque lateral
    <SideBlock title="Etiquetas">
      {/* Lista de etiquetas */}
      <List>
        {/* Mapear sobre las etiquetas, mostrando un ListItem para cada una */}
        {(isLoading ? [...Array(5)] : items).map((name, i) => (
          // Cada ListItem representa una etiqueta con un enlace
          <ListItem key={i} disablePadding>
            {/* Enlace a la página de etiquetas correspondiente */}
            <a
              style={{ textDecoration: "none", color: "black" }}
              href={`/tags/${name}`}
            >
              {/* Botón en el ListItem para manejar clics */}
              <ListItemButton>
                {/* Icono de etiqueta */}
                <ListItemIcon>
                  <TagIcon />
                </ListItemIcon>
                {/* Contenido de la etiqueta (puede ser un esqueleto durante la carga) */}
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <ListItemText primary={name} />
                )}
              </ListItemButton>
            </a>
          </ListItem>
        ))}
      </List>
    </SideBlock>
  );
};

// Validación de las propiedades utilizando PropTypes
TagsBlock.propTypes = {
  items: PropTypes.array.isRequired, // Se espera que items sea un array y sea requerido
  isLoading: PropTypes.bool, // Se espera que isLoading sea un booleano (opcional)
};

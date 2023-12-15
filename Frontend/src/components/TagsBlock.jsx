import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import TagIcon from "@mui/icons-material/Tag";
import ListItemText from "@mui/material/ListItemText";
import Skeleton from "@mui/material/Skeleton";

import { SideBlock } from "./SideBlock";

export const TagsBlock = ({ items, isLoading = true }) => {
  return (
    // Utiliza el componente SideBlock para estructurar el bloque de etiquetas
    <SideBlock title="Hashtags">
      <List>
        {/* Mapea sobre la lista de etiquetas (o un array de 5 elementos si está cargando) */}
        {(isLoading ? [...Array(5)] : items).map((name, i) => (
          // Utiliza un enlace para redirigir a la página de etiquetas
          <a
            key={i} // Agrega una clave única para identificar cada elemento en la lista
            style={{ textDecoration: "none", color: "black" }}
            href={`/tags/${name}`}
          >
            {/* Cada elemento de la lista es un ListItem enlazado */}
            <ListItem disablePadding>
              <ListItemButton>
                {/* Icono de etiqueta en cada ListItem */}
                <ListItemIcon>
                  <TagIcon />
                </ListItemIcon>
                {isLoading ? (
                  // Muestra un esqueleto de ancho 100 si está cargando
                  <Skeleton width={100} />
                ) : (
                  // Muestra el nombre de la etiqueta si no está cargando
                  <ListItemText primary={name} />
                )}
              </ListItemButton>
            </ListItem>
          </a>
        ))}
      </List>
    </SideBlock>
  );
};

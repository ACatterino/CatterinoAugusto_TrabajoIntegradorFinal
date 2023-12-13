import React from "react";
// Importa el módulo PropTypes para validar las propiedades del componente
import PropTypes from 'prop-types';
// Importar el componente SideBlock desde el archivo correspondiente
import { SideBlock } from "./SideBlock";
// Importar componentes de Material-UI
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Skeleton from "@mui/material/Skeleton";

// Definir y exportar el componente funcional CommentsBlock
export const CommentsBlock = ({ items, children, isLoading = true }) => {
    return (
      // Utilizar el componente SideBlock para agregar un título al bloque lateral
      <SideBlock title="Comentarios">
        <List>
          {/* Mapear sobre los comentarios, mostrando un ListItem para cada uno */}
          {(isLoading ? [...Array(5)] : items).map((obj, index) => (
            <React.Fragment key={index}>
              {/* Cada ListItem contiene información sobre un comentario */}
              <ListItem alignItems="flex-start">
                {/* Sección del avatar del usuario */}
                <ListItemAvatar>
                  {isLoading ? (
                    // Mostrar un esqueleto circular mientras se carga
                    <Skeleton variant="circular" width={40} height={40} />
                  ) : (
                    // Mostrar el avatar del usuario si está disponible
                    <Avatar alt={obj.user.fullName} src={obj.user.avatarUrl} />
                  )}
                </ListItemAvatar>
  
                {/* Contenido del comentario */}
                {isLoading ? (
                  // Mostrar esqueletos de texto mientras se carga
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Skeleton variant="text" height={25} width={120} />
                    <Skeleton variant="text" height={18} width={230} />
                  </div>
                ) : (
                  // Mostrar el nombre del usuario y el texto del comentario
                  <ListItemText
                    primary={obj.user.fullName}
                    secondary={obj.text}
                  />
                )}
              </ListItem>
  
              {/* Divider para separar los comentarios */}
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
        {/* Posibilidad de agregar contenido adicional después de la lista de comentarios */}
        {children}
      </SideBlock>
    );
  };
  
  // Validación de las propiedades utilizando PropTypes
  CommentsBlock.propTypes = {
    items: PropTypes.array, // Se espera que items sea un array
    children: PropTypes.node, // Se espera que children sea un nodo React
    isLoading: PropTypes.bool, // Se espera que isLoading sea un booleano
  };

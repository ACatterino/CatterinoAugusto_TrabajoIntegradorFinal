import React from "react";

import { SideBlock } from "./SideBlock";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Skeleton from "@mui/material/Skeleton";

// Componente CommentsBlock para mostrar comentarios
export const CommentsBlock = ({ items, children, isLoading = true }) => {
  return (
    // Utilizando el componente SideBlock con el título "Comentarios"
    <SideBlock title="Comentarios">
      <List>
        {/* Mapear comentarios (o esqueletos si isLoading es true) */}
        {(isLoading ? [...Array(5)] : items).map((comment, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                {/* Renderizar el avatar o un esqueleto si isLoading es true */}
                {isLoading ? (
                  <Skeleton variant="circular" width={40} height={40} />
                ) : (
                  <Avatar
                    alt={comment.user.fullName}
                    src={comment.user.avatarUrl}
                  />
                )}
              </ListItemAvatar>
              {isLoading ? (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {/* Renderizar esqueletos si isLoading es true */}
                  <Skeleton variant="text" height={25} width={120} />
                  <Skeleton variant="text" height={18} width={230} />
                </div>
              ) : (
                // Renderiza el texto del comentario si isLoading es false
                <ListItemText
                  primary={comment.user.fullName}
                  secondary={comment.text}
                />
              )}
            </ListItem>
            {/* Línea divisoria entre comentarios */}
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
      {children}
    </SideBlock>
  );
};

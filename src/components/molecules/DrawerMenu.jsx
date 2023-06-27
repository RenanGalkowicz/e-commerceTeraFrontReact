import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function DrawerMenu(props) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.setOpen(false)}
    >
      <List>
        <ListItem>
          <Link to="/home">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/users">Usuários</Link>
        </ListItem>
        <ListItem>
          <Link to={`/users/${currentUser}/post`}>Criar Post</Link>
        </ListItem>
        <ListItem>
          <Link to="/logout">Sair</Link>
        </ListItem>
      </List>
    </Drawer>
  );
}

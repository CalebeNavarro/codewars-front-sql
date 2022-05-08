import { HeaderStyle } from './style';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';


import api_kenzie from '../../services/api_kenzie';
import { useEffect, useState } from "react";

export default function TemporaryDrawer({getEnabler}) {
  const [ enablers, setEnablers ] = useState([]);

  const foo = async () => {
    api_kenzie.get("/enabler")
    .then(response => setEnablers(response.data))
  }

  useEffect(async () => {
    await foo();
    getEnabler("student");
  }, []);


  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem button key={"Todos Facilitadores"} onClick={() => getEnabler("enabler")}>
            <ListItemIcon>
              <PersonSearchIcon />
            </ListItemIcon>
            <ListItemText primary={"Todos Facilitadores"} />
          </ListItem>

          <ListItem button key={"Todos alunos"} onClick={() => getEnabler("student")}>
            <ListItemIcon>
              <PersonSearchIcon />
            </ListItemIcon>
            <ListItemText primary={"Todos alunos"} />
          </ListItem>
      </List>

      <Divider />

      <List>
        {enablers.map(enabler =>(
          <ListItem button key={enabler.id} onClick={() => getEnabler("enabler", enabler.id)}>
            <ListItemIcon >
              <PersonSearchIcon />
            </ListItemIcon>
            <ListItemText primary={enabler.user.name} />
          </ListItem>
        ))}


      </List>
    </Box>
  );

  return (
    <HeaderStyle >
        <React.Fragment key={"right"}>
          <Button onClick={toggleDrawer("right", true)}>{"Selecionar"}</Button>
          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
        </React.Fragment>
    </HeaderStyle>
  );
}
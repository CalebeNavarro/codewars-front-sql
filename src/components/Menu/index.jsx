import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '1%',
  left: '1%',
};

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu" >
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)} style={style}>
            Menu
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}><Link style={{ color: "black"}} to="/user">Profile</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link style={{ color: "black"}} to="/dashboard">Dashboard</Link></MenuItem>
            {/* <MenuItem onClick={popupState.close}>Logout</MenuItem> */}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
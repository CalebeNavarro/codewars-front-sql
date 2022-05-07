import { UlStyle } from './style';

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import Profile from './../profile'


const DevCard = ({dev, position, user_id}) => {
  let color = "yellow";
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);;

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Profile user={dev} user_id={user_id}/>
        </Box>
      </Modal>

    <UlStyle color={color} onClick={handleOpen}>
      <li>{position}</li>
      <li>{dev.name.length > 30
      ? dev.name.substring(0, 30) + '...'
      : dev.name
    }</li>
      <li>{dev.current_honor}</li>
    </UlStyle>
    </>
  )
}

export default DevCard;
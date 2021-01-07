import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import Bio from './Bio'

const BioModal = (props) => {
  const {
    modalStyle,
    classes,
  } = props

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper} maxWidth="20%">
      <Bio />
    </div>
  );

  return (
    <React.Fragment>

      <Button
        className={classes.title}
        startIcon={<CodeRoundedIcon />}
        onClick={handleOpen}
      >
        Story
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </React.Fragment>
  )
}

export default BioModal;

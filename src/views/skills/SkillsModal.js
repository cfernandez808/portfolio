import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import Skills from './Skills'

const SkillsModal = (props) => {
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
    <div style={modalStyle} className={classes.paper}>
      <Skills />
    </div>
  );

  return (
    <React.Fragment>

      <Button
        className={classes.title}
        startIcon={<BarChartRoundedIcon />}
        onClick={handleOpen}
      >
        Skills
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

export default SkillsModal;

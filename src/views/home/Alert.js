import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Alert = () => {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (

    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >

    <DialogTitle id="alert-dialog-title">{"Hello!"}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">

          Welcome to my website. I apologize in advance if you're reading this on mobile, my website is currently being updated to work on phones.
          <br /><br />
          Additional changes being done:

          <ol>
            <li>
              Short description option in Bio
            </li>
            <li>
              Image cards for skills in Skills section
            </li>
            <li>
              Contracting inquiry section
            </li>
            <li>
              Authorization section for users through AWS
            </li>
            <li>
              General UI/UX housekeeping
            </li>
          </ol>
          <br />
          If you are a potential client interested in a free consulation meeting, please click the email button at the bottom of the page or message me at info@thelifeincode.com!
          <br/> <br/>
          **1/4/2021: I am currently not taking more clients for Q1 2021 at the moment, sorry!**

      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
  )
}

export default Alert;

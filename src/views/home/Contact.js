import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import '../../css/App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white",
    display: 'block',
    float: 'none'
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Contact = (props) => {

  const classes = useStyles();
  const {className} = props
  return (
    <div className={className}>
      <div className={classes.root}>
        <AppBar position="sticky">
          <Toolbar component="div" style={{justifyContent:"center"}} >
            <Box component="div">
              <Button href="mailto: christian@thelifeincode.com">
                <EmailIcon style={{width: '30%', height: 'auto', maxWidth: "30%"}}/>
              </Button>
              <Button href="https://www.linkedin.com/in/christianbfernandez808/">
                <LinkedInIcon  style={{width: '30%', height: 'auto', maxWidth: "30%"}}/>
              </Button>
              <Button href="https://github.com/cfernandez808">
                <GitHubIcon style={{width: '30%', height: 'auto', maxWidth: "30%"}} />
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default Contact;

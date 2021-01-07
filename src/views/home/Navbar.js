import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../../css/App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RingVolumeRoundedIcon from '@material-ui/icons/RingVolumeRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import logo from '../../pub/ChristianLogoFinal.png';

import BioModal from '../bio/BioModal'
import SkillsModal from '../skills/SkillsModal'
import ProjectsModal from '../projects/ProjectsModal'

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

function getModalStyle() {
  return {
    height: '80%',
    width: '80%',
    position: 'absolute',
    transform: 'translate(12.5%, 13%)',
    backgroundColor: '#37393F',
    overflowY: 'auto',
    overflowX: 'auto',
  }
}


const Navbar = (props) => {
  const {scrollToSection} = props
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);



  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            // className={classes.menuButton}
            color="inherit"
            aria-label="menu">
            <img src={logo} className="App-logo" alt="logo" />
          </IconButton>
          <BioModal modalStyle={modalStyle}  classes={classes} />
          <SkillsModal modalStyle={modalStyle} classes={classes} />
          <ProjectsModal modalStyle={modalStyle} classes={classes} />
          <Button
            className={classes.title}
            startIcon={<CheckCircleRoundedIcon />}
            onClick={scrollToSection}
          >
            Experience
          </Button>
          <Button
            className={classes.title}
            startIcon={<RingVolumeRoundedIcon />}
          >
              Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;

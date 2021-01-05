import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import RingVolumeRoundedIcon from '@material-ui/icons/RingVolumeRounded';
import FolderRoundedIcon from '@material-ui/icons/FolderRounded';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import logo from './ChristianLogoFinal.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white"
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={logo} className="App-logo" alt="logo" />
          </IconButton>
          <Button
            className={classes.title}
            startIcon={<CodeRoundedIcon />}
          >
            Story
          </Button>
          <Button
            className={classes.title}
            startIcon={<BarChartRoundedIcon />}
          >
            Skills
          </Button>
          <Button
            className={classes.title}
            startIcon={<CheckCircleRoundedIcon />}
          >
            Experience
          </Button>
          <Button
            className={classes.title}
            startIcon={<FolderRoundedIcon />}
          >
              Projects
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

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import CoPass from './CoPass';
import Fullsnack from './Fullsnack'
import Keys from './Keys'


export default function ControlledAccordions() {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }));
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
        <Typography
              component="div"
              variant="h2"
              align="center"
              gutterBottom= {true}
              style={{color: "white"}}
        >
          Projects
        </Typography>
      <Container maxWidth="lg" style={{display:"flex"}}>
          <br />
          <br />
          <br />
            <CoPass classes={classes} />
            <Fullsnack classes={classes} />
            <Keys classes={classes} />

      </Container>
    </React.Fragment>
  );
}

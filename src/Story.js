/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" style={{height: "100vh"}}>
        <Typography
          component="div"
          variant="h1"
          align="center"
          gutterBottom= {true}
          style={{color: "white"}}
        >
          // Bio
        </Typography>
        <Typography component="div" align="center" style={{ backgroundColor: 'white', height: '50vh', borderRadius: 30}}>
          <br/>
          <br />
          Picture of me at Naga on left. Short Bio. Long Bio. Respective Descriptions
        </Typography>
      </Container>
    </React.Fragment>
  );
}

/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SportsEsportsRoundedIcon from '@material-ui/icons/SportsEsportsRounded';

export default function Bio() {
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
          <SportsEsportsRoundedIcon style={{fontSize: '8rem', position: 'relative', paddingTop: 50}}/>Biography
        </Typography>
        <Typography component="div" align="center" style={{ backgroundColor: '#37393F', height: '50vh', borderRadius: 30, color: "white"}}>
          <br/>
          <br />
          Picture of me at Naga on left. Short Bio. Long Bio. Respective Descriptions
        </Typography>
      </Container>
    </React.Fragment>
  );
}
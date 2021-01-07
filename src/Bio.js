/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SportsEsportsRoundedIcon from '@material-ui/icons/SportsEsportsRounded';
import leaves from './leaves.jpg'

export default function Bio() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{height: "100%"}}>
        <Typography
          component="div"
          variant="h1"
          align="center"
          gutterBottom= {true}
          style={{color: "white"}}
        >
          <SportsEsportsRoundedIcon style={{fontSize: '8rem', position: 'relative', paddingTop: 50}}/>Biography
        </Typography>
        <Typography component="div" align="center" style={{ height: '50vh'}}>
          <br/>
          <br />
          <img src={leaves} alt="" height="45%" position='sticky'/>
          <br />
          Insert Bio here with Short & Long bio toggle
        </Typography>
      </Container>
    </React.Fragment>
  );
}
